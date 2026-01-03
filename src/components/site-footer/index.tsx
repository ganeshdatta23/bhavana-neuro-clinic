import Link from "next/link";
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';
import { services } from "@/lib/data";
import { footerStyles } from "./styles";

export function SiteFooter() {
    const mainLinks = [
        { href: '/about', label: 'About Us' },
        { href: '/doctors', label: 'Our Doctors' },
        { href: '/facilities', label: 'Facilities' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.container}>
                <div className={footerStyles.grid}>
                    <div className={footerStyles.col1}>
                        <Logo className="footer" />
                        <p className={footerStyles.description}>
                            Providing expert, compassionate neurological and multispeciality care.<br />
                            <span className="text-sm">Under Dr. Kagitha Lakshmi Narendra Charitable Trust</span>
                        </p>
                        <div className={footerStyles.socialWrapper}>
                            <Button variant="ghost" size="icon"><Twitter className={footerStyles.icon} /></Button>
                            <Button variant="ghost" size="icon"><Linkedin className={footerStyles.icon} /></Button>
                            <Button variant="ghost" size="icon"><Facebook className={footerStyles.icon} /></Button>
                            <Button variant="ghost" size="icon"><Youtube className={footerStyles.icon} /></Button>
                        </div>
                    </div>
                    <div>
                        <h4 className={footerStyles.columnTitle}>Quick Links</h4>
                        <ul className={footerStyles.list}>
                            {mainLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className={footerStyles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className={footerStyles.columnTitle}>Our Services</h4>
                        <ul className={footerStyles.list}>
                            {services.slice(0, 5).map(service => (
                                <li key={service.id}>
                                    <Link href={`/services#${service.id}`} className={footerStyles.link}>
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className={footerStyles.columnTitle}>Contact Us</h4>
                        <ul className={footerStyles.contactList}>
                            <li className={footerStyles.contactItem}>
                                <span className={footerStyles.contactIcon}>📍</span>
                                <span>Gudi Veedhi, Edepalli, Srinivas Nagar Colony, Machilipatnam, Andhra Pradesh 521001</span>
                            </li>
                            <li className={footerStyles.contactItem}>
                                <span className={footerStyles.contactIcon}>📞</span>
                                <span>+91 78939 59393</span>
                            </li>
                            <li className={footerStyles.contactItem}>
                                <span className={footerStyles.contactIcon}>📧</span>
                                <span>info@bhavananeuro.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Dr. Bhavana Neuro Care. Under Dr. Kagitha Lakshmi Narendra Charitable Trust. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
