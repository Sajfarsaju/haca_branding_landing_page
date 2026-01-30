'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const feedbackData = [
    {
        text: "I have attended an online Graphic Design course with HACA Designs. It was really great experience for me as the whole team was very much supportive. The entire course was well planned and executed by the talented mentors and the management team. They have set the processes very clearly and all of the mentors were passionate in coaching & mentoring and maintain a positive attitude to uplift their students.",
        author: "Sumith Thankamoney",
        role: "Graphic Designer"
    },
    {
        text: "I am a recent graduate of the HACA Graphic Design Online Program, an intensive three-month journey that helped me truly discover myself as a designer. Today, I proudly call myself a HACAian. Through strong mentorship and thoughtful guidance, I learned to embrace my creativity and grow both personally and professionally.",
        author: "Jestin Manoj",
        role: "Graphic Designer"
    },
    {
        text: "Haris & Co Design School provides an exceptional learning environment. Their curriculum is industry-focused, the mentors are highly skilled, and every session feels meaningful. The hands-on projects and feedback helped me improve faster than I expected. Highly recommended for anyone who wants a strong career in design",
        author: "Aslam Muhammed",
        role: "Graphic Designer"
    },
    {
        text: "I'm beyond thrilled to share my experience with HACA Design School! I enrolled in their Graphic Design course online, and it was one of the best decisions I ever made. The flexibility of learning from the comfort of my home was a game-changer, and the support I received from the team was top-notch!",
        author: "Fathima Abdul Razak",
        role: "Graphic Designer"
    },
    {
        text: "HACA is more than just a design school — it's a space where creativity finds direction and imagination meets discipline. The faculty here are not only talented professionals but also incredibly supportive mentors who encourage pushing boundaries and thinking beyond trends.",
        author: "CK Ajmal Ali",
        role: "Graphic Designer"
    },
    {
        text: "I did my Graphic Design course here at HACA and it was such a great experience, The learning environment is super supportive, and I got to learn so much—from the basics to advanced skills. The mentors are really helpful, and the hands-on projects made everything even more exciting.",
        author: "Tincy B",
        role: "Graphic Designer"
    },
    {
        text: "I'm a graphic design student at HACA, and I really enjoy the friendly and supportive atmosphere here. The institute encourages creativity and makes learning design exciting.",
        author: "Noufa P",
        role: "Graphic Designer"
    },
    {
        text: "Took graphic design course here. The mentors were supportive. I got to work real time as part of the internship. Landed in a good job as well.",
        author: "Vijay Vidhyadharan",
        role: "Graphic Designer"
    }
]

