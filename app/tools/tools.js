export const drops = [
  {
    title: 'Five-SeveN | Silver Quartz',
    price: '0.54',
    time: '7 seconds ago',
    color: '#FAFAFA'
  },
  {
    title: 'MP9 | Food Chain (Well-worn)',
    price: '1.71',
    time: '7 seconds ago',
    color: '#d32ce6'
  },
  {
    title: 'Navaja Knife | Blue Seduction',
    price: '97.22',
    time: '19 seconds ago',
    color: '#eb4b4b'
  },
  {
    title: 'StatTrak™ MAC-10 | Sakkaku (Field-Tested)',
    price: '2.64',
    time: '24 seconds ago',
    color: '#8746ff'
  },
  {
    title: 'Dreams & Nightmares Case',
    price: '1.02',
    time: '26 seconds ago',
    color: '#dddddd'
  },
  {
    title: 'MP7 | Fade (Factory New)',
    price: '4.87',
    time: '41 seconds ago',
    color: '#8746ff'
  },
  {
    title: 'M4A1-S | Emphorosaur-S (Minimal Wear)',
    price: '1.00',
    time: '43 seconds ago',
    color: '#8847ff'
  },
];

export function getSteamID64FromTradeURL(tradeURL) {
  const partnerParam = tradeURL.match(/partner=(\d+)/);
  if (!partnerParam) {
    throw new Error("Invalid Steam Trade URL: 'partner' parameter not found.");
  }

  const partnerID = parseInt(partnerParam[1], 10);
  const steamID64 = BigInt(partnerID) + BigInt(76561197960265728);

  return steamID64.toString();
}