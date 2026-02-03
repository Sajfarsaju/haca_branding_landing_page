'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Is this a beginner course?",
        answer: "No. This program is designed for designers who already know the basics and now want to master branding and identity systems."
    },
    {
        question: "Do you offer placement support?",
        answer: "We don’t run a placement system. What we do is help you build a strong branding portfolio and a clear process. Many students use this to upgrade their profiles and land roles they’ve been aiming for."
    },
    {
        question: "Is everything live?",
        answer: "Yes. All sessions are live and interactive. You can ask questions, share work, and get direct mentor feedback."
    },
    {
        question: "Is this only about logos?",
        answer: "No. It covers research, strategy, identity systems, and presentation. Logos are just one part of the process."
    },
    {
        question: "Will this actually change how I think about design?",
        answer: "Yes. This program is built to shift you from visual-first thinking to brand-first thinking. That’s what separates average designers from brand professionals."
    }
];

const AccordionItem = ({ item, isOpen, onClick, variants }: { item: FAQItem; isOpen: boolean; onClick: () => void; variants?: Variants }) => {
    return (
        <motion.div variants={variants} className="border-b border-white/20">
            <button
                onClick={onClick}
                className="w-full py-8 md:py-10 flex items-center justify-between text-left group transition-colors hover:bg-white/5 px-2 md:px-4"
            >
                <span className="text-[#D5D5D5] font-inter font-medium text-[14px] lg:text-[18px] leading-[25.2px] tracking-normal pr-8">
                    {item.question}
                </span>
                <div className="relative flex-shrink-0">
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <Plus className="w-6 h-6 text-[#D5D5D5]" strokeWidth={1.5} />
                    </motion.div>
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 md:pb-10 px-2 md:px-4 text-[#A0A0A0] font-inter text-base md:text-lg leading-relaxed max-w-[90%]">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Animation Variants
    const titleVariants: Variants = {
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

    const listVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
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
                stiffness: 70,
                damping: 15
            }
        }
    };

    return (
        <section className="w-full bg-black flex flex-col items-center justify-start overflow-hidden lg:h-[901px]">
            <div className="w-full px-[16px] lg:px-[60px] mx-auto flex flex-col h-full justify-center">

                {/* Title Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={titleVariants}
                    className="mb-[20px] lg:mb-[38px] text-center md:text-left"
                >
                    <h2 className="text-[#D5D5D5] font-inter font-semibold text-[40px] lg:text-[100px] leading-[37px] lg:leading-[168px] tracking-[-3px] lg:tracking-[-8px]">
                        Things Asked
                    </h2>
                </motion.div>

                {/* FAQ List */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={listVariants}
                    className="w-full h-[529px] mx-auto md:mx-0"
                >
                    <div className="border-t border-white/20">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                item={faq}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                                variants={itemVariants}
                            />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default FaqSection;
