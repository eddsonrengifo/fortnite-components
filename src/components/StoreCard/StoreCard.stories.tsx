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
      type: { name: 'string' },
      defaultValue: 'Safari',
      description: 'Item Name',
      table: {
        category: 'Main information',
        defaultValue: { summary: 'Name' }
      }
    },
    type: {
      name: 'Type',
      type: { name: 'string' },
      defaultValue: 'Outfit',
      description: 'Item Type',
      table: {
        category: 'Main information',
        defaultValue: { summary: 'Outfit' }
      }
    },
    image: {
      name: 'Image',
      type: { name: 'string' },
      defaultValue:
        'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_802_f_HeartBreaker/MI_CID_802_f_HeartBreaker.png',
      description: 'Card Image',
      table: {
        category: 'Main information',
        defaultValue: {
          summary:
            'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_802_f_HeartBreaker/MI_CID_802_f_HeartBreaker.png'
        }
      }
    },
    rarity: {
      name: 'Rarity',
      defaultValue: 'rare',
      description: 'Rarity',
      table: {
        category: 'Card',
        type: {
          summary: 'more',
          detail: "What's the rarity of the item?"
        },
        defaultValue: { summary: 'rare' }
      }
    },
    tag: {
      name: 'Tag',
      defaultValue: 'none',
      description: 'Item Tag',
      table: {
        category: 'Card',
        defaultValue: { summary: 'none' }
      }
    },
    priceType: {
      name: 'Price Type',
      defaultValue: 'vBucks',
      description: 'Price Type',
      table: {
        category: 'Price',
        defaultValue: { summary: 'vBucks' }
      }
    },
    price: {
      name: 'Price v-bucks',
      type: { name: 'number' },
      defaultValue: 0,
      description: "What's the price of vBucks?",
      table: {
        category: 'Price',
        subcategory: 'vBucks',
        defaultValue: { summary: 0 }
      }
    },
    fullPrice: {
      name: 'Full v-bucks',
      type: { name: 'number' },
      defaultValue: 0,
      description: "What's the full price of vBucks?",
      table: {
        category: 'Price',
        subcategory: 'vBucks',
        defaultValue: { summary: 0 }
      }
    },
    passText: {
      name: 'Battlepass Text',
      defaultValue: 'Chapter 1, Season 8',
      description: "What's the text of battlepass?",
      table: {
        category: 'Price',
        subcategory: 'Battlepass',
        defaultValue: { summary: 'Chapter 1, Season 8' }
      }
    },
    passType: {
      name: 'Battlepass Type',
      defaultValue: 'paid',
      description: "What's the type of battlepass?",
      table: {
        category: 'Price',
        subcategory: 'Battlepass',
        defaultValue: { summary: 'paid' }
      }
    },
    money: {
      name: 'Money',
      defaultValue: '20.00',
      description: 'Money',
      table: {
        category: 'Price',
        subcategory: 'Money',
        defaultValue: { summary: '20.00' }
      }
    },
    moreText: {
      name: 'More Text',
      defaultValue: 'More Info',
      description: 'Adicional text',
      table: {
        category: 'Price',
        subcategory: 'More',
        defaultValue: { summary: 'More Info' }
      }
    },
    banner: {
      name: 'Banner',
      defaultValue: 'none',
      description: "What's the type of the banner?",
      table: {
        category: 'Banner',
        defaultValue: { summary: 'none' }
      }
    },
    bannerText: {
      name: 'Banner Text',
      defaultValue: 'New!',
      description: "What's the text of the banner?",
      table: {
        category: 'Banner',
        defaultValue: { summary: 'New!' }
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
  fullPrice: 3300,
  price: 2500,
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
  rarity: 'rare',
  banner: 'v1',
  bannerText: 'New!',
  price: 1200,
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
  fullPrice: 500,
  price: 500,
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
  fullPrice: 500,
  price: 500,
  priceType: 'battlepass'
}
