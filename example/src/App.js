import React from 'react'
import { StoreCard, LockerCard, BattlepassCard } from 'fortnite-components'

const App = () => {
  return (
    <>
      <h1>StoreCard</h1>
      <StoreCard
        label="Safari"
        type="Outfit"
        rarity="rare"
        size="medium"
        image="https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_802_f_HeartBreaker/MI_CID_802_f_HeartBreaker.png"
        shopVersion={false}
        priceType="vBucks"
        tag="none"
        banner="none"
        bannerText="New!"
        price={1200}
        fullPrice={1200}
        passText="Chapter 1, Season 7"
        passType="paid"
        money="20.00"
        moreText="More Info"
        onClick={() => {}}
      />
      <h1>LockerCard</h1>
      <LockerCard
        rarity="rare"
        size="small"
        image="https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png"
        tag="none"
        banner="none"
        bannerText="New!"
        onClick={() => {}}
      />
      <h1>BattlepassCard</h1>
      <BattlepassCard
        rarity="rare"
        tier={12}
        free={false}
        freeText="Free!"
        image="https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png"
        onClick={() => {}}
      />
    </>
  )
}

export default App
