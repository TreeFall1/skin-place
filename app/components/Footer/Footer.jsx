'use client'
import styles from './Footer.module.scss'
import Image from "next/image";
import Link from "next/link";
import {Drops} from "@/app/components/Drops/Drops";
import {useTranslation} from "react-i18next";


export const Footer = () => {
  const { t } = useTranslation();

  return (
      <footer className={styles['footer']}>
        <div className={styles['mobile-container']}>
          <Link href={'/sell'} className={styles['sell-button']}>
            <Image src={'/bolt-white.svg'} alt={'Sell skins'} width={30} height={30} />
          </Link>
          <ul>
            <li>
              <Link href={'/'}>
                <Image src={'/home.svg'} alt={'Home page'} width={30} height={30}/>
                <p>{t('footer:mobileNavHome')}</p>
              </Link>
            </li>
            <li className={'pl-[10px]'}>
              <p>{t('footer:mobileNavSell')}</p>
            </li>
            <li>
              <Link href={'/'}>
                <Image src={'/chat-processing-headset.svg'} alt={'Support'} width={30} height={30}/>
                <p>{t('footer:mobileNavSupport')}</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles['footer-container']}>
          <div className={styles['content']}>
            <div className={styles['logo-container']}>
              <Link href={'/'}>
                <Image src={'/new-logo.png'} alt={'PriceX2'} width={512} height={512} />
              </Link>
              <div className={styles['letter-container']}>
                <h3 className={styles['title']}>{t('footer:mailTitle')}</h3>
                <p className={styles['subtitle']}>{t('footer:mailSubtitle')}</p>
                <div className={styles['input-container']}>
                  <input placeholder={'E-mail'} type="text"/>
                  <button>{t('footer:mailButton')}</button>
                </div>
              </div>
            </div>
            <div className={styles['info-block']}>
              <div className={styles['drops-line']}>
                <Drops styles={'footer'} />
              </div>
              <div className={styles['link-container']}>
                <div className={styles['site-links']}>
                  <ul>
                    <li>{t('footer:servicesTitle')}</li>
                    <li><Link href={'/sell'}>{t('footer:mobileNavSell')}</Link></li>
                    <li>{t('footer:bonus')}</li>
                    <li>{t('footer:referral')}</li>
                    <li>{t('home:headerCS')}</li>
                    <li>{t('home:headerDota')}</li>
                    <li>{t('home:headerRust')}</li>
                  </ul>
                  <ul>
                    <li>{t('footer:productTitle')}</li>
                    <li>{t('home:headerBusiness')}</li>
                    <li><Link href={'/faq'}>{t('home:faq')}</Link></li>
                    <li><Link href={'/about'}>{t("home:aboutUs")}</Link></li>
                    <li><Link href={'/contact'}>{t('home:contactUs')}</Link></li>
                    <li>{t('home:headerLegit')}</li>
                    <li>{t('home:headerWhatIs')}</li>
                  </ul>
                </div>
                <div className={styles['socials']}>
                  <a target={'_blank'} href={'https://www.trustpilot.com/review/pricex2?utm_medium=trustbox&utm_source=Mini'}>
                    <Image src={'/trustpilot-footer.png'} alt={'TrustPilot'} width={164} height={80} />
                  </a>
                  <div className={styles['mail']}>
                    <Image src={'/chat-processing-headset.svg'} alt={'tech support'} width={36} height={36}/>
                    <div className={styles['text']}>
                      <p className={styles['tech-title']}>support@price.x2</p>
                      <p className={styles['tech-subtitle']}>{t('footer:techSupport')}</p>
                    </div>
                  </div>
                  <div className={styles['media-links']}>
                    <ul>
                      <li><a href="#"><Image src="/discord.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="#"><Image src="/telegram.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="#"><Image src="/instagram.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="#"><Image src="/x.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="#"><Image src="/tiktok.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="#"><Image src="/youtube.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="#"><Image src="/facebook.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="#"><Image src="/trustpilot.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="#"><Image src="/reddit.svg" alt="socials" width={24} height={24}/></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          <div className={styles['bottom-container']}>
            <p>© PriceX2. {t('footer:bottomText')}</p>
            <p>{t('footer:bottomTitle')}</p>
          </div>
        </div>
      </footer>
  )
}