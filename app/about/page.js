import styles from './page.module.scss'
import Image from "next/image";
import Link from "next/link";


export default function About(){
  return (
      <main className={styles['main']}>
        <div className={styles['header']}>
          <Image src={'/x2.svg'} alt={'PriceX2 logo'} width={40} height={40} />
          About us
        </div>
        <div className={styles['priceX2']}>
          <h1>Everything about <span className={'text-[var(--primary)]'}>PriceX2 </span>- Who we are and what we offer?</h1>
          <p>We are a community of passionate gamers who understand the value of your CS2, Rust, and Dota 2 skins. Our journey began with a simple mission: to create a secure, instant, transparent, and efficient way for gamers to sell their skins for real money.</p>
        </div>
        <p className={styles['process']}>We've fine-tuned our process to make selling your skins as straight forward and fast as possible.</p>
        <div className={styles['benefits']}>
          <h1><span className={'text-[var(--primary)]'}>Why</span> PriceX2?</h1>
          <div className={styles['container']}>
            <div className={styles['item']}>
              <div className={styles['title-container']}>
                <Image src={'/commission.svg'} alt={'benefit icon'} width={32} height={32}/>
                <h2>Low Commission</h2>
              </div>
              <p>We provide ourselves on transparent commissions, Time is valuable, and with our instant payout system,
                we've designed a way to put cash in your hand without delay.</p>
            </div>
            <div className={styles['item']}>
              <div className={styles['title-container']}>
                <Image src={'/shield-100.svg'} alt={'benefit icon'} width={32} height={32}/>
                <h2>Safety</h2>
              </div>
              <p>Your safety is our priority, and our robust security measures are a testimony to our commitment, to guaranteeing 100% safe transactions that you can trust.</p>
            </div>
            <div className={styles['item']}>
              <div className={styles['title-container']}>
                <Image src={'/gift.svg'} alt={'benefit icon'} width={32} height={32}/>
                <h2>Bonuses</h2>
              </div>
              <p>We invite you to engage partake in special bonuses, and promotions, and discover a space that celebrates gaming as much as you do.</p>
            </div>
          </div>
        </div>
        <div className={styles['mission']}>
          <h1><span className={'text-[var(--primary)]'}>Our Mission & </span>&nbsp;Vision</h1>
          <p>Our mission is to empower gamers to turn their digital assets into real-world value. We envision a world where selling your skins is as easy as buying them, and we are constantly innovating to make this vision a reality.</p>
        </div>
        <div className={styles['trust']}>
          <h1><span className={'text-[var(--primary)]'}>Your Trust is </span> Our Success</h1>
          <p>We strive every day to earn and retain your trust. Join the PriceX2 community today and experience the hassle-free, secure way to sell your gaming skins.</p>
          <div className={styles['button-container']}>
            <button><span><Link href={'/sell'}>Start Selling Now</Link></span></button>
          </div>
        </div>
      </main>
  )
}