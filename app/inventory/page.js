'use client'
import styles from './page.module.scss'
import Image from "next/image";
import {useEffect, useState} from "react";
import {getSteamID64FromTradeURL} from "@/app/tools/tools";

export default function Inventory(){
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
                <span>Rate Your </span>
                <Image src={'/steam-round.svg'} alt={'Steam'} width={44} height={44}/>
                <span className={'text-[#b1f98f]'}>Steam Inventory</span>
                <span>and sell </span>
                <Image src={'/ticket.svg'} alt={'ticket'} width={44} height={44}/>
                <span className={'text-[#b1f98f]'}>with low fee</span>
              </h2>
            </div>
            <div className={styles['body']}>
              {!isInventoryShown ? (
                  <div className={styles['container']}>
                    <div className={styles['block']}>
                      <div className={styles['header']}>
                        <p className={styles['title']}>Enter your Trade URL</p>
                        <p className={styles['subtitle']}>And rate your Steam Inventory right now!</p>
                      </div>
                      <div className={styles['input']}>
                        <div className={styles['button-container']}>
                          <input onInput={inputHandler} id={'trade-url'} placeholder={'Trade URL'} type="text"/>
                          <button id={'url-button'} disabled={isLoaderShown} onClick={buttonHandler}>{isLoaderShown ? (<div className={styles['loader-container']}><div className={styles["btn-loader"]}></div></div>) : ('Rate inventory')}</button>
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
                                  <div key={`${item.name}-${id}`} className={styles['item']}>
                                    <div style={{borderTopColor: item.rarityColor}} className={styles['item-container']}>
                                      <div className={styles['header']}>{item.condition =='N/A' ? '' : item.condition}</div>
                                      <div className={styles['image-container']}>
                                        <div className={styles['image']}>
                                          <Image src={item.image} alt={'item image'} width={140}
                                                 height={105}/>
                                        </div>
                                      </div>
                                      <div className={styles['info']}>
                                        <div className={styles['info-container']}>
                                          <div className={styles['text']}>
                                            <h3>{item.name.split('|')[0]}</h3>
                                            <p>{item.name.split('|')[1] ?? ''}</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className={styles['select-button']}>
                                        <button>
                                          <span>
                                            <p className={styles['price']}>{`${item.price != 'N/A' ? '$ '+item.price : 'N/A'}`}</p>
                                            <Image src={'/added-icon.svg'} alt={'add'} width={14} height={14}/>
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles['form']}>
                        <div className={styles['form-title']}>
                          <p>We rated your</p>
                          <p>Steam Inventory</p>
                        </div>
                        <div className={styles['divider']}></div>
                        <div className={styles['price-block']}>
                          <p className={styles['price-subtitle']}>Average value</p>
                          <h3 className={styles['price-title']}><span>$</span> {totalPrice}</h3>
                          <button>Grab Your Money</button>
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