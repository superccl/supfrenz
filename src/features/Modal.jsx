import React from 'react'
import ReactDom from 'react-dom'
import { useRef, useEffect } from 'react'

import './modal.scss'

const DefaultModal = () => {
  return <div style={{background: 'rgba(0, 0, 0, 0.75)', color: 'white', padding: '1rem'}}>DefaultModal</div>
}
const Modal = ( { ModalElement=DefaultModal, open, onClose, position='center' }) => {
  const overlayRef = useRef()

  if(!open) return null;
  return ReactDom.createPortal(
    <div className="overlay-container" ref={overlayRef} onClick={onClose}>
      <div className={`overlay-container__wrap ${position}`} onClick={e => e.stopPropagation()}>
        {<ModalElement />}
      </div>
    </div>
    , document.getElementById('portal')
  )
}
export default Modal