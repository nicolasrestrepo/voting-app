import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { MetroSpinner } from "react-spinners-kit"
import Modal from '../commons/modal'
// components 
import Card from './components/card'

// utils 
import { get } from '../../../utils/request'

interface ICandidate {
  _id: string
  name: string
  photo: string
  percentageUp: number,
  category: string,
  description: string,
  timePublished: string,
}

const PreviusRulings = () => {

  const [candidates, setCandidates] = useState<ICandidate[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [modalVisible, setModalVisibility] = useState<boolean>(false)

  const getCandidates = async () => {
    try {
      setLoading(true)
      const { data } = await get('/candidates')
      setCandidates(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log('error', error)
    }
  }

  useEffect(() => {
    getCandidates()
  }, [])



  const handleOnCloseModal = () => {
    setModalVisibility(false)
  }

  return (
    < section className={styles.previusRulings} >
      <div className={styles.content}>
        <div className={styles.title}>
          <span>Previous Rulings</span>
        </div>
        {loading ? <div className={styles.loading}>
          <MetroSpinner
            size={70}
            color="#686769"
            loading={loading}
          />
          <h3>Loading....</h3>
        </div> :
          <div className={styles.cards}>
            {candidates.map((candidate: ICandidate) => <Card key={candidate._id} setModalVisibility={setModalVisibility} {...candidate} />)}
          </div>
        }
      </div>
      <Modal
        text='Thank you for voting!'
        buttonText='Voting again'
        firstModalVisible={modalVisible}
        title='Cool.'
        onClose={handleOnCloseModal}
      />
    </section >

  )
}

export default PreviusRulings



