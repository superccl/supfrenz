import React from 'react'
import './team.scss'
import TeamCard from './TeamCard'
import uuid from 'react-uuid'
import { data } from '../../data/data'
const Team = () => {
  const items = data.team

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