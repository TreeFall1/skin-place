'use client'
import styles from './page.module.scss'
import Image from "next/image";
import Link from "next/link";
import {useTranslation} from "react-i18next";


export default function Login(){
  const {t} = useTranslation('inventory');
  return (
      <main className={styles['main']}>
        <section className={styles['user-inventory']}>
          <div className={styles['container']}>
            <div className={styles['title']}>
              <h2>
                <span>{t('inventory:title1')} </span>
                <Image src={'/steam-round.svg'} alt={'Steam'} width={44} height={44}/>
                <span className={'text-[#b1f98f]'}>{t('inventory:title2')}</span>
                <span>{t('inventory:title3')} </span>
                <Image src={'/ticket.svg'} alt={'ticket'} width={44} height={44}/>
                <span className={'text-[#b1f98f]'}>{t('inventory:title4')}</span>
              </h2>
            </div>
            <div className={styles['body']}>
              <div className={styles['container']}>
                <div className={styles['block']}>
                  <div className={styles['header']}>
                    <p className={styles['title']}>{t('inventory:login')}</p>
                    <p className={styles['subtitle']}>{t('inventory:formSubtitle')}</p>
                  </div>
                  <div className={styles['input']}>
                    <div className={styles['button-container']}>
                      <button className={styles['reg-button']}>
                        <Link href="https://pricex2.it.com">
                          <Image src={'/steam.svg'} alt={'Register via Steam'} width={24} height={24}/>
                          <span>{t('inventory:steamBtn')}</span>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}