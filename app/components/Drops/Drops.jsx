'use client'
import {drops} from "@/app/tools/tools";
import Image from "next/image";
import stylesH from './Drops.module.scss'
import stylesF from './Drops-footer.module.scss'
import {useTranslation} from "react-i18next";

export const Drops = (props)=>{
  const { t } = useTranslation();
  const styles = props.styles === 'footer' ? stylesF : stylesH;
  return (
      <section className={styles['drop-bar']}>
        <div className={styles['container']}>
          <div className={styles['stats-container']}>
            <p>{t('home:drops')}</p>
            <span className={styles['stats']}><div className={`animate-pulse ${styles['anim']}`}/><p>$ 43,841</p></span>
          </div>
          <div className={styles['drops-container']}>
            {drops.map((item, i) => {
              return (
                  <div style={{borderTopColor: item.color}} key={item.title} className={styles['drop']}>
                    <Image src={`/illustrations/${item.img}`} alt={'drop'} width={60} height={60}/>
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
  )
}