interface Dates {
    start?: string;
    end?: string;
}

export interface EventCardProps {
    live?: boolean;
    lock?: boolean;
    region?: 'none' | 'EU' | 'NAE' | 'NAW' | 'BR' | 'OCE' | 'ASIA' | 'ME';
    title?: string;
    line1?: string;
    line2?: string;
    schedule?: string;
    format?: string;
    posterFront?: string;
    posterBack?: string;
    description?: string;
    dates?: Dates[];
    datesColor?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
