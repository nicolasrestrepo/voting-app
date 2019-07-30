import React from 'react'
import styles from './styles.module.scss'
// icons
import closeIcon from '../../../assets/close.svg'

const Info = () => {
  return (
    <section className={styles.info}>

      <div className={styles.alert}>
        <div className={styles.title}>
          <span>Speak out. Be heard. </span>
          <h1>Be counted</h1>
        </div>
        <p>
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely.
          It’s easy: You share your opinion, we analyze and put the data in a public report.
          </p>
        <button className={styles.close}>
          <img
            src={closeIcon}
            width={15}
          />
        </button>
      </div>

    </section>
  )
}

export default Info
