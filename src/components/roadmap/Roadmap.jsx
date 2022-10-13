import React from 'react'
import './roadmap.scss'
import Modal from '../../features/Modal'
import useToggle from '../../hooks/useToggle'


const Roadmap = () => {
  const [openModal, setOpenModal] = useToggle(true)
  return (
    <div id="roadmap" className="roadmap-container">Roadmap
      <button className="roadmap-container__button">
        <span className="roadmap-container__button__span" />
      </button>
      <button className="roadmap-container__button">
        <span className="roadmap-container__button__span" />
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default Roadmap