export interface AchievementCardProps {
  name: string
  image: string
  description: string
  time: string
  topColor?: string
  bottomColor?: string
  imageColor?: string
  topBackground?: string
  bottomBackground?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
