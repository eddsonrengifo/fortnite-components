import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from './types';

export default {
    title: 'Components/Button',
    component: Button,
    decorators: [
        (Story) => (
            <div tw='max-width[16rem]'>
                <Story />
            </div>
        )
    ]
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const label = 'Button';
const size = 'medium';
const fullWidth = true;

export const Small = Template.bind({});
Small.args = { label, size: 'small', style: 'lightblue' };

export const Medium = Template.bind({});
Medium.args = { label, size: 'medium', style: 'lightblue' };

export const Large = Template.bind({});
Large.args = { label, size: 'large', style: 'lightblue' };

export const LightBlue = Template.bind({});
LightBlue.args = { label, size, fullWidth, style: 'lightblue' };

export const Blue = Template.bind({});
Blue.args = { label, size, fullWidth, style: 'blue' };

export const Orange = Template.bind({});
Orange.args = { label, size, fullWidth, style: 'orange' };

export const Yellow = Template.bind({});
Yellow.args = { label, size, fullWidth, style: 'yellow' };

export const White = Template.bind({});
White.args = { label, size, fullWidth, style: 'white' };

export const Black = Template.bind({});
Black.args = { label, size, fullWidth, style: 'black' };

export const Custom = Template.bind({});
Custom.args = {
    label,
    size,
    fullWidth,
    style: 'custom',
    textColor: '#ffffff',
    bgColor: '#7e1c1c',
    borderColor: '#c74e4e'
};
