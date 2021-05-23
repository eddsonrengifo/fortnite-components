export interface LockerCardProps {
  image: string
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
  tag?: boolean
  favorite?: boolean
  random?: boolean
  none?: boolean
  alert?: boolean
  items?: number
  conflict?: boolean
  animation?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
