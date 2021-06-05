export interface ButtonProps {
  label?: string
  fullWidth?: boolean
  size?: 'small' | 'medium' | 'large'
  style?:
    | 'lightblue'
    | 'blue'
    | 'yellow'
    | 'orange'
    | 'white'
    | 'black'
    | 'custom'
  textColor?: ''
  bgColor?: ''
  borderColor?: ''
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
