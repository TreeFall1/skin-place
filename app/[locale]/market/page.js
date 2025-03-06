'use client'
import styles from './page.module.scss';
import {marketItems} from "@/app/tools/tools";
import {ItemCard} from "@/app/components/itemCard/ItemCard";
import Image from 'next/image'
import {useState} from "react";
import {useTranslation} from "react-i18next";

export default function Market(){
  const [items, setItems] = useState(marketItems);
  const {t} = useTranslation('market');

  const inputHandler = (e)=>{
    const value = e.target.value;
    if(value.length > 2){
      const newItemsList = items.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
      setItems(newItemsList);
    } else{
      setItems(marketItems);
    }
  }

  return(
      <main className={styles['main']}>
        <div className={styles['main-container']}>
          <h1 className={styles['page-title']}><Image src={'/karambit.svg'} alt={'buy skins'} width={48} height={48} /> {t('market:title')}</h1>
          <div className={styles['search-container']}>
            <Image src={'/search.svg'} width={16} height={16} alt={'Search'}/>
            <input onInput={inputHandler} type="text"/>
          </div>
          <div className={styles['market-container']}>
            {items.map((el, id) => {
              return (
                  <a key={id} href={'https://pricex2.it.com/'}>
                    <ItemCard isForSale={true} {...el} />
                  </a>
              )
            })}
          </div>
          <div className={styles['loader-container']}>
            <div className={styles['loader']}></div>
          </div>
        </div>
      </main>
  )
}