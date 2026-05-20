import React from 'react'
import {useListOfPlayers} from './store/ListOfPlayers'
import {useTheme} from '../Provider/ThemeProvider'


const ListA = () => {
  const { theme, toggle } = useTheme();
  const {players,getPlayers} = useListOfPlayers()
  return (
    <div>
        <p>Current Theme:{theme}</p>
      <button onClick={toggle}>Change Theme</button>

      <div>
        {players.map((player)=><p>{player}</p>)}
      </div>
    </div>
  )
}

export default ListA