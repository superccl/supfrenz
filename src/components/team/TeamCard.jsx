import React from 'react'
import './teamcard.scss'
import { FaTwitter } from 'react-icons/fa'
const TeamCard = ({ img, name, body, link }) => {
  return (
    <div className="team-container__cards__item">
        <img src={img} alt="image" className="team-container__cards__item__front" />
        <div className="team-container__cards__item__back">
            <div className="team-container__cards__item__back__header">
                <h1 className="team-container__cards__item__back__header__name">{name}</h1>
                <a href={link} className="social__container__item-link"><FaTwitter className="social__container__item-link__svg" fontSize='2em'/></a>
            </div>
            <p className="team-container__cards__item__back__body">{body}</p>
        </div>
    </div>
  )
}

export default TeamCard