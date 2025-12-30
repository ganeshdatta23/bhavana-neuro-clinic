import React from 'react';
import { BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LogoProps } from './types';
import { logoStyles } from './styles';

export function Logo({ className }: LogoProps) {
    return (
        <Link href="/" className={cn(logoStyles.link, className)}>
            <BrainCircuit className={logoStyles.icon} />
            <div className={logoStyles.textWrapper}>
                <span className={logoStyles.title}>
                    Bhavana Neuro
                </span>
                <span className={logoStyles.subtitle}>Clinic</span>
            </div>
        </Link>
    );
}
