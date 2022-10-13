import React from 'react'
import Modal from '../../features/Modal'
import useToggle from '../../hooks/useToggle'
import './roadmapitem.scss'

const RoadmapItem = ( {title, body, style} ) => {
    const [openModal, setOpenModal] = useToggle(false)
    const ModalContent = () => {
        return (
            <div className="roadmap-container__modal-wrap">
                <h1 className="roadmap-container__modal-wrap__title">{title}</h1>
                <div className="roadmap-container__modal-wrap__body">{body}</div>
            </div>
        )
    }
    return (
        <>
        <button className="roadmap-container__button" onClick={() => setOpenModal(true)} style={style}>
            <span className="roadmap-container__button__span" />
        </button>
        <Modal ModalElement={ModalContent} open={openModal} onClose={() => setOpenModal(false)}/>
        </>
    )
}

export default RoadmapItem