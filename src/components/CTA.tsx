"use client";

import React from 'react';
import { Inter } from "next/font/google";
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

const CTA = () => {
    const [scale, setScale] = React.useState(1);
    const [mobileScale, setMobileScale] = React.useState(1);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                const s = Math.min(window.innerWidth / 1440, 1);
                setScale(s);
                setMobileScale(1);
            } else {
                // Scale proportionally from 410px base to current width
                const ms = window.innerWidth / 410;
                setMobileScale(ms);
                setScale(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!mounted) {
        return <section className="w-full relative bg-white overflow-hidden" style={{ height: '735px', minHeight: '735px', margin: '0 auto' }} />;
    }

    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
    const sectionHeight = isDesktop ? 735 * scale : 520 * mobileScale;

    return (
        <section
            className="w-full relative bg-white overflow-hidden flex items-center justify-center"
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
                    height: '735px',
                    left: '0px',
                    transform: `scale(${scale})`,
                }}
            >
                {/* Text Container */}
                <div
                    style={{
                        position: 'absolute',
                        width: '477px',
                        height: '348px',
                        top: '67px',
                        left: '59px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                        zIndex: 3,
                    }}
                >
                    {/* Upper Container (Heading + Subtext) */}
                    <div
                        style={{
                            width: '734px',
                            height: '254px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                        }}
                    >
                        {/* Heading */}
                        <h2
                            className={inter.className}
                            style={{
                                width: '757px',
                                height: '208px',
                                fontWeight: 600,
                                fontSize: '70px',
                                lineHeight: '70px',
                                letterSpacing: '-3px',
                                color: '#000000',
                                margin: 0,
                            }}
                        >
                            You can keep guessing.<br />
                            or you can start the <br />
                            process.
                        </h2>

                        {/* Subtext */}
                        <p
                            className={inter.className}
                            style={{
                                width: '734px',
                                height: '22px',
                                fontWeight: 500,
                                fontSize: '20px',
                                lineHeight: '110%',
                                letterSpacing: '0%',
                                color: '#000000',
                                margin: 0,
                            }}
                        >
                            Apply Now and Reserve Your Seat
                        </p>
                    </div>

                    {/* Button */}
                    <div
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        style={{
                            width: 'fit-content',
                            height: 'fit-content',
                        }}
                    >
                        <Image
                            src="/Enquire Now (black).svg"
                            alt="Enquire Now"
                            width={177}
                            height={64}
                        />
                    </div>
                </div>

                {/* Photo Group with Decorative Elements - Bottom Right */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        width: '862px',
                        height: '668px',
                    }}
                >
                    {/* Sun Design (Behind Photo - positioned relative to photo) */}
                    <div
                        className="hidden md:block"
                        style={{
                            position: 'absolute',
                            width: '311px',
                            height: '311px',
                            top: '-80px',
                            right: '-60px',
                            transform: 'rotate(20deg)',
                            zIndex: 0,
                        }}
                    >
                        <Image
                            src="/sun.svg"
                            alt="Sun decoration"
                            width={311}
                            height={311}
                        />
                    </div>

                    {/* Block Design (Behind Photo - positioned relative to photo) */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '166px',
                            height: '166px',
                            top: '270px',
                            right: '318px',
                            zIndex: 1,
                        }}
                    >
                        <Image
                            src="/block.svg"
                            alt="Block decoration"
                            width={166}
                            height={166}
                        />
                    </div>

                    {/* Photo */}
                    <Image
                        src="/the girls photo.png"
                        alt="Program participants"
                        width={862}
                        height={668}
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            width: '862px',
                            height: '668px',
                            objectFit: 'contain',
                            objectPosition: 'bottom right',
                            zIndex: 2,
                        }}
                    />
                </div>
            </div>

            {/* 
              ========================================
              MOBILE LAYOUT (Scales from 410px base)
              ========================================
             */}
            <div
                className="block md:hidden absolute top-0 left-0 origin-top-left transition-transform duration-100 ease-linear"
                style={{
                    width: '410px',
                    height: '520px',
                    transform: `scale(${mobileScale})`,
                }}
            >
                {/* Text Container */}
                <div
                    style={{
                        position: 'absolute',
                        width: '345px',
                        height: '188.92px',
                        top: '31px',
                        left: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14.1px',
                        zIndex: 3,
                    }}
                >
                    {/* Upper Container (Heading + Subtext) */}
                    <div
                        style={{
                            width: '345px',
                            height: '124.28px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '11.28px',
                        }}
                    >
                        {/* Heading */}
                        <h2
                            className={inter.className}
                            style={{
                                width: '355.81px',
                                height: '98px',
                                fontWeight: 600,
                                fontSize: '30px',
                                lineHeight: '32.9px',
                                letterSpacing: '-1.41px',
                                color: '#000000',
                                margin: 0,
                            }}
                        >
                            You can keep guessing.<br />
                            or you can start the <br />
                            process.
                        </h2>

                        {/* Subtext */}
                        <p
                            className={inter.className}
                            style={{
                                width: '345px',
                                height: '15px',
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '110%',
                                letterSpacing: '0%',
                                color: '#000000',
                                margin: 0,
                            }}
                        >
                            Apply Now and Reserve Your Seat
                        </p>
                    </div>

                    {/* Button */}
                    <div
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        style={{
                            width: 'fit-content',
                            height: 'fit-content',
                        }}
                    >
                        <Image
                            src="/Enquire Now (black).svg"
                            alt="Enquire Now"
                            width={133}
                            height={51}
                        />
                    </div>
                </div>

                {/* Photo Group with Decorative Elements - Bottom Left (Sticky) */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '410px',
                        height: '359px',
                    }}
                >
                    {/* Sun Design (Behind Photo - positioned relative to photo) */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '133px',
                            height: '71px',
                            top: '30px',
                            right: '-33px',
                            transform: 'rotate(20deg)',
                            zIndex: 0,
                        }}
                    >
                        <Image
                            src="/sun.svg"
                            alt="Sun decoration"
                            width={133}
                            height={71}
                        />
                    </div>

                    {/* Block Design (Behind Photo - positioned relative to photo) */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '68px',
                            height: '68px',
                            top: '180px',
                            right: '150px',
                            zIndex: 1,
                        }}
                    >
                        <Image
                            src="/block.svg"
                            alt="Block decoration"
                            width={68}
                            height={68}
                        />
                    </div>

                    {/* Photo - Sticky to Bottom Left */}
                    <Image
                        src="/the girls photo.png"
                        alt="Program participants"
                        width={410}
                        height={359}
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '410px',
                            height: '359px',
                            objectFit: 'contain',
                            objectPosition: 'bottom left',
                            zIndex: 2,
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default CTA;