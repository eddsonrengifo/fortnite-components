import React from 'react'
import { Story, Meta } from '@storybook/react'

import StoreCard from './StoreCard'
import { StoreProps } from './types'

export default {
  title: 'Example/StoreCard',
  component: StoreCard,
  argTypes: {
    label: {
      name: 'Name',
      type: { name: 'string', required: true },
      defaultValue: 'Safari',
      description: 'Item Name',
      table: {
        category: 'Main information',
        defaultValue: { summary: 'Name' }
      }
    },
    type: {
      name: 'Type',
      type: { name: 'string', required: true },
      defaultValue: 'Outfit',
      description: 'Item Type',
      table: {
        category: 'Main information',
        defaultValue: { summary: 'Outfit' }
      }
    },
    image: {
      name: 'Image',
      type: { name: 'string', required: true },
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
    size: {
      name: 'Size',
      defaultValue: 'medium',
      description: 'Card Size',
      table: {
        category: 'Card',
        defaultValue: {
          summary: 'medium'
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
    shopVersion: {
      name: 'Shop Version',
      defaultValue: false,
      description: "Shop Version 'only affect small size!'",
      table: {
        category: 'Card',
        defaultValue: { summary: false }
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
      type: { name: 'number', required: false },
      defaultValue: 1200,
      description: "What's the price of vBucks?",
      table: {
        category: 'Price',
        subcategory: 'vBucks',
        defaultValue: { summary: 1200 }
      }
    },
    fullPrice: {
      name: 'Full v-bucks',
      type: { name: 'number', required: false },
      defaultValue: 1200,
      description: "What's the full price of vBucks?",
      table: {
        category: 'Price',
        subcategory: 'vBucks',
        defaultValue: { summary: 1200 }
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

const Template: Story<StoreProps> = (args) => <StoreCard {...args} />

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  label: 'Fortnite crew: 1 month',
  type: 'Subscription',
  rarity: 'rare',
  size: 'extraLarge',
  image:
    'https://cdn2.unrealengine.com/ui-itemshoptile-subscription-galaxia-fix-2048x1124-fc632eda06ba.png',
  priceType: 'more',
  shopVersion: true
}

export const Large = Template.bind({})
Large.args = {
  label: 'Survivors in arms',
  type: 'Item bundle',
  rarity: 'epic',
  size: 'large',
  image:
    'https://media.fortniteapi.io/images/3eac7e345b6a9f3fcb75a117a9093502/transparent.png',
  fullPrice: 3300,
  price: 2500,
  bannerText: '800 v-bucks off',
  banner: 'v2'
}

export const Medium = Template.bind({})
Medium.args = {
  label: 'Safari',
  rarity: 'rare',
  size: 'medium',
  banner: 'v1',
  bannerText: 'New!',
  image:
    'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_802_f_HeartBreaker/MI_CID_802_f_HeartBreaker.png'
}

export const Small = Template.bind({})
Small.args = {
  label: 'Flail Bladesfari',
  type: 'Pickaxe',
  rarity: 'uncommon',
  size: 'small',
  image:
    'https://media.fortniteapi.io/images/d910353f522b63a2c895ef3dfcab4477/transparent.png',
  fullPrice: 500,
  price: 500,
  priceType: 'battlepass'
}
