'use client'
import styles from './page.module.scss';
import Image from "next/image";
import {useTranslation} from "react-i18next";


export default function Contact(){
  const {t} = useTranslation('contact');
  return (
      <main className={styles['main']}>
        <div className={styles['header']}>
          <div className={styles['title']}>
            <Image src={'/text-gray.svg'} alt={'Contact us'} width={40} height={40} />
            <h1>{t('contact:title')}</h1>
          </div>
          <p>{t('contact:subtitle')}</p>
        </div>
        <div className={styles['form']}>
          <h2 className={styles['form-title']}>{t('contact:formTitle')}</h2>
          <div className={styles['inputs']}>
            <input placeholder={'Your name'} type="text"/>
            <input placeholder={'Your email'} type="text"/>
            <textarea placeholder={'Type your feedback'} />
          </div>
          <div className={styles['buttons']}>
            <button>{t('contact:btn')}</button>
          </div>
          <div className={styles['email-block']}>
            <p>{t('contact:support')}</p>
            <p>support@price.x2</p>
          </div>
          <div className={styles['divider']}></div>
          <div className={styles['socials']}>
            <h2>{t('contact:socials')}</h2>
            <ul>
              <li><a href="https://discord.gg/drmaQXmnnT" target="_blank"><Image src="/discord.svg" alt="socials" width={24} height={24}/></a></li>
              <li><a href="https://t.me/+gNsCctWgpi1lY2M0" target="_blank"><Image src="/telegram.svg" alt="socials" width={18} height={18}/></a></li>
              <li><a href="https://www.instagram.com/skinplaceoff/" target="_blank"><Image src="/instagram.svg" alt="socials" width={24} height={24}/></a></li>
              <li><a href="https://x.com/SkinPlaceOff" target="_blank"><Image src="/x.svg" alt="socials" width={24} height={24}/></a></li>
              <li><a href="https://www.tiktok.com/@skinplace8?_t=ZM-8tDx6N55EhR&_r=1" target="_blank"><Image src="/tiktok.svg" alt="socials" width={24} height={24}/></a></li>
              <li><a href="https://www.youtube.com/@SkinPlaceOfficial" target="_blank"><Image src="/youtube.svg" alt="socials" width={24} height={24}/></a></li>
              <li><a href="https://www.facebook.com/people/pricex2/61550289076454/" target="_blank"><Image src="/facebook.svg" alt="socials" width={24} height={24}/></a></li>
              <li><a href="https://www.trustpilot.com/review/pricex2" target="_blank"><Image src="/trustpilot.svg" alt="socials" width={24} height={24}/></a></li>
              <li><a href="https://www.reddit.com/r/Skin_Place" target="_blank"><Image src={"/reddit.svg"} alt="socials" width={24} height={24}/></a></li>
            </ul>
          </div>
        </div>
      </main>
  )
}