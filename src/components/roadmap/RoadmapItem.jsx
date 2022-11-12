import React from 'react'
import Modal from '../../features/Modal'
import useToggle from '../../hooks/useToggle'
import './roadmapitem.scss'

const RoadmapItem = ( {title, body, style} ) => {
    const [openModal, setOpenModal] = useToggle(false)
    return (
        <>
            <button className="roadmap-container__button" onClick={() => setOpenModal(true)} style={style}>
                <span className="roadmap-container__button__span" />
            </button>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <div className="p-4 flex flex-col align-middle min-w-[20rem]">
                    <h1 className="my-8 text-center">{title}</h1>
                    <div className="my-4">{body}</div>
                </div>  
            </Modal>
        </>
    )
}

export default RoadmapItem