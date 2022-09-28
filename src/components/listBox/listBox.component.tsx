import React from 'react'

import MonsterCardComponent from '../monsterCard/monsterCard.component'

import './card-list.styles.css'
import { IMonster } from '../../App';

interface ListBoxProps {
  array: IMonster[]
}

const ListBoxComponent = ({ array }: ListBoxProps) => {
  return (
    <div className={'card-list'}>
      {array.map((monster: IMonster) => (
        <MonsterCardComponent
          key={monster.id}
          id={monster.id}
          name={monster.name}
          email={monster.email}
        />
      ))}
    </div>
  )
}

export default ListBoxComponent
