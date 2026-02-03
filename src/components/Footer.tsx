import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full bg-black py-[50px]">
            <div className="relative w-full bg-white h-[329px] overflow-hidden">
                {/* Container for max-width constraint */}
                <div className="relative mx-auto w-full max-w-full h-full flex items-center justify-center">

                    {/* Left Grid Decoration */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[80px] md:w-[100px] lg:w-[139px] h-auto opacity-50 md:opacity-70 lg:opacity-100">
                        <Image
                            src="/footer-grid-left.svg"
                            alt=""
                            width={139}
                            height={329}
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                    {/* Right Grid Decoration */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80px] md:w-[100px] lg:w-[138px] h-auto opacity-50 md:opacity-70 lg:opacity-100">
                        <Image
                            src="/footer-grid-right.svg"
                            alt=""
                            width={138}
                            height={329}
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                    {/* Center Text Content */}
                    <div className="relative z-10 px-8 md:px-12 lg:px-16 text-center">
                        <h2 className="font-semibold text-black" style={{ letterSpacing: '-3px' }}>
                            <span className="block text-[32px] leading-[1.2] md:text-[48px] md:leading-[1.15] lg:text-[70px] lg:leading-[70px]">
                                Your portfolio is about to change.
                            </span>
                            <span className="block text-[32px] leading-[1.2] md:text-[48px] md:leading-[1.15] lg:text-[70px] lg:leading-[70px] mt-2 md:mt-3 lg:mt-4">
                                So is your future.
                            </span>
                        </h2>

                        {/* CTA Button */}
                        <button
                            className="mt-8 md:mt-10 lg:mt-12 px-8 py-4 bg-black text-white rounded-full font-semibold text-base md:text-lg transition-all duration-300 ease-out hover:scale-105 hover:opacity-90"
                        >
                            Enquire Now
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
