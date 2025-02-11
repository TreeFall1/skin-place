import styles from './Footer.module.scss'
import Image from "next/image";
import Link from "next/link";
import {Drops} from "@/app/components/Drops/Drops";


export const Footer = () => {
  return (
      <footer className={styles['footer']}>
        <div className={styles['mobile-container']}>
          <Link href={'/sell'} className={styles['sell-button']}>
            <Image src={'/bolt-white.svg'} alt={'Sell skins'} width={30} height={30} />
          </Link>
          <ul>
            <li>
              <Link href={'/'}>
                <Image src={'/home.svg'} alt={'Home page'} width={30} height={30}/>
                <p>Home</p>
              </Link>
            </li>
            <li className={'pl-[10px]'}>
              <p>Sell Skins</p>
            </li>
            <li>
              <Link href={'/'}>
                <Image src={'/chat-processing-headset.svg'} alt={'Support'} width={30} height={30}/>
                <p>Support</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles['footer-container']}>
          <div className={styles['content']}>
            <div className={styles['logo-container']}>
              <Link href={'/'}>
                <Image src={'/new-logo.png'} alt={'PriceX2'} width={512} height={512} />
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
                <Drops styles={'footer'} />
              </div>
              <div className={styles['link-container']}>
                <div className={styles['site-links']}>
                  <ul>
                    <li>Service</li>
                    <li><Link href={'/sell'}>Sell Skins</Link></li>
                    <li>Bonus System</li>
                    <li>Referral Program</li>
                    <li>Sell CS2 Skins</li>
                    <li>Sell Dota 2 Skins</li>
                    <li>Sell Rust Skins</li>
                  </ul>
                  <ul>
                    <li>Product</li>
                    <li>Business Presentation</li>
                    <li><Link href={'/faq'}>FAQ</Link></li>
                    <li><Link href={'/about'}>About Us</Link></li>
                    <li><Link href={'/contact'}>Contact Us</Link></li>
                    <li>Is PriceX2 Legit</li>
                    <li>What is PriceX2</li>
                  </ul>
                </div>
                <div className={styles['socials']}>
                  <a target={'_blank'} href={'https://www.trustpilot.com/review/pricex2?utm_medium=trustbox&utm_source=Mini'}>
                    <Image src={'/trustpilot-footer.png'} alt={'TrustPilot'} width={164} height={80} />
                  </a>
                  <div className={styles['mail']}>
                    <Image src={'/chat-processing-headset.svg'} alt={'tech support'} width={36} height={36}/>
                    <div className={styles['text']}>
                      <p className={styles['tech-title']}>support@price.x2</p>
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
                      <li><a href="https://www.facebook.com/people/pricex2/61550289076454/" target="_blank"><Image src="/facebook.svg" alt="socials" width={24} height={24}/></a></li>
                      <li><a href="https://www.trustpilot.com/review/pricex2" target="_blank"><Image src="/trustpilot.svg" alt="socials" width={24} height={24}/></a></li>
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
            <p>© PriceX2. All rights reserved. Look our
              Terms of Service |
              Api docs |
              Privacy policy</p>
            <p>Best trading service. Get your cash instantly</p>
          </div>
        </div>
      </footer>
  )
}