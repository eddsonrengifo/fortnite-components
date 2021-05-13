export interface LockerProps {
  rarity?:
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
    | 'music'
    | 'loadingscreen'
  favorite?: boolean
  random?: boolean
  none?: boolean
  conflict?: boolean
  animation?: boolean
  image: string
  tag?: boolean
  alert?: boolean
  items?: number
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
