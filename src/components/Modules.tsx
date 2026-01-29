"use client";

import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Modules = () => {
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

    const rows = [
        {
            week: "Week 01",
            title: "Brand Foundation",
            description: "You’ll understand what branding really means, how to read a client brief, and how to use typography and color to create meaning."
        },
        {
            week: "Week 02",
            title: "Research & Strategy",
            description: "You’ll learn how to research brands, explore ideas, and turn raw thoughts into a clear direction that makes your design decisions feel solid."
        },
        {
            week: "Week 03",
            title: "Logo & Identity Design",
            description: "You’ll move from sketches to digital logos and build a full identity system that looks consistent, intentional, and strategically aligned."
        },
        {
            week: "Week 04",
            title: "Professional Branding",
            description: "You’ll refine your project, improve how you talk to clients, and shape a personal brand that makes you stand out."
        },
        {
            week: "And…",
            title: "You finish with",
            description: "A strong, portfolio-ready brand identity that many of our students use to refresh their portfolios, step into better roles, and get noticed for the right reasons."
        },
    ];

    if (!mounted) {
        return <section className="w-full relative bg-black overflow-hidden" style={{ height: '1050px', minHeight: '1050px', margin: '0 auto' }} />;
    }

    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
    const sectionHeight = isDesktop ? 1050 * scale : 820 * mobileScale;

    return (
        <section
            className="w-full relative bg-black overflow-hidden"
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
                className="hidden md:block absolute top-0 origin-top-left transition-transform duration-100 ease-linear"
                style={{
                    width: '1440px',
                    height: '1050px',
                    left: '10px',
                    transform: `scale(${scale})`,
                }}
            >
                {/* Heading */}
                <h2
                    className={`${inter.className} absolute`}
                    style={{
                        width: '368px',
                        height: '168px',
                        top: '76px',
                        left: '54px',
                        fontWeight: 600,
                        fontSize: '100px',
                        lineHeight: '168px',
                        letterSpacing: '-8px',
                        color: '#D5D5D5',
                        margin: 0,
                    }}
                >
                    Modules
                </h2>

                {/* Table Container */}
                <div
                    className="absolute flex flex-col"
                    style={{
                        width: '923px',
                        height: '712px',
                        top: '217px',
                        left: '457px',
                        gap: '40px',
                    }}
                >
                    {rows.map((row, index) => (
                        <div key={index} style={{ width: '923px', height: '133px', display: 'flex', flexDirection: 'column' }}>
                            {/* Line Component */}
                            <div style={{ width: '923px', height: '1px', backgroundColor: '#313131', marginBottom: '40px' }} />

                            {/* Inner Content Component */}
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '198px' }}>
                                {/* First Col Wrapper (Week + Title) */}
                                <div style={{ display: 'flex', gap: '41px', width: '358px', alignItems: 'baseline' }}>
                                    <span className={inter.className} style={{
                                        width: '67px',
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        lineHeight: '17px',
                                        letterSpacing: '0.1px',
                                        color: '#D5D5D5',
                                    }}>{row.week}</span>

                                    <span className={inter.className} style={{
                                        width: '250px',
                                        fontWeight: 500,
                                        fontSize: '20px',
                                        lineHeight: '25.2px',
                                        color: '#D5D5D5',
                                        whiteSpace: 'nowrap',
                                    }}>{row.title}</span>
                                </div>

                                {/* Description */}
                                <p className={inter.className} style={{
                                    width: '353px',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    lineHeight: '17px',
                                    letterSpacing: '0.1px',
                                    color: '#999999',
                                    margin: 0,
                                }}>
                                    {row.description}
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* Final Bottom Line */}
                    <div style={{ width: '923px', height: '1px', backgroundColor: '#313131' }} />
                </div>
            </div>

            {/* 
              ========================================
              MOBILE LAYOUT 
              ========================================
             */}
            <div
                className="block md:hidden absolute top-0 origin-top-left transition-transform duration-100 ease-linear"
                style={{
                    width: '410px',
                    height: '820px',
                    left: '10px',
                    transform: `scale(${mobileScale})`,
                }}
            >
                {/* Heading */}
                <h2
                    className={`${inter.className} absolute`}
                    style={{
                        width: '343px',
                        height: '37px',
                        top: '40px',
                        left: '16px',
                        fontWeight: 600,
                        fontSize: '40px',
                        lineHeight: '37px',
                        letterSpacing: '-3px',
                        color: '#D5D5D5',
                        margin: 0,
                    }}
                >
                    Modules
                </h2>

                {/* Table Container */}
                <div
                    className="absolute flex flex-col"
                    style={{
                        width: '343px',
                        height: '688px',
                        top: '100px',
                        left: '16px',
                        gap: '20px',
                    }}
                >
                    {rows.map((row, index) => (
                        <div key={index} style={{ width: '343px', height: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {/* Line Component */}
                            <div style={{ width: '343px', height: '1px', backgroundColor: '#313131' }} />

                            {/* Inner Content */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {/* Week and Title Row */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '343px', alignItems: 'baseline' }}>
                                    <span className={inter.className} style={{
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        lineHeight: '17px',
                                        letterSpacing: '0.1px',
                                        color: '#D5D5D5',
                                    }}>{row.week}</span>

                                    <span className={inter.className} style={{
                                        width: '220px',
                                        textAlign: 'right',
                                        fontWeight: 500,
                                        fontSize: '18px',
                                        lineHeight: '25.2px',
                                        color: '#D5D5D5',
                                        whiteSpace: 'nowrap',
                                    }}>{row.title}</span>
                                </div>

                                {/* Description */}
                                <p className={inter.className} style={{
                                    width: '343px',
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    lineHeight: '17px',
                                    letterSpacing: '0.1px',
                                    color: '#999999',
                                    margin: 0,
                                }}>
                                    {row.description}
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* Final Bottom Line */}
                    <div style={{ width: '343px', height: '1px', backgroundColor: '#313131' }} />
                </div>
            </div>
        </section>
    );
};

export default Modules;
