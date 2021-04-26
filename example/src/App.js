import React from 'react'
import {
  StoreCard,
  LockerCard,
  BattlepassCard,
  AchievementCard,
  FishCard,
  EventCard,
  CharacterCard
} from 'fortnite-components'

const App = () => {
  return (
    <div className='all'>
      <div className='item'>
        <h1>StoreCard</h1>
        <StoreCard />
      </div>
      <div className='item'>
        <h1>EventCard</h1>
        <EventCard />
      </div>
      <div className='item'>
        <h1>AchievementCard</h1>
        <AchievementCard />
      </div>
      <div className='item'>
        <h1>LockerCard</h1>
        <LockerCard />
      </div>
      <div className='item'>
        <h1>CharacterCard</h1>
        <CharacterCard />
      </div>
      <div className='item'>
        <h1>BattlepassCard</h1>
        <BattlepassCard />
      </div>
      <div className='item'>
        <h1>FishCard</h1>
        <FishCard />
      </div>
    </div>
  )
}

export default App
