import React from 'react'
import useToggle from '../../hooks/useToggle'
import './navbar.scss'
import { FaBars } from 'react-icons/fa'
import logo from '../../asset/44.webp'
import Link from './Link'
import Modal from '../../features/Modal'
import { useEffect } from 'react'

const Navbar = () => {
  const [openModal, setOpenModal] = useToggle(false)

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      window.innerWidth > 1200 && setOpenModal(false)
    })
  })

  const getLink = () => {
    return <Link visible={openModal} onClose={() => setOpenModal(false)}/>
  }

  return (
    <nav className="navbar-container" id="navbar">
      <a href="#" className='navbar-container__logo-link'>
        <img src={logo} alt="logo" className='navbar-container__logo-link__logo'/>
      </a>
      <FaBars className="navbar-container__bar" onClick={() => setOpenModal(true)}/>
      <Modal position="top right" ModalElement={getLink} open={openModal} enableOverlay={openModal} onClose={() => setOpenModal(false)}/>
    </nav>
  )
}

export default Navbar