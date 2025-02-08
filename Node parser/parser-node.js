import express from "/express";
import fetch from "/node-fetch";

const app = express();
const PORT = 3001;

async function getInventory(steamId) {
  const url = `https://steamcommunity.com/inventory/${steamId}/730/2?l=english&count=5000`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch inventory");

    return await response.json();
  } catch (error) {
    console.error("Inventory fetch error:", error);
    return null;
  }
}

async function getMarketPrice(marketHashName) {
  const url = "https://steamcommunity.com/market/priceoverview/";
  const params = new URLSearchParams({
    appid: 730, // CS:GO
    currency: 1, // USD
    market_hash_name: marketHashName,
  });

  try {
    const response = await fetch(`${url}?${params}`);
    if (!response.ok) return "Overstock";

    const data = await response.json();
    return data.success ? data.lowest_price || "Overstock" : "Overstock";
  } catch (error) {
    console.error("Market price fetch error:", error);
    return "Overstock";
  }
}

function getItemRarityColor(tags) {
  const rarityColors = {
    "Consumer Grade": "B2B2B2",
    "Industrial Grade": "5E98D9",
    "Mil-Spec Grade": "4B69FF",
    Restricted: "8847FF",
    Classified: "D32CE6",
    Covert: "EB4B4B",
    Contraband: "E4AE39",
  };

  for (const tag of tags) {
    if (tag.category === "Rarity") {
      return rarityColors[tag.localized_tag_name] || "Unknown";
    }
  }
  return "Unknown";
}

function getItemCondition(tags) {
  const conditionAbbreviations = {
    "Factory New": "FN",
    "Minimal Wear": "MW",
    "Field-Tested": "FT",
    "Well-Worn": "WW",
    "Battle-Scarred": "BS",
  };

  for (const tag of tags) {
    if (tag.category === "Exterior") {
      return conditionAbbreviations[tag.localized_tag_name] || "N/A";
    }
  }
  return "N/A";
}

async function parseInventory(steamId) {
  const inventory = await getInventory(steamId);
  if (!inventory) return { error: "Cannot fetch inventory" };

  const descriptions = Object.fromEntries(
      inventory.descriptions.map((item) => [item.classid, item])
  );

  const assets = inventory.assets || [];
  const inventoryData = [];

  for (const asset of assets) {
    const itemData = descriptions[asset.classid] || {};
    const marketHashName = itemData.market_hash_name;
    const imageUrl = `https://steamcommunity.com/economy/image/${itemData.icon_url || ""}`;
    const tags = itemData.tags || [];

    if (marketHashName) {
      const marketPrice = await getMarketPrice(marketHashName);
      const rarityColor = getItemRarityColor(tags);
      const conditionAbbr = getItemCondition(tags);

      inventoryData.push({
        title: marketHashName,
        price: marketPrice,
        color: `#${rarityColor}`,
        condition: conditionAbbr,
        image: imageUrl,
      });
    }
  }

  return inventoryData;
}

app.get("/parser", async (req, res) => {
  const steamId = req.query.steam_id;
  if (!steamId) {
    return res.status(400).json({ error: "Steam ID is required" });
  }

  const inventory = await parseInventory(steamId);
  res.json(inventory);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
