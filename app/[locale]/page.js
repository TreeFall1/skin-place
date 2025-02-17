'use client'
import Image from "next/image";
import styles from './page.module.scss'
import {Dropdown} from "@/app/components/Dropdown/Dropdown";
import Link from "next/link";
import {Drops} from "@/app/components/Drops/Drops";
import {faq} from "@/app/tools/tools";
import * as React from "react";
import {Loader} from "@/app/components/Loader/Loader";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className={styles["main-container"]}>
      <Drops />
      <section className={styles['main']}>
        <section className={styles['main-banner']}>
          <div className={styles['title-wrapper']}>
            <h1>
              <span>{t('mainTitle1')}</span>
              <span>{t('mainTitle2')}</span>
            </h1>
          </div>
          <div className={styles['button-wrapper']}>
            <button>
              <Link href={'/sell'}>
                <Image src={'/bolt-white.svg'} alt={'sell skins'} width={24} height={24}/>
                {t('mainSellBtn')}
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
                      <p className={styles['subtitle']}>{t('mainSellStats')}</p>
                    </div>
                  </div>
                  <div className={styles['el']}>
                    <div className={styles['img-wrapper']}>
                      <Image src={'/users.svg'} alt={'Skins sold'} width={28} height={28}/>
                    </div>
                    <div className={styles['text']}>
                      <div className={styles['title']}>169 709</div>
                      <div className={styles['subtitle']}>{t('mainSatisfiedUsers')}</div>
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
              {t('mainOthers')}
            </div>
          </div>
        </section>
        <section className={styles['partners']}>
          <h1 className={styles['title']}>
            <span className={'text-[#acadb3]'}>{t('partnersTitle1')} </span>
            <span> {t('partnersTitle2')}</span>
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
          <h2>{t('sellTitle1')} <span className={'text-[#acadb3]'}>{t('sellTitle2')}</span></h2>
          <p className={styles['subtitle']}>{t('sellSubtitle')}</p>
          <div className={styles['panel']}>
            <div className={styles['content']}>
              <div className={styles['item']}>
                <Image className={styles['icon']} src={'/steam-round.svg'} alt={'steam'} width={51} height={51}/>
                <span className={styles['title']}>{t('sellBlocksTitle1')}</span>
                <span className={styles['subtitle']}>{t('sellBlocksSubtitle1')}</span>
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
                <span className={styles['title']}>{t('sellBlocksTitle2')}</span>
                <span className={styles['subtitle']}>{t('sellBlocksSubtitle2')}</span>
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
                <span className={styles['title']}>{t('sellBlocksTitle3')}</span>
                <span className={styles['subtitle']}>{t('sellBlocksSubtitle3')}</span>
                <div className={styles['image-container']}>
                  <Image className={'max-w-[230px]'} src={'/illustrations/withdraw-form.webp'} alt={'Sell Skins Instantly'} width={512}
                         height={512}/>
                </div>
              </div>
            </div>
            <div className={styles['button-container']}>
              <button><Link href={'/sell'}>{t('sellBtn')}</Link></button>
            </div>
          </div>
          <div className={styles['mobile-button']}>
            <button><Link href={'/sell'}>{t('sellBtn')}</Link></button>
          </div>
        </section>
        <section className={styles['statistics-section']}>
          <div className={styles['wrapper']}>
            <h2 className={styles['title']}><span className={'text-[#acadb3]'}>{t('statsTitle1')}</span> {t('statsTitle2')}</h2>
            <div className={styles['content']}>
              <div className={styles['item']}>
                <Image src={'/bolt.svg'} alt={'payouts'} width={64} height={64}/>
                <div className={styles['text']}>
                  <p className={styles['item-title']}>56 942+</p>
                  <span className={styles['item-subtitle']}>{t('statsBlockTitle1')}</span>
                </div>
              </div>
              <div className={styles['item']}>
                <Image src={'/compare-horizontal.svg'} alt={'payouts'} width={64} height={64}/>
                <div className={styles['text']}>
                  <p className={styles['item-title']}>$ 7 342 300+</p>
                  <span className={styles['item-subtitle']}>{t('statsBlockTitle2')}</span>
                </div>
              </div>
              <div className={styles['item']}>
                <Image src={'/karambit.svg'} alt={'payouts'} width={64} height={64}/>
                <div className={styles['text']}>
                  <p className={styles['item-title']}>507 877+</p>
                  <span className={styles['item-subtitle']}>{t('statsBlockTitle3')}</span>
                </div>
              </div>
              <div className={styles['item']}>
                <Image src={'/users.svg'} alt={'payouts'} width={64} height={64}/>
                <div className={styles['text']}>
                  <p className={styles['item-title']}>169 827+</p>
                  <span className={styles['item-subtitle']}>{t('statsBlockTitle4')}</span>
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
                {t('home:mainOthers')}
              </div>
            </div>
          </div>
        </section>
        <section className={styles['seo-block']}>
          <p>{t('home:seoText1')}</p>
          <p>{t('home:seoText2')}</p>
          <h2>{t('home:seoTitle1')}</h2>
          <p>{t('home:seo1Text1')}</p>
          <ul>
            <li>{t('home:seo1Step1')}</li>
            <li>{t('home:seo1Step2')}</li>
            <li>{t('home:seo1Step3')}</li>
            <li>{t('home:seo1Step4')}</li>
            <li>{t('home:seo1Step5')}</li>
          </ul>
          <h2>{t('seoTitle2')}</h2>
          <p>{t('home:seo2Text1')}</p>
          <ul>
            <li>{t('home:seo2Step1')}</li>
            <li>{t('home:seo2Step2')}</li>
            <li>{t('home:seo2Step3')}</li>
          </ul>
          <h2>{t('seoTitle3')}</h2>
          <p>{t('home:seo3Text1')}</p>
          <ul>
            <li>{t('home:seo3Step1')}</li>
            <li>{t('home:seo3Step2')}</li>
            <li>{t('home:seo3Step3')}</li>
          </ul>
          <p>{t('home:seo3Text2')}</p>
          <h2>{t('seoTitle4')}</h2>
          <p>{t('home:seo4Text1')}</p>
          <p>{t('home:seo4Text2')}</p>
        </section>
        <section className={styles['faq-section']}>
          <h2>FAQ</h2>
          <div className={styles['container']}>
            {faq[t('faqLocale')].map((item) => {
              return(
                  <Dropdown key={item.title} title={item.title} answer={item.answer} />
              )
            })}
          </div>
        </section>
      </section>
      <Loader />
    </main>
  );
}
