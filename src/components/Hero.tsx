"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="w-full h-screen min-h-[600px] flex flex-col items-center justify-center rounded-lg my-4 bg-zinc-950 border border-zinc-800 p-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Branding that Speaks Volumens
                </h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Elevate your digital presence with our premium branding solutions.
                    Designed for impact, built for growth.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;
