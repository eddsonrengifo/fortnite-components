import React from 'react'
import { Story, Meta } from '@storybook/react'

import StoreCard from './StoreCard'
import { StoreCardProps } from './types'

export default {
  title: 'Example/StoreCard',
  component: StoreCard,
  argTypes: {
    name: {
      name: 'Name',
      table: {
        category: 'Main information'
      }
    },
    type: {
      name: 'Type',
      table: {
        category: 'Main information'
      }
    },
    image: {
      name: 'Image',
      table: {
        category: 'Main information'
      }
    },
    rarity: {
      name: 'Rarity',
      options: [
        'custom',
        'mythic',
        'exotic',
        'unattainable',
        'darkSeries',
        'marvelSeries',
        'iconSeries',
        'slurpSeries',
        'shadowSeries',
        'frozenSeries',
        'dc',
        'lavaSeries',
        'gamingSeries',
        'starWars',
        'legendary',
        'epic',
        'rare',
        'uncommon',
        'common'
      ],
      table: {
        category: 'Main information'
      }
    },
    tag: {
      name: 'Tag',
      table: {
        category: 'Tag'
      }
    },
    tagText: {
      name: 'Tag Text',
      table: {
        category: 'Tag'
      }
    },
    priceType: {
      name: 'Price Type',
      table: {
        category: 'Price'
      }
    },
    price: {
      name: 'Price v-bucks',
      table: {
        category: 'Price'
      }
    },
    fullPrice: {
      name: 'Full v-bucks',
      table: {
        category: 'Price'
      }
    },
    passText: {
      name: 'Battlepass Text',
      table: {
        category: 'Price'
      }
    },
    passType: {
      name: 'Battlepass Type',
      table: {
        category: 'Price'
      }
    },
    money: {
      name: 'Money',
      table: {
        category: 'Price'
      }
    },
    moreText: {
      name: 'More Text',
      table: {
        category: 'Price'
      }
    },
    banner: {
      name: 'Banner',
      table: {
        category: 'Banner'
      }
    },
    bannerText: {
      name: 'Banner Text',
      table: {
        category: 'Banner'
      }
    },
    owned: {
      name: 'Owned',
      table: {
        category: 'Owned'
      }
    },
    ownedText: {
      name: 'Owned Text',
      table: {
        category: 'Owned'
      }
    },
    customBackground: {
      name: 'Custom Background',
      table: {
        category: 'Custom'
      }
    },
    onClick: {
      table: {
        category: 'Events'
      }
    }
  }
} as Meta

const Template: Story<StoreCardProps> = (args) => <StoreCard {...args} />

export const ExtraLarge = Template.bind({})
ExtraLarge.decorators = [
  (Story) => (
    <div tw='max-width[850px] height[470px]'>
      <Story />
    </div>
  )
]
ExtraLarge.args = {
  name: 'Fortnite crew: 1 month',
  type: 'Subscription',
  rarity: 'rare',
  image:
    'https://cdn2.unrealengine.com/ui-itemshoptile-subscription-galaxia-fix-2048x1124-fc632eda06ba.png',
  priceType: 'more'
}

export const Large = Template.bind({})
Large.decorators = [
  (Story) => (
    <div tw='max-width[562px] height[470px]'>
      <Story />
    </div>
  )
]
Large.args = {
  name: 'Survivors in arms',
  type: 'Item bundle',
  rarity: 'epic',
  image:
    'https://media.fortniteapi.io/images/3eac7e345b6a9f3fcb75a117a9093502/transparent.png',
  fullPrice: '3,300',
  price: '2,500',
  bannerText: '800 v-bucks off',
  banner: 'v2'
}

export const Medium = Template.bind({})
Medium.decorators = [
  (Story) => (
    <div tw='max-width[271px] height[470px]'>
      <Story />
    </div>
  )
]
Medium.args = {
  name: 'Safari',
  type: 'Outfit',
  rarity: 'rare',
  banner: 'v1',
  bannerText: 'New!',
  price: '1,200',
  image:
    'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_802_f_HeartBreaker/MI_CID_802_f_HeartBreaker.png'
}

export const Small = Template.bind({})
Small.decorators = [
  (Story) => (
    <div tw='max-width[250px] height[285px]'>
      <Story />
    </div>
  )
]
Small.args = {
  name: 'Flail Bladesfari',
  type: 'Pickaxe',
  rarity: 'uncommon',
  image:
    'https://media.fortniteapi.io/images/d910353f522b63a2c895ef3dfcab4477/transparent.png',
  price: '500',
  priceType: 'battlepass'
}

export const SmallShop = Template.bind({})
SmallShop.decorators = [
  (Story) => (
    <div tw='max-width[271px] height[250px]'>
      <Story />
    </div>
  )
]
SmallShop.args = {
  name: 'Flail Bladesfari',
  type: 'Pickaxe',
  rarity: 'uncommon',
  image:
    'https://media.fortniteapi.io/images/d910353f522b63a2c895ef3dfcab4477/transparent.png',
  price: '500',
  priceType: 'battlepass'
}

export const Custom = Template.bind({})
Custom.decorators = [
  (Story) => (
    <div tw='max-width[271px] height[470px]'>
      <Story />
    </div>
  )
]
Custom.args = {
  name: 'Safari',
  type: 'Outfit',
  rarity: 'custom',
  customBackground: { background: 'green' },
  banner: 'v1',
  bannerText: 'New!',
  price: '1,200',
  image:
    'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_802_f_HeartBreaker/MI_CID_802_f_HeartBreaker.png'
}
