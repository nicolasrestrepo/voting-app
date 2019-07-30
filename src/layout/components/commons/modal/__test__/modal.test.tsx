import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

jest.mock('react-dom', () => {
  return {
    ...jest.requireActual('react-dom'),
    createPortal: (element: React.ElementType, target: any) => {
      return element;
    }
  };
});

describe('<Modal />', () => {
  test('should be render when send prop firstModalVisible in true', () => {

    const handleOnClose = jest.fn()

    const { getByText } = render(

      <Modal
        text='Thank you for voting!'
        buttonText='Voting again'
        firstModalVisible={true}
        title='Cool.'
        onClose={handleOnClose}
      />
    )
    expect(getByText('Thank you for voting!')).toBeInTheDocument()
  })
})

