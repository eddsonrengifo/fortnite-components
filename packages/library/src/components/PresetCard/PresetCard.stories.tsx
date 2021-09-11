import React from 'react';
import { Story, Meta } from '@storybook/react';

import PresetCard from './PresetCard';
import { PresetCardProps } from './types';

export default {
    title: 'Components/PresetCard',
    component: PresetCard,
    argTypes: {
        name: {
            name: 'Name',
            type: { name: 'string' },
            defaultValue: 'Load Preset',
            description: 'Preset Image',
            table: {
                category: 'Card',
                defaultValue: {
                    summary: 'Load Preset'
                }
            }
        },
        outfit: {
            name: 'Outfit',
            options: ['active', 'random', 'none'],
            defaultValue: 'active',
            description: 'Outfit',
            table: {
                category: 'Card',
                subcategory: 'Outfit',
                defaultValue: {
                    summary: 'active'
                }
            }
        },
        outfitImage: {
            name: 'Outfit Image',
            type: { name: 'string' },
            defaultValue:
                'https://media.fortniteapi.io/images/6af5fb0c4127ab98be084d6ec5ed499c/transparent.png',
            description: 'Outfit Image',
            table: {
                category: 'Card',
                subcategory: 'Outfit',
                defaultValue: {
                    summary:
                        'https://media.fortniteapi.io/images/6af5fb0c4127ab98be084d6ec5ed499c/transparent.png'
                }
            }
        },
        backpack: {
            name: 'Backpack',
            options: ['active', 'random', 'none'],
            defaultValue: 'active',
            description: 'Backpack',
            table: {
                category: 'Card',
                subcategory: 'Backpack',
                defaultValue: {
                    summary: 'active'
                }
            }
        },
        backpackImage: {
            name: 'Outfit Image',
            type: { name: 'string' },
            defaultValue:
                'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_BID_487_WinterHunterFemale/MI_BID_487_WinterHunterFemale.png',
            description: 'Backpack Image',
            table: {
                category: 'Card',
                subcategory: 'Backpack',
                defaultValue: {
                    summary:
                        'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_BID_487_WinterHunterFemale/MI_BID_487_WinterHunterFemale.png'
                }
            }
        },
        pickaxe: {
            name: 'Pickaxe',
            options: ['active', 'random', 'none'],
            defaultValue: 'active',
            description: 'Pickaxe',
            table: {
                category: 'Card',
                subcategory: 'Pickaxe',
                defaultValue: {
                    summary: 'active'
                }
            }
        },
        pickaxeImage: {
            name: 'Pickaxe Image',
            type: { name: 'string' },
            defaultValue:
                'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Pickaxe_ID_367_WinterHunter/MI_Pickaxe_ID_367_WinterHunter.png',
            description: 'Pickaxe Image',
            table: {
                category: 'Card',
                subcategory: 'Pickaxe',
                defaultValue: {
                    summary:
                        'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Pickaxe_ID_367_WinterHunter/MI_Pickaxe_ID_367_WinterHunter.png'
                }
            }
        },
        glider: {
            name: 'Glider',
            options: ['active', 'random', 'none'],
            defaultValue: 'active',
            description: 'Glider',
            table: {
                category: 'Card',
                subcategory: 'Glider',
                defaultValue: {
                    summary: 'active'
                }
            }
        },
        gliderImage: {
            name: 'Glider Image',
            type: { name: 'string' },
            defaultValue:
                'https://media.fortniteapi.io/images/75010f50c172d14ed551a2c5ddc03c3d/transparent.png',
            description: 'Glider Image',
            table: {
                category: 'Card',
                subcategory: 'Glider',
                defaultValue: {
                    summary:
                        'https://media.fortniteapi.io/images/75010f50c172d14ed551a2c5ddc03c3d/transparent.png'
                }
            }
        },
        wrap: {
            name: 'Wrap',
            options: ['active', 'random', 'none'],
            defaultValue: 'active',
            description: 'Wrap',
            table: {
                category: 'Card',
                subcategory: 'Wrap',
                defaultValue: {
                    summary: 'active'
                }
            }
        },
        wrapImage: {
            name: 'Wrap Image',
            type: { name: 'string' },
            defaultValue:
                'https://media.fortniteapi.io/images/c255a91527ff4e6fc45ec88ca6d293a5/transparent.png',
            description: 'Wrap Image',
            table: {
                category: 'Card',
                subcategory: 'Wrap',
                defaultValue: {
                    summary:
                        'https://media.fortniteapi.io/images/c255a91527ff4e6fc45ec88ca6d293a5/transparent.png'
                }
            }
        },
        add: {
            name: 'Add',
            type: { name: 'boolean' },
            defaultValue: false,
            description: 'Add',
            table: {
                category: 'Card',
                defaultValue: { summary: false }
            }
        },
        none: {
            name: 'None',
            type: { name: 'boolean' },
            defaultValue: false,
            description: 'None?',
            table: {
                category: 'Card',
                defaultValue: { summary: false }
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
            <div tw='max-width[256px]'>
                <Story />
            </div>
        )
    ]
} as Meta;

const Template: Story<PresetCardProps> = (args) => <PresetCard {...args} />;

export const Example = Template.bind({});
Example.args = {
    name: 'Siren',
    outfitImage:
        'https://media.fortniteapi.io/images/3f3824cdbbe5ff412907572724f8fd5a/transparent.png',
    backpack: 'none',
    pickaxeImage:
        'https://media.fortniteapi.io/images/9157c23-456079b-432ab35-ab64fb4/transparent.png',
    gliderImage:
        'https://media.fortniteapi.io/images/713af1f7ace03a531b7e55bd544d7e0f/transparent.png',
    wrapImage:
        'https://media.fortniteapi.io/images/1873d1c76a0eeaea6f1cb4f9d9243dd6/transparent.png'
};

export const Add = Template.bind({});
Add.args = {
    add: true
};

export const None = Template.bind({});
None.args = {
    none: true
};
