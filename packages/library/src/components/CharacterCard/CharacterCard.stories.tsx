import React from 'react'
import { Story, Meta } from '@storybook/react'

import CharacterCard from './CharacterCard'
import { CharacterCardProps } from './types'

export default {
  title: 'Components/CharacterCard',
  component: CharacterCard,
  argTypes: {
    number: {
      name: 'Number',
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
    star: {
      name: 'Star',
      table: {
        category: 'Card'
      }
    },
    alert: {
      name: 'Alert',
      table: {
        category: 'Card'
      }
    },
    unknown: {
      name: 'Unknown',
      table: {
        category: 'Card'
      }
    },
    featured: {
      name: 'Featured',
      table: {
        category: 'Featured'
      }
    },
    text: {
      name: 'Text',
      table: {
        category: 'Featured'
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
      <div tw='max-width[200px] height[250px]'>
        <Story />
      </div>
    )
  ]
} as Meta

const Template: Story<CharacterCardProps> = (args) => (
  <CharacterCard {...args} />
)

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

export const Unknown = Template.bind({})
Unknown.args = {
  number: 44,
  unknown: true
}
