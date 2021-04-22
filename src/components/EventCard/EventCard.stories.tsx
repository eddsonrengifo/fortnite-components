import React from 'react'
import { Story, Meta } from '@storybook/react'

import EventCard from './EventCard'
import { EventCardProps } from './types'

export default {
  title: 'Example/EventCard',
  component: EventCard,
  argTypes: {
    topText: {
      name: 'Top Text',
      type: { name: 'string', required: true },
      defaultValue: 'Text',
      description: 'Top Text',
      table: {
        category: 'Poster',
        defaultValue: { summary: 'Text' }
      }
    },
    bottomText: {
      name: 'Bottom Text',
      type: { name: 'string', required: true },
      defaultValue: 'Text 2',
      description: 'Bottom Text',
      table: {
        category: 'Poster',
        defaultValue: { summary: 'Text 2' }
      }
    },
    posterFront: {
      name: 'Poster Front',
      type: { name: 'string', required: true },
      defaultValue:
        'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-front-2-750x1080-319776257.jpg',
      description: 'Card Poster Front',
      table: {
        category: 'Poster',
        defaultValue: {
          summary:
            'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-front-2-750x1080-319776257.jpg'
        }
      }
    },
    posterBack: {
      name: 'Poster Back',
      type: { name: 'string', required: true },
      defaultValue:
        'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-back-750x1080-319770605.jpg',
      description: 'Card Poster Back',
      table: {
        category: 'Info',
        defaultValue: {
          summary:
            'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-back-750x1080-319770605.jpg'
        }
      }
    },
    schedule: {
      name: 'Schedule',
      type: { name: 'string' },
      defaultValue: 'Schedule',
      description: 'Schedule of Event',
      table: {
        category: 'Poster',
        defaultValue: {
          summary: 'Schedule'
        }
      }
    },
    region: {
      name: 'Region',
      defaultValue: 'none',
      description: 'Region of event',
      table: {
        category: 'Poster',
        defaultValue: {
          summary: 'none'
        }
      }
    },
    shortDescription: {
      name: 'Short Description',
      type: { name: 'string' },
      defaultValue: '',
      description: 'Short Description of Event',
      table: {
        category: 'Info',
        defaultValue: {
          summary: ''
        }
      }
    },
    live: {
      name: 'Live',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'The Event is on live?',
      table: {
        category: 'Poster',
        defaultValue: {
          summary: false
        }
      }
    },
    lock: {
      name: 'Lock',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'The event is locked?',
      table: {
        category: 'Poster',
        defaultValue: {
          summary: false
        }
      }
    },
    dates: {
      name: 'Dates',
      type: { name: 'array' },
      defaultValue: [
        {
          start: '2021-03-11T01:30:00+00:00',
          end: '2021-03-11T04:30:00+00:00'
        },
        {
          start: '2021-03-18T00:30:00+00:00',
          end: '2021-03-18T03:30:00+00:00'
        },
        {
          start: '2021-03-25T00:30:00+00:00',
          end: '2021-03-25T03:30:00+00:00'
        },
        {
          start: '2021-04-01T00:30:00+00:00',
          end: '2021-04-01T03:30:00+00:00'
        },
        {
          start: '2021-04-15T00:30:00+00:00',
          end: '2021-04-15T03:30:00+00:00'
        }
      ],
      description: 'Dates of the Event',
      table: {
        category: 'Info',
        defaultValue: {
          summary: [
            {
              start: '2021-03-11T01:30:00+00:00',
              end: '2021-03-11T04:30:00+00:00'
            },
            {
              start: '2021-03-18T00:30:00+00:00',
              end: '2021-03-18T03:30:00+00:00'
            },
            {
              start: '2021-03-25T00:30:00+00:00',
              end: '2021-03-25T03:30:00+00:00'
            },
            {
              start: '2021-04-01T00:30:00+00:00',
              end: '2021-04-01T03:30:00+00:00'
            },
            {
              start: '2021-04-15T00:30:00+00:00',
              end: '2021-04-15T03:30:00+00:00'
            }
          ]
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

const Template: Story<EventCardProps> = (args) => <EventCard {...args} />

export const Fncs = Template.bind({})
Fncs.args = {
  topText: 'Week 4',
  bottomText: 'Fncs',
  schedule: 'April 10th - 12th',
  posterFront:
    'https://cdn2.unrealengine.com/Fortnite/fortnite-game/tournamentinformation/12BR_Competitive_In-Game_FNCS_Week4_Poster_Front-750x1080-c5ae877fbb33dfe3365ac45cf3d6837a25330689.jpg',
  posterBack:
    'https://cdn2.unrealengine.com/Fortnite/fortnite-game/tournamentinformation/12BR_Competitive_In-Game_FNCS_Poster_Back_ALL-750x1080-1ed3adf9261d51f716889ccbadd77463015dc009.jpg',
  shortDescription:
    'Compete in the Fortnite Champion Series: Chapter 2 - Season 2 for a share of the $5,000,000 total prize pool.'
}

export const DreamHack = Template.bind({})
DreamHack.args = {
  topText: 'DreamHack Online Open',
  bottomText: 'Finals',
  region: 'NAE',
  schedule: 'January 31st',
  posterFront:
    'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-front-2-750x1080-319776257.jpg',
  posterBack:
    'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-back-750x1080-319770605.jpg',
  shortDescription:
    'This community focused tournament features a $250,000 prize pool up for grabs. Best of luck!'
}

export const CashCup = Template.bind({})
CashCup.args = {
  topText: 'Cash Cup',
  bottomText: 'Trios',
  schedule: 'Every Monday',
  posterFront:
    'https://cdn2.unrealengine.com/16br-comp-in-game-trioscashcup-poster-front-750x1080-46be00f23547.jpg',
  posterBack:
    'https://cdn2.unrealengine.com/15br-comp-in-game-contendercup-poster-back-750x1080-68e13f266f52.jpg',
  shortDescription: 'Compete among the best in Fortnite for prizes!'
}
