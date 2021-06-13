import React, { CSSProperties } from 'react'

export interface StoreCardProps {
  name: string
  type?: string
  rarity?:
  | 'custom'
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
  | 'common'
  image: string
  priceType?: 'none' | 'vBucks' | 'battlepass' | 'money' | 'more'
  tag?: boolean
  tagText?: string
  banner?: 'none' | 'v1' | 'v2'
  bannerText?: string
  price?: string
  fullPrice?: string
  passText?: string
  passType?: 'free' | 'paid'
  money?: string
  moreText?: string
  owned?: boolean
  ownedText?: string
  customBackground?: CSSProperties | undefined
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
