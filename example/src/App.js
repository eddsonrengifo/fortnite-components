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
      <StoreCard name='Safari' type='outfit' rarity='rare' price={1200} />
      <StoreCard
        name='Safari'
        type='outfit'
        rarity='rare'
        price={1200}
        size='small'
        image='https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png'
      />
      <StoreCard
        name='Safari'
        type='outfit'
        rarity='rare'
        price={1200}
        size='small'
        shopVersion
      />
      <AchievementCard
        name='POCKET CHANGE'
        description='Collected all the coins from a Purple XP Coin during Season 6.'
      />
      <AchievementCard
        name='PRIMAL DISCOVERY'
        description='Landed at the new map in Season 6.'
        topColor='rgb(124 58 237)'
        imageColor='rgb(124 58 237)'
        image='https://media.fortniteapi.io/images/feats/s15_T_Ui_Explore_Celebratory.png'
      />
      <AchievementCard />
      <BattlepassCard />
      <BattlepassCard />
      <BattlepassCard />
      <LockerCard tag conflict />
      <LockerCard random />
      <LockerCard none />
      <CharacterCard />
      <CharacterCard alert featured />
      <CharacterCard none />
      <FishCard
        stars={3}
        number={125}
        alert
        featured
        image='https://media.fortniteapi.io/images/s16_T-T-Icon-BR-StinkFish-orange-L.png'
      />
      <FishCard
        unknown
        image='https://media.fortniteapi.io/images/s16_T_Ui_Fish_FlameyFish_Black_L.png'
      />
      <FishCard
        none
        image='https://media.fortniteapi.io/images/s16_T_Ui_Fish_ShieldFish_Green_L.png'
      />
      <EventCard
        title='DreamHack Online Open Featuring Fortnite'
        line1='DreamHack Online Open'
        line2='Finals'
        region='NAE'
        schedule='January 31st'
        posterFront='https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-front-2-750x1080-319776257.jpg'
        posterBack='https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-back-750x1080-319770605.jpg'
        description='This community focused tournament features a $250,000 prize pool up for grabs. Best of luck!'
        format='Duos Tournament'
      />
      <EventCard
        line1='Fncs'
        line2='Week 4'
        schedule='April 10th - 12th'
        posterFront='https://cdn2.unrealengine.com/Fortnite/fortnite-game/tournamentinformation/12BR_Competitive_In-Game_FNCS_Week4_Poster_Front-750x1080-c5ae877fbb33dfe3365ac45cf3d6837a25330689.jpg'
        posterBack='https://cdn2.unrealengine.com/Fortnite/fortnite-game/tournamentinformation/12BR_Competitive_In-Game_FNCS_Poster_Back_ALL-750x1080-1ed3adf9261d51f716889ccbadd77463015dc009.jpg'
        description='Compete in the Fortnite Champion Series: Chapter 2 - Season 2 for a share of the $5,000,000 total prize pool.'
        format='Fncs'
        datesColor='#B2A01A'
      />
      <EventCard
        line1='Trios'
        line2='Cash Cup'
        schedule='Every Monday'
        posterFront='https://cdn2.unrealengine.com/16br-comp-in-game-trioscashcup-poster-front-750x1080-46be00f23547.jpg'
        posterBack='https://cdn2.unrealengine.com/15br-comp-in-game-contendercup-poster-back-750x1080-68e13f266f52.jpg'
        description='Compete among the best in Fortnite for prizes!'
        format='Trios Tournament'
      />
      <PresetCard />
      <PresetCard add />
      <PresetCard none />
    </div>
  )
}

export default App
