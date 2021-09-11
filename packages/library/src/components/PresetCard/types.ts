export interface PresetCardProps {
    name?: string;
    outfit?: 'active' | 'random' | 'none';
    outfitImage?: string;
    backpack?: 'active' | 'random' | 'none';
    backpackImage?: string;
    pickaxe?: 'active' | 'random' | 'none';
    pickaxeImage?: string;
    glider?: 'active' | 'random' | 'none';
    gliderImage?: string;
    wrap?: 'active' | 'random' | 'none';
    wrapImage?: string;
    add?: boolean;
    none?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
