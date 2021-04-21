export interface BattlepassProps {
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
  tier?: number
  image: string
  free?: boolean
  freeText: string
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
