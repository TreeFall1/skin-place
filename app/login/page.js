import styles from './page.module.scss'
import Image from "next/image";
import Link from "next/link";


export default function Login(){
  return (
      <main className={styles['main']}>
        <section className={styles['user-inventory']}>
          <div className={styles['container']}>
            <div className={styles['title']}>
              <h2>
                <span>Rate Your </span>
                <Image src={'/steam-round.svg'} alt={'Steam'} width={44} height={44}/>
                <span className={'text-[#b1f98f]'}>Steam Inventory</span>
                <span>and sell </span>
                <Image src={'/ticket.svg'} alt={'ticket'} width={44} height={44}/>
                <span className={'text-[#b1f98f]'}>with low fee</span>
              </h2>
            </div>
            <div className={styles['body']}>
              <div className={styles['container']}>
                <div className={styles['block']}>
                  <div className={styles['header']}>
                    <p className={styles['title']}>Login</p>
                    <p className={styles['subtitle']}>And rate your Steam Inventory right now!</p>
                  </div>
                  <div className={styles['input']}>
                    <div className={styles['button-container']}>
                      <button className={styles['reg-button']}>
                        <Link href="/login">
                          <Image src={'/steam.svg'} alt={'Register via Steam'} width={24} height={24}/>
                          <span>Register via Steam</span>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}