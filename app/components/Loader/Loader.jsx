'use client'
import styles from './Loader.module.scss';
import Image from "next/image";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";


export const Loader = () => {
  const [isLoaderShown, setIsLoaderShown] = useState(true);

  useEffect(() => {
    const state = sessionStorage.getItem("loaderState");

    if (state === "false") {
      setIsLoaderShown(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoaderShown(false);
        sessionStorage.setItem("loaderState", "false");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);
  return (
      <>
        {isLoaderShown && (
            <div className={styles['page-loader']}>
              <Image className={'animate-pulse'} src={'/new-logo.png'} alt={'PriceX2'} width={512} height={512}/>
            </div>
        )}
      </>
  )
}