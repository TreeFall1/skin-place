'use client'
import styles from './Header.module.scss'
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

export const Header = ()=>{
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

  return(
   <header className={styles['header']}>
      <div className={styles['container']}>
        <div className={styles['logo-container']}>
          <Link href={'/'}>
            <Image className={styles['logo']} src={logo} alt={'skinplace'} height={33} width={512} />
          </Link>
          <button>
            <Link href={'/sell'}>
              <Image src={'/bolt.svg'} alt={'sell skins'} width={24} height={24} />
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
        </nav>
      </div>
   </header>
  )
}