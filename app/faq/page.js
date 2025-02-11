import styles from './page.module.scss'
import Image from "next/image";
import {Dropdown} from "@/app/components/Dropdown/Dropdown";
import {faq} from "@/app/tools/tools";


export default function FAQ(){
  return(
      <main className={styles['main']}>
        <div className={styles['header']}>
          <h1><Image src={'/question-gray.svg'} alt={'FAQ'} width={40} height={40}/> FAQ</h1>
          <p>We have an answer for almost avery question</p>
        </div>
        <div className={styles['container']}>
          {faq.map((item) => {
            return(
                <Dropdown key={item.title} title={item.title} answer={item.answer} />
            )
          })}
        </div>
      </main>
  )
}