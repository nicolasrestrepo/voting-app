import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import ReactDom from 'react-dom'
import styles from './styles.module.scss'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

interface IProps {
  firstModalVisible: boolean
  title: string
  onClose: () => void
  text: string
  buttonText: string
}

const CustomModal = ({ title, firstModalVisible, onClose, text, buttonText }: IProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const closeModal = () => {
    onClose()
    setModalVisible(false)
  }

  useEffect(() => {
    setModalVisible(firstModalVisible)
  }, [firstModalVisible])

  // the modal must be in other element of the principal root
  return ReactDom.createPortal(
    <div>
      <Modal
        isOpen={modalVisible}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Cool.'
      >
        <div className={styles.modalContent}>
          <div>
            <h2>{title}</h2>
          </div>
          <div className={styles.content}>
            <p>{text}</p>
          </div>
          <div className={styles.options}>
            <button onClick={onClose}>
              {buttonText}
            </button>
          </div>
        </div>
      </Modal>
    </div>,
    // @ts-ignore
    document.getElementById('modal')
  );
}

export default CustomModal
