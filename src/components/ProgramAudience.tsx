"use client";

import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ProgramAudience = () => {
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
        return <section className="w-full relative bg-black overflow-hidden" style={{ height: '540px', minHeight: '540px', margin: '0 auto', marginTop: '0px' }} />;
    }

    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
    const sectionHeight = isDesktop ? 540 * scale : 1000 * mobileScale;

    return (
        <section
            className="w-full relative bg-black overflow-hidden flex items-center justify-center"
            style={{
                height: `${sectionHeight}px`,
                minHeight: `${sectionHeight}px`,
                margin: '0 auto',
                marginTop: '0px',
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
                    height: '540px',
                    left: '10px',
                    transform: `scale(${scale})`,
                    paddingTop: '40px',
                    paddingBottom: '40px',
                }}
            >
                {/* Heading - Desktop */}
                <div
                    className={`${inter.className} absolute`}
                    style={{
                        width: '1171px',
                        height: '51px',
                        top: '40px',
                        left: '50%; transform: translateX(-50%)', // Centering logic helper
                        textAlign: 'center',
                    }}
                >
                    <h2
                        style={{
                            fontWeight: 600,
                            fontSize: '44.8px',
                            lineHeight: '50.6px',
                            letterSpacing: '-3px',
                            color: '#D5D5D5',
                            margin: 0,
                            width: '1440px',
                            position: 'relative',
                            left: '-134px' // Adjusting to center within 1440px relative to its 1171px spec
                        }}
                    >
                        {'{ This Program Is Perfect If Your Are: }'}
                    </h2>
                </div>

                {/* Points Container - Desktop */}
                <div
                    className="absolute"
                    style={{
                        width: '1171px',
                        height: '339px',
                        top: '121px',
                        left: '134.5px', // (1440 - 1171) / 2
                    }}
                >
                    {/* Point 1 - Desktop */}
                    <div
                        className={`${inter.className} absolute flex items-center justify-center`}
                        style={{
                            width: '235px',
                            height: '170px',
                            top: '0px',
                            left: '0px',
                            padding: '46px 10px',
                            gap: '10px',
                            border: '1px solid #313131',
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',
                            borderBottomLeftRadius: '10px',
                        }}
                    >
                        <p style={{
                            width: '211px',
                            height: '78px',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '26px',
                            letterSpacing: '-0.8px',
                            color: '#D5D5D5',
                            textAlign: 'left',
                            margin: 0,
                        }}>
                            A graphic designer wanting to move into branding
                        </p>
                    </div>

                    {/* Point 2 - Desktop */}
                    <div
                        className={`${inter.className} absolute flex items-center justify-center`}
                        style={{
                            width: '235px',
                            height: '170px',
                            top: '169px', // 290px - 121px
                            left: '234px',
                            padding: '46px 10px',
                            gap: '10px',
                            border: '1px solid #313131',
                            borderBottomRightRadius: '10px',
                            borderBottomLeftRadius: '10px',
                        }}
                    >
                        <p style={{
                            width: '191px',
                            height: '78px',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '26px',
                            letterSpacing: '-0.8px',
                            color: '#D5D5D5',
                            textAlign: 'left',
                            margin: 0,
                        }}>
                            A logo designer tired of working without structure
                        </p>
                    </div>

                    {/* Point 3 - Desktop */}
                    <div
                        className={`${inter.className} absolute flex items-center justify-center`}
                        style={{
                            width: '235px',
                            height: '170px',
                            top: '0px',
                            left: '468px',
                            padding: '46px 10px',
                            gap: '10px',
                            border: '1px solid #313131',
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',
                            borderBottomLeftRadius: '10px',
                        }}
                    >
                        <p style={{
                            width: '211px',
                            height: '78px',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '26px',
                            letterSpacing: '-0.8px',
                            color: '#D5D5D5',
                            textAlign: 'left',
                            margin: 0,
                        }}>
                            A working designer looking to upskill without quitting your job
                        </p>
                    </div>

                    {/* Point 4 - Desktop */}
                    <div
                        className={`${inter.className} absolute flex items-center justify-center`}
                        style={{
                            width: '235px',
                            height: '170px',
                            top: '169px',
                            left: '702px',
                            padding: '46px 10px',
                            gap: '10px',
                            border: '1px solid #313131',
                            borderBottomRightRadius: '10px',
                            borderBottomLeftRadius: '10px',
                        }}
                    >
                        <p style={{
                            width: '191px',
                            height: '78px',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '26px',
                            letterSpacing: '-0.8px',
                            color: '#D5D5D5',
                            textAlign: 'left',
                            margin: 0,
                        }}>
                            A freelancer who wants to charge confidently for branding
                        </p>
                    </div>

                    {/* Point 5 - Desktop */}
                    <div
                        className={`${inter.className} absolute flex items-center justify-center`}
                        style={{
                            width: '235px',
                            height: '170px',
                            top: '0px',
                            left: '936px',
                            padding: '46px 10px',
                            gap: '10px',
                            border: '1px solid #313131',
                            borderRadius: '10px',
                        }}
                    >
                        <p style={{
                            width: '211px',
                            height: '78px',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '26px',
                            letterSpacing: '-0.8px',
                            color: '#D5D5D5',
                            textAlign: 'left',
                            margin: 0,
                        }}>
                            A design student who wants real-world clarity early
                        </p>
                    </div>
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
                    height: '884px',
                    left: '10px',
                    transform: `scale(${mobileScale})`,
                }}
            >
                {/* Mobile Main Container */}
                <div
                    className="absolute"
                    style={{
                        width: '343px',
                        height: '950px',
                        left: '6px',
                        // Border removed as requested
                        borderRadius: '10px',
                    }}
                />

                {/* Heading - Mobile */}
                <div
                    className={`${inter.className} absolute`}
                    style={{
                        width: '255px',
                        height: '64px',
                        top: '40px',
                        left: '50px', // Adjusted for mobile center
                        textAlign: 'center',
                    }}
                >
                    <h2
                        style={{
                            fontWeight: 600,
                            fontSize: '26px',
                            lineHeight: '32px',
                            letterSpacing: '-2px',
                            color: '#D5D5D5',
                            margin: 0,
                        }}
                        dangerouslySetInnerHTML={{ __html: 'This Program Is Perfect <br>If Your Are:' }}
                    />
                </div>

                {/* Point 1 - Mobile */}
                <div
                    className={`${inter.className} absolute flex items-center justify-center`}
                    style={{
                        width: '245px',
                        height: '134px',
                        top: '164px', // Further shifted down for "normal" gap
                        left: '16px',
                        padding: '46px 10px',
                        gap: '10px',
                        border: '1px solid #313131',
                        borderRadius: '10px',
                    }}
                >
                    <p style={{
                        width: '211px',
                        height: '42px',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        letterSpacing: '-0.8px',
                        color: '#D5D5D5',
                        textAlign: 'left',
                        margin: 0,
                    }}>
                        A graphic designer wanting to move into branding
                    </p>
                </div>

                {/* Point 2 - Mobile */}
                <div
                    className={`${inter.className} absolute flex items-center justify-center`}
                    style={{
                        width: '245px',
                        height: '134px',
                        top: '328px', // Shifted
                        left: '114px',
                        padding: '46px 10px',
                        gap: '10px',
                        border: '1px solid #313131',
                        borderRadius: '10px',
                    }}
                >
                    <p style={{
                        width: '191px',
                        height: '42px',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        letterSpacing: '-0.8px',
                        color: '#D5D5D5',
                        textAlign: 'left',
                        margin: 0,
                    }}>
                        A logo designer tired of working without structure
                    </p>
                </div>

                {/* Point 3 - Mobile */}
                <div
                    className={`${inter.className} absolute flex items-center justify-center`}
                    style={{
                        width: '245px',
                        height: '134px',
                        top: '492px', // Shifted
                        left: '16px',
                        padding: '46px 10px',
                        gap: '10px',
                        border: '1px solid #313131',
                        borderRadius: '10px',
                    }}
                >
                    <p style={{
                        width: '211px',
                        height: '42px',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        letterSpacing: '-0.8px',
                        color: '#D5D5D5',
                        textAlign: 'left',
                        margin: 0,
                    }}>
                        A working designer looking to upskill without quitting your job
                    </p>
                </div>

                {/* Point 4 - Mobile */}
                <div
                    className={`${inter.className} absolute flex items-center justify-center`}
                    style={{
                        width: '245px',
                        height: '134px',
                        top: '656px', // Shifted
                        left: '114px',
                        padding: '46px 10px',
                        gap: '10px',
                        border: '1px solid #313131',
                        borderRadius: '10px',
                    }}
                >
                    <p style={{
                        width: '191px',
                        height: '42px',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        letterSpacing: '-0.8px',
                        color: '#D5D5D5',
                        textAlign: 'left',
                        margin: 0,
                    }}>
                        A freelancer who wants to charge confidently for branding
                    </p>
                </div>

                {/* Point 5 - Mobile */}
                <div
                    className={`${inter.className} absolute flex items-center justify-center`}
                    style={{
                        width: '245px',
                        height: '134px',
                        top: '820px', // Shifted
                        left: '16px',
                        padding: '46px 10px',
                        gap: '10px',
                        border: '1px solid #313131',
                        borderRadius: '10px',
                    }}
                >
                    <p style={{
                        width: '211px',
                        height: '42px',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        letterSpacing: '-0.8px',
                        color: '#D5D5D5',
                        textAlign: 'left',
                        margin: 0,
                    }}>
                        A design student who wants real-world clarity early
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProgramAudience;

