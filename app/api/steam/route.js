// import { NextResponse } from "next/server";
//
// async function getInventory(steamId) {
//   const url = `https://steamcommunity.com/inventory/${steamId}/730/2?l=english&count=5000`;
//
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error("Failed to fetch inventory");
//
//     return await response.json();
//   } catch (error) {
//     console.error("Inventory fetch error:", error);
//     return null;
//   }
// }
//
// async function getMarketPrice(marketHashName) {
//   const url = "https://steamcommunity.com/market/priceoverview/";
//   const params = new URLSearchParams({
//     appid: 730, // CS:GO
//     currency: 1, // USD
//     market_hash_name: marketHashName,
//   });
//
//   try {
//     const response = await fetch(`${url}?${params}`);
//     if (!response.ok) return "Overstock";
//
//     const data = await response.json();
//     return data.success ? data.lowest_price || "Overstock" : "Overstock";
//   } catch (error) {
//     console.error("Market price fetch error:", error);
//     return "Overstock";
//   }
// }
//
// function getItemRarityColor(tags) {
//   const rarityColors = {
//     "Consumer Grade": "B2B2B2",
//     "Industrial Grade": "5E98D9",
//     "Mil-Spec Grade": "4B69FF",
//     "Restricted": "8847FF",
//     "Classified": "D32CE6",
//     "Covert": "EB4B4B",
//     "Contraband": "E4AE39",
//   };
//
//   for (const tag of tags) {
//     if (tag.category === "Rarity") {
//       return rarityColors[tag.localized_tag_name] || "Unknown";
//     }
//   }
//   return "Unknown";
// }
//
// function getItemCondition(tags) {
//   const conditionAbbreviations = {
//     "Factory New": "FN",
//     "Minimal Wear": "MW",
//     "Field-Tested": "FT",
//     "Well-Worn": "WW",
//     "Battle-Scarred": "BS",
//   };
//
//   for (const tag of tags) {
//     if (tag.category === "Exterior") {
//       return conditionAbbreviations[tag.localized_tag_name] || "N/A";
//     }
//   }
//   return "N/A";
// }
//
// async function parseInventory(steamId) {
//   const inventory = await getInventory(steamId);
//   if (!inventory) return { error: "Cannot fetch inventory" };
//
//   const descriptions = Object.fromEntries(
//       inventory.descriptions.map((item) => [item.classid, item])
//   );
//
//   const assets = inventory.assets || [];
//   const inventoryData = [];
//
//   for (const asset of assets) {
//     const itemData = descriptions[asset.classid] || {};
//     const marketHashName = itemData.market_hash_name;
//     const imageUrl = `https://steamcommunity.com/economy/image/${itemData.icon_url || ""}`;
//     const tags = itemData.tags || [];
//
//     if (marketHashName) {
//       const marketPrice = await getMarketPrice(marketHashName);
//       const rarityColor = getItemRarityColor(tags);
//       const conditionAbbr = getItemCondition(tags);
//
//       inventoryData.push({
//         title: marketHashName,
//         price: marketPrice,
//         color: `#${rarityColor}`,
//         condition: conditionAbbr,
//         image: imageUrl,
//       });
//     }
//   }
//
//   return inventoryData;
// }
//
// // API-обработчик для Next.js (App Router)
// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const steamId = searchParams.get("steam_id");
//
//   if (!steamId) {
//     return NextResponse.json({ error: "Steam ID is required" }, { status: 400 });
//   }
//
//   const inventory = await parseInventory(steamId);
//   return NextResponse.json(inventory);
// }
//
// import { NextResponse } from "next/server";
// import { HttpsProxyAgent } from "/proxy-agent";
//
// async function getRandomProxy() {
//   try {
//     const proxies = await getProxies();
//     const filteredProxies = proxies.filter(p => p.protocol === "http" || p.protocol === "https");
//
//     if (filteredProxies.length === 0) throw new Error("No proxies available");
//
//     const proxy = filteredProxies[Math.floor(Math.random() * filteredProxies.length)];
//     return new HttpsProxyAgent(`${proxy.protocol}://${proxy.ip}:${proxy.port}`);
//   } catch (error) {
//     console.error("Proxy fetch error:", error);
//     return null;
//   }
// }
//
// async function fetchWithProxy(url) {
//   const proxyAgent = await getRandomProxy();
//   if (!proxyAgent) return null;
//
//   try {
//     const response = await fetch(url, { agent: proxyAgent });
//     if (!response.ok) throw new Error("Failed to fetch");
//     return await response.json();
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// }
//
// async function getInventory(steamId) {
//   const url = `https://steamcommunity.com/inventory/${steamId}/730/2?l=english&count=5000`;
//   return await fetchWithProxy(url);
// }
//
// async function getMarketPrice(marketHashName) {
//   const url = `https://steamcommunity.com/market/priceoverview/?appid=730&currency=1&market_hash_name=${marketHashName}`;
//   return await fetchWithProxy(url);
// }
//
// function getItemRarityColor(tags) {
//   const rarityColors = {
//     "Consumer Grade": "B2B2B2",
//     "Industrial Grade": "5E98D9",
//     "Mil-Spec Grade": "4B69FF",
//     "Restricted": "8847FF",
//     "Classified": "D32CE6",
//     "Covert": "EB4B4B",
//     "Contraband": "E4AE39",
//   };
//
//   for (const tag of tags) {
//     if (tag.category === "Rarity") {
//       return rarityColors[tag.localized_tag_name] || "Unknown";
//     }
//   }
//   return "Unknown";
// }
//
// function getItemCondition(tags) {
//   const conditionAbbreviations = {
//     "Factory New": "FN",
//     "Minimal Wear": "MW",
//     "Field-Tested": "FT",
//     "Well-Worn": "WW",
//     "Battle-Scarred": "BS",
//   };
//
//   for (const tag of tags) {
//     if (tag.category === "Exterior") {
//       return conditionAbbreviations[tag.localized_tag_name] || "N/A";
//     }
//   }
//   return "N/A";
// }
//
// async function parseInventory(steamId) {
//   const inventory = await getInventory(steamId);
//   if (!inventory) return { error: "Cannot fetch inventory" };
//
//   const descriptions = Object.fromEntries(inventory.descriptions.map(item => [item.classid, item]));
//   const assets = inventory.assets || [];
//
//   const inventoryData = [];
//
//   for (const asset of assets) {
//     const classid = asset.classid;
//     const itemData = descriptions[classid] || {};
//     const marketHashName = itemData.market_hash_name;
//     const imageUrl = `https://steamcommunity.com/economy/image/${itemData.icon_url || ""}`;
//     const tags = itemData.tags || [];
//
//     if (marketHashName) {
//       const marketPrice = await getMarketPrice(marketHashName);
//       const rarityColor = getItemRarityColor(tags);
//       const conditionAbbr = getItemCondition(tags);
//
//       inventoryData.push({
//         title: marketHashName,
//         price: marketPrice,
//         color: `#${rarityColor}`,
//         condition: conditionAbbr,
//         image: imageUrl,
//       });
//
//       await new Promise(resolve => setTimeout(resolve, 500));
//     }
//   }
//
//   return inventoryData;
// }
//
// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const steamId = searchParams.get("steam_id");
//
//   if (!steamId) {
//     return NextResponse.json({ error: "Steam ID is required" }, { status: 400 });
//   }
//
//   const inventory = await parseInventory(steamId);
//   return NextResponse.json(inventory);
// }
//
