import React from 'react';

export type SiteHeaderProps = {};

export type ListItemProps = React.ComponentPropsWithoutRef<'a'> & {
    title: string;
};
