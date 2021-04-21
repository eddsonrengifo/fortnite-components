import React from 'react'
import { Story, Meta } from '@storybook/react'

import LockerCard from './LockerCard'
import { LockerProps } from './types'

export default {
  title: 'Example/LockerCard',
  component: LockerCard,
  argTypes: {
    image: {
      name: 'Image',
      type: { name: 'string', required: true },
      defaultValue:
        'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png',
      description: 'Card Image',
      table: {
        category: 'Card',
        defaultValue: {
          summary:
            'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png'
        }
      }
    },
    size: {
      name: 'Size',
      defaultValue: 'small',
      description: 'Card Size',
      table: {
        category: 'Card',
        defaultValue: {
          summary: 'small'
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
      defaultValue: 'variants',
      description: 'Item Tag',
      table: {
        category: 'Card',
        defaultValue: { summary: 'variants' }
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

const Template: Story<LockerProps> = (args) => <LockerCard {...args} />

export const Medium = Template.bind({})
Medium.args = {
  rarity: 'epic',
  size: 'medium',
  tag: 'reactive',
  image:
    'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_760_F_NeonTightSuit/MI_CID_760_F_NeonTightSuit.png'
}

export const Small = Template.bind({})
Small.args = {
  banner: 'v1',
  bannerText: 'New!',
  rarity: 'rare',
  size: 'small',
  tag: 'variants',
  image:
    'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png'
}
