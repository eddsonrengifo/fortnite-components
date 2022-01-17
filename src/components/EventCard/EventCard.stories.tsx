import React from 'react'
import { Story, Meta } from '@storybook/react'

import EventCard from './EventCard'
import { EventCardProps } from './types'

export default {
  title: 'Components/EventCard',
  component: EventCard,
  argTypes: {
    details: {
      name: 'Details',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'The event is details?',
      table: {
        category: 'Poster',
        defaultValue: {
          summary: false
        }
      }
    },
    line1: {
      name: 'Line 1',
      type: { name: 'string' },
      defaultValue: 'Text',
      description: 'Line 1',
      table: {
        category: 'Poster',
        defaultValue: { summary: 'Text' }
      }
    },
    line2: {
      name: 'Line 2',
      type: { name: 'string' },
      defaultValue: 'Text 2',
      description: 'Line 1',
      table: {
        category: 'Poster',
        defaultValue: { summary: 'Text 2' }
      }
    },
    posterFront: {
      name: 'Poster Front',
      type: { name: 'string' },
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
      type: { name: 'string' },
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
      defaultValue: '',
      description: 'Schedule of Event',
      table: {
        category: 'Poster',
        defaultValue: {
          summary: ''
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
    description: {
      name: 'Description',
      type: { name: 'string' },
      defaultValue: '',
      description: 'Description of Event',
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
            }
          ]
        }
      }
    },
    title: {
      name: 'Title',
      type: { name: 'string' },
      defaultValue: 'Title',
      description: 'Title',
      table: {
        category: 'Info',
        defaultValue: {
          summary: 'Title'
        }
      }
    },
    datesColor: {
      name: 'Dates Color',
      type: { name: 'string' },
      defaultValue: '#000',
      description: 'Dates Color',
      table: {
        category: 'Info',
        defaultValue: {
          summary: '#000'
        }
      }
    },
    format: {
      name: 'Format',
      type: { name: 'string' },
      defaultValue: 'Tournament',
      description: 'Tournament',
      table: {
        category: 'Info',
        defaultValue: {
          summary: 'Tournament'
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
      <div tw='max-width[312px]'>
        <Story />
      </div>
    )
  ]
} as Meta

const Template: Story<EventCardProps> = (args) => <EventCard {...args} />

export const Simple = Template.bind({})
Simple.args = {
  line1: 'Fncs',
  line2: 'Week 4',
  schedule: 'April 10th - 12th',
  posterFront:
    'https://cdn2.unrealengine.com/Fortnite/fortnite-game/tournamentinformation/12BR_Competitive_In-Game_FNCS_Week4_Poster_Front-750x1080-c5ae877fbb33dfe3365ac45cf3d6837a25330689.jpg',
  posterBack:
    'https://cdn2.unrealengine.com/Fortnite/fortnite-game/tournamentinformation/12BR_Competitive_In-Game_FNCS_Poster_Back_ALL-750x1080-1ed3adf9261d51f716889ccbadd77463015dc009.jpg',
  description:
    'Compete in the Fortnite Champion Series: Chapter 2 - Season 2 for a share of the $5,000,000 total prize pool.',
  format: 'Fncs',
  datesColor: '#B2A01A'
}

export const Fncs = Template.bind({})
Fncs.args = {
  line1: 'Fncs',
  line2: 'Week 4',
  schedule: 'April 10th - 12th',
  posterFront:
    'https://cdn2.unrealengine.com/Fortnite/fortnite-game/tournamentinformation/12BR_Competitive_In-Game_FNCS_Week4_Poster_Front-750x1080-c5ae877fbb33dfe3365ac45cf3d6837a25330689.jpg',
  posterBack:
    'https://cdn2.unrealengine.com/Fortnite/fortnite-game/tournamentinformation/12BR_Competitive_In-Game_FNCS_Poster_Back_ALL-750x1080-1ed3adf9261d51f716889ccbadd77463015dc009.jpg',
  description:
    'Compete in the Fortnite Champion Series: Chapter 2 - Season 2 for a share of the $5,000,000 total prize pool.',
  format: 'Fncs',
  datesColor: '#B2A01A',
  details: true
}

export const DreamHack = Template.bind({})
DreamHack.args = {
  title: 'DreamHack Online Open Featuring Fortnite',
  line1: 'DreamHack Online Open',
  line2: 'Finals',
  region: 'NAE',
  schedule: 'January 31st',
  posterFront:
    'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-front-2-750x1080-319776257.jpg',
  posterBack:
    'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-back-750x1080-319770605.jpg',
  description:
    'This community focused tournament features a $250,000 prize pool up for grabs. Best of luck!',
  format: 'Duos Tournament',
  details: true
}

export const CashCup = Template.bind({})
CashCup.args = {
  line1: 'Trios',
  line2: 'Cash Cup',
  schedule: 'Every Monday',
  posterFront:
    'https://cdn2.unrealengine.com/16br-comp-in-game-trioscashcup-poster-front-750x1080-46be00f23547.jpg',
  posterBack:
    'https://cdn2.unrealengine.com/15br-comp-in-game-contendercup-poster-back-750x1080-68e13f266f52.jpg',
  description: 'Compete among the best in Fortnite for prizes!',
  format: 'Trios Tournament',
  details: true
}

export const LTM = Template.bind({})
LTM.args = {
  title: 'LTM Tournament - High Explosives',
  line1: 'LTM Tournament',
  line2: 'High Explosives',
  posterFront:
    'https://cdn2.unrealengine.com/16br-comp-in-game-ltmcup-poster-front-750x1080-3551abed616e.jpg',
  posterBack:
    'https://cdn2.unrealengine.com/16br-comp-in-game-ltmcup-poster-back-750x1080-deab055de9c7.jpg',
  description: 'Mixing it up each week!',
  format: 'Solo Tournament',
  details: true
}
