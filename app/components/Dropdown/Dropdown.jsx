'use client'
import styles from './Dropdown.module.scss'
import Image from "next/image";
import PlusIcon from '@/public/plus.svg'
import MinusIcon from '@/public/minus.svg'
import {useState, useRef} from "react";

export const Dropdown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null); // Храним ссылку на <p>

  const dropdownHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
      <div onClick={dropdownHandler} className={styles['dropdown']}>
        <div className={styles['title-container']}>
          <h3 style={{color: isActive ? '#FAFAFA': '#78818f'}}>{props.title}</h3>
          <div className={styles['img-container']}>
            <Image
                src={isActive ? MinusIcon : PlusIcon}
                alt={isActive ? 'Hide answer' : 'Show answer'}
                width={22}
                height={22}
            />
          </div>
        </div>
        <p
            ref={contentRef}
            className={`${styles['active-answer']} ${isActive ? styles['active'] : ''}`}
            style={{ maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : '0' }}
        >
          {props.answer}
        </p>
      </div>
  );
};
