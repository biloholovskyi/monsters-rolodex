import React from 'react'

import './card.styles.css'
import { IMonster } from '../../App';

const MonsterCardComponent = ({ id, name, email }: IMonster) => {
  return (
    <div className={'card-container'}>
      <img src={`https://robohash.org/${id}?set=set2`} alt="monster" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default MonsterCardComponent
