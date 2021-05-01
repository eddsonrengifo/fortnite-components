import React from 'react'
import {
  StoreCard,
  LockerCard,
  BattlepassCard,
  AchievementCard,
  FishCard,
  EventCard,
  CharacterCard,
  PresetCard
} from 'fortnite-components'
import './index.css'

const App = () => {
  return (
    <div className='all'>
      <StoreCard />
      <EventCard />
      <AchievementCard />
      <LockerCard />
      <CharacterCard />
      <BattlepassCard />
      <FishCard />
      <PresetCard />
    </div>
  )
}

export default App
