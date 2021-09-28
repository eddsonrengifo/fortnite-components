import React from 'react'
import { Story, Meta } from '@storybook/react'

import PunchCard from './PunchCard'
import { PunchCardProps } from './types'

export default {
  title: 'Components/PunchCard',
  component: PunchCard,
  argTypes: {
    title: {
      name: 'Title',
      table: {
        category: 'Card'
      }
    },
    subtitle: {
      name: 'Subtitle',
      table: {
        category: 'Card'
      }
    },
    time: {
      name: 'Time',
      table: {
        category: 'Card'
      }
    },
    image: {
      name: 'Image',
      table: {
        category: 'Card'
      }
    },
    color: {
      name: 'Principal Color',
      table: {
        category: 'Card'
      }
    },
    bgTop: {
      name: 'Background Top Color',
      table: {
        category: 'Card'
      }
    },
    bgBottom: {
      name: 'Background Bottom Color',
      table: {
        category: 'Card'
      }
    },
    quests: {
      name: 'Quests',
      table: {
        category: 'Card'
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
      <div tw='height[30rem]'>
        <Story />
      </div>
    )
  ]
} as Meta

const Template: Story<PunchCardProps> = (args) => <PunchCard {...args} />

export const Example = Template.bind({})
Example.args = {
  title: 'Birthday',
  subtitle: 'Event',
  time: '13H 27M',
  color: '#f06bb9',
  bgTop: '#6a2545',
  bgBottom: '#c64e8b',
  quests: [
    {
      text: 'Complete a Birthday Quest',
      max: 1,
      image:
        'https://media.fortniteapi.io/images/3cd3fd8a22935e5735e4504df0bd80e1/transparent.png'
    },
    {
      text: 'Complete two Birthday Quest',
      max: 2,
      image:
        'https://media.fortniteapi.io/images/d96f03f67bfd0a29c22f030b4433bac3/transparent.png'
    },
    {
      text: 'Complete three Birthday Quest',
      max: 3,
      image:
        'https://media.fortniteapi.io/images/87f90841f4854d7fa3b84d6d4794d67a/transparent.png'
    }
  ],
  image:
    'https://media.fortniteapi.io/images/05cf241-4373694-759585a-ce4310c/transparent.png'
}

export const Example2 = Template.bind({})
Example2.args = {
  title: 'Balenciaga',
  subtitle: 'Punchcard',
  time: '15H 10M',
  color: '#a1a1a1',
  bgTop: '#212629',
  bgBottom: '#555557',
  quests: [
    {
      text: 'Emote in front of Shady Doggo graffiti at Retail Row, Believe Beach, or Streamy Stacks',
      max: 1,
      image:
        'https://media.fortniteapi.io/images/ba3e74bb819320f2e79dd6a351c21e71/transparent.png'
    },
    {
      text: 'Collect Triple S sneakers in the Strange Times Featured Hub',
      max: 40,
      image:
        'https://media.fortniteapi.io/images/8eb15d04bf34c04b1e233bc57f8961c7/transparent.png'
    }
  ],
  image:
    'https://media.fortniteapi.io/images/8eb15d04bf34c04b1e233bc57f8961c7/transparent.png'
}
