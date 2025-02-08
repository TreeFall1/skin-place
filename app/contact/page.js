import styles from './page.module.scss';
import Image from "next/image";


export default function Contact(){
  return (
      <main className={styles['main']}>
        <div className={styles['header']}>
          <div className={styles['title']}>
            <Image src={'/text-gray.svg'} alt={'Contact us'} width={40} height={40} />
            <h1>Contact us</h1>
          </div>
          <p>SkinPlace contacts - Contact us just now!</p>
        </div>
        <div className={styles['form']}>
          <h2 className={styles['form-title']}>Leave your Feedback and Suggestions</h2>
          <div className={styles['inputs']}>
            <input placeholder={'Your name'} type="text"/>
            <input placeholder={'Your email'} type="text"/>
            <textarea placeholder={'Type your feedback'} />
          </div>
          <div className={styles['buttons']}>
            <button>Save</button>
          </div>
          <div className={styles['email-block']}>
            <p>For all your general inquiries and support needs</p>
            <p>support@skin.place</p>
          </div>
          <div className={styles['divider']}></div>
          <div className={styles['socials']}>
            <h2>Our Socials</h2>
            <ul>
              <li><a href="https://discord.gg/drmaQXmnnT" target="_blank"><Image src="/discord.svg" alt="socials" width={24} height={24}/></a></li>
              <li><a href="https://t.me/+gNsCctWgpi1lY2M0" target="_blank"><Image src="/telegram.svg" alt="socials" width={18} height={18}/></a></li>
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
      </main>
  )
}