interface Dates {
  start: string
  end: string
}

export interface EventCardProps {
  live?: boolean
  lock?: boolean
  region?: 'none' | 'EU' | 'NAE' | 'NAW' | 'BR' | 'OCE' | 'ASIA' | 'ME'
  topText?: string
  bottomText?: string
  schedule?: string
  posterFront: string
  posterBack: string
  shortDescription?: string
  dates?: Dates[]
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
