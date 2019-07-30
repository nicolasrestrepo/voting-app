import classNames from 'classnames'
import React, { useState, useEffect, useCallback, memo, Dispatch } from 'react'
import thumbsDown from '../../../../../assets/thumbsDown.svg'
import thumbsUp from '../../../../../assets/thumbsUp.svg'
import styles from './styles.module.scss'
import { patch } from '../../../../../utils/request'

const cx = classNames.bind(styles)

interface IProps {
  _id?: string
  photo: string
  percentageUp: number
  name: string
  description: string
  category: string
  centerImage?: boolean
  timePublished: string
  setModalVisibility: Dispatch<React.SetStateAction<boolean>>
}

const Card = ({
  photo,
  percentageUp,
  name,
  description,
  category,
  centerImage,
  timePublished,
  _id,
  setModalVisibility }: IProps) => {

  const [calcPercentageUp, setCalcPercentageUp] = useState<number>(percentageUp)
  const [percentageDown, setPercentageDown] = useState<number>(0)
  const [isThumbsUp, setIsThumbsUp] = useState<boolean>(false)


  useEffect(() => {
    const calcPercentageDown = 100 - calcPercentageUp
    setPercentageDown(calcPercentageDown)

    const caclIsThumbsUp = calcPercentageUp >= 50
    setIsThumbsUp(caclIsThumbsUp)
    if (calcPercentageUp !== percentageUp) {
      handleSendData()
    }
  }, [calcPercentageUp])

  // this function use for change data in api
  const handleSendData = async () => {
    try {
      await patch(`/candidates/${_id}`, {
        percentageUp: calcPercentageUp,
      })
      setModalVisibility(true)
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleSetPercentage = useCallback(
    (value) => {
      setCalcPercentageUp(value)
    },
    [],
  )

  return (
    <div
      className={styles.card}
    // style={{ backgroundImage: `url(${photo})` }}
    >
      <img
        className={cx([styles.cover, centerImage && styles.translate])}
        src={photo}
      />
      <div className={styles.title}>
        <span className={cx(styles.thumbsItem, isThumbsUp ? styles.up : styles.down)}>
          <img
            src={isThumbsUp ? thumbsUp : thumbsDown}
            className={styles.icon}
          />
        </span>
        <h1>{name}</h1>
      </div>

      <p className={styles.description}>
        {description}
      </p>

      {/* Full Report Button */}
      <div className={styles.report}>
        <button>
          View Full Report
        </button>
        <div className={styles.time}>
          <strong>
            {timePublished} ago
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
          style={{ width: `${calcPercentageUp}%` }}
          className={cx([styles.up, styles.itemPercentage])}
        >
          <div className={styles.wrappNumber}>
            <button onClick={() => handleSetPercentage(calcPercentageUp + 1)}>
              <img
                src={thumbsUp}
                className={styles.icon} />
            </button>
            <span className={styles.value}>{calcPercentageUp}%</span>
          </div>

        </div>
        <div
          style={{ width: `${percentageDown}%` }}
          className={cx([styles.down, styles.itemPercentage])}>
          <div className={styles.wrappNumber}>
            <span className={styles.value}>{percentageDown}%</span>
            <button onClick={() => handleSetPercentage(calcPercentageUp - 1)}>
              <img
                src={thumbsDown}
                className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
      {/* Percentage */}
    </div>
  )
}

export default memo(Card)
