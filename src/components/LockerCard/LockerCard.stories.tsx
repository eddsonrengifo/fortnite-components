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
    type: {
      name: 'Type',
      defaultValue: 'outfit',
      description: 'Type of the Card',
      table: {
        category: 'Card',
        defaultValue: { summary: 'outfit' }
      }
    },
    tag: {
      name: 'Tag',
      defaultValue: false,
      description: 'Item Tag',
      table: {
        category: 'Card',
        defaultValue: { summary: false }
      }
    },
    favorite: {
      name: 'Favorite',
      defaultValue: false,
      description: 'Favorite?',
      table: {
        category: 'Card',
        defaultValue: { summary: false }
      }
    },
    random: {
      name: 'Random',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Random',
      table: {
        category: 'Card',
        defaultValue: { summary: false }
      }
    },
    none: {
      name: 'None',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'None?',
      table: {
        category: 'Card',
        defaultValue: { summary: false }
      }
    },
    alert: {
      name: 'Alert',
      defaultValue: false,
      description: 'Alert',
      table: {
        category: 'Alert',
        defaultValue: { summary: false }
      }
    },
    newItems: {
      name: 'New Items',
      type: { name: 'number' },
      defaultValue: 0,
      description: 'New Items',
      table: {
        category: 'Alert',
        defaultValue: { summary: 0 }
      }
    },
    conflict: {
      name: 'Conflict',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Conflict?',
      table: {
        category: 'Conflict',
        defaultValue: { summary: false }
      }
    },
    conflictAnimation: {
      name: 'Conflict Animation',
      type: { name: 'boolean' },
      defaultValue: true,
      description: 'Conflict Animation?',
      table: {
        category: 'Conflict',
        defaultValue: { summary: true }
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
  rarity: 'rare',
  type: 'outfit',
  size: 'medium',
  tag: true,
  image:
    'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png'
}

export const Small = Template.bind({})
Small.args = {
  favorite: true,
  rarity: 'rare',
  type: 'emote',
  size: 'small',
  image:
    'https://media.fortniteapi.io/images/e47b426b5a69b3e3ea1f4d9eb174cd20/transparent.png'
}

export const Conflict = Template.bind({})
Conflict.args = {
  conflict: true
}

export const Random = Template.bind({})
Random.args = {
  random: true
}

export const None = Template.bind({})
None.args = {
  none: true
}
