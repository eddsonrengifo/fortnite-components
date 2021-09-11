import React, { CSSProperties } from 'react';

export interface StoreCardProps {
    name: string;
    type?: string;
    positionImage?: 'fill' | 'centered';
    rarity?:
        | 'unattainable'
        | 'exotic'
        | 'darkSeries'
        | 'marvelSeries'
        | 'iconSeries'
        | 'slurpSeries'
        | 'shadowSeries'
        | 'frozenSeries'
        | 'dc'
        | 'lavaSeries'
        | 'gamingSeries'
        | 'starWars'
        | 'mythic'
        | 'legendary'
        | 'epic'
        | 'rare'
        | 'uncommon'
        | 'common';
    images: [string];
    priceType?: 'none' | 'vBucks' | 'battlepass' | 'money' | 'more';
    tag?: boolean;
    tagText?: string;
    banner?: 'none' | 'v1' | 'v2';
    bannerText?: string;
    price?: string;
    fullPrice?: string;
    passText?: string;
    passType?: 'free' | 'paid';
    money?: string;
    moreText?: string;
    owned?: boolean;
    ownedText?: string;
    customBackground?: [CSSProperties];
    customSpotlight?: [CSSProperties];
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
