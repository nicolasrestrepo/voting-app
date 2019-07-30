import React from 'react'
import styles from './style.module.scss'
import twitterIcon from '../../../assets/twitter.png'
import faceebookIcon from '../../../assets/facebook.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.links}>
          <a href='#'>
            Terms and Conditions
            </a>
          <a href='#'>
            Privacy Policy
            </a>
          <a href='#'>
            Contact Us
            </a>
        </div>
        <div className={styles.followUs}>
          <span>Folow Us</span>
          <a href='#'>
            <img src={faceebookIcon} alt='facebook link' width={15} />
          </a>
          <a href='#'>
            <img src={twitterIcon} alt='tiwtter link' width={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

