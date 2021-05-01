export interface PresetProps {
  name: string
  outfit?: 'active' | 'random' | 'none'
  outfitImage?: string
  backpack?: 'active' | 'random' | 'none'
  backpackImage?: string
  pickaxe?: 'active' | 'random' | 'none'
  pickaxeImage?: string
  glider?: 'active' | 'random' | 'none'
  gliderImage?: string
  wrap?: 'active' | 'random' | 'none'
  wrapImage?: string
  none?: boolean
  add?: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
