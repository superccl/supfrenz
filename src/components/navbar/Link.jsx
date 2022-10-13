import React from 'react'
import './link.scss'
import Social from '../../features/Social'
const Link = ( {visible=false, onClose} ) => {
  return (
    <div className={`navbar-container__links ${visible && 'visible'}`}>
        <button className="navbar-container__links__cancel" onClick={onClose}>&times;</button>
        <div className="navbar-container__links__pages">
          <a href="#" className="navbar-container__links__pages__item">Claim</a>
          <a href="#about" className="navbar-container__links__pages__item">About</a>
          <a href="#roadmap" className="navbar-container__links__pages__item">Roadmap</a>
          <a href="#team" className="navbar-container__links__pages__item">Team</a>
          <a href="#gallery" className="navbar-container__links__pages__item">Gallery</a>
        </div>
        <Social className="navbar-container__links__socials"/>
        <div className="navbar-container__links__actions">
          <a href="#" className="navbar-container__links__actions__item">EA Pass</a>
          <a href="#" className="navbar-container__links__actions__item">Dashboard</a>
        </div>
      </div>     
  )
}

export default Link