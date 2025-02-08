import styles from './Footer.module.scss'
import Image from "next/image";
import Link from "next/link";
import {drops} from "@/app/tools/tools";


export const Footer = () => {
  return (
      <footer className={styles['footer']}>
        <div className={styles['footer-container']}>
          <div className={styles['content']}>
            <div className={styles['logo-container']}>
              <Link href={'/'}>
                <Image src={'/logo.svg'} alt={'Skinplace'} width={303} height={60} />
              </Link>
              <div className={styles['letter-container']}>
                <h3 className={styles['title']}>Sign in for our Newsletter</h3>
                <p className={styles['subtitle']}>Want to get more special offers? Leave your email!</p>
                <div className={styles['input-container']}>
                  <input placeholder={'E-mail'} type="text"/>
                  <button>Send</button>
                </div>
              </div>
            </div>
            <div className={styles['info-block']}>
              <div className={styles['drops-line']}>
                <section className={styles['drop-bar']}>
                  <div className={styles['container']}>
                    <div className={styles['stats-container']}>
                      <p>Total deals</p>
                      <span className={styles['stats']}><div
                          className={`animate-pulse ${styles['anim']}`}/><p>56 880</p></span>
                    </div>
                    <div className={styles['drops-container']}>
                      {drops.map((item, i) => {
                        return (
                            <div style={{borderTopColor: item.color}} key={item.title} className={styles['drop']}>
                              <Image src={`/illustrations/drop${i + 1}.png`} alt={'drop'} width={60} height={60}/>
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
              </div>
              <div className={styles['link-container']}>
                <div className={styles['site-links']}>
                  <ul>
                    <li>Service</li>
                    <li><a href={'/sell'}>Sell Skins</a></li>
                    <li>Bonus System</li>
                    <li>Referral Program</li>
                    <li>Sell CS2 Skins</li>
                    <li>Sell Dota 2 Skins</li>
                    <li>Sell Rust Skins</li>
                  </ul>
                  <ul>
                    <li>Product</li>
                    <li>Business Presentation</li>
                    <li>FAQ</li>
                    <li><a href={'/about'}>About Us</a></li>
                    <li><a href={'/contact'}>Contact Us</a></li>
                    <li>Is SkinPlace Legit</li>
                    <li>What is SkinPlace</li>
                  </ul>
                </div>
                <div className={styles['socials']}>
                  <a target={'_blank'} href={'https://www.trustpilot.com/review/skin.place?utm_medium=trustbox&utm_source=Mini'}>
                    <Image src={'/trustpilot-footer.png'} alt={'TrustPilot'} width={164} height={80} />
                  </a>
                  <div className={styles['mail']}>
                    <Image src={'/chat-processing-headset.svg'} alt={'tech support'} width={36} height={36}/>
                    <div className={styles['text']}>
                      <p className={styles['tech-title']}>support@skin.place</p>
                      <p className={styles['tech-subtitle']}>Technical support</p>
                    </div>
                  </div>
                  <div className={styles['media-links']}>
                    <ul>
                      <li><a href="https://discord.gg/drmaQXmnnT" target="_blank"><Image src="/discord.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="https://t.me/+gNsCctWgpi1lY2M0" target="_blank"><Image src="/telegram.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="https://www.instagram.com/skinplaceoff/" target="_blank"><Image src="/instagram.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="https://x.com/SkinPlaceOff" target="_blank"><Image src="/x.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="https://www.tiktok.com/@skinplace8?_t=ZM-8tDx6N55EhR&_r=1" target="_blank"><Image src="/tiktok.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="https://www.youtube.com/@SkinPlaceOfficial" target="_blank"><Image src="/youtube.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="https://www.facebook.com/people/Skin-Place/61550289076454/" target="_blank"><Image src="/facebook.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="https://www.trustpilot.com/review/skin.place" target="_blank"><Image src="/trustpilot.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="https://www.reddit.com/r/Skin_Place" target="_blank"><Image src={"/reddit.svg"} alt="socials" width={24} height={24}/></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          <div className={styles['bottom-container']}>
            <p>© SkinPlace. All rights reserved. Look our
              Terms of Service |
              Api docs |
              Privacy policy</p>
            <p>Best trading service. Get your cash instantly</p>
          </div>
        </div>
      </footer>
  )
}