import React, { FC } from 'react';
import tw from 'twin.macro';

import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({
    label = '',
    fullWidth = false,
    size = 'medium',
    style = 'normal',
    onClick
}) => {
    return (
        <button
            className='group'
            css={[
                tw`cursor-pointer overflow-hidden focus:outline-none transition ease-in-out duration-100`,
                fullWidth && tw`w-full`,
                style === 'normal' && tw`p-1 background[#03c4fa] hover:bg-blue-300`
            ]}
            onClick={onClick}
        >
            <span
                css={[
                    tw`block cursor-pointer`,
                    style === 'yellow' && tw`background[#fdea36]`,
                    style === 'normal' &&
                        tw`background[#0086e7] transform-origin[50] transform[perspective(250px) rotateX(16deg)]`
                ]}
            >
                <span
                    css={[
                        tw`block cursor-pointer truncate uppercase tracking-wide leading-none pt-2 pb-1 px-6 font-semibold font-burbank`,
                        size === 'large' && tw`text-2xl`,
                        size === 'medium' && tw`text-lg`,
                        size === 'small' && tw`text-sm`,
                        style === 'yellow' && tw`color[#151a30]`,
                        style === 'normal' &&
                            tw`color[#3ae3fa] group-hover:text-white transform-origin[50] transform[perspective(245px) rotateX(0)]`
                    ]}
                >
                    {label}
                </span>
            </span>
        </button>
    );
};

export default Button;
