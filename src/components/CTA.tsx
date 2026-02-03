'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
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

    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const textVariants: Variants = {
        hidden: { x: -30, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const photoVariants: Variants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const decoVariants: Variants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10
            }
        }
    };

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
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="hidden md:block absolute top-0 origin-top-left"
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
                        <motion.h2
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
                            variants={textVariants}
                        >
                            You can keep guessing.<br />
                            or you can start the <br />
                            process.
                        </motion.h2>

                        {/* Subtext */}
                        <motion.p
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
                            variants={textVariants}
                        >
                            Apply Now and Reserve Your Seat
                        </motion.p>
                    </div>

                    {/* Button */}
                    <motion.div
                        className="cursor-pointer"
                        style={{
                            width: 'fit-content',
                            height: 'fit-content',
                        }}
                        variants={textVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src="/Enquire Now (black).svg"
                            alt="Enquire Now"
                            width={177}
                            height={64}
                            sizes="177px"
                            loading="lazy"
                        />
                    </motion.div>
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
                    <motion.div
                        className="hidden md:block"
                        style={{
                            position: 'absolute',
                            width: '311px',
                            height: '311px',
                            top: '-80px',
                            right: '-60px',
                            zIndex: 0,
                        }}
                        variants={decoVariants}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Image
                            src="/sun.svg"
                            alt="Sun decoration"
                            width={311}
                            height={311}
                            sizes="311px"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Block Design (Behind Photo - positioned relative to photo) */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            width: '166px',
                            height: '166px',
                            top: '270px',
                            right: '318px',
                            zIndex: 1,
                        }}
                        variants={decoVariants}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Image
                            src="/block.svg"
                            alt="Block decoration"
                            width={166}
                            height={166}
                            sizes="166px"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Photo */}
                    <motion.div
                        variants={photoVariants}
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            width: '862px',
                            height: '668px',
                            zIndex: 2,
                        }}
                    >
                        <Image
                            src="/the girls photo.png"
                            alt="Program participants"
                            fill
                            sizes="(min-width: 768px) 862px, 410px"
                            quality={85}
                            loading="lazy"
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'bottom right',
                            }}
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* 
              ========================================
              MOBILE LAYOUT (Scales from 410px base)
              ========================================
             */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
                className="block md:hidden absolute top-0 left-0 origin-top-left"
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
                        <motion.h2
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
                            variants={textVariants}
                        >
                            You can keep guessing.<br />
                            or you can start the <br />
                            process.
                        </motion.h2>

                        {/* Subtext */}
                        <motion.p
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
                            variants={textVariants}
                        >
                            Apply Now and Reserve Your Seat
                        </motion.p>
                    </div>

                    {/* Button */}
                    <motion.div
                        className="cursor-pointer"
                        style={{
                            width: 'fit-content',
                            height: 'fit-content',
                        }}
                        variants={textVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src="/Enquire Now (black).svg"
                            alt="Enquire Now"
                            width={133}
                            height={51}
                            sizes="133px"
                            loading="lazy"
                        />
                    </motion.div>
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
                    <motion.div
                        style={{
                            position: 'absolute',
                            width: '133px',
                            height: '71px',
                            top: '30px',
                            right: '-33px',
                            zIndex: 0,
                        }}
                        variants={decoVariants}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                        <Image
                            src="/sun.svg"
                            alt="Sun decoration"
                            width={133}
                            height={71}
                            sizes="133px"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Block Design (Behind Photo - positioned relative to photo) */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            width: '68px',
                            height: '68px',
                            top: '180px',
                            right: '150px',
                            zIndex: 1,
                        }}
                        variants={decoVariants}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Image
                            src="/block.svg"
                            alt="Block decoration"
                            width={68}
                            height={68}
                            sizes="68px"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Photo - Sticky to Bottom Left */}
                    <motion.div
                        variants={photoVariants}
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '410px',
                            height: '359px',
                            zIndex: 2,
                        }}
                    >
                        <Image
                            src="/the girls photo.png"
                            alt="Program participants"
                            fill
                            sizes="(min-width: 768px) 862px, 410px"
                            quality={85}
                            loading="lazy"
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'bottom left',
                            }}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
