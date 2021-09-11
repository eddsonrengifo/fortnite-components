import { ReactNode } from 'react';

interface Tags {
    tag?: string;
    name?: string;
    minor?: boolean;
}

export interface DefaultLayoutProps {
    children: ReactNode;
    section?: boolean;
    right?: boolean;
    tags?: Tags[];
}
