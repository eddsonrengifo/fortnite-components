import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from './types';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: {
            action: 'clicked',
            table: {
                category: 'Events'
            }
        }
    },
    decorators: [
        (Story) => (
            <div tw='max-width[300px]'>
                <Story />
            </div>
        )
    ]
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const label = 'Button';

export const Small = Template.bind({});
Small.args = {
    label,
    size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
    label
};

export const Large = Template.bind({});
Large.args = {
    label,
    size: 'large'
};

export const Yellow = Template.bind({});
Yellow.args = {
    label,
    style: 'yellow'
};
