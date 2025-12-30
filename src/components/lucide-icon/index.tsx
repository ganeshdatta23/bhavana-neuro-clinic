'use client';
import { icons } from 'lucide-react';
import { LucideIconProps } from './types';

export const LucideIcon = ({ name, ...props }: LucideIconProps) => {
    const Icon = icons[name as keyof typeof icons];

    if (!Icon) {
        return null;
    }

    return <Icon {...props} />;
};
