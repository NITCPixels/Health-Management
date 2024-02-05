import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
import hero from '../../../public/images/doctornurse-svgrepo-com.svg'
import whatsapp from '../../../public/images/whatsapp-svgrepo-com.svg'

function HomePage() {
  return (
    <div>
        <Image src={whatsapp} className={styles['whatsapp-icon']}/>
        <button className={styles['emergency-button']}>Emergency</button>
        <div className={styles['hero-section-and-cards']}>
        <div className={styles['hero-section']}>
          <div className={styles['hero-text-section']}>
            <h1 className={styles['hero-text']}>FIND PERFECT LIFE</h1>
            <h1 className={styles['hero-text']}>WITH GOOD HEALTH</h1>
            </div><Image src={hero} className={styles['hero-img']}/>
        </div>
        <div className={styles['cards']}>
            <div className={styles['card']}>
              ADD PRISCRIPTION
              <button> Take A Photo </button>
            </div>
            <div className={styles['card']}></div>
            <div className={styles['card']}></div>
        </div>
        </div>
    </div>
  )
}

export default HomePage