import React from 'react'
import './team.scss'
import imgPath from '../../asset/44.webp'
import TeamCard from './TeamCard'
import uuid from 'react-uuid'
const Team = () => {
  const items = [
    {
      img: imgPath,
      name: 'Andy',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima magni vitae illum voluptatibus asperiores laudantium voluptates ipsum nesciunt consectetur soluta.',
      link: '#',
    },
    {
      img: imgPath,
      name: 'Andy',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima magni vitae illum voluptatibus asperiores laudantium voluptates ipsum nesciunt consectetur soluta.',
      link: '#',
    },
    {
      img: imgPath,
      name: 'Andy',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima magni vitae illum voluptatibus asperiores laudantium voluptates ipsum nesciunt consectetur soluta.',
      link: '#',
    },
    {
      img: imgPath,
      name: 'Andy',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima magni vitae illum voluptatibus asperiores laudantium voluptates ipsum nesciunt consectetur soluta.',
      link: '#',
    },
    {
      img: imgPath,
      name: 'Andy',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima magni vitae illum voluptatibus asperiores laudantium voluptates ipsum nesciunt consectetur soluta.',
      link: '#',
    },
    {
      img: imgPath,
      name: 'Andy',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima magni vitae illum voluptatibus asperiores laudantium voluptates ipsum nesciunt consectetur soluta.',
      link: '#',
    },
    {
      img: imgPath,
      name: 'Andy',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima magni vitae illum voluptatibus asperiores laudantium voluptates ipsum nesciunt consectetur soluta.',
      link: '#',
    },
    {
      img: imgPath,
      name: 'Andy',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima magni vitae illum voluptatibus asperiores laudantium voluptates ipsum nesciunt consectetur soluta.',
      link: '#',
    },
    {
      img: imgPath,
      name: 'Andy',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima magni vitae illum voluptatibus asperiores laudantium voluptates ipsum nesciunt consectetur soluta.',
      link: '#',
    },
  ]

  return (
    <div id="team" className="team-container">
      <h1 className="team-container__header">
        MEET THE TEAM
      </h1>
      <div className="team-container__cards">
        {items.map(item => <TeamCard {...item} key={uuid()} />)}
      </div>
    </div>
  )
}

export default Team