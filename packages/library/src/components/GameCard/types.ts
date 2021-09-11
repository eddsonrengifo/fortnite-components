import { MouseEvent as ReactMouseEvent } from 'react'

export interface GameCardProps {
  title?: string
  teams?: string
  epic?: boolean
  image?: string
  onClick?: (event: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void
}
