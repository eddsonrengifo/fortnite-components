import React from 'react'
import {
  StoreCard,
  LockerCard,
  BattlepassCard,
  AchievementCard,
  FishCard,
  EventCard
} from 'fortnite-components/'

const App = () => {
  return (
    <div style={{ background: 'black', color: '#fff' }}>
      <h1>StoreCard</h1>
      <StoreCard />
      <h1>LockerCard</h1>
      <LockerCard />
      <h1>BattlepassCard</h1>
      <BattlepassCard />
      <h1>AchievementCard</h1>
      <AchievementCard />
      <h1>FishCard</h1>
      <FishCard />
      <h1>EventCard</h1>
      <EventCard />
    </div>
  )
}

export default App
