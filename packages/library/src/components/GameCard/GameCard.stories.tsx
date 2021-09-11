import React from 'react';
import { Story, Meta } from '@storybook/react';

import GameCard from './GameCard';
import { GameCardProps } from './types';

export default {
    title: 'Components/GameCard',
    component: GameCard,
    argTypes: {
        title: {
            name: 'Title',
            table: {
                category: 'Card'
            }
        },
        teams: {
            name: 'Teams',
            table: {
                category: 'Card'
            }
        },
        epic: {
            name: 'By Epic',
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
        onClick: {
            table: {
                category: 'Events'
            }
        }
    },
    decorators: [
        (Story) => (
            <div tw='max-width[270px] height[150px]'>
                <Story />
            </div>
        )
    ]
} as Meta;

const Template: Story<GameCardProps> = (args) => <GameCard {...args} />;

export const ByEpic = Template.bind({});
ByEpic.args = {
    title: 'Battle Royale',
    teams: 'solo',
    epic: true,
    image: 'https://fortnite-api.com/images/playlists/playlist_defaultsolo/showcase.png'
};

export const Basic = Template.bind({});
Basic.args = {
    title: 'Battle Royale',
    teams: 'solo',
    image: 'https://fortnite-api.com/images/playlists/playlist_defaultsolo/showcase.png'
};
