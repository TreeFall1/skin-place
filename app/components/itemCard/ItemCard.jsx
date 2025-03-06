'use client'
import regStyles from './ItemCard.module.scss';
import bigStyles from './ItemCard.big.module.scss';
import Image from "next/image";
import {useTranslation} from "react-i18next";


export const ItemCard = (props) => {
  const styles = props.isForSale ? bigStyles : regStyles;
  const {t} = useTranslation('market');

  return (
      <div className={styles['item']}>
        <div style={{borderTopColor: props.rarityColor}} className={styles['item-container']}>
          <div className={styles['header']}>{props.condition ==='N/A' ? '' : props.condition}</div>
          <div className={styles['image-container']}>
            <div className={styles['image']}>
              <Image src={props.image} alt={'item image'} width={140}
                     height={105}/>
            </div>
          </div>
          <div className={styles['info']}>
            <div className={styles['info-container']}>
              <div className={styles['text']}>
                <h3>{props.name.split('|')[0]}</h3>
                <p>{props.name.split('|')[1] ?? ''}</p>
              </div>
            </div>
          </div>
          <div className={styles['select-button']}>
            <button>
              <span>
                <p className={styles['price']}>{`${props.price !== 'N/A' ? '$ ' + props.price : 'N/A'}`}</p>
                <Image src={'/added-icon.svg'} alt={'add'} width={14} height={14}/>
              </span>
            </button>
            {props.isForSale && (
                <button className={styles['buy-btn']}>
                  {t('market:btn')}
                </button>
            )}
          </div>
        </div>
      </div>
  )
}