import React from 'react'
import './social.scss'
import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa'
import { RiShipLine } from 'react-icons/ri'
const Social = ({ gap, fontSize }) => {
  return (
    <div className="social__container" style={{gap: gap}}>
    <a href="#" className="social__container__item-link"><RiShipLine className="social__container__item-link__svg" style={{fontSize: fontSize}}/></a>
    <a href="#" className="social__container__item-link"><FaTwitter className="social__container__item-link__svg" style={{fontSize: fontSize}}/></a>
    <a href="#" className="social__container__item-link"><FaDiscord className="social__container__item-link__svg" style={{fontSize: fontSize}}/></a>
    <a href="#" className="social__container__item-link"><FaInstagram className="social__container__item-link__svg" style={{fontSize: fontSize}}/></a>
  </div>
  )
}

Social.defaultProps = {
  gap: '1em',
  fontSize: '1.5em'
}

export default Social