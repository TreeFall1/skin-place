export const drops = [
  {
    title: 'Five-SeveN | Silver Quartz',
    price: '0.54',
    time: '19 seconds ago',
    color: '#FAFAFA'
  },
  {
    title: 'MP9 | Food Chain (Well-worn)',
    price: '1.71',
    time: '47 seconds ago',
    color: '#d32ce6'
  },
  {
    title: 'Navaja Knife | Blue Seduction',
    price: '97.22',
    time: '1 minute ago',
    color: '#eb4b4b'
  },
];

export const testItems =[
  {
    header: 'FN',
    title: 'Slaughter',
    subtitle: '★ Falchion Knife',
    price: '255.84',
    img: '/illustrations/slaughter.png'
  }
]

export function getSteamID64FromTradeURL(tradeURL) {
  const partnerParam = tradeURL.match(/partner=(\d+)/);
  if (!partnerParam) {
    throw new Error("Invalid Steam Trade URL: 'partner' parameter not found.");
  }

  const partnerID = parseInt(partnerParam[1], 10);
  const steamID64 = BigInt(partnerID) + BigInt(76561197960265728);

  return steamID64.toString();
}

// try {
//   const steamID64 = getSteamID64FromTradeURL(tradeURL);
//   console.log("SteamID64:", steamID64);
// } catch (error) {
//   console.error(error.message);
// }