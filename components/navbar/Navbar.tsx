import Link from 'next/link'
import React from 'react'
import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'

export const Navbar = () => {

    const menuItems = [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Pricing',
            href: '/pricing'
        },
    ];

    return (   
        <nav className={styles.menu_container}>
            {
                menuItems.map((res) => <ActiveLink key={res.href} text={res.text} href={res.href} />)
            }
        </nav>
    )
}
