import React from 'react';
import { Story, Meta } from '@storybook/react';

import LockerCard from './LockerCard';
import { LockerCardProps } from './types';

export default {
    title: 'Components/LockerCard',
    component: LockerCard,
    argTypes: {
        image: {
            name: 'Image',
            table: {
                category: 'Card'
            }
        },
        rarity: {
            name: 'Rarity',
            table: {
                category: 'Card'
            }
        },
        type: {
            name: 'Type',
            table: {
                category: 'Card'
            }
        },
        tag: {
            name: 'Tag',
            table: {
                category: 'Card'
            }
        },
        favorite: {
            name: 'Favorite',
            table: {
                category: 'Card'
            }
        },
        random: {
            name: 'Random',
            table: {
                category: 'Card'
            }
        },
        none: {
            name: 'None',
            table: {
                category: 'Card'
            }
        },
        alert: {
            name: 'Alert',
            table: {
                category: 'Alert'
            }
        },
        items: {
            name: 'Items',
            table: {
                category: 'Alert'
            }
        },
        conflict: {
            name: 'Conflict',
            table: {
                category: 'Conflict'
            }
        },
        animation: {
            name: 'Animation',
            table: {
                category: 'Conflict'
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
} as Meta;

const Template: Story<LockerCardProps> = (args) => <LockerCard {...args} />;

export const Medium = Template.bind({});
Medium.args = {
    rarity: 'rare',
    type: 'outfit',
    tag: true,
    favorite: true,
    image: 'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png'
};

export const Small = Template.bind({});
Small.decorators = [
    (Story) => (
        <div tw='max-width[150px] height[200px]'>
            <Story />
        </div>
    )
];
Small.args = {
    rarity: 'rare',
    type: 'emote',
    image: 'https://media.fortniteapi.io/images/e47b426b5a69b3e3ea1f4d9eb174cd20/transparent.png'
};

export const Conflict = Template.bind({});
Conflict.args = {
    rarity: 'marvelSeries',
    type: 'backpack',
    image: 'https://media.fortniteapi.io/images/571c11d81bc81d2b6e706a1d3861b832/transparent.png',
    conflict: true
};

export const Random = Template.bind({});
Random.args = {
    random: true
};

export const None = Template.bind({});
None.args = {
    none: true
};
