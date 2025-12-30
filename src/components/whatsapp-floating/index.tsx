'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { WhatsAppIconProps } from './types';
import { whatsappStyles } from './styles';

const WhatsAppIcon = ({ className }: WhatsAppIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className={cn(whatsappStyles.icon, className)}
    >
        <path
            fill="currentColor"
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 222-99.6 222-222 .1-59.3-25.2-115-67.1-157.1zM223.9 439.6c-33.8 0-66.3-9.1-94.2-25.7l-6.7-4-69.8 18.3L72 372.2l-4.5-7c-18.9-29.8-29.1-64.3-29.1-100.3 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s54.1 81.1 54.1 130.4c.1 101.8-82.7 184.6-184.5 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
        />
    </svg>
);

export function WhatsAppFloating() {
    return (
        <motion.div
            initial={{ scale: 0, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={whatsappStyles.container}
        >
            <Link
                href="https://wa.me/911234567890" // Placeholder number
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className={whatsappStyles.link}
            >
                <WhatsAppIcon />
            </Link>
        </motion.div>
    );
}
