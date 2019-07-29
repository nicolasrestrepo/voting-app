import classNames from 'classnames'
import React, { useState } from 'react'
import styles from './styles.module.scss'

// icons
import closeIcon from '../assets/close.svg'
import faceebookIcon from '../assets/facebook.png'
import hambugerMenu from '../assets/hamburgermenu.png'
import searchIcon from '../assets/search.svg'
import thumbsDown from '../assets/thumbsDown.svg'
import thumbsUp from '../assets/thumbsUp.svg'
import twitterIcon from '../assets/twitter.png'
import wikiIcon from '../assets/wiki.png'

// components
import Card from './components/card'
import Drawer from './components/drawer'

const cx = classNames.bind(styles)

const Layout: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  return (
    <div className={styles.container}>
      <Drawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
      {/* *********** HERO SECTION **************** */}
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
            onClick={() => setOpenDrawer(!openDrawer)}
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
      {/* *********** END HERO SECTION **************** */}

      {/* *********** INFO SECTION **************** */}
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
      {/* *********** END INFO SECTION **************** */}

      {/* *********** PREVIUS RULINGS SECTION **************** */}
      <section className={styles.previusRulings}>
        <div className={styles.content}>
          <div className={styles.title}>
            <span>Previous Rulings</span>
          </div>
          <div className={styles.cards}>
            <Card
              img='https://firebasestorage.googleapis.com/v0/b/test-notifications-11bd4.appspot.com/o/kanye.png?alt=media&token=ef8b854a-0223-456e-83d9-9f8daee750c0'
              name='Kanye West'
              percentageUp={64}
              category='Entertainment'
              desciption='Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
            />

            <Card
              img='https://firebasestorage.googleapis.com/v0/b/test-notifications-11bd4.appspot.com/o/mark.png?alt=media&token=56dd3b30-b7c0-49f5-9c01-041367328ffd'
              name='Mark Zuckerberg'
              percentageUp={36}
              category='Entertainment'
              desciption='Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
            />

            <Card
              img='https://firebasestorage.googleapis.com/v0/b/test-notifications-11bd4.appspot.com/o/cristina.png?alt=media&token=3be02703-322f-425a-bc3b-a87b9c1ac4f1'
              name='Cristina Fernández de Kirchner'
              percentageUp={36}
              centerImage
              category='Entertainment'
              desciption='Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
            />

            <Card
              img='https://firebasestorage.googleapis.com/v0/b/test-notifications-11bd4.appspot.com/o/malala.png?alt=media&token=7e6dd3d6-e9b6-4e8d-8d62-a42450a148b0'
              name='Malala Yousafzai'
              percentageUp={64}
              category='Entertainment'
              desciption='Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
            />
          </div>
        </div>
      </section>
      {/* *********** END PREVIUS RULINGS SECTION **************** */}

      {/* *********** ANYONE INFO SECTION **************** */}
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
      {/* *********** END ANYONE INFO SECTION **************** */}

      {/* *********** FOOTER SECTION **************** */}
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
      {/* *********** FOOTER SECTION **************** */}

    </div>

  )
}

export default Layout
