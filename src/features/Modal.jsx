import React from 'react'
import ReactDom from 'react-dom'
import { useRef, useEffect } from 'react'

import './modal.scss'

  
const DefaultModal = () => {
  const DEFAULT_MODAL_STYLE = {
    color: 'white', 
    padding: '1rem'
  }

  return <div style={DEFAULT_MODAL_STYLE}>DefaultModal</div>
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