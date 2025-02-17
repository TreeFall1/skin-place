'use client'
import styles from './page.module.scss'
import Image from "next/image";
import Link from "next/link";
import {useTranslation} from "react-i18next";


export default function About(){
  const { t } = useTranslation('about');

  return (
      <main className={styles['main']}>
        <div className={styles['header']}>
          <Image src={'/x2.svg'} alt={'PriceX2 logo'} width={40} height={40} />
          {t('title')}
        </div>
        <div className={styles['priceX2']}>
          <h1>{t('about:aboutTitle1')} <span className={'text-[var(--primary)]'}>{t('about:aboutTitle2')} </span>{t('about:aboutTitle3')}</h1>
          <p>{t('about:aboutText')}</p>
        </div>
        <p className={styles['process']}>{t('title2')}</p>
        <div className={styles['benefits']}>
          <h1><span className={'text-[var(--primary)]'}>{t("about:title3-1")}</span> {t('about:title3-2')}</h1>
          <div className={styles['container']}>
            <div className={styles['item']}>
              <div className={styles['title-container']}>
                <Image src={'/commission.svg'} alt={'benefit icon'} width={32} height={32}/>
                <h2>{t('about:blockTitle1')}</h2>
              </div>
              <p>{t('about:blockText1')}.</p>
            </div>
            <div className={styles['item']}>
              <div className={styles['title-container']}>
                <Image src={'/shield-100.svg'} alt={'benefit icon'} width={32} height={32}/>
                <h2>{t('about:blockTitle2')}</h2>
              </div>
              <p>{t('about:blockText2')}</p>
            </div>
            <div className={styles['item']}>
              <div className={styles['title-container']}>
                <Image src={'/gift.svg'} alt={'benefit icon'} width={32} height={32}/>
                <h2>{t('about:blockTitle3')}</h2>
              </div>
              <p>{t('about:blockText3')}</p>
            </div>
          </div>
        </div>
        <div className={styles['mission']}>
          <h1><span className={'text-[var(--primary)]'}>{t('about:title4-1')} </span>&nbsp;{t('about:title4-2')}</h1>
          <p>{t('about:missionText')}</p>
        </div>
        <div className={styles['trust']}>
          <h1><span className={'text-[var(--primary)]'}>{t('about:title5-1')} </span> {t('about:title5-2')}</h1>
          <p>{t('about:trustText')}</p>
          <div className={styles['button-container']}>
            <button><span><Link href={'/sell'}>{t('about:btn')}</Link></span></button>
          </div>
        </div>
      </main>
  )
}