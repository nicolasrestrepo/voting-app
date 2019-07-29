import classNames from 'classnames'
import React from 'react'
import thumbsDown from '../../../assets/thumbsDown.svg'
import thumbsUp from '../../../assets/thumbsUp.svg'
import styles from './styles.module.scss'
const cx = classNames.bind(styles)

interface IProps {
  img: string
  percentageUp: number
  name: string
  desciption: string
  category: string
  centerImage?: boolean
}

const Card = ({ img, percentageUp, name, desciption, category, centerImage }: IProps) => {
  const percentageDown = 100 - percentageUp
  const isThumbsUp = percentageUp >= 50
  return (
    <div
      className={styles.card}
    // style={{ backgroundImage: `url(${img})` }}
    >
      <img
        className={cx([styles.cover, centerImage && styles.translate])}
        src={img}
      />
      <div className={styles.title}>
        <span className={cx(styles.thumbsItem, isThumbsUp ? styles.up : styles.down)}>
          <img
            src={isThumbsUp ? thumbsUp : thumbsDown}
            className={styles.icon} />
        </span>
        <h1>{name}</h1>
      </div>

      <p className={styles.description}>
        {desciption}
      </p>

      {/* Full Report Button */}
      <div className={styles.report}>
        <button>
          View Full Report
        </button>
        <div className={styles.time}>
          <strong>
            1 month ago
          </strong>
          <div>
            In {category}
          </div>
        </div>
      </div>

      {/* End Full Report Button */}

      {/* Percentage */}
      <div className={styles.percentage}>
        <div
          style={{ width: `${percentageUp}%` }}
          className={cx([styles.up, styles.itemPercentage])}
        >
          <div className={styles.wrappNumber}>
            <img
              src={thumbsUp}
              className={styles.icon} />
            <span className={styles.value}>{percentageUp}%</span>
          </div>

        </div>
        <span
          style={{ width: `${percentageDown}%` }}
          className={cx([styles.down, styles.itemPercentage])}>
          <div className={styles.wrappNumber}>
            <span className={styles.value}>{percentageDown}%</span>
            <img
              src={thumbsDown}
              className={styles.icon} />
          </div>
        </span>
      </div>
      {/* Percentage */}
    </div>
  )
}

export default Card
