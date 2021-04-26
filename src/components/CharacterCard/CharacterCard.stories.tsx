import React from 'react'
import { Story, Meta } from '@storybook/react'

import CharacterCard from './CharacterCard'
import { CharacterProps } from './types'

export default {
  title: 'Example/CharacterCard',
  component: CharacterCard,
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
    alert: {
      name: 'Alert',
      defaultValue: false,
      description: 'Alert of the fish',
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
      defaultValue: 'Complete!',
      description: 'Text',
      table: {
        category: 'Featured',
        defaultValue: { summary: 'Complete!' }
      }
    },
    onClick: {
      table: {
        category: 'Events'
      }
    }
  }
} as Meta

const Template: Story<CharacterProps> = (args) => <CharacterCard {...args} />

export const Simple = Template.bind({})
Simple.args = {
  number: 18,
  image:
    'https://media.fortniteapi.io/images/a8cd0c7c732d92f61a2410c546935a74/transparent.png'
}

export const Featured = Template.bind({})
Featured.args = {
  number: 17,
  alert: true,
  featured: true,
  image:
    'https://media.fortniteapi.io/images/41ba61fa6836f6272ac97055617aae5c/transparent.png'
}

export const None = Template.bind({})
None.args = {
  number: 44,
  none: true
}
