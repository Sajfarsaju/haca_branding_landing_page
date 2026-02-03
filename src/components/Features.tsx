'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Features = () => {
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
                const ms = availableWidth / 410;
                setMobileScale(ms);
                setScale(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const points = [
        "A complete, end-to-end branding process",
        "Mentorship from working brand designers",
        "Built for working designers",
        "Learn by doing from day one",
        "Discussion-based learning",
        "Support Beyond Class Hours"
    ];

    if (!mounted) {
        return <section className="w-full relative bg-black overflow-hidden" style={{ height: '500px', minHeight: '500px', margin: '0 auto' }} />;
    }

    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
    const sectionHeight = isDesktop ? 500 * scale : 550 * mobileScale;

    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 20
            }
        }
    };

    const titleVariants: Variants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const gridVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 0.5,
            transition: {
                duration: 1.5,
                ease: "linear"
            }
        }
    };

    return (
        <section
            className="w-full relative bg-black overflow-hidden flex items-center justify-center"
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
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="hidden md:block absolute top-0 origin-top-left"
                style={{
                    width: '1440px',
                    height: '500px',
                    left: '10px',
                    transform: `scale(${scale})`,
                }}
            >
                {/* Heading */}
                <motion.h2
                    className={`${inter.className} absolute text-center flex items-center justify-center`}
                    style={{
                        width: '1044px',
                        height: '51px',
                        top: '24px',
                        left: '198px',
                        fontWeight: 600,
                        fontSize: '44.8px',
                        lineHeight: '50.6px',
                        letterSpacing: '-3.0px',
                        color: '#D5D5D5',
                        margin: 0,
                    }}
                    variants={titleVariants}
                >
                    {'{ Why Designers Choose This Program }'}
                </motion.h2>

                {/* Grid Design - Desktop Only */}
                <motion.div
                    className="absolute"
                    style={{
                        width: '1077.34px',
                        height: '293.82px',
                        top: '124px',
                        left: '181px',
                        border: '1.12px solid #313131',
                        pointerEvents: 'none',
                        zIndex: 0,
                    }}
                    variants={gridVariants}
                >
                    {/* Horizontal Lines */}
                    {[...Array(7)].map((_, i) => (
                        <div
                            key={`h-${i}`}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '1.12px',
                                backgroundColor: '#313131',
                                top: `${i * 48.97}px`,
                                left: 0,
                            }}
                        />
                    ))}
                    {/* Vertical Lines */}
                    {[...Array(23)].map((_, i) => (
                        <div
                            key={`v-${i}`}
                            style={{
                                position: 'absolute',
                                width: '1.12px',
                                height: '100%',
                                backgroundColor: '#313131',
                                top: 0,
                                left: `${i * 48.97}px`,
                            }}
                        />
                    ))}
                </motion.div>

                {/* Points Container - Desktop Refined */}
                <div
                    className="absolute flex flex-col items-center justify-center"
                    style={{
                        width: '1440px',
                        height: '293.82px',
                        top: '124px',
                        left: '0px',
                        gap: '20px',
                        zIndex: 10,
                    }}
                >
                    {/* First Line - 3 Points */}
                    <div
                        className="flex justify-center gap-[20px]"
                        style={{
                            width: '100%',
                        }}
                    >
                        {points.slice(0, 3).map((point, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, borderColor: '#FFFFFF' }}
                                className={`${inter.className} flex items-center justify-center border border-[#BBBBBBCC] rounded-[10px] bg-black`}
                                style={{
                                    width: 'fit-content',
                                    height: '91px',
                                    paddingLeft: '40px',
                                    paddingRight: '40px',
                                    boxSizing: 'border-box',
                                    flexShrink: 0,
                                    cursor: 'default'
                                }}
                            >
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                    lineHeight: '50.6px',
                                    letterSpacing: '-0.8px',
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                    whiteSpace: 'nowrap',
                                }}>
                                    {point}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                    {/* Second Line - Remaining 3 Points */}
                    <div
                        className="flex justify-center gap-[20px]"
                        style={{
                            width: '100%',
                        }}
                    >
                        {points.slice(3, 6).map((point, i) => (
                            <motion.div
                                key={i + 3}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, borderColor: '#FFFFFF' }}
                                className={`${inter.className} flex items-center justify-center border border-[#BBBBBBCC] rounded-[10px] bg-black`}
                                style={{
                                    width: 'fit-content',
                                    height: '91px',
                                    paddingLeft: '40px',
                                    paddingRight: '40px',
                                    boxSizing: 'border-box',
                                    flexShrink: 0,
                                    cursor: 'default'
                                }}
                            >
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                    lineHeight: '50.6px',
                                    letterSpacing: '-0.8px',
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                    whiteSpace: 'nowrap',
                                }}>
                                    {point}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* 
              ========================================
              MOBILE LAYOUT 
              ========================================
             */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
                className="block md:hidden absolute top-0 origin-top-left"
                style={{
                    width: '410px',
                    height: '550px',
                    left: '10px',
                    transform: `scale(${mobileScale})`,
                }}
            >
                {/* Heading */}
                <motion.h2
                    className={`${inter.className} absolute flex items-center justify-center text-center`}
                    style={{
                        width: '343px',
                        height: '64px',
                        top: '40px',
                        left: '16px',
                        fontWeight: 600,
                        fontSize: '26px',
                        lineHeight: '32px',
                        letterSpacing: '-2px',
                        color: '#D5D5D5',
                        margin: 0,
                    }}
                    variants={titleVariants}
                >
                    Why Designers Choose <br /> This Program
                </motion.h2>

                {/* Points Container - Mobile */}
                <div
                    className="absolute flex flex-col items-start"
                    style={{
                        width: '343px',
                        height: 'auto',
                        top: '144px',
                        left: '16px',
                        gap: '16px',
                    }}
                >
                    {points.map((point, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className={`${inter.className} flex items-center border border-[#BBBBBBCC] rounded-[10px] bg-[#000000]`}
                            style={{
                                width: 'fit-content',
                                padding: '0 20px',
                                height: '42px',
                                whiteSpace: 'nowrap',
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '21px',
                                letterSpacing: '-0.8px',
                                color: '#D5D5D5',
                                marginLeft: '0',
                            }}
                        >
                            {point}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Features;
