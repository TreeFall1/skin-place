import { NextResponse } from 'next/server';
import axios from 'axios';

const priceCache = new Map();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const steamId64 = searchParams.get('steamId64');

  if (!steamId64) {
    return NextResponse.json({ error: 'steamId64 is required' }, { status: 400 });
  }

  try {
    // Получаем инвентарь пользователя
    const response = await axios.get(
        `https://steamcommunity.com/inventory/${steamId64}/730/2?l=english&count=5000`
    );

    const inventory = response.data.assets;
    const descriptions = response.data.descriptions;

    let parsedInventory = inventory.map((item) => {
      const description = descriptions.find(
          (desc) => desc.classid === item.classid && desc.instanceid === item.instanceid
      );

      return {
        name: description?.market_hash_name || 'Unknown',
        rarityColor: `#${description?.tags?.find((tag) => tag.category === 'Rarity')?.color || 'N/A'}`,
        condition: getConditionShortForm(description?.descriptions?.find((desc) => desc.value.includes('Exterior'))?.value),
        image: `https://steamcommunity.com/economy/image/${description?.icon_url}`,
      };
    });

    const skinportPrices = await getSkinportPrices();
    parsedInventory = parsedInventory.map((item) => {
      const itemPriceData = skinportPrices.find((skin) => skin.market_hash_name === item.name);
      return {
        ...item,
        price: itemPriceData ? `${itemPriceData.mean_price.toFixed(2)}` : 'N/A',
      };
    });

    return NextResponse.json(parsedInventory);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch inventory' }, { status: 500 });
  }
}

// Получение цен с Skinport API
async function getSkinportPrices() {
  if (priceCache.size > 0) return Array.from(priceCache.values());

  try {
    const params = new URLSearchParams({
      app_id: 730,
      currency: 'USD'
    });
    const { data } = await axios.get(`https://api.skinport.com/v1/items?${params}`);
    data.forEach((item) => priceCache.set(item.market_hash_name, item));
    return data;
  } catch (error) {
    console.error('Ошибка получения цен с Skinport:', error);
    return [];
  }
}

function getConditionShortForm(condition) {
  if (!condition) return 'N/A';
  const conditions = {
    'Exterior: Factory New': 'FN',
    'Exterior: Minimal Wear': 'MW',
    'Exterior: Field-Tested': 'FT',
    'Exterior: Well-Worn': 'WW',
    'Exterior: Battle-Scarred': 'BS',
  };
  return conditions[condition] || condition;
}
