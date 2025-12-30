'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Stethoscope, Menu } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { services } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { headerStyles } from './styles';
import { ListItem } from './list-item';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                headerStyles.header,
                isScrolled ? headerStyles.headerScrolled : headerStyles.headerTransparent
            )}
        >
            <div className={headerStyles.container}>
                <Logo />

                {/* Desktop Navigation */}
                <NavigationMenu className={headerStyles.desktopNav}>
                    <NavigationMenuList>
                        {navLinks.map((link) => (
                            <NavigationMenuItem key={link.href}>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            pathname === link.href ? 'bg-accent text-accent-foreground' : 'bg-transparent'
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={headerStyles.navTrigger}>Departments</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className={headerStyles.navContent}>
                                    {services.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={`/services#${component.id}`}
                                        >
                                            {component.shortDescription}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className={headerStyles.actionsWrapper}>
                    <Button asChild className={headerStyles.bookButton}>
                        <Link href="/contact#appointment">
                            <Stethoscope className="mr-2 h-4 w-4" />
                            Book Appointment
                        </Link>
                    </Button>

                    {/* Mobile Navigation Trigger */}
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={headerStyles.mobileTrigger}>
                                <Menu />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className={headerStyles.mobileSheetContent}>
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className={headerStyles.mobileContainer}>
                                <div className={headerStyles.mobileHeader}>
                                    <Logo />
                                </div>
                                <div className={headerStyles.mobileNavWrapper}>
                                    <nav className={headerStyles.mobileNav}>
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={cn(
                                                    headerStyles.mobileLink,
                                                    pathname === link.href ? headerStyles.mobileLinkActive : headerStyles.mobileLinkInactive
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-1" className={headerStyles.accordionItem}>
                                                <AccordionTrigger className={headerStyles.accordionTrigger}>
                                                    Departments
                                                </AccordionTrigger>
                                                <AccordionContent className={headerStyles.accordionContent}>
                                                    <div className={headerStyles.accordionLinksWrapper}>
                                                        {services.map((component) => (
                                                            <Link
                                                                key={component.id}
                                                                href={`/services#${component.id}`}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className={headerStyles.accordionLink}
                                                            >
                                                                {component.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </nav>
                                </div>
                                <div className={headerStyles.mobileFooter}>
                                    <Button asChild className={headerStyles.mobileFooterButton}>
                                        <Link href="/contact#appointment" onClick={() => setIsMobileMenuOpen(false)}>
                                            <Stethoscope className="mr-2 h-4 w-4" />
                                            Book Appointment
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
