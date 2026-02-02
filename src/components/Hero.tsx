"use client";

import React from 'react';
import Image from 'next/image';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
    const [scale, setScale] = React.useState(1);
    const [mobileScale, setMobileScale] = React.useState(1);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);

        const handleResize = () => {
            const LEFT_PADDING = 10;
            const RIGHT_PADDING = 30;
            const TOTAL_PADDING = LEFT_PADDING + RIGHT_PADDING;

            if (window.innerWidth >= 768) {
                // Desktop Scale calculation
                const availableWidth = window.innerWidth - TOTAL_PADDING;
                const s = Math.min(availableWidth / 1500, 1);
                setScale(s);
                setMobileScale(1); // Reset mobile scale
            } else {
                // Mobile Scale calculation
                // Base width is reduced to 410px to make components look larger
                const availableWidth = window.innerWidth - TOTAL_PADDING;
                const ms = availableWidth / 410;
                setMobileScale(ms);
                setScale(1); // Reset desktop scale
            }
        };

        // Initial calc
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!mounted) {
        return <section className="w-full relative bg-black overflow-hidden" style={{ height: '940px', minHeight: '940px', margin: '0 auto' }} />;
    }

    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
    const sectionHeight = isDesktop ? 940 * scale : 840 * mobileScale;

    return (
        <section
            className="w-full relative bg-black overflow-hidden flex items-center justify-center"
            style={{
                height: `${sectionHeight}px`,
                minHeight: `${sectionHeight}px`,
                margin: '0 auto'
            }}
        >
            {/* 
              ========================================
              DESKTOP LAYOUT (Scaled 1440px Fixed) 
              ========================================
             */}
            <div
                className="hidden md:block absolute top-0 origin-top-left transition-transform duration-100 ease-linear"
                style={{
                    width: '1440px',
                    height: '100%',
                    left: '50px', // Shifted to respect reduced HORIZONTAL_PADDING
                    transform: `scale(${scale})`,
                }}
            >
                {/* Grid Background Container - STRICTLY BOTTOM LAYER */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* Desktop Grid */}
                    <div
                        className="absolute"
                        style={{
                            width: '826.89px',
                            height: '504.14px',
                            top: '290.86px',
                            left: '316.22px',
                            opacity: 0.5,
                            border: '1.12px solid #313131',
                            backgroundImage: `
                                linear-gradient(to right, #313131 1px, transparent 1px),
                                linear-gradient(to bottom, #313131 1px, transparent 1px)
                            `,
                            backgroundSize: '45.94px 45.94px',
                            zIndex: -10, // Force behind everything
                        }}
                    />
                </div>

                {/* Logo Section - Desktop */}
                <div className="absolute z-30 top-[56px] left-[20px] w-[217px] h-[37px]">
                    <Image
                        src="/haca_logo.svg"
                        alt="Haca Logo"
                        width={217}
                        height={37}
                        priority
                        className="object-contain"
                    />
                </div>

                {/* Main Heading Section - Desktop */}
                <div
                    className={`${inter.className} absolute flex flex-col gap-[10px] p-[10px] z-20`}
                    style={{
                        top: '159px',
                        left: '3px',
                        width: '538px',
                        height: '204px',
                    }}
                >
                    <h1
                        className="font-semibold"
                        style={{
                            color: '#D5D5D5',
                            width: '518px',
                            height: '184px',
                            fontSize: '100px',
                            lineHeight: '92px',
                            letterSpacing: '-10.38px',
                            margin: 0,
                        }}
                    >
                        From Design <br />
                        to Identity.
                    </h1>
                </div>

                {/* Photo Design Group - Desktop */}
                <div className="absolute z-10 w-full h-full">
                    {/* Photo 1 */}
                    <div className="absolute" style={{ top: '246px', left: '959.11px', width: '229.01px', height: '222.01px' }}>
                        <Image
                            src="/photo 1.svg"
                            alt="Design Photo 1"
                            width={249}
                            height={222}
                            priority
                            className="object-contain"
                            style={{ objectFit: 'contain', objectPosition: 'left center' }}
                        />
                    </div>

                    {/* Photo 2 */}
                    <div className="absolute" style={{ top: '392.03px', left: '511.5px', width: '253.44px', height: '95.40px' }}>
                        <Image
                            src="/photo 2.svg"
                            alt="Design Photo 2"
                            width={253}
                            height={95}
                            className="object-contain"
                        />
                    </div>

                    {/* Photo 3 */}
                    <div className="absolute" style={{ top: '507.26px', left: '848.42px', width: '144.09px', height: '139.69px' }}>
                        <Image
                            src="/photo 3.svg"
                            alt="Design Photo 3"
                            width={144}
                            height={140}
                            className="object-contain"
                        />
                    </div>

                    {/* Photo 4 */}
                    <div className="absolute" style={{ top: '610.18px', left: '252px', width: '284.23px', height: '135.13px' }}>
                        <Image
                            src="/photo 4.svg"
                            alt="Design Photo 4"
                            width={284}
                            height={135}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Text Labels - Desktop */}
                <div className={`absolute ${inter.className} z-20`}>
                    {/* Text 1: Live online classes */}
                    <div
                        className="flex items-center justify-center"
                        style={{
                            position: 'absolute',
                            top: '311.1px',
                            left: '698.87px',
                            width: '221.70px',
                            height: '53.87px',
                            padding: '14.5px 16.58px',
                            gap: '10.36px',
                            background: '#000000',
                        }}
                    >
                        <span style={{
                            fontSize: '14.07px',
                            lineHeight: '45.06px',
                            fontWeight: 600,
                            color: '#D5D5D5',
                            letterSpacing: '0%',
                        }}>
                            Live online classes
                        </span>
                    </div>

                    {/* Text 2: Working brand mentors */}
                    <div
                        className="flex items-center justify-center"
                        style={{
                            position: 'absolute',
                            top: '523.1px',
                            left: '394.51px',
                            width: '269.35px',
                            height: '53.87px',
                            padding: '14.5px 16.58px',
                            gap: '10.36px',
                            background: '#000000',
                        }}
                    >
                        <span style={{
                            fontSize: '14.07px',
                            lineHeight: '24.86px',
                            fontWeight: 600,
                            color: '#D5D5D5',
                            letterSpacing: '0%',
                        }}>
                            Working brand mentors
                        </span>
                    </div>

                    {/* Text 3: One complete brand identity project */}
                    <div
                        className="flex items-center justify-center"
                        style={{
                            position: 'absolute',
                            top: '677.92px',
                            left: '656.65px',
                            width: '394.70px',
                            height: '53.87px',
                            padding: '14.5px 16.58px',
                            gap: '10.36px',
                            background: '#000000',
                        }}
                    >
                        <span style={{
                            fontSize: '14.07px',
                            lineHeight: '24.86px',
                            fontWeight: 600,
                            color: '#D5D5D5',
                            letterSpacing: '0%',
                        }}>
                            One complete brand identity project
                        </span>
                    </div>

                    {/* Program Label: 4-Week Branding & Identity... */}
                    <div
                        className="flex flex-col justify-center"
                        style={{
                            position: 'absolute',
                            top: '748px',
                            left: '1010px',
                            width: '389px',
                            height: '88px',
                            padding: '10px',
                            gap: '0px',
                        }}
                    >
                        <span style={{
                            fontFamily: 'Inter',
                            fontWeight: 700,
                            fontSize: '28px',
                            lineHeight: '34px',
                            letterSpacing: '-0.8px',
                            color: '#FFFFFF',
                            whiteSpace: 'nowrap',
                        }}>
                            4-Week Branding & Identity
                        </span>
                        <span style={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            fontSize: '28px',
                            lineHeight: '34px',
                            letterSpacing: '-0.8px',
                            color: '#888888',
                            whiteSpace: 'nowrap',
                        }}>
                            Design Mastery Program
                        </span>
                    </div>
                </div>

                {/* Enquire Now Button - Desktop */}
                <div
                    className="absolute cursor-pointer hover:opacity-80 transition-opacity"
                    style={{
                        top: '805px',
                        left: '73px',
                        width: '144.54px',
                        height: '52.54px',
                        opacity: 1,
                        zIndex: 40,
                    }}
                >
                    <Image
                        src="/Enquire Now (white).svg"
                        alt="Enquire Now"
                        width={145}
                        height={53}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* 
              ========================================
              MOBILE LAYOUT (Scaled Canvas for Responsiveness) 
              ========================================
             */}
            <div
                className="block md:hidden absolute top-0 origin-top-left transition-transform duration-100 ease-linear"
                style={{
                    width: '410px', // Matched to scale base
                    height: '100%',
                    left: '10px',
                    transform: `scale(${mobileScale})`,
                }}
            >
                {/* Grid Background Container - Mobile */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div
                        className="absolute transition-all duration-500 ease-in-out"
                        style={{
                            width: '390px',
                            height: '504px',
                            top: '153.07px',
                            left: '10px',
                            opacity: 1,
                            border: '1.12px solid #313131',
                            backgroundImage: `
                                linear-gradient(to right, #313131 1px, transparent 1px),
                                linear-gradient(to bottom, #313131 1px, transparent 1px)
                            `,
                            backgroundSize: '46px 46px',
                            zIndex: -10,
                        }}
                    />
                </div>

                {/* Logo - Mobile */}
                <div className="absolute z-30 top-[16px] left-[10px] w-[140px] h-[35px]">
                    <Image
                        src="/haca_logo.svg"
                        alt="Haca Logo"
                        width={140}
                        height={35}
                        priority
                        className="object-contain"
                    />
                </div>

                {/* Heading - Mobile */}
                <div
                    className={`${inter.className} absolute flex flex-col gap-[10px] z-20`}
                    style={{
                        top: '83px',
                        left: '10px',
                        width: '300px',
                        height: '90px',
                    }}
                >
                    <h1
                        className="font-semibold"
                        style={{
                            color: '#D5D5D5',
                            fontSize: '48px',
                            lineHeight: '44px',
                            letterSpacing: '-3px',
                            margin: 0,
                        }}
                    >
                        From Design <br />
                        to Identity.
                    </h1>
                </div>

                {/* Photo Design Group - Mobile */}
                <div className="absolute z-10 w-full h-full">
                    {/* Photo 1 - Mobile */}
                    <div className="absolute" style={{ top: '130px', left: '280px', width: '145px', height: '140px' }}>
                        <Image
                            src="/photo 1.svg"
                            alt="Design Photo 1"
                            width={145}
                            height={140}
                            className="object-contain"
                        />
                    </div>
                    {/* Photo 2 - Mobile */}
                    <div className="absolute" style={{ top: '264px', left: '20px', width: '160px', height: '60px' }}>
                        <Image
                            src="/photo 2.svg"
                            alt="Design Photo 2"
                            width={160}
                            height={60}
                            className="object-contain"
                        />
                    </div>
                    {/* Photo 3 - Mobile */}
                    <div className="absolute" style={{ top: '335px', left: '255px', width: '145px', height: '140px' }}>
                        <Image
                            src="/photo 3.svg"
                            alt="Design Photo 3"
                            width={145}
                            height={140}
                            className="object-contain"
                        />
                    </div>
                    {/* Photo 4 - Mobile */}
                    <div className="absolute" style={{ top: '532px', left: '10px', width: '200px', height: '95px' }}>
                        <Image
                            src="/photo 4.svg"
                            alt="Design Photo 4"
                            width={200}
                            height={95}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Text Labels - Mobile */}
                <div className={`absolute ${inter.className} z-20`}>
                    {/* Text 1 */}
                    <div
                        className="flex items-center justify-center"
                        style={{
                            position: 'absolute',
                            top: '197px',
                            left: '40px',
                            width: '150px',
                            height: '24px',
                            background: '#000000',
                        }}
                    >
                        <span style={{
                            fontSize: '16px',
                            lineHeight: '45.06px',
                            fontWeight: 600,
                            color: '#D5D5D5',
                            letterSpacing: '0%',
                            whiteSpace: 'nowrap',
                        }}>
                            Live online classes
                        </span>
                    </div>

                    {/* Text 2 */}
                    <div
                        className="flex items-center justify-center"
                        style={{
                            position: 'absolute',
                            top: '365px',
                            left: '30px',
                            width: '190px',
                            height: '30px',
                            background: '#000000',
                        }}
                    >
                        <span style={{
                            fontSize: '16px',
                            lineHeight: '24.86px',
                            fontWeight: 600,
                            color: '#D5D5D5',
                            letterSpacing: '0%',
                            whiteSpace: 'nowrap',
                        }}>
                            Working brand mentors
                        </span>
                    </div>

                    {/* Text 3 */}
                    <div
                        className="flex items-center justify-center"
                        style={{
                            position: 'absolute',
                            top: '490px',
                            left: '80px',
                            width: '290px',
                            height: '30px',
                            background: '#000000',
                        }}
                    >
                        <span style={{
                            fontSize: '16px',
                            lineHeight: '24.86px',
                            fontWeight: 600,
                            color: '#D5D5D5',
                            letterSpacing: '0%',
                            whiteSpace: 'nowrap',
                        }}>
                            One complete brand identity project
                        </span>
                    </div>

                    {/* Program Label - Mobile */}
                    <div
                        className="flex flex-col justify-center"
                        style={{
                            position: 'absolute',
                            top: '640px',
                            left: '175px',
                            width: '300px',
                        }}
                    >
                        <span style={{
                            fontFamily: 'Inter',
                            fontWeight: 700,
                            fontSize: '20px',
                            lineHeight: '24px',
                            letterSpacing: '-0.8px',
                            color: '#FFFFFF',
                            whiteSpace: 'nowrap',
                        }}>
                            4-Week Branding & Identity
                        </span>
                        <span style={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            fontSize: '20px',
                            lineHeight: '24px',
                            letterSpacing: '-0.8px',
                            color: '#888888',
                            whiteSpace: 'nowrap',
                        }}>
                            Design Mastery Program
                        </span>
                    </div>
                </div>

                {/* Enquire Now Button - Mobile */}
                <div
                    className="absolute cursor-pointer hover:opacity-80 transition-opacity"
                    style={{
                        top: '720px',
                        left: '130px',
                        width: '160px',
                        height: '60px',
                        opacity: 1,
                        zIndex: 40,
                    }}
                >
                    <Image
                        src="/Enquire Now (white).svg"
                        alt="Enquire Now"
                        width={160}
                        height={60}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

