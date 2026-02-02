"use client";

import React from 'react';
import { Inter } from "next/font/google";
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

const Flowchart = () => {
    const [scale, setScale] = React.useState(1);
    const [mobileScale, setMobileScale] = React.useState(1);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);

        const handleResize = () => {
            const LEFT_PADDING = 10;
            const RIGHT_PADDING = 5;
            const TOTAL_PADDING = LEFT_PADDING + RIGHT_PADDING;

            if (window.innerWidth >= 768) {
                const availableWidth = window.innerWidth - TOTAL_PADDING;
                const s = Math.min(availableWidth / 1500, 1);
                setScale(s);
                setMobileScale(1);
            } else {
                const availableWidth = window.innerWidth - TOTAL_PADDING;
                const ms = Math.min(availableWidth / 410, 1);
                setMobileScale(ms);
                setScale(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!mounted) {
        return <section className="w-full relative bg-black overflow-hidden flex items-center justify-center px-[10px]" style={{ height: '705px', minHeight: '705px', margin: '0 auto' }} />;
    }

    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
    const sectionHeight = isDesktop ? 705 * scale : 450 * mobileScale;

    return (
        <section
            className="w-full relative bg-black overflow-hidden flex items-center justify-center px-[10px]"
            style={{
                height: `${sectionHeight}px`,
                minHeight: `${sectionHeight}px`,
                margin: '0 auto',
            }}
        >
            {/* 
              ========================================
              DESKTOP LAYOUT 
              ========================================
             */}
            <div
                className="hidden md:block absolute origin-center transition-transform duration-100 ease-linear"
                style={{
                    width: '1440px',
                    height: '705px',
                    transform: `scale(${scale})`,
                }}
            >
                {/* Flowchart SVG */}
                <div className="absolute" style={{ width: '1376px', height: '705px', top: '0', left: '32px' }}>
                    <Image
                        src="/flowchartdesktop.svg"
                        alt="Flowchart Desktop"
                        width={1376}
                        height={705}
                        priority
                    />
                </div>

                {/* Text Overlay */}
                <h2
                    className={`${inter.className} absolute text-center`}
                    style={{
                        width: '417px',
                        height: '51px',
                        top: '229px',
                        left: '208px',
                        fontWeight: 600,
                        fontSize: '44.8px',
                        lineHeight: '50.6px',
                        letterSpacing: '-3px',
                        color: '#D5D5D5',
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    You’ll Walk Away With
                </h2>
            </div>

            {/* 
              ========================================
              MOBILE LAYOUT 
              ========================================
             */}
            <div
                className="block md:hidden absolute origin-center transition-transform duration-100 ease-linear"
                style={{
                    width: '410px',
                    height: '450px',
                    transform: `scale(${mobileScale})`,
                }}
            >
                {/* Flowchart SVG - Mobile */}
                <div className="absolute" style={{ width: '330.65px', height: '399.49px', top: '25px', left: '40px' }}>
                    <Image
                        src="/flowchartmobile.svg"
                        alt="Flowchart Mobile"
                        width={331}
                        height={399}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Flowchart;

