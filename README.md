# Fortnite's Components

> A library of fortnite's components

[![NPM](https://img.shields.io/npm/v/fortnite-components.svg)](https://www.npmjs.com/package/fortnite-components)

## Install

```bash
NPM: npm install fortnite-components --save-dev
```

```bash
YARN: yarn add fortnite-components --dev
```

## Usage

it's easy to use, just import the components you need

```tsx
import React from 'react'
import { StoreCard } from 'fortnite-components'

const App = () => {
  return <StoreCard name='Safari' />
}
```

## Components

- StoreCard
- LockerCard
- CharacterCard
- FishCard
- BattlepassCard
- EventCard
- AchievementCard
- PresetCard

You can see the components in my Storybook

[Fortnite Components Storybook](https://fortnite-components.vercel.app/)

## Customizable

The components have a variety of props, so the component can be very customizable

#### for example

```tsx
import { FishCard } from 'fortnite-components'
```

This component contain these props

**Number** `Fish number`

**Image** `Fish image`

**Stars** `Fish stars`

**Size** `Fish size`

**Alert** `Indicates if the fish is new`

**Unknown** `Indicates if the fish exists but nothing is known about it`

**None** `Indicates if nothing is known about the fish`

**Featured** `Indicates whether the fish has protruded in any way`

**Text** `It's the featured text`

**onClick** `function that is executed when you click`

#### Preview of the component

![Screenshot from 2021-05-07 20-25-50](https://user-images.githubusercontent.com/43897478/117521251-72acec80-af72-11eb-9ba0-7dd10d8587ac.png)

## License

MIT © [EddsonRT](https://github.com/EddsonRT/fortnite-components/blob/main/LICENSE)

## Help me

Use code **Eddson** in the Item Shop of Fortnite
