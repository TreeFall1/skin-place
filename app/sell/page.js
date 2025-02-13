import styles from './page.module.scss'
import Image from "next/image";
import Link from "next/link";

export default function Sell(){
  return(
      <main className={styles['main']}>
        <div className={styles['form-section']}>
          <div className={styles['sell-block']}>
            <div className={styles['banner']}>
              <h2>Your inventory</h2>
              <div className={styles['list']}>
                <Image className={styles['main-icon']} src={'/steam-round.svg'} alt={'Steam icon'} width={48}
                       height={48}/>
                <p className={styles['login-title']}>You have to log in to start selling</p>
                <button className={styles['reg-button']}>
                  <Link href="/login">
                    <Image src={'/steam.svg'} alt={'Register via Steam'} width={24} height={24}/>
                    <span>Register via Steam</span>
                  </Link>
                </button>
              </div>
            </div>
            <aside className={styles['payout-container']}>
              <div className={styles['payment']}>
                <div className={styles['header']}>
                  <h2>Choose payout method</h2>
                  <span>Don’t know what to do? <span>Watch the tutor</span></span>
                </div>
                <div className={styles['crypto-block']}>
                  <div className={styles['payment-list']}>
                    <div className={styles['item']}>
                      <div className=""></div>
                      <div className=""></div>
                    </div>
                    <div className={styles['item']}>
                      <div className=""></div>
                      <div className=""></div>
                    </div>
                    <div className={styles['item']}>
                      <div className=""></div>
                      <div className=""></div>
                    </div>
                    <div className={styles['item']}>
                      <div className=""></div>
                      <div className=""></div>
                    </div>
                    <div className={styles['item']}>
                      <div className=""></div>
                      <div className=""></div>
                    </div>
                    <div className={styles['item']}>
                      <div className=""></div>
                      <div className=""></div>
                    </div>
                  </div>
                </div>
                <div className={styles['promo']}>
                  <p>Do you have promocode?</p>
                  <input disabled={true} placeholder={'Enter your promocode'} type="text"/>
                </div>
              </div>
              <div className={styles['info']}>
                <div className={styles['divider']}></div>
                <div className={styles['footer']}>
                  <div className={styles['item']}>
                    <Image src={'/not-auth-secure.svg'} alt={'secure'} width={40} height={40}/>
                    <p>100% secure</p>
                  </div>
                  <div className={styles['item']}>
                    <Image src={'/not-fee.svg'} alt={'fee'} width={40} height={40}/>
                    <p>No hidden fees</p>
                  </div>
                  <div className={styles['item']}>
                    <Image src={'/not-auth-instant.svg'} alt={'secure'} width={40} height={40}/>
                    <p>Instant cash</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <section className={styles['sell-skins']}>
          <div className={styles['panel']}>
            <div className={styles['content']}>
              <div className={styles['item']}>
                <Image className={styles['icon']} src={'/steam-round.svg'} alt={'steam'} width={51} height={51}/>
                <span className={styles['title']}>Trade URL</span>
                <span className={styles['subtitle']}>Enter your trade URL from your Steam account.</span>
                <div className={styles['image-container']}>
                  <Image className={'max-w-[290px]'} src={'/illustrations/trade-url.webp'} alt={'Trade URL'} width={512}
                         height={512}/>
                </div>
              </div>
              <div className={styles['arrow-wrapper']}>
                <Image src={'/arrow-thin.svg'} alt={'right gray arrow'} width={24} height={24}/>
              </div>
              <div className={styles['item']}>
                <Image className={styles['icon']} src={'/navigation.svg'} alt={'steam'} width={51} height={51}/>
                <span className={styles['title']}>Select the skins</span>
                <span className={styles['subtitle']}>Select the skins from your inventory you want to sell.</span>
                <div className={styles['image-container']}>
                  <Image className={'max-w-[317px]'} src={'/illustrations/sell-inventory.webp'} alt={'Select skins'}
                         width={512}
                         height={512}/>
                </div>
              </div>
              <div className={styles['arrow-wrapper']}>
                <Image src={'/arrow-thin.svg'} alt={'right gray arrow'} width={24} height={24}/>
              </div>
              <div className={styles['item']}>
                <Image className={styles['icon']} src={'/check-circle.svg'} alt={'steam'} width={51} height={51}/>
                <span className={styles['title']}>Sell Skins Instantly</span>
                <span className={styles['subtitle']}>Accept the offer and receive your payment instantly.</span>
                <div className={styles['image-container']}>
                  <Image className={'max-w-[230px]'} src={'/illustrations/withdraw-form.webp'}
                         alt={'Sell Skins Instantly'} width={512}
                         height={512}/>
                </div>
              </div>
            </div>
            <div className={styles['button-container']}>
              <button>Try now</button>
            </div>
          </div>
          <div className={styles['mobile-button']}>
            <button>Try now</button>
          </div>
        </section>
        <section className={styles['statistics-section']}>
          <div className={styles['wrapper']}>
            <div className={styles['content']}>
              <div className={styles['item']}>
                <Image src={'/bolt.svg'} alt={'payouts'} width={64} height={64}/>
                <div className={styles['text']}>
                  <p className={styles['item-title']}>56 942+</p>
                  <span className={styles['item-subtitle']}>Instant Payouts</span>
                </div>
              </div>
              <div className={styles['item']}>
                <Image src={'/compare-horizontal.svg'} alt={'payouts'} width={64} height={64}/>
                <div className={styles['text']}>
                  <p className={styles['item-title']}>$ 7 342 300+</p>
                  <span className={styles['item-subtitle']}>Total Sum of Transactions</span>
                </div>
              </div>
              <div className={styles['item']}>
                <Image src={'/karambit.svg'} alt={'payouts'} width={64} height={64}/>
                <div className={styles['text']}>
                  <p className={styles['item-title']}>507 877+</p>
                  <span className={styles['item-subtitle']}>Skins Sold</span>
                </div>
              </div>
              <div className={styles['item']}>
                <Image src={'/users.svg'} alt={'payouts'} width={64} height={64}/>
                <div className={styles['text']}>
                  <p className={styles['item-title']}>169 827+</p>
                  <span className={styles['item-subtitle']}>Satisfied Users</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}