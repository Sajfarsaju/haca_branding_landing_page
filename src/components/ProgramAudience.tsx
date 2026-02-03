'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
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
                const ms = availableWidth / 410;
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

    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
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
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="hidden md:block absolute top-0 origin-top-left"
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
                <motion.div
                    className={`${inter.className} absolute`}
                    style={{
                        width: '100%',
                        height: '51px',
                        top: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                    variants={titleVariants}
                >
                    <h2
                        style={{
                            fontWeight: 600,
                            fontSize: '44.8px',
                            lineHeight: '50.6px',
                            letterSpacing: '-3px',
                            color: '#D5D5D5',
                            margin: 0,
                        }}
                    >
                        {'{ This Program Is Perfect If Your Are: }'}
                    </h2>
                </motion.div>

                {/* Points Container - Desktop */}
                <div
                    className="absolute"
                    style={{
                        width: '1171px',
                        height: '339px',
                        top: '121px',
                        left: '134.5px',
                    }}
                >
                    {/* Point 1 - Desktop */}
                    <motion.div
                        variants={itemVariants}
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
                    </motion.div>

                    {/* Point 2 - Desktop */}
                    <motion.div
                        variants={itemVariants}
                        className={`${inter.className} absolute flex items-center justify-center`}
                        style={{
                            width: '235px',
                            height: '170px',
                            top: '169px',
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
                    </motion.div>

                    {/* Point 3 - Desktop */}
                    <motion.div
                        variants={itemVariants}
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
                    </motion.div>

                    {/* Point 4 - Desktop */}
                    <motion.div
                        variants={itemVariants}
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
                    </motion.div>

                    {/* Point 5 - Desktop */}
                    <motion.div
                        variants={itemVariants}
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
                    </motion.div>
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
                    height: '884px',
                    left: '10px',
                    transform: `scale(${mobileScale})`,
                }}
            >
                {/* Heading - Mobile */}
                <motion.div
                    className={`${inter.className} absolute`}
                    style={{
                        width: '390px',
                        height: '64px',
                        top: '40px',
                        left: '10px',
                        textAlign: 'center',
                    }}
                    variants={titleVariants}
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
                </motion.div>

                {/* Point 1 - Mobile */}
                <motion.div
                    variants={itemVariants}
                    className={`${inter.className} absolute flex items-center justify-center`}
                    style={{
                        width: '320px',
                        height: '134px',
                        top: '164px',
                        left: '10px',
                        padding: '46px 10px',
                        gap: '10px',
                        border: '1px solid #313131',
                        borderRadius: '10px',
                    }}
                >
                    <p style={{
                        width: '290px',
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
                </motion.div>

                {/* Point 2 - Mobile */}
                <motion.div
                    variants={itemVariants}
                    className={`${inter.className} absolute flex items-center justify-center`}
                    style={{
                        width: '320px',
                        height: '134px',
                        top: '328px',
                        left: '80px',
                        padding: '46px 10px',
                        gap: '10px',
                        border: '1px solid #313131',
                        borderRadius: '10px',
                    }}
                >
                    <p style={{
                        width: '290px',
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
                </motion.div>

                {/* Point 3 - Mobile */}
                <motion.div
                    variants={itemVariants}
                    className={`${inter.className} absolute flex items-center justify-center`}
                    style={{
                        width: '320px',
                        height: '134px',
                        top: '492px',
                        left: '10px',
                        padding: '46px 10px',
                        gap: '10px',
                        border: '1px solid #313131',
                        borderRadius: '10px',
                    }}
                >
                    <p style={{
                        width: '290px',
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
                </motion.div>

                {/* Point 4 - Mobile */}
                <motion.div
                    variants={itemVariants}
                    className={`${inter.className} absolute flex items-center justify-center`}
                    style={{
                        width: '320px',
                        height: '134px',
                        top: '656px',
                        left: '80px',
                        padding: '46px 10px',
                        gap: '10px',
                        border: '1px solid #313131',
                        borderRadius: '10px',
                    }}
                >
                    <p style={{
                        width: '290px',
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
                </motion.div>

                {/* Point 5 - Mobile */}
                <motion.div
                    variants={itemVariants}
                    className={`${inter.className} absolute flex items-center justify-center`}
                    style={{
                        width: '320px',
                        height: '134px',
                        top: '820px',
                        left: '10px',
                        padding: '46px 10px',
                        gap: '10px',
                        border: '1px solid #313131',
                        borderRadius: '10px',
                    }}
                >
                    <p style={{
                        width: '290px',
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
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ProgramAudience;

