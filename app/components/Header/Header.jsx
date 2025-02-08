'use client'
import styles from './Header.module.scss'
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

export const Header = ()=>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [logo, setLogo] = useState('/logo.svg');
  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 768) {
        setLogo("/logo-orange.svg");
      } else {
        setLogo("/logo.svg");
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
           <ul>
             <li><Link onClick={menuHandler} href={'/about'}>About us</Link></li>
             <li><Link onClick={menuHandler} href={'/contact'}>Contact Us</Link></li>
             <li>FAQ</li>
             <li>Business Presentation</li>
             <li>Is SkinPlace Legit</li>
             <li>What Is SkinPlace</li>
             <li><Link onClick={menuHandler} href={'/sell'}>Sell CS2 Skins</Link></li>
             <li>Sell Dota 2 Skins</li>
             <li>Sell Rust Skins</li>
           </ul>
           <div className={styles['dropdowns-container']}>
             <button className={styles['dropdown']}>
               <span>En</span>
               <Image src={'/menu-down.svg'} alt={'Change language'} width={24} height={24}/>
             </button>
             <button className={styles['dropdown']}>
               <span>USD</span>
               <Image src={'/menu-down.svg'} alt={'Change language'} width={24} height={24}/>
             </button>
           </div>
         </div>
     )}

     <div className={styles['container']}>
       <div className={styles['logo-container']}>
         <Link onClick={closeModal} href={'/'}>
           <Image className={styles['logo']} src={logo} alt={'skinplace'} height={33} width={512}/>
         </Link>
         <button>
           <Link href={'/sell'}>
             <Image src={'/bolt.svg'} alt={'sell skins'} width={24} height={24}/>
             <span>Sell skins</span>
           </Link>
         </button>
       </div>
       <nav>
         <Link href="/about">
           <Image src={'/logo-gray.svg'} alt={'About Us'} width={22} height={22}/>
           About Us
         </Link>
         <Link href="/faq">
           <Image src={'/question-gray.svg'} alt={'FAQ'} width={22} height={22}/>
           FAQ
         </Link>
         <Link href="/contact">
           <Image src={'/text-gray.svg'} alt={'Contact Us'} width={22} height={22}/>
            Contact Us
          </Link>
          <button className={styles['dropdown']}>
            <span>En</span>
            <Image src={'/menu-down.svg'} alt={'Change language'} width={24} height={24}/>
          </button>
          <button className={styles['dropdown']}>
            <span>USD</span>
            <Image src={'/menu-down.svg'} alt={'Change language'} width={24} height={24}/>
          </button>
          <button className={styles['reg-button']}>
            <Image src={'/steam.svg'} alt={'Register via Steam'} width={24} height={24}/>
            <span>Register via Steam</span>
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