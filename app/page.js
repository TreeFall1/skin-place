import Image from "next/image";
import styles from './page.module.scss'
import {Dropdown} from "@/app/components/Dropdown/Dropdown";
import {drops} from "@/app/tools/tools";

export default function Home() {
  const faq = [
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
      title: 'Is SkinPlace legit?',
      answer: 'Absolutely, SkinPlace is legit. Since the platform recently started, many users have been curious about the service\'s legitimacy and level of trust. There\'s no need to be. You can check all the information and reviews on Trustpilot.'
    },
    {
      title: 'Where is the safest place to sell CS2 (CS:GO) skins?',
      answer: 'You should use SkinPlace or Steam trading sites to sell Counter-Strike skins safely.'
    },
    {
      title: 'Which cryptocurrency is used for payouts?',
      answer: 'We support several popular cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and Tether (USDT - TRC20).'
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

  return (
    <main className={styles["main-container"]}>
      <section className={styles['drop-bar']}>
        <div className={styles['container']}>
          <div className={styles['stats-container']}>
            <p>Total deals</p>
            <span className={styles['stats']}><div className={`animate-pulse ${styles['anim']}`}/><p>56 880</p></span>
          </div>
          <div className={styles['drops-container']}>
            {drops.map((item,i)=>{
              return (
                  <div style={{borderTopColor: item.color}} key={item.title} className={styles['drop']}>
                    <Image src={`/illustrations/drop${i+1}.png`} alt={'drop'} width={60} height={60}/>
                    <div className={styles['data']}>
                      <p className={styles['title']}>{item.title}</p>
                      <p className={styles['price']}>$ {item.price}</p>
                      <p className={styles['time']}>{item.time}</p>
                    </div>
                  </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className={styles['main']}>
        <section className={styles['main-banner']}>
          <div className={styles['title-wrapper']}>
            <h1>
              <span>Sell CS2 (CS:GO) skins - </span>
              <span>Get money instantly</span>
            </h1>
          </div>
          <div className={styles['button-wrapper']}>
            <button>
              <span>
                <Image src={'/bolt-white.svg'} alt={'sell skins'} width={24} height={24}/>
                 Sell skins
              </span>
            </button>
          </div>
          <div className={styles['statistics-wrapper']}>
            <div className={styles['statistics-container']}>
              <div className={styles['stats']}>
                <div className={styles['container']}>
                  <div className={styles['el']}>
                    <div className={styles['img-wrapper']}>
                      <Image src={'/karambit.svg'} alt={'Skins sold'} width={28} height={28}/>
                    </div>
                    <div className={styles['text']}>
                      <div className={styles['title']}>507 400</div>
                      <div className={styles['subtitle']}>Skins Sold</div>
                    </div>
                  </div>
                  <div className={styles['el']}>
                    <div className={styles['img-wrapper']}>
                      <Image src={'/users.svg'} alt={'Skins sold'} width={28} height={28}/>
                    </div>
                    <div className={styles['text']}>
                      <div className={styles['title']}>169 709</div>
                      <div className={styles['subtitle']}>Satisfied Users</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['trustpilot']}>
                <a href={'https://www.trustpilot.com/review/skin.place?utm_medium=trustbox&utm_source=Mini'}>
                  <Image src={'/trustpilot.png'} alt={'Trustpilot'} width={1024} height={1024}/>
                </a>
              </div>
              <div className={styles['mobile-image']}>
                <Image src={'/illustrations/main-banner-mobile.webp'} alt={'background image'} width={256} height={256}/>
              </div>
            </div>
          </div>
          <div className={styles['payments']}>
            <div className={styles['item']}>
              <Image src={'/cards.svg'} alt={'cards'} width={136} height={78}/>
            </div>
            <div className={styles['item']}>
              <Image src={'/sepa.svg'} alt={'cards'} width={136} height={78}/>
            </div>
            <div className={styles['item']}>
              <Image src={'/paypal.svg'} alt={'cards'} width={136} height={78}/>
            </div>
            <div className={styles['item']}>
              <Image src={'/kinguin.svg'} alt={'cards'} width={136} height={78}/>
            </div>
            <div className={styles['item']}>
              <Image src={'/crypto.svg'} alt={'cards'} width={136} height={78}/>
            </div>
            <div className={styles['item']}>
              <Image src={'/pix.svg'} alt={'cards'} width={136} height={78}/>
            </div>
            <div className={styles['item']}>
              OTHERS
            </div>
          </div>
        </section>
        <section className={styles['partners']}>
          <h1 className={styles['title']}>
            <span className={'text-[#acadb3]'}>Our </span>
            <span>Partners</span>
          </h1>
          <div className={styles['container']}>
            <a target={"_blank"} href={'https://www.hltv.org/'}>
              <Image src={'/hltv-logo.svg'} alt={'HLTV'} width={206} height={82}/>
            </a>
            <a target={"_blank"} href={'https://cctour.gg/'}>
              <Image src={'/grid-logo.svg'} alt={'grid'} width={206} height={82}/>
            </a>
            <a target={"_blank"} href={'https://csgo.steamanalyst.com/'}>
              <Image src={'/steam-analyst-logo.svg'} alt={'steam analyst'} width={206} height={82}/>
            </a>
            <a target={"_blank"} href={'https://www.kinguin.net/'}>
              <Image src={'/kinguin-logo.webp'} alt={'kinguin'} width={206} height={82}/>
            </a>
          </div>
        </section>
        <section className={styles['sell-skins']}>
          <h2>Sell Skins <span className={'text-[#acadb3]'}>Easily</span></h2>
          <p className={styles['subtitle']}>Short tutorial how you can sell your skins instantly</p>
          <div className={styles['panel']}>
            <div className={styles['content']}>
              <div className={styles['item']}>
                <Image className={styles['icon']} src={'/steam-round.svg'} alt={'steam'} width={51} height={51}/>
                <span className={styles['title']}>Trade URL</span>
                <span className={styles['subtitle']}>Enter your trade URL from your Steam account.</span>
                <div className={styles['image-container']}>
                  <Image className={'max-w-[290px]'} src={'/illustrations/trade-url.webp'} alt={'Trade URL'} width={512}
                         height={512}/>
                </div>
              </div>
              <div className={styles['arrow-wrapper']}>
                <Image src={'/arrow-thin.svg'} alt={'right gray arrow'} width={24} height={24}/>
              </div>
              <div className={styles['item']}>
                <Image className={styles['icon']} src={'/navigation.svg'} alt={'steam'} width={51} height={51}/>
                <span className={styles['title']}>Select the skins</span>
                <span className={styles['subtitle']}>Select the skins from your inventory you want to sell.</span>
                <div className={styles['image-container']}>
                  <Image className={'max-w-[317px]'} src={'/illustrations/sell-inventory.webp'} alt={'Select skins'} width={512}
                         height={512}/>
                </div>
              </div>
              <div className={styles['arrow-wrapper']}>
                <Image src={'/arrow-thin.svg'} alt={'right gray arrow'} width={24} height={24}/>
              </div>
              <div className={styles['item']}>
                <Image className={styles['icon']} src={'/check-circle.svg'} alt={'steam'} width={51} height={51}/>
                <span className={styles['title']}>Sell Skins Instantly</span>
                <span className={styles['subtitle']}>Accept the offer and receive your payment instantly.</span>
                <div className={styles['image-container']}>
                  <Image className={'max-w-[230px]'} src={'/illustrations/withdraw-form.webp'} alt={'Sell Skins Instantly'} width={512}
                         height={512}/>
                </div>
              </div>
            </div>
            <div className={styles['button-container']}>
              <button>Try now</button>
            </div>
          </div>
          <div className={styles['mobile-button']}>
            <button>Try now</button>
          </div>
        </section>
        <section className={styles['statistics-section']}>
          <div className={styles['wrapper']}>
            <h2 className={styles['title']}><span className={'text-[#acadb3]'}>Our</span> Statistics</h2>
            <div className={styles['content']}>
              <div className={styles['item']}>
                <Image src={'/bolt.svg'} alt={'payouts'} width={64} height={64}/>
                <div className={styles['text']}>
                  <p className={styles['item-title']}>56 942+</p>
                  <span className={styles['item-subtitle']}>Instant Payouts</span>
                </div>
              </div>
              <div className={styles['item']}>
                <Image src={'/compare-horizontal.svg'} alt={'payouts'} width={64} height={64}/>
                <div className={styles['text']}>
                  <p className={styles['item-title']}>$ 7 342 300+</p>
                  <span className={styles['item-subtitle']}>Total Sum of Transactions</span>
                </div>
              </div>
              <div className={styles['item']}>
                <Image src={'/karambit.svg'} alt={'payouts'} width={64} height={64}/>
                <div className={styles['text']}>
                  <p className={styles['item-title']}>507 877+</p>
                  <span className={styles['item-subtitle']}>Skins Sold</span>
                </div>
              </div>
              <div className={styles['item']}>
                <Image src={'/users.svg'} alt={'payouts'} width={64} height={64}/>
                <div className={styles['text']}>
                  <p className={styles['item-title']}>169 827+</p>
                  <span className={styles['item-subtitle']}>Satisfied Users</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles['payments-list']}>
          <div className={styles['container']}>
            <div className={styles['payments']}>
              <div className={styles['item']}>
                <Image src={'/cards.svg'} alt={'cards'} width={136} height={78}/>
              </div>
              <div className={styles['item']}>
                <Image src={'/sepa.svg'} alt={'cards'} width={136} height={78}/>
              </div>
              <div className={styles['item']}>
                <Image src={'/paypal.svg'} alt={'cards'} width={136} height={78}/>
              </div>
              <div className={styles['item']}>
                <Image src={'/kinguin.svg'} alt={'cards'} width={136} height={78}/>
              </div>
              <div className={styles['item']}>
                <Image src={'/crypto.svg'} alt={'cards'} width={136} height={78}/>
              </div>
              <div className={styles['item']}>
                <Image src={'/pix.svg'} alt={'cards'} width={136} height={78}/>
              </div>
              <div className={styles['item']}>
                OTHERS
              </div>
            </div>
          </div>
        </section>
        <section className={styles['seo-block']}>
          <p>Discover how to sell your CS2 (CS:GO) skins on SkinPlace and start earning money. Begin your selling journey today and turn your virtual items into real money.</p>
          <p>Selling CS2 (CS:GO) skins for real money is a great way to make cash from your game items. If you have rare skins or a big collection, SkinPlace can help you turn them into actual money. Our platform offers a safe way to sell without getting scammed.</p>
          <h2>How to Sell Your CS2 (CS:GO) Skins Instantly?</h2>
          <p>Looking for a quick way to sell skins? SkinPlace is the best option for you! However, SkinPlace offers lower commissions and more profitable deals, allowing you to exchange CS2 (CS:GO) skins for real money instantly.
            To explore the process of selling CS2 skins at SkinPlace, follow these simple steps:</p>
          <ul>
            <li>Step 1: To get started, visit the website, click &#34;Register via Steam&quot; in the upper right corner of the screen, and then log in to your account.</li>
            <li>Step 2: Once logged in, the service will ask you to enter your Steam trade link. If you’re not sure where to find your trade link, click the highlighted &#34;Where to find it?&#34; line, which will redirect you to the official Steam page displaying your trade link. Copy and paste it, then click save.</li>
            <li>Step 3: To sell your items, go to the &#34;Sell Skins&#34; tab. The "Your Inventory" tab shows all items available for sale. You can sell one or multiple skins at once. The site calculates your prices and offers a bonus system, giving you a percentage bonus on earnings with each successful transaction. The more you use the service, the better the terms become.</li>
            <li>Step 4: Before completing the sale, select payment methods. Options include withdrawing funds to a bank card or cryptocurrency wallet (Bitcoin, Ethereum, LiteCoin, Tether) or keeping them in your site wallet balance.</li>
            <li>Step 5: After creating an offer, confirm it from your Steam account within 15 minutes, or the transaction will be canceled. If successful, you'll instantly receive funds via your chosen withdrawal method.</li>
          </ul>
          <h2>Why Choose Skin Place to Sell CS2 Skins?</h2>
          <p>When it comes to trading CS2 skins, finding the right platform can make all the difference. Whether you're an old trader or just starting, having a reliable, secure, and efficient marketplace is crucial. SkinPlace is the best option for selling your CS2 skins, offering many benefits for your trading needs.</p>
          <ul>
            <li>Instant cash for your Steam inventory: SkinPlace provides a unique advantage with its ability to offer instant cash for your Steam inventory. This means you can swiftly convert your virtual CS2 skins into real money without delay.</li>
            <li>100% Secure & Monitored transactions: Every transaction you make on SkinPlace is completely safe. We've implemented trusted security guidelines developed with experienced traders to keep you always secure.</li>
            <li>24/7 Customer service: If you have any questions, our dedicated customer support team is here to promptly and effectively assist you and ensure your satisfaction.</li>
          </ul>
          <h2>How To Sell CS2 (CS:GO) Skins For Real Money?</h2>
          <p>When you decide to sell Steam skins for real money, you need to understand the market trends to maximize your earnings. At SkinPlace, CSGO skin selling for real money is so simple. Here is our guide on how to sell CS2 skins for real money.</p>
          <ul>
            <li>Register on the Platform: Go to the top right of the home page and click "Register via STEAM." Complete the authorization process and fill in your contact information.</li>
            <li>Set Up Your Account: In your account settings, enter your details and add a special trade link for user exchanges.</li>
            <li>Sell Your Skins: Click the &#34;Sell CS2 Skins&#34; button, select the CS2 items you want to sell from your inventory, and confirm the exchange through the application. Then, wait until the process is finished.</li>
          </ul>
          <p>After these steps, the money will be added to your balance.</p>
          <h2>Sell Your CS2 (CS:GO) Skins for Real Money Safely</h2>
          <p>Knowing how to sell your skin trading safely is most important. When picking a place to show off CS2 skins, make sure it's safe first. Check if the website is trustworthy. Look for contact info that anyone can find easily on the site. A good website should also have people to help if you have problems or questions. Last, see how many people use the site and what they say about it. More good reviews usually mean it's more reliable.</p>
          <p>Consider these things to help you successfully sell CSGO skins for real money instantly at SkinPlace</p>
        </section>
        <section className={styles['faq-section']}>
          <h2>FAQ</h2>
          <div className={styles['container']}>
            {faq.map((item, index) => {
              return(
                  <Dropdown key={item.title} title={item.title} answer={item.answer} />
              )
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
