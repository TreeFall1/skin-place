'use client'
import styles from './Header.module.scss'
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import LanguageChanger from "@/app/components/LanguageChanger";

export const Header = ()=>{
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logo, setLogo] = useState('/new-logo2.png');


  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 768) {
        setLogo("/new-logo2.png");
      } else {
        setLogo("/new-logo2.png");
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, []);


  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const menuHandler = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  const closeModal = ()=>{
    setIsMenuOpen(false);
  }



  return(
   <header className={styles['header']}>
     {isMenuOpen && (
         <div className={styles['mobile-menu']}>
           <div className="">
             <ul>
               <li><Link onClick={menuHandler} href={'/about'}><Image src={'/x2.svg'} alt={'About Us'} width={22} height={22}/>{t('aboutUs')}</Link></li>
               <li><Link onClick={menuHandler} href={'/contact'}><Image src={'/text-gray.svg'} alt={'Contact Us'} width={22} height={22}/>{t('contactUs')}</Link></li>
               <li><Link onClick={menuHandler} href={'/faq'}><Image src={'/question-gray.svg'} alt={'FAQ'} width={22} height={22}/>{t('faq')}</Link></li>
               <li><Link onClick={menuHandler} href={'/market'}><Image src={'/karambit.svg'} alt={'Buy skins'} width={22} height={22} /> {t('market:header')}</Link></li>
               <li><Link onClick={menuHandler} href={'/login'}><Image src={'/commission.svg'} alt={'Check prices'} width={22} height={22}/>{t('headerCheckBtn')}</Link></li>
               <li><Image src={'/checked_list.svg'} alt={'Business'} width={22} height={22}/>{t('headerBusiness')}</li>
               <li><Image src={'/shield-100.svg'} alt={'Legit'} width={22} height={22}/>{t('headerLegit')}</li>
               <li><Image src={'/karambit.svg'} alt={'What is PriceX2'} width={22} height={22}/>{t('headerWhatIs')}</li>
               <li><Link onClick={menuHandler} href={'/sell'}><Image src={'/csgo-outline.svg'} alt={'Sell CS2 Skins'} width={22} height={22}/>{t('headerCS')}</Link></li>
               <li><Image src={'/dota2-outline.svg'} alt={'Sell dota2 skins'} width={22} height={22}/>{t('headerDota')}</li>
               <li><Image src={'/rust-outline.svg'} alt={'Sell rust skins'} width={22} height={22}/>{t('headerRust')}</li>
             </ul>
             <div className={styles['dropdowns-container']}>
               <LanguageChanger />
               <button className={styles['dropdown']}>
                 <span className={styles['current-el']}>
                   <span>USD</span>
                   <Image src={'/menu-down.svg'} alt={'Change language'} width={24} height={24}/>
                 </span>
               </button>
             </div>
           </div>
           <div className="">
             <div className={styles['media-links']}>
              <ul>
                <li><a href="#"><Image src="/discord.svg" alt="socials" width={24} height={24}/></a></li>
                <li><a href="#"><Image src="/telegram.svg" alt="socials" width={24} height={24}/></a></li>
                <li><a href="#"><Image src="/instagram.svg" alt="socials" width={24} height={24}/></a></li>
                <li><a href="#"><Image src="/x.svg" alt="socials" width={24} height={24}/></a></li>
                <li><a href="#"><Image src="/tiktok.svg" alt="socials" width={24} height={24}/></a></li>
                <li><a href="#"><Image src="/youtube.svg" alt="socials" width={24} height={24}/></a></li>
                <li><a href="#"><Image src="/facebook.svg" alt="socials" width={24} height={24}/></a></li>
                <li><a href="#"><Image src="/trustpilot.svg" alt="socials" width={24} height={24}/></a></li>
                <li><a href="#"><Image src={"/reddit.svg"} alt="socials" width={24} height={24}/></a></li>
              </ul>
            </div>
            <div className={styles['mobile-footer']}>
              <p>{t('headerRights')}</p>
              <p>{t('headerTerms')}</p>
              <p>{t('headerTitle')}</p>
            </div>
           </div>
         </div>
     )}

     <div className={styles['container']}>
       <div className={styles['logo-container']}>
         <Link onClick={closeModal} href={'/'}>
           <Image className={styles['logo']} src={logo} alt={'PriceX2'} height={256} width={256}/>
         </Link>
         <button>
           <Link href={'/sell'}>
             <Image src={'/bolt.svg'} alt={'sell skins'} width={24} height={24}/>
             <span>{t('headerSellBtn')}</span>
           </Link>
         </button>
         <button>
           <Link href={'/login'} className={styles['sell-button']}><Image src={'/commission.svg'} alt={'Check prices'} width={24} height={24} /> {t('headerCheckBtn')}</Link>
         </button>
         <button>
           <Link href={'/market'}><Image src={'/karambit.svg'} alt={'Buy skins'} width={24} height={24} /> {t('market:header')}</Link>
         </button>
       </div>
       <nav>
         <Link href="/about">
           <Image src={'/x2.svg'} alt={'About Us'} width={22} height={22}/>
           {t('aboutUs')}
         </Link>
         <Link href="/faq">
           <Image src={'/question-gray.svg'} alt={'FAQ'} width={22} height={22}/>
           {t('faq')}
         </Link>
         <Link href="/contact">
           <Image src={'/text-gray.svg'} alt={'Contact Us'} width={22} height={22}/>
           {t('contactUs')}
          </Link>
         <LanguageChanger />
         <button className={styles['dropdown']}>
            <span className={styles['current']}>
              <span>USD</span>
              <Image src={'/menu-down.svg'} alt={'Change currency'} width={24} height={24}/>
            </span>
         </button>
         <button className={styles['reg-button']}>
           <Link href="https://pricex2.it.com">
             <Image src={'/steam.svg'} alt={'Register via Steam'} width={24} height={24}/>
              <span>{t('headerRegBtn')}</span>
            </Link>
          </button>
         {isMenuOpen ? (
             <Image onClick={menuHandler} className={styles['close-menu']} src={'/plus.svg'} alt={'Close menu'} width={32} height={32}/>
         ) : (
           <button onClick={menuHandler} className={styles['header-menu-btn']}>
             <div></div>
             <div></div>
             <div></div>
           </button>
         )}
       </nav>
     </div>
   </header>
  )
}