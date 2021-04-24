export interface FishProps {
  number?: number
  stars?: 1 | 2 | 3
  image?: string
  size?: 'small' | 'medium' | 'large'
  alert?: boolean
  featured?: boolean
  text?: string
  none?: boolean
  unknown?: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
