import React from 'react'
import useToggle from '../../hooks/useToggle'
import { FaBars } from 'react-icons/fa'
import logo from '../../asset/44.webp'
import Link from './Link'
import Modal from '../../features/Modal'
import { useEffect } from 'react'

const Navbar = () => {
  const [openModal, setOpenModal] = useToggle(false)


  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 1200 && setOpenModal(false)
    })
  })

  return (
    <nav className="bg-black opacity-75 sticky top-0 h-20 flex justify-between items-center px-6 text-xl z-[99] sm:px-12" id="navbar">
      <a href="#" className='h-[inherit]'>
        <img src={logo} alt="logo" className='h-[inherit]'/>
      </a>
      <FaBars className="block cursor-pointer lg:hidden" onClick={() => setOpenModal(true)}/>
      <Link className="hidden lg:flex"/>
      <Modal open={openModal} onClose={setOpenModal} position="top right" className="flex lg:hidden">
        <Link visible={openModal} onClose={() => setOpenModal(false)}/>
      </Modal>
      
    </nav>
  )
}

export default Navbar