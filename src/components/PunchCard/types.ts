export interface PunchCardProps {
  title?: string
  subtitle?: string
  time?: string
  image?: string
  color?: string
  bgTop?: string
  bgBottom?: string
  quests?: Items[]
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

interface Items {
  text?: string
  max?: number
  image?: string
}
