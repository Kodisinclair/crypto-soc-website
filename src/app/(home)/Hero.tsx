'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { heroUrls } from '@/config/config'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ✅ Sliding background with continuous scrolling
const SlidingBackground = () => {
    const images = [
        '/images/photo1.jpg',
        '/images/photo2.jpg',
        '/images/photo3.jpg',
        '/images/photo4.jpg'
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000) // 5 seconds per image

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden z-0 bg-black">
            <div className="relative w-full h-full">
                <AnimatePresence initial={false} mode="sync">
                    <motion.div
                        key={images[currentIndex]}
                        className="absolute inset-0 w-full h-full"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{
                            duration: 2,
                            ease: [0.4, 0, 0.2, 1],
                            x: {
                                type: "spring",
                                stiffness: 100,
                                damping: 30
                            }
                        }}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                                fill
                                sizes="100vw"
                                className="object-cover w-full h-full opacity-40"
                                priority
                            />
                            {/* Grey overlay */}
                            <div className="absolute inset-0 bg-gray-900/50" />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

interface NavigationButton {
    path: string
    label: string
    isExternal: boolean
}

const Hero = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
    }

    const slideUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
    }

    const staggerButtons = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: 'easeOut'
            }
        })
    }

    const getFullUrl = (path: string) => {
        if (path.startsWith('mailto:') || path.startsWith('http')) return path
        return `${heroUrls.base}${path}`
    }

    const buttonClassName =
        'px-6 py-3 bg-green-500/20 backdrop-blur-sm border border-green-500/50 \
        rounded-lg text-white font-medium transition-all duration-300 \
        hover:border-green-400 hover:bg-green-500/30 \
        hover:shadow-[0_0_35px_rgba(74,222,128,0.4)] \
        flex items-center justify-center gap-2 \
        min-w-[140px] text-center'

    const buttonAnimationProps = {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.1 },
        whileHover: {
            scale: 1.05,
            boxShadow: '0 0 25px rgba(74,222,128,0.3)',
            borderColor: 'rgba(74,222,128,0.7)'
        }
    }

    return (
        <div className="relative w-full flex flex-col lg:flex-row justify-between m-0 p-0 min-h-[80vh] lg:min-h-screen">
            {/* 🔁 Background Slider */}
            <SlidingBackground />

            {/* 🔤 Foreground Content */}
            <div className="w-full flex flex-col justify-center items-center text-center px-8 md:px-[5%] pt-4 md:pt-0 relative z-10 bg-transparent">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeIn}
                    className="alegreya text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 font-bold leading-tight relative z-20"
                >
                    University of Canterbury <br />
                    Bitcoin, Crypto & Blockchain Society
                </motion.h2>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={slideUp}
                    className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-gray-300 relative z-20"
                >
                    - Advancing Adoption, Knowledge and Community at UC -
                    
                </motion.p>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={slideUp}
                    className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-gray-300 relative z-20 font-semibold "
                >
                    <a href="/whitepaper">- Whitepaper -</a>
                    
                </motion.p>
                

               
            </div>
        </div>
    )
}

export default Hero

