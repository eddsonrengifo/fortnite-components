export interface CharacterCardProps {
  number?: number
  image?: string
  star?: boolean
  alert?: boolean
  none?: boolean
  featured?: boolean
  text?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
