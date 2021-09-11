export interface BattlepassCardProps {
    rarity?:
        | 'darkSeries'
        | 'marvelSeries'
        | 'iconSeries'
        | 'slurpSeries'
        | 'shadowSeries'
        | 'frozenSeries'
        | 'dc'
        | 'lavaSeries'
        | 'gamingSeries'
        | 'starWars'
        | 'legendary'
        | 'epic'
        | 'rare'
        | 'uncommon'
        | 'common';
    tier?: boolean;
    number?: number;
    image?: string;
    free?: boolean;
    text?: string;
    owned?: boolean;
    block?: boolean;
    unknown?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
