export interface LockerProps {
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
  size?: 'medium' | 'small'
  image: string
  tag?: 'none' | 'variants' | 'reactive' | 'traversal' | 'animated' | 'synced'
  banner?: 'none' | 'v1' | 'v2'
  bannerText: string
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
