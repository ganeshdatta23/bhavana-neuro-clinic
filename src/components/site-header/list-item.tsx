import React from 'react';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { headerStyles } from './styles';
import { ListItemProps } from './types';

export const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    ListItemProps
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(headerStyles.listItemLink, className)}
                    {...props}
                >
                    <div className={headerStyles.listItemTitle}>{title}</div>
                    <p className={headerStyles.listItemDescription}>
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
