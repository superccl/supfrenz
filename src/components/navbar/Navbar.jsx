import { useEffect, useRef } from 'react'
import useToggle from "../../hooks/useToggle"
import './navbar.scss'
import { FaBars } from 'react-icons/fa'
import logo from '../../asset/44.webp'
import Social from '../../features/Social'

const Navbar = () => {
  const [showModal, toggleShowModal] = useToggle(false)
  const menuRef = useRef()

  function turnOff(e) {
    if (!menuRef.current.contains(e.target)) {
      toggleShowModal(false)
    }
    window.removeEventListener('click', turnOff, true)
  }

  useEffect(() => {
    if (window.innerWidth <= 1200 && !showModal){ 
      menuRef.current.style.display = 'none'
    } else if (window.innerWidth <= 1200 && showModal){
      menuRef.current.style.display = 'flex'
      window.addEventListener('click', turnOff, true)
    } else if (window.innerWidth > 1200) {
      menuRef.current.style.display = 'flex'
    }
  }
  , [showModal])

  return (
    <nav className="navbar-container" id="navbar">
      <a href="#" className='navbar-container__logo-link'>
        <img src={logo} alt="logo" className='navbar-container__logo-link__logo'/>
        </a>
      <FaBars className="navbar-container__bar" onClick={(e) => {
        toggleShowModal(e)
        e.stopPropagation()
        }}/>
      <div ref={menuRef} className="navbar-container__links">
        <button className="navbar-container__links__cancel" onClick={() => toggleShowModal(false)}>&times;</button>
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
    </nav>
  )
}

export default Navbar