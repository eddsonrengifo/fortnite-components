export interface FishCardProps {
  number?: number
  stars?: 1 | 2 | 3
  image?: string
  size?: 'large' | 'small' | 'medium'
  alert?: boolean
  featured?: boolean
  text?: string
  none?: boolean
  unknown?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
