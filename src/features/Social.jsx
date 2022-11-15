import React from 'react'
import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa'
import { RiShipLine } from 'react-icons/ri'
import '../styles/util.css'
const Social = ({ className="", fontSize }) => {
  return (
    <div className={`flex justify-center items-center gap-6 ${className}`}>
    <a href="#"><RiShipLine className="random-fill-animation" style={{fontSize: fontSize}}/></a>
    <a href="#"><FaTwitter className="random-fill-animation" style={{fontSize: fontSize}}/></a>
    <a href="#"><FaDiscord className="random-fill-animation" style={{fontSize: fontSize}}/></a>
    <a href="#"><FaInstagram className="random-fill-animation" style={{fontSize: fontSize}}/></a>
  </div>
  )
}

Social.defaultProps = {
  gap: '1em',
  fontSize: '1.5em'
}

export default Social