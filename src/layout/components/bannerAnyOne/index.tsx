import React from 'react'
import styles from './styles.module.scss'

const BannerAnyOne = () => {
  return (
    <section className={styles.anyoneInfo}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <span className={styles.text}>
            Is there anyone else you would want us to add?
            </span>
          <button>
            Submit a Name
            </button>
        </div>
      </div>
    </section>
  )
}

export default BannerAnyOne