export default function Review() {
    // Scaling State
    const [scale, setScale] = useState(1);
    const [mobileScale, setMobileScale] = useState(1);
    const [mounted, setMounted] = useState(false);

    // Component Logic State
    const containerRef = useRef<HTMLDivElement>(null)
    const [centerIndex, setCenterIndex] = useState(0)
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
    const autoScrollTimer = useRef<NodeJS.Timeout | null>(null)
    const userInteractionTimer = useRef<NodeJS.Timeout | null>(null)
    const isScrolling = useRef(false)

    // Original Logic Preserved
    const [cardDimensions, setCardDimensions] = useState({ width: 370, gap: 30 })

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            const LEFT_PADDING = 10;
            const RIGHT_PADDING = 5;
            const TOTAL_PADDING = LEFT_PADDING + RIGHT_PADDING;

            if (window.innerWidth >= 768) {
                const availableWidth = window.innerWidth - TOTAL_PADDING;
                const s = Math.min(availableWidth / 1440, 1);
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

    // Update Dimensions Logic - Refactored to align with Scaling
    useEffect(() => {
        const updateDimensions = () => {
            const isMobile = window.innerWidth < 768
            setCardDimensions({
                width: isMobile ? 342 : 370,
                gap: 30
            })
        }

        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    const baseData = feedbackData
    const tripledData = [...baseData, ...baseData, ...baseData]
    const baseCount = baseData.length

    const totalStep = cardDimensions.width + cardDimensions.gap

    // FIXED: Dynamic centering logic with corrected calculation
    const updateCenterIndex = useCallback(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const scrollLeft = container.scrollLeft
        const containerWidth = container.offsetWidth

        // Calculate the center position of the viewport
        const viewportCenter = scrollLeft + (containerWidth / 2)
        
        // Calculate padding (which shifts where cards start)
        const paddingLeft = (containerWidth / 2) - (cardDimensions.width / 2)
        
        // The first card's center position
        const firstCardCenter = paddingLeft + (cardDimensions.width / 2)
        
        // Calculate which card index is at the center
        const index = Math.round((viewportCenter - firstCardCenter) / totalStep)
        
        setCenterIndex(index)
    }, [cardDimensions, totalStep])

    // Handle infinite loop
    const handleInfiniteLoop = useCallback(() => {
        if (!containerRef.current || isScrolling.current) return

        const container = containerRef.current
        const scrollLeft = container.scrollLeft

        const oneSetWidth = baseCount * totalStep
        const minBound = oneSetWidth - (container.offsetWidth / 2)
        const maxBound = (oneSetWidth * 2) - (container.offsetWidth / 2)

        if (scrollLeft < minBound) {
            container.scrollLeft = scrollLeft + oneSetWidth
        } else if (scrollLeft > maxBound) {
            container.scrollLeft = scrollLeft - oneSetWidth
        }
    }, [baseCount, totalStep])

    // Auto-scroll
    const scrollToNext = useCallback(() => {
        if (!containerRef.current || expandedIndex !== null) return

        isScrolling.current = true
        const container = containerRef.current
        const currentScrollLeft = container.scrollLeft

        container.scrollTo({
            left: currentScrollLeft + totalStep,
            behavior: 'smooth'
        })

        setTimeout(() => {
            isScrolling.current = false
            handleInfiniteLoop()
        }, 600)
    }, [totalStep, handleInfiniteLoop, expandedIndex])

    const startAutoScroll = useCallback(() => {
        if (autoScrollTimer.current) clearInterval(autoScrollTimer.current)
        autoScrollTimer.current = setInterval(scrollToNext, 3000)
    }, [scrollToNext])

    const stopAutoScroll = useCallback(() => {
        if (autoScrollTimer.current) {
            clearInterval(autoScrollTimer.current)
            autoScrollTimer.current = null
        }
    }, [])

    const handleUserScroll = useCallback(() => {
        updateCenterIndex()
        stopAutoScroll()

        if (userInteractionTimer.current) clearTimeout(userInteractionTimer.current)

        userInteractionTimer.current = setTimeout(() => {
            if (!isScrolling.current) {
                startAutoScroll()
            }
        }, 2000)
    }, [updateCenterIndex, stopAutoScroll, startAutoScroll])

    // FIXED: Improved initial scroll position setup
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Calculate exact center position
        const containerWidth = container.offsetWidth
        const paddingLeft = (containerWidth / 2) - (cardDimensions.width / 2)
        
        // Position at the start of the middle set
        // We want the middle set's first card (index = baseCount) to be centered
        const targetCardCenter = paddingLeft + (cardDimensions.width / 2) + (baseCount * totalStep)
        const initialScrollPosition = targetCardCenter - (containerWidth / 2)
        
        container.scrollLeft = initialScrollPosition
        
        // Force update center index after setting scroll
        setTimeout(() => {
            updateCenterIndex()
        }, 50)

        container.addEventListener('scroll', handleUserScroll, { passive: true })
        startAutoScroll()

        return () => {
            container.removeEventListener('scroll', handleUserScroll)
            stopAutoScroll()
            if (userInteractionTimer.current) {
                clearTimeout(userInteractionTimer.current)
            }
        }
    }, [baseCount, totalStep, handleUserScroll, startAutoScroll, stopAutoScroll, cardDimensions.width, updateCenterIndex])

    // Initialize Scroll Position Correctly on Resize/Mount
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Recalculate center position when dimensions change
        if (container.scrollLeft === 0 && baseCount > 0) {
            const containerWidth = container.offsetWidth
            const paddingLeft = (containerWidth / 2) - (cardDimensions.width / 2)
            const targetCardCenter = paddingLeft + (cardDimensions.width / 2) + (baseCount * totalStep)
            const initialScrollPosition = targetCardCenter - (containerWidth / 2)
            container.scrollLeft = initialScrollPosition
            updateCenterIndex()
        }
    }, [cardDimensions, totalStep, baseCount, updateCenterIndex]);

    useEffect(() => {
        if (expandedIndex !== null) {
            stopAutoScroll()
        } else {
            startAutoScroll()
        }
    }, [expandedIndex, stopAutoScroll, startAutoScroll])

    if (!mounted) return <div className="w-full h-[600px] bg-transparent" />

    const isDesktop = window.innerWidth >= 768
    const sectionHeight = isDesktop ? Math.max(750 * scale, 600) : 600 * mobileScale

    return (
        <section
            className="w-full relative flex items-center justify-center overflow-hidden bg-transparent"
            style={{
                height: `${sectionHeight}px`,
                minHeight: `${sectionHeight}px`
            }}
        >
            <div
                style={{
                    width: isDesktop ? '1440px' : '410px',
                    transform: `scale(${isDesktop ? scale : mobileScale})`,
                    transformOrigin: isDesktop ? 'center center' : 'top center',
                }}
                className="relative flex flex-col items-center"
            >
                {/* Heading Block */}
                <div
                    className="relative w-full flex flex-col items-start"
                    style={{
                        paddingLeft: isDesktop ? '52px' : '16px',
                        marginBottom: isDesktop ? '105px' : '28px',
                        marginTop: isDesktop ? '0px' : '20px',
                        zIndex: 20,
                    }}
                >
                    <h2
                        className={`${inter.className} leading-none tracking-tight text-[#D5D5D5]`}
                        style={{
                            width: isDesktop ? '356px' : '144px',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            fontSize: isDesktop ? '100px' : '40px',
                            lineHeight: isDesktop ? '168px' : '37px',
                            letterSpacing: isDesktop ? '-8px' : '-3px',
                            margin: 0,
                            textAlign: 'left',
                            position: 'relative'
                        }}
                    >
                        Reviews
                    </h2>
                </div>

                {/* Feedback Cards Wrapper */}
                <div
                    ref={containerRef}
                    className="w-full flex flex-row items-center overflow-x-auto overflow-y-visible snap-x snap-mandatory transition-all custom-scrollbar-hidden no-scrollbar relative z-10"
                    style={{
                        gap: isDesktop ? '30px' : '30px',
                        height: isDesktop ? '480px' : '360px',
                        paddingLeft: isDesktop
                            ? `calc(50% - ${cardDimensions.width / 2}px)`
                            : `calc(50% - ${cardDimensions.width / 2}px)`,
                        paddingRight: isDesktop
                            ? `calc(50% - ${cardDimensions.width / 2}px)`
                            : `calc(50% - ${cardDimensions.width / 2}px)`,
                        WebkitOverflowScrolling: 'touch',
                        paddingTop: '30px',
                        paddingBottom: '30px'
                    }}
                >
                    {tripledData.map((item, index) => {
                        const isActive = index === centerIndex

                        return (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 flex flex-col justify-between relative snap-center box-border bg-black text-[#D5D5D5]"
                                style={{
                                    width: isDesktop ? '370px' : '342px',
                                    height: isDesktop ? '368px' : '304px',
                                    border: '1px solid #313131',
                                    borderRadius: '10px',
                                    paddingTop: isDesktop ? '20px' : '14px',
                                    paddingRight: isDesktop ? '20px' : '14px',
                                    paddingBottom: isDesktop ? '24px' : '14px',
                                    paddingLeft: isDesktop ? '20px' : '14px',
                                }}
                                animate={{
                                    scale: isActive ? 1.15 : 0.9,
                                    opacity: isActive ? 1 : 0.5,
                                    zIndex: isActive ? 10 : 1
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut"
                                }}
                            >
                                {/* Review Text */}
                                <div
                                    className="w-full flex-grow overflow-hidden text-ellipsis"
                                    style={{
                                        height: isDesktop ? '227px' : '168px',
                                        marginBottom: 'auto'
                                    }}
                                >
                                    <p
                                        className={`${inter.className}`}
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'normal',
                                            fontSize: isDesktop ? '18.7px' : '16px',
                                            lineHeight: isDesktop ? '25.2px' : '24px',
                                            letterSpacing: isDesktop ? '0%' : '-1px',
                                            color: '#D5D5D5',
                                            margin: 0,
                                            display: '-webkit-box',
                                            WebkitLineClamp: isDesktop ? 9 : 7,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {item.text}
                                    </p>
                                </div>

                                {/* Separator Line */}
                                <div
                                    style={{
                                        width: '100%',
                                        height: '1px',
                                        backgroundColor: '#313131',
                                        marginTop: 'auto',
                                        marginBottom: isDesktop ? '20px' : '4px'
                                    }}
                                />

                                {/* Author Container */}
                                <div
                                    className="flex flex-col justify-center"
                                    style={{
                                        height: isDesktop ? '46px' : '47px',
                                        gap: isDesktop ? '0px' : '0px',
                                    }}
                                >
                                    {/* Author Name */}
                                    <span
                                        className={`${inter.className}`}
                                        style={{
                                            fontWeight: 500,
                                            fontSize: isDesktop ? '17.5px' : '18px',
                                            lineHeight: '25.2px',
                                            color: '#D5D5D5',
                                            display: 'block'
                                        }}
                                    >
                                        {item.author}
                                    </span>

                                    {/* Role */}
                                    <span
                                        className={`${inter.className}`}
                                        style={{
                                            fontWeight: 600,
                                            fontSize: isDesktop ? '13px' : '14px',
                                            lineHeight: '17px',
                                            letterSpacing: '0.1px',
                                            color: '#999999',
                                            display: 'block'
                                        }}
                                    >
                                        {item.role || "Graphic Designer"}
                                    </span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Expanded Modal Overlay */}
                <AnimatePresence>
                    {expandedIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setExpandedIndex(null)}
                            className="fixed top-0 left-0 w-screen h-screen bg-black/80 z-[9999] flex items-center justify-center backdrop-blur-sm p-4"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="w-full max-w-[600px] max-h-[80vh] bg-[#111] border border-[#333] rounded-[20px] p-8 overflow-y-auto relative"
                            >
                                <p className="text-[#D5D5D5] font-medium text-lg leading-relaxed whitespace-pre-wrap font-inter">
                                    {tripledData[expandedIndex].text}
                                </p>
                                <div className="mt-8 pt-4 border-t border-[#333]">
                                    <div className="text-[#D5D5D5] font-semibold text-lg">
                                        {tripledData[expandedIndex].author}
                                    </div>
                                    <div className="text-[#999] text-sm font-medium">
                                        {tripledData[expandedIndex].role}
                                    </div>
                                </div>
                                <button
                                    onClick={() => setExpandedIndex(null)}
                                    className="absolute top-5 right-5 bg-[#222] text-white border-none rounded-full w-8 h-8 cursor-pointer text-xl flex items-center justify-center hover:bg-[#333]"
                                >
                                    ×
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <style jsx global>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>
        </section>
    )
}