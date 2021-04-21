import React from 'react'
import { Story, Meta } from '@storybook/react'

import BattlepassCard from './BattlepassCard'
import { BattlepassProps } from './types'

export default {
  title: 'Example/BattlepassCard',
  component: BattlepassCard,
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
    tier: {
      name: 'Tier',
      type: { name: 'number' },
      defaultValue: 12,
      description: 'Tier of item',
      table: {
        category: 'Card',
        defaultValue: {
          summary: 12
        }
      }
    },
    free: {
      name: 'Free',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Free?',
      table: {
        category: 'Free',
        defaultValue: {
          summary: false
        }
      }
    },
    freeText: {
      name: 'Free Text',
      type: { name: 'string' },
      defaultValue: 'Free!',
      description: 'Free Text',
      table: {
        category: 'Free',
        defaultValue: {
          summary: 'Free!'
        }
      }
    },
    onClick: {
      table: {
        category: 'Events'
      }
    }
  }
} as Meta

const Template: Story<BattlepassProps> = (args) => <BattlepassCard {...args} />

export const Free = Template.bind({})
Free.args = {
  rarity: 'dc',
  tier: 71,
  free: true,
  image:
    'https://media.fortniteapi.io/images/79585c36b1e0943739e1db68a289574d/transparent.png'
}

export const Simple = Template.bind({})
Simple.args = {
  rarity: 'rare',
  tier: 12,
  free: false,
  image:
    'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png'
}
