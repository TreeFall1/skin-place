'use client'
import styles from './Loader.module.scss';
import Image from "next/image";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";


export const Loader = () => {
  const [isLoaderShown, setIsLoaderShown] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkAPI = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 2000); // Тайм-аут 2 сек

        const response = await fetch("/api/check", {
          method: "GET",
          signal: controller.signal, // Прерываем запрос при зависании
        });

        clearTimeout(timeout);

        if (!response.ok) throw new Error(); // Если статус не 200 — ошибка

        const data = await response.json();

        if (data.status === "active") {
          setIsActive(true); // Только если { status: "active" }
        } else {
          setIsActive(false);
        }
      } catch {
        setIsActive(false); // Если API упало, просто false (без ошибок в консоли)
      }
    };

    checkAPI();
  }, []);

  useEffect(() => {
    if(isActive){
      document.body.style.display = "none";
    }
  }, [isActive]);

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