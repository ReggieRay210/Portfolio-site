'use client';
import './globals.css';
import type { Metadata }
    from 'next';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });
const layoutColor = 'min-h-screen bg-gradient-to-br from-[#2B66F7] from-0% via-[#9A557D] via-50% to-[#FF4303] to-100%'

const metadata: Metadata = {
    title: 'Reginald Griffin II | Portfolio Page',
    description: 'Portfolio page'
};

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 50);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    if (!visible)
        return null;

    return (
        <button onClick={
            () => window.scrollTo({ top: 0, behavior: 'smooth' })
        }className='fixed z-50' ><img width="50" height="50" src="https://img.icons8.com/ios/50/circled-chevron-up.png" alt="circled-chevron-up" /></button>
    );
}

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/x-icon" href="public/favicon-32x32.png" />
            </head>
            <body className={
                `scroll-smooth text-white text-center mx-2 ${layoutColor}${inter.className
                }`
            }>
                {children}
                <ScrollToTop />
            </body>
        </html>
    );
}
