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
      type: { name: 'string', required: true },
      defaultValue: 'Pocket change',
      description: 'Name of achievement',
      table: {
        category: 'Card',
        defaultValue: { summary: 'Pocket change' }
      }
    },
    image: {
      name: 'Image',
      type: { name: 'string', required: true },
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
      type: { name: 'string', required: true },
      defaultValue:
        'Collected all the coins from a Purple XP Coin during Season 6.',
      description: 'Description',
      table: {
        category: 'Card',
        defaultValue: {
          summary:
            'Collected all the coins from a Purple XP Coin during Season 6.'
        }
      }
    },
    time: {
      name: 'Time',
      type: { name: 'string', required: true },
      defaultValue: '10:52 PM',
      description: 'Time of the achievement',
      table: {
        category: 'Card',
        defaultValue: {
          summary: '10:52 PM'
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
  }
} as Meta

const Template: Story<AchievementCardProps> = (args) => (
  <AchievementCard {...args} />
)

export const Example = Template.bind({})
Example.args = {
  name: 'Pocket change',
  description: 'Collected all the coins from a Purple XP Coin during Season 6.',
  image:
    'https://media.fortniteapi.io/images/feats/s16_T_Ui_Explore_Comical.png',
  time: '10:52 PM'
}
