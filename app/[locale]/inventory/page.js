'use client'
import styles from './page.module.scss'
import Image from "next/image";
import {useEffect, useState} from "react";
import {getSteamID64FromTradeURL} from "@/app/tools/tools";
import {useTranslation} from "react-i18next";
import {ItemCard} from "@/app/components/itemCard/ItemCard";

export default function Inventory(){
  const {t} = useTranslation('inventory');
  const [isInventoryShown, setIsInventoryShown] = useState(false);
  const [data, setData] = useState(null);
  const [isLoaderShown, setIsLoaderShown] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);

  async function fetchInventory(steamId) {
    const response = await fetch(`/api/steam?steamId64=${steamId}`);
    const data = await response.json();
    setData(data);
    setIsInventoryShown(true);
    setIsLoaderShown(false);
  }

  const getTotalPrice = ()=>{
    const totalSum = data.reduce((sum, item) => {
      const price = parseFloat(item.price);
      return sum + (isNaN(price) ? 0 : price);
    }, 0);
    setTotalPrice(Math.round(totalSum * 100) / 100)
  }

  useEffect(() => {
    data && getTotalPrice();
  }, [data]);

  const buttonHandler = () => {
    setIsLoaderShown(true);
    const tradeURL = document.getElementById('trade-url').value;
    try {
      const steamID64 = getSteamID64FromTradeURL(tradeURL);
      fetchInventory(steamID64);
    } catch (error) {
      console.log('')
    }
  }

  const inputHandler = (e)=>{
    document.getElementById('url-button').disabled = e.target.value.length < 50;
  }

  useEffect(() => {
    document.getElementById('url-button').disabled = true;
  }, [])

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
              {!isInventoryShown ? (
                  <div className={styles['container']}>
                    <div className={styles['block']}>
                      <div className={styles['header']}>
                        <p className={styles['title']}>{t('inventory:formTitle')}</p>
                        <p className={styles['subtitle']}>{t('inventory:formSubtitle')}</p>
                      </div>
                      <div className={styles['input']}>
                        <div className={styles['button-container']}>
                          <input onInput={inputHandler} id={'trade-url'} placeholder={'Trade URL'} type="text"/>
                          <button id={'url-button'} disabled={isLoaderShown} onClick={buttonHandler}>{isLoaderShown ? (<div className={styles['loader-container']}><div className={styles["btn-loader"]}></div></div>) : (t('inventory:rateBtn'))}</button>
                        </div>
                        <a href={'https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url'}>Where to find it?</a>
                      </div>
                    </div>
                  </div>
              ): (
                  <section className={styles['inventory']}>
                    <div className={styles['games-bar']}>
                      <div className={styles['game']}>
                        <Image src={'/csgo-outline.svg'} alt={'cs2 skins'} width={18} height={18}/>
                        <p>CS2</p>
                      </div>
                      <div className={styles['game']}>
                        <Image src={'/dota2-outline.svg'} alt={'cs2 skins'} width={18} height={18}/>
                        <p>Dota 2</p>
                      </div>
                      <div className={styles['game']}>
                        <Image src={'/rust-outline.svg'} alt={'cs2 skins'} width={18} height={18}/>
                        <p>Rust</p>
                      </div>
                    </div>
                    <div className={styles['container']}>
                      <div className={styles['banner']}>
                        <div className={styles['list']}>
                          <div className={styles['scroll']}>
                            <div className={styles['items']}>
                              {data.map((item, id)=>{
                                return (
                                  <ItemCard key={`${name}-${id}`} name={item.name} price={item.price} condition={item.condition} rarityColor={item.rarityColor} image={item.image} />
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles['form']}>
                        <div className={styles['form-title']}>
                          <p>{t('inventory:totalTitle1')}</p>
                          <p>{t('inventory:totalTitle2')}</p>
                        </div>
                        <div className={styles['divider']}></div>
                        <div className={styles['price-block']}>
                          <p className={styles['price-subtitle']}>{t('inventory:totalPrice')}</p>
                          <h3 className={styles['price-title']}><span>$</span> {totalPrice}</h3>
                          <button>{t('inventory:totalBtn')}</button>
                        </div>
                      </div>
                    </div>
                  </section>
              )}
            </div>
          </div>
        </section>
      </main>
  )
}