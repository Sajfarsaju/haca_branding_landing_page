'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Footer = () => {
    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const textVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const gridLeftVariants: Variants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const gridRightVariants: Variants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const gridTopVariants: Variants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 0.7,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const gridBottomVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 0.7,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <footer className="w-full bg-black py-[40px]">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
                className="relative w-full bg-white h-[432px] min-[425px]:h-[500px] min-[600px]:h-[600px] md:h-[329px] overflow-hidden"
            >
                {/* Container for max-width constraint */}
                <div className="relative mx-auto w-full max-w-full h-full flex items-center justify-center">

                    {/* Left Grid Decoration (Desktop/Tablet) - Touching top and bottom */}
                    <motion.div
                        variants={gridLeftVariants}
                        className="absolute left-0 inset-y-0 w-[80px] md:w-[100px] lg:w-[139px] hidden md:block"
                    >
                        <Image
                            src="/footer-grid-left.svg"
                            alt=""
                            fill
                            className="object-cover object-right"
                            priority
                        />
                    </motion.div>

                    {/* Right Grid Decoration (Desktop/Tablet) - Touching top and bottom */}
                    <motion.div
                        variants={gridRightVariants}
                        className="absolute right-0 inset-y-0 w-[80px] md:w-[100px] lg:w-[138px] hidden md:block"
                    >
                        <Image
                            src="/footer-grid-right.svg"
                            alt=""
                            fill
                            className="object-cover object-left"
                            priority
                        />
                    </motion.div>

                    {/* Top Grid Decoration (Mobile Only) */}
                    <motion.div
                        variants={gridTopVariants}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto md:hidden"
                    >
                        <Image
                            src="/FooterGridTop_mobile.svg"
                            alt=""
                            width={375}
                            height={100}
                            className="w-full h-auto object-contain object-top"
                            priority
                        />
                    </motion.div>

                    {/* Bottom Grid Decoration (Mobile Only) */}
                    <motion.div
                        variants={gridBottomVariants}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto md:hidden"
                    >
                        <Image
                            src="/FooterGridBottom_mobile.svg"
                            alt=""
                            width={375}
                            height={100}
                            className="w-full h-auto object-contain object-bottom"
                            priority
                        />
                    </motion.div>

                    {/* Center Text Content */}
                    <div className="relative z-10 px-6 md:px-12 lg:px-16 text-center py-10 md:py-0">
                        <motion.h2 variants={textVariants} className={`${inter.className} font-semibold text-black`} style={{ letterSpacing: '-3px' }}>
                            <span className="block text-[32px] min-[425px]:text-[36px] min-[600px]:text-[43px] leading-[1.2] min-[900px]:text-[48px] min-[900px]:leading-[1.15] lg:text-[55px] xl:text-[70px] xl:leading-[70px]">
                                Your portfolio is about to change.
                            </span>
                            <span className="block text-[32px] min-[425px]:text-[36px] min-[600px]:text-[43px] leading-[1.2] min-[900px]:text-[48px] min-[900px]:leading-[1.15] lg:text-[55px] xl:text-[70px] xl:leading-[70px] mt-2 md:mt-3 lg:mt-4">
                                So is your future.
                            </span>
                        </motion.h2>

                        {/* CTA Button */}
                        <motion.button
                            variants={textVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-8 md:mt-10 lg:mt-12 px-8 py-4 bg-black text-white rounded-full font-semibold text-base md:text-lg shadow-lg shadow-black/10 transition-colors"
                        >
                            Enquire Now
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
