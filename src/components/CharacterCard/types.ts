export interface CharacterProps {
  number?: number
  image?: string
  alert?: boolean
  none?: boolean
  featured?: boolean
  text?: string
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
