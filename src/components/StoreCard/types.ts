export interface StoreCardProps {
  name?: string
  type?: string
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
    | 'common'
  image?: string
  priceType?: 'none' | 'vBucks' | 'battlepass' | 'money' | 'more'
  tag?: 'none' | 'variants' | 'reactive' | 'builtIn-emote' | 'animated'
  banner?: 'none' | 'v1' | 'v2'
  bannerText?: string
  price?: number
  fullPrice?: number
  passText?: string
  passType?: 'free' | 'paid'
  money?: string
  moreText?: string
  owned?: boolean
  ownedText?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
