'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
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

    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const photoVariants: Variants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 15
            }
        }
    };

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
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="hidden md:block absolute top-0 origin-top-left"
                style={{
                    width: '1440px',
                    height: '100%',
                    left: '50px',
                    transform: `scale(${scale})`,
                }}
            >
                {/* Grid Background */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    <div
                        className="absolute"
                        style={{
                            width: '826.89px',
                            height: '504.14px',
                            top: '290.86px',
                            left: '316.22px',
                            border: '1.12px solid #313131',
                            backgroundImage: `
                                linear-gradient(to right, #313131 1px, transparent 1px),
                                linear-gradient(to bottom, #313131 1px, transparent 1px)
                            `,
                            backgroundSize: '45.94px 45.94px',
                            zIndex: -10,
                        }}
                    />
                </motion.div>

                {/* Logo Section */}
                <motion.div variants={itemVariants} className="absolute z-30 top-[56px] left-[20px] w-[217px] h-[37px]">
                    <Image
                        src="/haca-logo-3.png"
                        alt="Haca Logo"
                        width={217}
                        height={37}
                        priority
                        sizes="217px"
                        className="object-contain"
                    />
                </motion.div>

                {/* Main Heading */}
                <div
                    className={`${inter.className} absolute flex flex-col gap-[10px] p-[10px] z-20`}
                    style={{ top: '159px', left: '3px', width: '538px', height: '204px' }}
                >
                    <motion.h1
                        variants={itemVariants}
                        className="font-semibold text-[#D5D5D5]"
                        style={{
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
                    </motion.h1>
                </div>

                {/* Photo Design Group */}
                <div className="absolute z-10 w-full h-full">
                    {/* Photo 1 */}
                    <motion.div variants={photoVariants} className="absolute" style={{ top: '246px', left: '959.11px', width: '229.01px', height: '222.01px' }}>
                        <Image
                            src="/photo-1-3x.png"
                            alt="Design Photo 1"
                            width={249}
                            height={210}
                            sizes="(min-width: 768px) 229px, 145px"
                            priority
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Photo 2 */}
                    <motion.div variants={photoVariants} className="absolute" style={{ top: '392.03px', left: '511.5px', width: '253.44px', height: '95.40px' }}>
                        <Image
                            src="/photo-2-3x.png"
                            alt="Design Photo 2"
                            width={253}
                            height={95}
                            sizes="(min-width: 768px) 253px, 160px"
                            priority
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Photo 3 */}
                    <motion.div variants={photoVariants} className="absolute" style={{ top: '507.26px', left: '848.42px', width: '144.09px', height: '139.69px' }}>
                        <Image
                            src="/photo-3-3x.png"
                            alt="Design Photo 3"
                            width={144}
                            height={140}
                            sizes="(min-width: 768px) 144px, 145px"
                            priority
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Photo 4 */}
                    <motion.div variants={photoVariants} className="absolute" style={{ top: '610.18px', left: '252px', width: '284.23px', height: '135.13px' }}>
                        <Image
                            src="/photo-4-3x.png"
                            alt="Design Photo 4"
                            width={284}
                            height={135}
                            sizes="(min-width: 768px) 284px, 200px"
                            priority
                            className="object-contain"
                        />
                    </motion.div>
                </div>

                {/* Text Labels */}
                <div className={`absolute ${inter.className} z-20`}>
                    {[
                        { text: 'Live online classes', top: '311.1px', left: '698.87px', width: '221.70px' },
                        { text: 'Working brand mentors', top: '523.1px', left: '394.51px', width: '269.35px' },
                        { text: 'One complete brand identity project', top: '677.92px', left: '656.65px', width: '394.70px' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex items-center justify-center bg-black"
                            style={{
                                position: 'absolute',
                                top: item.top,
                                left: item.left,
                                width: item.width,
                                height: '53.87px',
                                padding: '14.5px 16.58px',
                            }}
                        >
                            <span className="text-[#D5D5D5] font-semibold text-[14.07px] leading-[45.06px] tracking-normal">
                                {item.text}
                            </span>
                        </motion.div>
                    ))}

                    {/* Program Label */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col justify-center"
                        style={{
                            position: 'absolute',
                            top: '748px',
                            left: '1010px',
                            width: '389px',
                            height: '88px',
                            padding: '10px',
                        }}
                    >
                        <span className="font-bold text-[28px] leading-[34px] tracking-[-0.8px] text-white whitespace-nowrap">
                            4-Week Branding & Identity
                        </span>
                        <span className="font-medium text-[28px] leading-[34px] tracking-[-0.8px] text-[#888888] whitespace-nowrap">
                            Design Mastery Program
                        </span>
                    </motion.div>
                </div>

                {/* Enquire Now Button */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute cursor-pointer z-40"
                    style={{ top: '805px', left: '73px', width: '144.54px', height: '52.54px' }}
                >
                    <Image
                        src="/Enquire Now (white).svg"
                        alt="Enquire Now"
                        width={145}
                        height={53}
                        sizes="145px"
                        loading="lazy"
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>

            {/* 
              ========================================
              MOBILE LAYOUT (Scaled Canvas for Responsiveness) 
              ========================================
             */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="block md:hidden absolute top-0 origin-top-left"
                style={{
                    width: '410px',
                    height: '100%',
                    left: '10px',
                    transform: `scale(${mobileScale})`,
                }}
            >
                {/* Grid Background */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    <div
                        className="absolute"
                        style={{
                            width: '390px',
                            height: '504px',
                            top: '153.07px',
                            left: '10px',
                            border: '1.12px solid #313131',
                            backgroundImage: `
                                linear-gradient(to right, #313131 1px, transparent 1px),
                                linear-gradient(to bottom, #313131 1px, transparent 1px)
                            `,
                            backgroundSize: '46px 46px',
                            zIndex: -10,
                        }}
                    />
                </motion.div>

                {/* Logo - Mobile */}
                <motion.div variants={itemVariants} className="absolute z-30 top-[16px] left-[10px] w-[140px] h-[35px]">
                    <Image
                        src="/haca_logo.svg"
                        alt="Haca Logo"
                        width={140}
                        height={35}
                        priority
                        sizes="140px"
                        className="object-contain"
                    />
                </motion.div>

                {/* Heading - Mobile */}
                <div
                    className={`${inter.className} absolute flex flex-col gap-[10px] z-20`}
                    style={{ top: '83px', left: '10px', width: '300px', height: '90px' }}
                >
                    <motion.h1
                        variants={itemVariants}
                        className="font-semibold text-[#D5D5D5]"
                        style={{
                            fontSize: '48px',
                            lineHeight: '44px',
                            letterSpacing: '-3px',
                            margin: 0,
                        }}
                    >
                        From Design <br />
                        to Identity.
                    </motion.h1>
                </div>

                {/* Photo Design Group - Mobile */}
                <div className="absolute z-10 w-full h-full">
                    {[
                        { src: '/photo-1-3x.png', top: '130px', left: '280px', w: 145, h: 140 },
                        { src: '/photo-2-3x.png', top: '264px', left: '20px', w: 160, h: 60 },
                        { src: '/photo-3-3x.png', top: '335px', left: '255px', w: 145, h: 140 },
                        { src: '/photo-4-3x.png', top: '532px', left: '10px', w: 200, h: 95 }
                    ].map((photo, idx) => (
                        <motion.div
                            key={idx}
                            variants={photoVariants}
                            className="absolute"
                            style={{ top: photo.top, left: photo.left, width: photo.w, height: photo.h }}
                        >
                            <Image
                                src={photo.src}
                                alt={`Design Photo ${idx + 1}`}
                                width={photo.w}
                                height={photo.h}
                                sizes="(min-width: 768px) 200px, 160px"
                                priority
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Text Labels - Mobile */}
                <div className={`absolute ${inter.className} z-20`}>
                    {[
                        { text: 'Live online classes', top: '197px', left: '40px', width: '150px' },
                        { text: 'Working brand mentors', top: '365px', left: '30px', width: '190px' },
                        { text: 'One complete brand identity project', top: '490px', left: '80px', width: '290px' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex items-center justify-center bg-black"
                            style={{
                                position: 'absolute',
                                top: item.top,
                                left: item.left,
                                width: item.width,
                                height: '24px',
                            }}
                        >
                            <span className="text-[#D5D5D5] font-semibold text-[16px] leading-[45.06px] whitespace-nowrap">
                                {item.text}
                            </span>
                        </motion.div>
                    ))}

                    {/* Program Label - Mobile */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col justify-center"
                        style={{ position: 'absolute', top: '640px', left: '175px', width: '300px' }}
                    >
                        <span className="font-bold text-[20px] leading-[24px] tracking-[-0.8px] text-white whitespace-nowrap">
                            4-Week Branding & Identity
                        </span>
                        <span className="font-medium text-[20px] leading-[24px] tracking-[-0.8px] text-[#888888] whitespace-nowrap">
                            Design Mastery Program
                        </span>
                    </motion.div>
                </div>

                {/* Enquire Now Button - Mobile */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute cursor-pointer z-40"
                    style={{ top: '720px', left: '130px', width: '160px', height: '60px' }}
                >
                    <Image
                        src="/Enquire Now (white).svg"
                        alt="Enquire Now"
                        width={160}
                        height={60}
                        sizes="160px"
                        loading="lazy"
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

