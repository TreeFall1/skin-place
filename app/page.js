'use client'
import Image from "next/image";
import styles from './page.module.scss'
import {Dropdown} from "@/app/components/Dropdown/Dropdown";
import Link from "next/link";
import {Drops} from "@/app/components/Drops/Drops";
import {faq} from "@/app/tools/tools";
import {useEffect, useState} from "react";

export default function Home() {
  const [isLoaderShown, setIsLoaderShown] = useState(true);

  useEffect(() => {
    loaderHandler();
  }, []);

  const loaderHandler = ()=>{
    const state = sessionStorage.getItem("loaderState");
    if(state === null){
      sessionStorage.setItem("loaderState", 'false');
      setTimeout(() => setIsLoaderShown(false), 3000);
    } else{
      if(typeof state === "string"){
        setIsLoaderShown(JSON.parse(state));
      }
    }
  }


  return (
    <main className={styles["main-container"]}>
      <Drops />
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
              <Link href={'/sell'}>
                <Image src={'/bolt-white.svg'} alt={'sell skins'} width={24} height={24}/>
                 Sell skins
              </Link>
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
                <a href={'https://www.trustpilot.com/review/pricex2?utm_medium=trustbox&utm_source=Mini'}>
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
          <p>Discover how to sell your CS2 (CS:GO) skins on PriceX2 and start earning money. Begin your selling journey today and turn your virtual items into real money.</p>
          <p>Selling CS2 (CS:GO) skins for real money is a great way to make cash from your game items. If you have rare skins or a big collection, PriceX2 can help you turn them into actual money. Our platform offers a safe way to sell without getting scammed.</p>
          <h2>How to Sell Your CS2 (CS:GO) Skins Instantly?</h2>
          <p>Looking for a quick way to sell skins? PriceX2 is the best option for you! However, PriceX2 offers lower commissions and more profitable deals, allowing you to exchange CS2 (CS:GO) skins for real money instantly.
            To explore the process of selling CS2 skins at PriceX2, follow these simple steps:</p>
          <ul>
            <li>Step 1: To get started, visit the website, click &#34;Register via Steam&quot; in the upper right corner of the screen, and then log in to your account.</li>
            <li>Step 2: Once logged in, the service will ask you to enter your Steam trade link. If you’re not sure where to find your trade link, click the highlighted &#34;Where to find it?&#34; line, which will redirect you to the official Steam page displaying your trade link. Copy and paste it, then click save.</li>
            <li>Step 3: To sell your items, go to the &#34;Sell Skins&#34; tab. The &#34;Your Inventory&#34; tab shows all items available for sale. You can sell one or multiple skins at once. The site calculates your prices and offers a bonus system, giving you a percentage bonus on earnings with each successful transaction. The more you use the service, the better the terms become.</li>
            <li>Step 4: Before completing the sale, select payment methods. Options include withdrawing funds to a bank card or cryptocurrency wallet (Bitcoin, Ethereum, LiteCoin, Tether) or keeping them in your site wallet balance.</li>
            <li>Step 5: After creating an offer, confirm it from your Steam account within 15 minutes, or the transaction will be canceled. If successful, you&#39;ll instantly receive funds via your chosen withdrawal method.</li>
          </ul>
          <h2>Why Choose PriceX2 to Sell CS2 Skins?</h2>
          <p>When it comes to trading CS2 skins, finding the right platform can make all the difference. Whether you&#39;re an old trader or just starting, having a reliable, secure, and efficient marketplace is crucial. PriceX2 is the best option for selling your CS2 skins, offering many benefits for your trading needs.</p>
          <ul>
            <li>Instant cash for your Steam inventory: PriceX2 provides a unique advantage with its ability to offer instant cash for your Steam inventory. This means you can swiftly convert your virtual CS2 skins into real money without delay.</li>
            <li>100% Secure & Monitored transactions: Every transaction you make on PriceX2 is completely safe. We&#39;ve implemented trusted security guidelines developed with experienced traders to keep you always secure.</li>
            <li>24/7 Customer service: If you have any questions, our dedicated customer support team is here to promptly and effectively assist you and ensure your satisfaction.</li>
          </ul>
          <h2>How To Sell CS2 (CS:GO) Skins For Real Money?</h2>
          <p>When you decide to sell Steam skins for real money, you need to understand the market trends to maximize your earnings. At PriceX2, CSGO skin selling for real money is so simple. Here is our guide on how to sell CS2 skins for real money.</p>
          <ul>
            <li>Register on the Platform: Go to the top right of the home page and click &#34;Register via STEAM.&#34; Complete the authorization process and fill in your contact information.</li>
            <li>Set Up Your Account: In your account settings, enter your details and add a special trade link for user exchanges.</li>
            <li>Sell Your Skins: Click the &#34;Sell CS2 Skins&#34; button, select the CS2 items you want to sell from your inventory, and confirm the exchange through the application. Then, wait until the process is finished.</li>
          </ul>
          <p>After these steps, the money will be added to your balance.</p>
          <h2>Sell Your CS2 (CS:GO) Skins for Real Money Safely</h2>
          <p>Knowing how to sell your skin trading safely is most important. When picking a place to show off CS2 skins, make sure it&#39;s safe first. Check if the website is trustworthy. Look for contact info that anyone can find easily on the site. A good website should also have people to help if you have problems or questions. Last, see how many people use the site and what they say about it. More good reviews usually mean it&#39;s more reliable.</p>
          <p>Consider these things to help you successfully sell CSGO skins for real money instantly at PriceX2</p>
        </section>
        <section className={styles['faq-section']}>
          <h2>FAQ</h2>
          <div className={styles['container']}>
            {faq.map((item) => {
              return(
                  <Dropdown key={item.title} title={item.title} answer={item.answer} />
              )
            })}
          </div>
        </section>
      </section>
      {isLoaderShown && (
        <div className={styles['page-loader']}>
          <Image className={'animate-pulse'} src={'/new-logo.png'} alt={'PriceX2'} width={512} height={512}/>
        </div>
      )}
    </main>
  );
}
