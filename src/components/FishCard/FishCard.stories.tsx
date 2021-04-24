import React from 'react'
import { Story, Meta } from '@storybook/react'

import FishCard from './FishCard'
import { FishProps } from './types'

export default {
  title: 'Example/FishCard',
  component: FishCard,
  argTypes: {
    number: {
      name: 'Number',
      type: { name: 'number' },
      defaultValue: 0,
      description: 'Number of the fish',
      table: {
        category: 'Card',
        defaultValue: {
          summary: 0
        }
      }
    },
    image: {
      name: 'Image',
      defaultValue:
        'https://media.fortniteapi.io/images/s16_T_Ui_Fish_Flopper_Blue_L.png',
      description: 'Image of the fish',
      table: {
        category: 'Card',
        defaultValue: {
          summary:
            'https://media.fortniteapi.io/images/s16_T_Ui_Fish_Flopper_Blue_L.png'
        }
      }
    },
    stars: {
      name: 'Stars',
      defaultValue: 1,
      description: 'Stars of the fish',
      table: {
        category: 'Card',
        defaultValue: {
          summary: 1
        }
      }
    },
    size: {
      name: 'Size',
      defaultValue: 'medium',
      description: 'Size of the fish',
      table: {
        category: 'Card',
        defaultValue: { summary: 'medium' }
      }
    },
    alert: {
      name: 'Alert',
      defaultValue: false,
      description: 'Alert of the fish',
      table: {
        category: 'Card',
        defaultValue: { summary: false }
      }
    },
    unknown: {
      name: 'Unknown',
      defaultValue: false,
      description: 'Unknown?',
      table: {
        category: 'Card',
        defaultValue: { summary: false }
      }
    },
    none: {
      name: 'None',
      defaultValue: false,
      description: 'fish?',
      table: {
        category: 'Card',
        defaultValue: { summary: false }
      }
    },
    featured: {
      name: 'Featured',
      defaultValue: false,
      description: 'Featured of the fish',
      table: {
        category: 'Featured',
        defaultValue: { summary: false }
      }
    },
    text: {
      name: 'Text',
      defaultValue: 'New Best!',
      description: 'Text',
      table: {
        category: 'Featured',
        defaultValue: { summary: 'New Best!' }
      }
    },
    onClick: {
      table: {
        category: 'Events'
      }
    }
  }
} as Meta

const Template: Story<FishProps> = (args) => <FishCard {...args} />

export const Simple = Template.bind({})
Simple.args = {
  number: 23,
  stars: 2,
  image: 'https://media.fortniteapi.io/images/s16_T_Ui_Fish_Flopper_Blue_L.png',
  size: 'medium'
}

export const Featured = Template.bind({})
Featured.args = {
  alert: true,
  featured: true,
  number: 12,
  stars: 3,
  image: 'https://media.fortniteapi.io/images/s16_T_Ui_Fish_KevFish_Drift_L.png'
}

export const Unknown = Template.bind({})
Unknown.args = {
  unknown: true,
  number: 14,
  image:
    'https://media.fortniteapi.io/images/s16_T_Ui_Fish_Jellyfish_Black_L.png',
  size: 'medium'
}

export const None = Template.bind({})
None.args = {
  number: 10,
  none: true
}
