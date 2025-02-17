'use client'
import styles from './page.module.scss'
import Image from "next/image";
import {Dropdown} from "@/app/components/Dropdown/Dropdown";
import {faq} from "@/app/tools/tools";
import {useTranslation} from "react-i18next";


export default function FAQ(){
  const { t } = useTranslation('faq');

  return(
      <main className={styles['main']}>
        <div className={styles['header']}>
          <h1><Image src={'/question-gray.svg'} alt={'FAQ'} width={40} height={40}/> {t('faq:title')}</h1>
          <p>{t('text')}</p>
        </div>
        <div className={styles['container']}>
          {faq[t('faq:faqLocale')].map((item) => {
            return(
                <Dropdown key={item.title} title={item.title} answer={item.answer} />
            )
          })}
        </div>
      </main>
  )
}