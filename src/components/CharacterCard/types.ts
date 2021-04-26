export interface CharacterProps {
  number?: number
  image?: string
  alert?: boolean
  featured?: boolean
  text?: string
  none?: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
