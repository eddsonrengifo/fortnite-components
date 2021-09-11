import { MouseEvent as ReactMouseEvent } from 'react';

export interface ButtonProps {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    style?: 'normal' | 'yellow';
    onClick?: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
