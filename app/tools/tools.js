const rarityColors = {
  common: '#dddddd',
  uncommon: '#7797ea',
  rare: '#3463fd',
  mythical: '#8847ff',
  legendary: '#d32ce6',
  ancient: '#eb4b4b',
  exceedingly: '#ffe91a',
  immortal: '#ff8731'
}

export const drops = [
  {
    title: 'Skeleton Knife | Case Hardened (Blue Gem) BS',
    price: '43,841',
    color: rarityColors.ancient,
    img: 'blue-gem.avif',
    time: '1 day ago',
  },
  {
    title: 'Sport Gloves | Pandora\'s Box MW',
    price: '19,734',
    color: rarityColors.ancient,
    img: 'pandoras-box.avif',
    time: '8 hours ago',
  },
  {
    title: 'StatTrak™ M4A1-S | Dark Water MW',
    price: '17,525.45',
    color: rarityColors.mythical,
    img: 'dark-water.avif',
    time: '4 day ago',
  },
  {
    title: 'Butterfly Knife | Doppler (Sapphire) FN',
    price: '16,228',
    color: rarityColors.ancient,
    img: 'Doppler.png',
    time: '3 days ago',
  },
  {
    title: 'Sport Gloves | Hedge Maze MW',
    price: '11,989.33',
    color: rarityColors.ancient,
    img: 'hedge-maze.avif',
    time: '5 day ago',
  },
  {
    title: 'Talon Knife | Doppler (Ruby) FN',
    price: '5,067.49',
    color: rarityColors.ancient,
    img: 'ruby.png',
    time: '1 day ago',
  },
  {
    title: 'Desert Eagle | Blaze FN',
    price: '4,429.97',
    color: rarityColors.mythical,
    img: 'blaze.avif',
    time: '6 days ago',
  },

];

export const faq = [
  {
    title: 'Can you make money on CS:GO Skins?',
    answer: 'Absolutely! You can earn money when you sell the skins.'
  },
  {
    title: 'How to sell CS:GO skins for cash?',
    answer: 'After choosing the game and item you wish to sell, provide a wallet address to receive the payout. Once you create the transaction, confirm the trade in STEAM. We will then instantly transfer the transaction amount to your chosen cryptocurrency or credit it to your account balance. This makes it easy to turn your CS2 skins for cash quickly.'
  },
  {
    title: 'How to turn CS:GO skins into real money instantly?',
    answer: 'List your skins, complete the sale, and receive your payment without any delay.'
  },
  {
    title: 'Why Do CS2 Skin Prices Change?',
    answer: 'Many factors cause price changes, such as demand, rarity, and steam community market trends. We also check current prices on other platforms and markets to ensure our pricing remains competitive.'
  },
  {
    title: 'Why Are Some CS2 Skins So Expensive?',
    answer: 'Some CS2 skins are expensive because of their rarity, demand, and unique features. Limited edition skins or those with rare patterns and colors can command high prices in the market.'
  },
  {
    title: 'How to sell CS2 (CS:GO) skins fast?',
    answer: 'It\'s easy to instant sell CS2 (CSGO) skins. Sign up for the service that lets you sell CS:GO skins, then choose the skins you want to sell and how you want to be paid, and finally confirm the transaction.'
  },
  {
    title: 'Is PriceX2 legit?',
    answer: 'Absolutely, PriceX2 is legit. Since the platform recently started, many users have been curious about the service\'s legitimacy and level of trust. There\'s no need to be. You can check all the information and reviews on Trustpilot.'
  },
  {
    title: 'Where is the safest place to sell CS2 (CS:GO) skins?',
    answer: 'You should use PriceX2 or Steam trading sites to sell Counter-Strike skins safely.'
  },
  {
    title: 'Which cryptocurrency is used for payouts?',
    answer: 'We support several popular cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), LiteCoin (LTC), and Tether (USDT - TRC20).'
  },
  {
    title: 'How long does it take to receive funds after selling an item?',
    answer: 'Our system provides instant payouts after the completion of the transaction. Usually, the funds are credited to your account immediately after the transaction is completed. However, the time it takes to receive the funds may depend on the transaction processing speed of the cryptocurrency network. In some cases, transactions may take up to 24 hours. If you encounter such a delay, please contact our support team for assistance.'
  },
  {
    title: 'Can I withdraw my balance to my account?',
    answer: 'Yes, you can withdraw your balance to your account.'
  },

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