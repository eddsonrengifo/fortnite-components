import React from 'react'
import { Story, Meta } from '@storybook/react'

import AchievementCard from './AchievementCard'
import { AchievementCardProps } from './types'

export default {
  title: 'Example/AchievementCard',
  component: AchievementCard,
  argTypes: {
    name: {
      name: 'Name',
      type: { name: 'string' },
      defaultValue: 'Achievement',
      description: 'Name of achievement',
      table: {
        category: 'Card',
        defaultValue: { summary: 'Achievement' }
      }
    },
    image: {
      name: 'Image',
      type: { name: 'string' },
      defaultValue:
        'https://media.fortniteapi.io/images/feats/s16_T_Ui_Explore_Comical.png',
      description: 'Card Image',
      table: {
        category: 'Card',
        defaultValue: {
          summary:
            'https://media.fortniteapi.io/images/feats/s16_T_Ui_Explore_Comical.png'
        }
      }
    },
    description: {
      name: 'Description',
      type: { name: 'string' },
      defaultValue: '',
      description: 'Description',
      table: {
        category: 'Card',
        defaultValue: {
          summary: ''
        }
      }
    },
    time: {
      name: 'Time',
      type: { name: 'string' },
      defaultValue: '',
      description: 'Time of the achievement',
      table: {
        category: 'Card',
        defaultValue: {
          summary: ''
        }
      }
    },
    topColor: {
      name: 'Top Color',
      type: { name: 'string' },
      defaultValue: '#F6A300',
      description: 'Top color of the achievement',
      table: {
        category: 'Colors',
        defaultValue: {
          summary: '#F6A300'
        }
      }
    },
    bottomColor: {
      name: 'Bottom Color',
      type: { name: 'string' },
      defaultValue: '#4F8EFF',
      description: 'Bottom color of the achievement',
      table: {
        category: 'Colors',
        defaultValue: {
          summary: '#4F8EFF'
        }
      }
    },
    imageColor: {
      name: 'Image Color',
      type: { name: 'string' },
      defaultValue: '#F6A300',
      description: 'Image color of the achievement',
      table: {
        category: 'Colors',
        defaultValue: {
          summary: '#F6A300'
        }
      }
    },
    topBackground: {
      name: 'Top Background Color',
      type: { name: 'string' },
      defaultValue: '#326DD7',
      description: 'Top Background color of the achievement',
      table: {
        category: 'Colors',
        defaultValue: {
          summary: '#326DD7'
        }
      }
    },
    bottomBackground: {
      name: 'Bottom Background Color',
      type: { name: 'string' },
      defaultValue: '#3A39D0',
      description: 'Bottom Background Color of the achievement',
      table: {
        category: 'Colors',
        defaultValue: {
          summary: '#3A39D0'
        }
      }
    },
    onClick: {
      table: {
        category: 'Events'
      }
    }
  },
  decorators: [
    (Story) => (
      <div tw='max-width[16rem]'>
        <Story />
      </div>
    )
  ]
} as Meta

const Template: Story<AchievementCardProps> = (args) => (
  <AchievementCard {...args} />
)

export const Season6 = Template.bind({})
Season6.args = {
  name: 'Pocket change',
  description: 'Collected all the coins from a Purple XP Coin during Season 6.',
  image:
    'https://media.fortniteapi.io/images/feats/s16_T_Ui_Explore_Comical.png',
  time: '10:52 PM'
}

export const Season5 = Template.bind({})
Season5.args = {
  name: 'PRIMAL DISCOVERY',
  description: 'Landed at the new map in Season 6.',
  topColor: 'rgb(124 58 237)',
  imageColor: 'rgb(124 58 237)',
  image:
    'https://media.fortniteapi.io/images/feats/s15_T_Ui_Explore_Celebratory.png',
  time: '12:24 PM'
}
