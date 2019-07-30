import React, { Dispatch } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
// assets 
import hambugerMenu from '../../../assets/hamburgermenu.png'
import searchIcon from '../../../assets/search.svg'
import thumbsDown from '../../../assets/thumbsDown.svg'
import thumbsUp from '../../../assets/thumbsUp.svg'
import wikiIcon from '../../../assets/wiki.png'

const cx = classNames.bind(styles)


interface IProps {
  setOpenDrawer: Dispatch<React.SetStateAction<boolean>>
}

const Hero = ({ setOpenDrawer }: IProps) => {
  return (
    <section
      className={styles.hero}
    >

      <img
        className={styles.cover}
        src='https://firebasestorage.googleapis.com/v0/b/test-notifications-11bd4.appspot.com/o/francisco.png?alt=media&token=2695eb7c-ec50-4d99-80fa-686c52a4900a'
        alt='cover image'
      />
      <nav>
        <button
          onClick={() => setOpenDrawer(true)}
          className={styles.openDrawer}>
          <img
            src={hambugerMenu}
            width={15}
          />
        </button>
        <span className={styles.title}>
          <h2>
            Rule of thumb.
            </h2>
        </span>
        <div className={styles.options}>
          <span>
            Past Trials
            </span>
          <span>
            How It Works
            </span>
          <span>
            Log In / Sign Up
            </span>
          <img
            src={searchIcon}
            className={styles.icon} />
        </div>
      </nav>

      <div className={styles.opinion}>
        <div className={styles.content}>
          <div className={styles.title}>
            <span>What's your opnion on</span>
            <h1>Pope Francis ?</h1>
          </div>
          <p>He’s talking tough on clergy sexual abuse,
            but is he just another papal pervert protector? (thumbs down)
              or a true pedophile punishing pontiff? (thumbs up) </p>
          <div className={styles.moreInfo}>
            <img src={wikiIcon} width='16' />
            <a href='#'>More information</a>
          </div>
          <span className={styles.question}>What’s Your Verdict?</span>
        </div>

        <div className={styles.voting}>
          <div
            className={cx([styles.up, styles.option])}
          >
            <img
              width={37}
              src={thumbsUp}
              className={styles.icon}
              alt='thumbs Up'

            />
          </div>
          <div
            className={cx([styles.down, styles.option])}>
            <img
              width={37}
              src={thumbsDown}
              className={styles.icon}
              alt='thumbs Down'
            />
          </div>
        </div>
      </div>

      <div className={styles.closing}>
        <div className={styles.text}>
          CLOSING IN
          </div>
        <div className={styles.days}>
          <strong>22</strong> days
          </div>

      </div>

    </section>
  )
}

export default Hero
