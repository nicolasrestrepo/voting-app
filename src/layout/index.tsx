import classNames from 'classnames'
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

// components
import Drawer from './components/commons/drawer'

// sections
import Hero from './components/hero'
import PreviusRulings from './components/previusRulings'
import BannerAnyOne from './components/bannerAnyOne'
import Footer from './components/footer'
import Info from './components/info'

const cx = classNames.bind(styles)

const Layout: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  return (
    <div className={styles.container}>
      <Drawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
      <Hero
        setOpenDrawer={setOpenDrawer}
      />
      <Info />
      <PreviusRulings />
      <BannerAnyOne />
      <Footer />
    </div>

  )
}

export default Layout
