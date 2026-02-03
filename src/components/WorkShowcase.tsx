'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const WorkShowcase = () => {
    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const rowVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.1
            }
        }
    };

    const imageVariants: Variants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const titleVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
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
        <section className="w-full bg-black flex flex-col items-center justify-start py-20 lg:py-2">
            {/* Title Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={titleVariants}
                className="w-full max-w-[90%] md:max-w-[85%] lg:max-w-full mx-auto text-center mb-[60px] lg:mb-[98px]"
            >
                <h2 className="text-[#D5D5D5] font-inter font-medium text-[26px] md:text-[clamp(32px,6vw,54px)] leading-[32px] md:leading-[1.1] tracking-[-2px] md:tracking-[-1.5px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-0.8px]">
                    We don’t promise placements.<br />
                    We help you build work<br className="lg:hidden xl:hidden" /> that gets<br className="hidden lg:block" /> you chosen.
                </h2>
            </motion.div>

            {/* Content Container */}
            <div className="w-full px-4 lg:px-0 flex flex-col items-center">

                {/* Desktop Layout - Hidden on Mobile */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="hidden lg:flex flex-col w-[1016px] h-[2152px]  rounded-[40px] overflow-hidden"
                >
                    {/* Header Images Container */}
                    <motion.div variants={rowVariants} className="hidden lg:flex w-[1016px] h-[206px] flex-row items-center justify-between relative">
                        {/* Image 1 */}
                        <motion.div variants={imageVariants} className="relative w-[398px] h-[206px] flex-shrink-0 z-10 rounded-[40px] overflow-hidden">
                            <Image
                                src="/WorkShowcase1-3x.png"
                                alt="Work Showcase 1"
                                fill
                                sizes="(min-width: 1024px) 398px, 100vw"
                                quality={80}
                                loading="lazy"
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Image 2 */}
                        <motion.div variants={imageVariants} className="relative w-[183px] h-[206px] flex-shrink-0 z-10 rounded-[40px] overflow-hidden">
                            <Image
                                src="/WorkShowcase2_3x.png"
                                alt="Work Showcase 2"
                                fill
                                sizes="(min-width: 1024px) 183px, 100vw"
                                quality={80}
                                loading="lazy"
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Image 3 */}
                        <motion.div variants={imageVariants} className="relative w-[371px] h-[206px] flex-shrink-0 z-20 rounded-[40px] overflow-hidden">
                            <Image
                                src="/WorkShowcase3_3x.png"
                                alt="Work Showcase 3"
                                fill
                                sizes="(min-width: 1024px) 371px, 100vw"
                                quality={80}
                                loading="lazy"
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Row 2 Container */}
                    <motion.div variants={rowVariants} className="hidden lg:flex w-[1016px] h-[540px] flex-row items-center justify-between relative mt-8 ">
                        {/* Image 1 (Left - WorkShowcase4 - Rotated) */}
                        <motion.div variants={imageVariants} className="relative w-[137.5px] h-[540px] flex-shrink-0 z-10 rounded-[40px] overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[137px] h-[540px] rotate-180" style={{ transform: 'rotate(180deg)' }}>
                                <Image
                                    src="/WorkShowcase4_3x.png"
                                    alt="Work Showcase 4"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Image 2 (Center - WorkShowcase5) */}
                        <motion.div variants={imageVariants} className="relative w-[677px] h-[540px] flex-shrink-0 z-20 rounded-[40px] overflow-hidden">
                            <Image
                                src="/WorkShowcase5_3x.png"
                                alt="Work Showcase 5"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Image 3 (Right - WorkShowcase6 - Rotated) */}
                        <motion.div variants={imageVariants} className="relative w-[137.5px] h-[540px] flex-shrink-0 z-10 rounded-[40px] overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[137px] h-[540px] rotate-180" style={{ transform: 'rotate(180deg)' }}>
                                <Image
                                    src="/WorkShowcase6_3x.png"
                                    alt="Work Showcase 6"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>


                    {/* Row 3 Container */}
                    <motion.div variants={rowVariants} className="hidden mb-[50px] lg:flex w-[1016px] h-[206px] flex-row items-center justify-between relative mt-8 ">
                        {/* Image 1 */}
                        <motion.div variants={imageVariants} className="relative bg-[#101010] w-[388px] h-[206px] flex-shrink-0 z-10 rounded-[40px] overflow-hidden flex items-center justify-center">
                            <div className="relative w-[359px] h-[168px]">
                                <Image
                                    src="/WorkShowcase7_3x.png"
                                    alt="Work Showcase 7"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Image 2 */}
                        <motion.div variants={imageVariants} className="relative w-[365px] h-[206px] flex-shrink-0 z-10 rounded-[40px] overflow-hidden">
                            <Image
                                src="/WorkShowcase8_3x.png"
                                alt="Work Showcase 8"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Image 3 */}
                        <motion.div variants={imageVariants} className="relative w-[199px] h-[206px] flex-shrink-0 z-20 rounded-[40px] overflow-hidden">
                            <Image
                                src="/WorkShowcase9_3x.png"
                                alt="Work Showcase 9"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Row 4 Container */}
                    <motion.div variants={rowVariants} className="hidden lg:flex w-[1016px] h-[444px] flex-row items-center justify-between relative mt-8 ">
                        {/* Image 1 */}
                        <motion.div variants={imageVariants} className="relative w-[677px] h-[444px] flex-shrink-0 z-10 rounded-[40px] overflow-hidden flex items-center justify-center">
                            <div className="relative w-[677px] h-[444px]">
                                <Image
                                    src="/WorkShowcase10_3x.png"
                                    alt="Work Showcase 10"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Image 3 */}
                        <motion.div variants={imageVariants} className="relative  w-[317px] h-[444px] flex-shrink-0 z-20 rounded-[40px] overflow-hidden">
                            <div className="relative bg-white flex flex-col text-black w-[317px] h-[444px]">
                                <Image
                                    src="/WorkShowcase11_3x.png"
                                    alt="Work Showcase 11"
                                    fill
                                    className="object-contain object-top"
                                />
                                <Image
                                    src="/WorkShowcase12_3x.png"
                                    alt="Work Showcase 12"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Row 5 Container */}
                    <motion.div variants={rowVariants} className="hidden lg:flex w-[1016px] h-[540px] flex-row items-center justify-between relative mt-8 ">
                        {/* Image 1 (Left - WorkShowcase4 - Rotated) */}
                        <motion.div variants={imageVariants} className="relative w-[137.5px] h-[540px] flex-shrink-0 z-10 rounded-[40px] overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[137px] h-[540px] rotate-180" style={{ transform: 'rotate(180deg)' }}>
                                <Image
                                    src="/WorkShowcase13_3x.png"
                                    alt="Work Showcase 13"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Image 2 (Center - WorkShowcase5) */}
                        <motion.div variants={imageVariants} className="relative w-[677px] h-[540px] flex-shrink-0 z-20 rounded-[40px] overflow-hidden">
                            <Image
                                src="/WorkShowcase14_3x.png"
                                alt="Work Showcase 14"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Image 3 (Right - WorkShowcase6 - Rotated) */}
                        <motion.div variants={imageVariants} className="relative w-[137.5px] h-[540px] flex-shrink-0 z-10 rounded-[40px] overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[137px] h-[540px] rotate-180" style={{ transform: 'rotate(180deg)' }}>
                                <Image
                                    src="/WorkShowcase15_3x.png"
                                    alt="Work Showcase 15"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <div className="lg:hidden flex flex-col gap-[50px] w-full items-center px-4">
                    {/* Block 1 */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                        className="w-full max-w-[343px] md:max-w-[700px] h-auto rounded-[20.16px] overflow-hidden flex flex-col items-center relative gap-[10px]"
                    >
                        {/* Mobile Header Images Container */}
                        <motion.div variants={rowVariants} className="w-full h-[104px] md:h-[212px] rounded-[20.16px] flex flex-row justify-between items-center">
                            {/* Image 1 Mobile */}
                            <motion.div variants={imageVariants} className="relative w-[58%] h-full overflow-hidden rounded-[20.16px]">
                                <Image
                                    src="/WorkShowcase1_MobileView_3x.png"
                                    alt="Work Showcase 1 Mobile"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Image 2 Mobile */}
                            <motion.div variants={imageVariants} className="relative w-[40%] h-full overflow-hidden rounded-[20.16px]">
                                <Image
                                    src="/WorkShowcase2_MobileView_3x.png"
                                    alt="Work Showcase 2 Mobile"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Mobile Row 2 */}
                        <motion.div variants={rowVariants} className="w-full h-[272px] md:h-[555px] flex flex-row justify-between items-center">
                            {/* Img 1 (Left) */}
                            <motion.div variants={imageVariants} className="relative w-[20%] h-full rounded-[20.16px] overflow-hidden">
                                <Image
                                    src="/WorkShowcase3_MobileView_3x.png"
                                    alt="Work Showcase 3 Mobile"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Img 2 (Right) */}
                            <motion.div variants={imageVariants} className="relative w-[78%] h-full rounded-[20.16px] overflow-hidden">
                                <Image
                                    src="/WorkShowcase4_MobileView_3x.png"
                                    alt="Work Showcase 4 Mobile"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Mobile Row 3 */}
                        <motion.div variants={rowVariants} className="w-full h-[104px] md:h-[212px] flex flex-row justify-between items-center">
                            {/* Img 1 (Left) */}
                            <motion.div variants={imageVariants} className="relative w-[40%] h-full rounded-[20.16px] overflow-hidden">
                                <Image
                                    src="/WorkShowcase5_MobileView_3x.png"
                                    alt="Work Showcase 5 Mobile"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Img 2 (Right) */}
                            <motion.div variants={imageVariants} className="relative bg-[#101010] w-[58%] h-full rounded-[20.16px] overflow-hidden flex items-center justify-center">
                                <div className="relative w-[90%] h-[80%]">
                                    <Image
                                        src="/WorkShowcase6_MobileView_3x.png"
                                        alt="Work Showcase 6 Mobile"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Block 2 */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                        className="w-full max-w-[343px] md:max-w-[700px] h-auto rounded-[13.58px] overflow-hidden flex flex-col items-center relative gap-[10px]"
                    >
                        {/* Mobile Header Images Container */}
                        <motion.div variants={rowVariants} className="w-full h-[151px] md:h-[308px] rounded-[13.58px] flex flex-row justify-between items-center gap-[6px]">
                            {/* Image 1 Mobile */}
                            <motion.div variants={imageVariants} className="relative w-[65%] h-full overflow-hidden rounded-[13.58px]">
                                <Image
                                    src="/WorkShowcase7_MobileView_3x.png"
                                    alt="Work Showcase 7 Mobile"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Image 2 Mobile */}
                            <motion.div variants={imageVariants} className="relative w-[33%] h-full flex-shrink-0 z-20 overflow-hidden rounded-[13.58px]">
                                <div className="relative bg-white flex flex-col items-center justify-center text-black w-full h-full">
                                    <div className="relative w-full min-[375px]:w-[97%] h-[68%] overflow-hidden rounded-[13.58px]">
                                        <Image
                                            src="/WorkShowcase8_MobileView_3x.png"
                                            alt="Work Showcase 8 Mobile"
                                            fill
                                            className="object-fill object-top"
                                        />
                                    </div>
                                    <div className="relative w-full h-[32%] overflow-hidden rounded-[11.21px]">
                                        <Image
                                            src="/WorkShowcase9_MobileView_3x.png"
                                            alt="Work Showcase 9 Mobile"
                                            fill
                                            className="object-fill object-bottom"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        {/* Mobile Row 2 */}
                        <motion.div variants={rowVariants} className="w-full h-[272px] md:h-[555px] flex flex-row justify-between items-center">
                            {/* Img 1 (Left) */}
                            <motion.div variants={imageVariants} className="relative w-[20%] h-full rounded-[20.16px] overflow-hidden">
                                <Image
                                    src="/WorkShowcase10_MobileView_3x.png"
                                    alt="Work Showcase 10 Mobile"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Img 2 (Right) */}
                            <motion.div variants={imageVariants} className="relative w-[78%] h-full rounded-[20.16px] overflow-hidden">
                                <Image
                                    src="/WorkShowcase11_MobileView_3x.png"
                                    alt="Work Showcase 11 Mobile"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WorkShowcase;
