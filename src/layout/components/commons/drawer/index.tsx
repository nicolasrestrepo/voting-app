import classNames from 'classnames'
import React, { Dispatch } from 'react'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface IProps {
  openDrawer: boolean
  setOpenDrawer: Dispatch<React.SetStateAction<boolean>>
}

const Drawer = ({ openDrawer, setOpenDrawer }: IProps) => {

  const visibility = openDrawer ? styles.open : styles.close
  return (
    <div id='mySidenav' className={cx([styles.sidenav, visibility])}>
      <span className={styles.closebtn} onClick={() => setOpenDrawer(!openDrawer)}>&times;</span>
      <a href='#'>Past Trials</a>
      <a href='#'>How it Works</a>
      <a href='#'>Log In/Sign up</a>
    </div>
  )
}

export default Drawer
