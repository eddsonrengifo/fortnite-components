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
  type?:
    | 'outfit'
    | 'backpack'
    | 'pickaxe'
    | 'glider'
    | 'contrail'
    | 'emote'
    | 'wrap'
    | 'bannertoken'
    | 'music'
    | 'loadingscreen'
  favorite?: boolean
  random?: boolean
  none?: boolean
  image: string
  tag?: boolean
  alert?: boolean
  newItems?: number
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
