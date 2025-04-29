(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_3fb320ed._.js", {

"[project]/src/config/config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CNZ_URL": (()=>CNZ_URL),
    "heroUrls": (()=>heroUrls)
});
const CNZ_URL = '/';
const heroUrls = {
    base: CNZ_URL,
    routes: {
        explore: '/getstarted',
        wallet: '/wallets',
        buy: '/buycrypto',
        contact: 'mailto:contact@cryptocurrency.nz'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(home)/Hero.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// ✅ Sliding background with continuous scrolling
const SlidingBackground = ()=>{
    _s();
    const images = [
        '/images/photo1.jpg',
        '/images/photo2.jpg',
        '/images/photo3.jpg',
        '/images/photo4.jpg'
    ];
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlidingBackground.useEffect": ()=>{
            const interval = setInterval({
                "SlidingBackground.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "SlidingBackground.useEffect.interval": (prevIndex)=>(prevIndex + 1) % images.length
                    }["SlidingBackground.useEffect.interval"]);
                }
            }["SlidingBackground.useEffect.interval"], 5000) // 5 seconds per image
            ;
            return ({
                "SlidingBackground.useEffect": ()=>clearInterval(interval)
            })["SlidingBackground.useEffect"];
        }
    }["SlidingBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden z-0 bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                mode: "sync",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 w-full h-full",
                    initial: {
                        x: '100%'
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: '-100%'
                    },
                    transition: {
                        duration: 2,
                        ease: [
                            0.4,
                            0,
                            0.2,
                            1
                        ],
                        x: {
                            type: "spring",
                            stiffness: 100,
                            damping: 30
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: images[currentIndex],
                                alt: `Slide ${currentIndex + 1}`,
                                fill: true,
                                sizes: "100vw",
                                className: "object-cover w-full h-full opacity-40",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/(home)/Hero.tsx",
                                lineNumber: 49,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gray-900/50"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(home)/Hero.tsx",
                                lineNumber: 58,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(home)/Hero.tsx",
                        lineNumber: 48,
                        columnNumber: 25
                    }, this)
                }, images[currentIndex], false, {
                    fileName: "[project]/src/app/(home)/Hero.tsx",
                    lineNumber: 32,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/Hero.tsx",
                lineNumber: 31,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(home)/Hero.tsx",
            lineNumber: 30,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(home)/Hero.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
};
_s(SlidingBackground, "tPjzCc9H5UuFdWNuAHYoD0K4UOk=");
_c = SlidingBackground;
const Hero = ()=>{
    // Animation variants
    const fadeIn = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut'
            }
        }
    };
    const slideUp = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut'
            }
        }
    };
    const staggerButtons = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: (i)=>({
                opacity: 1,
                y: 0,
                transition: {
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: 'easeOut'
                }
            })
    };
    const getFullUrl = (path)=>{
        if (path.startsWith('mailto:') || path.startsWith('http')) return path;
        return `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroUrls"].base}${path}`;
    };
    const buttonClassName = 'px-6 py-3 bg-green-500/20 backdrop-blur-sm border border-green-500/50 \
        rounded-lg text-white font-medium transition-all duration-300 \
        hover:border-green-400 hover:bg-green-500/30 \
        hover:shadow-[0_0_35px_rgba(74,222,128,0.4)] \
        flex items-center justify-center gap-2 \
        min-w-[140px] text-center';
    const buttonAnimationProps = {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: {
            once: true,
            amount: 0.1
        },
        whileHover: {
            scale: 1.05,
            boxShadow: '0 0 25px rgba(74,222,128,0.3)',
            borderColor: 'rgba(74,222,128,0.7)'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full flex flex-col lg:flex-row justify-between m-0 p-0 min-h-[80vh] lg:min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlidingBackground, {}, void 0, false, {
                fileName: "[project]/src/app/(home)/Hero.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col justify-center items-center text-center px-8 md:px-[5%] pt-4 md:pt-0 relative z-10 bg-transparent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            amount: 0.1
                        },
                        variants: fadeIn,
                        className: "alegreya text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 font-bold leading-tight relative z-20",
                        children: [
                            "University of Canterbury ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/(home)/Hero.tsx",
                                lineNumber: 136,
                                columnNumber: 46
                            }, this),
                            "Bitcoin, Crypto & Blockchain Society"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(home)/Hero.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            amount: 0.1
                        },
                        variants: slideUp,
                        className: "text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-gray-300 relative z-20",
                        children: "- Advancing Adoption, Knowledge and Community at UC -"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/Hero.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            amount: 0.1
                        },
                        variants: slideUp,
                        className: "text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-gray-300 relative z-20 font-semibold ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/whitepaper",
                            children: "- Whitepaper -"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(home)/Hero.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/Hero.tsx",
                        lineNumber: 150,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/Hero.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(home)/Hero.tsx",
        lineNumber: 123,
        columnNumber: 9
    }, this);
};
_c1 = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c, _c1;
__turbopack_context__.k.register(_c, "SlidingBackground");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(home)/sposors.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const SponsorBanner = ()=>{
    _s();
    // We won't need activeCardIndex state anymore since we'll use hover
    // But we'll keep a touch-specific state for mobile devices
    const [touchActiveCard, setTouchActiveCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sponsors = [
        {
            name: 'Easy Crypto',
            image: '/images/easy-crypto-NZ-logo.png',
            description: "New Zealand's most trusted crypto retail platform for buying and selling cryptocurrency, established in 2018.",
            website: 'https://easycrypto.com'
        },
        {
            name: 'Blockchain NZ',
            image: '/images/Blockchain-NZ-logo-removebg-preview.png',
            description: 'Leading blockchain advocacy and education industry body in New Zealand, established in 2018.',
            website: 'https://blockchain.org.nz'
        },
        {
            name: 'Binance NZ',
            image: '/images/nz-l-1.png',
            description: "The world's largest cryptocurrency exchange, supporting crypto initiatives across New Zealand.",
            website: 'https://www.binance.com/en-NZ'
        },
        {
            name: 'Pay It Now',
            image: '/images/PIN-logo.png',
            description: 'Award winning New Zealand digital asset payment processor, technology company, crypto on-and-off ramp, wallet and token.',
            website: 'https://payitnow.io/'
        },
        {
            name: 'Web3NZ',
            image: '/images/Web3NZ_BlackColour-1024x209.png',
            description: 'Open source New Zealand community and industry initiative built to support and connect Kiwi Web3 founders, creators and businesses.',
            website: 'https://web3nz.xyz/'
        },
        {
            name: 'Crypto Consulting',
            image: '/images/ccnz-logo.png',
            description: 'New Zealand leading cryptocurrency consulting agency, offering personal help, wallet recovery, scam support and legal services.',
            website: 'https://cryptoconsulting.co.nz'
        },
        {
            name: 'Cryptocurrency NZ',
            image: '/images/Horizontal Stacked.png',
            description: 'UPDATE THIS ',
            website: 'https://cryptocurrency.org.nz'
        },
        {
            name: 'Axia Labs',
            image: '/images/logoLarge-1-2048x721.png',
            description: 'NZ blockchain development company creating cutting-edge solutions for decentralized governance, DAOs and digital asset management.',
            website: 'https://axialabs.org/'
        },
        {
            name: 'Pest Free Token',
            image: '/images/Pest-Free-Token-NZ-Logo.png',
            description: 'Mission driven Kiwi project leveraging blockchain technology for trapping, monitoring and incentivizing grassroots pest control.',
            website: 'https://pestfreetoken.co.nz/'
        }
    ];
    // Set active state for mobile - no toggling off
    const handleCardTouch = (index)=>{
        setTouchActiveCard(index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-10 sm:py-12 md:py-16 px-4 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-zinc-900 via-orange-900/30 to-zinc-900"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/sposors.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl opacity-30"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/sposors.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl opacity-20"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/sposors.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-0 w-64 h-64 bg-zinc-600/20 rounded-full blur-3xl opacity-20"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/sposors.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-10 left-1/3 w-2 h-2 bg-orange-400 rounded-full opacity-70 animate-float-slow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/sposors.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 right-1/4 w-3 h-3 bg-orange-500 rounded-full opacity-60 animate-float-medium"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/sposors.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/3 left-1/4 w-2 h-2 bg-orange-300 rounded-full opacity-70 animate-float-fast"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/sposors.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/sposors.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "alegreya text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3 text-white",
                        children: [
                            "Our ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text alegreya text-transparent",
                                children: "Sponsors"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(home)/sposors.tsx",
                                lineNumber: 100,
                                columnNumber: 25
                            }, this),
                            " and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text alegreya text-transparent",
                                children: "Partners"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(home)/sposors.tsx",
                                lineNumber: 100,
                                columnNumber: 149
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(home)/sposors.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-orange-100 text-center text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto",
                        children: "Proudly supported by New Zealand's leading Bitcoin, crypto, web3 and blockchain organizations."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/sposors.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5  mb-10 sm:mb-12",
                        children: sponsors.map((sponsor, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                onClick: ()=>handleCardTouch(index),
                                onTouchEnd: ()=>handleCardTouch(index),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `
                                relative w-full aspect-video 
                                bg-gradient-to-b from-white/40 to-white/20 rounded-lg backdrop-blur-sm 
                                border border-orange-400/30 hover:border-orange-400/70 
                                transition-all duration-300 p-3 sm:p-4 
                                hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] md:hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]
                                overflow-hidden cursor-pointer z-10
                            `,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-[60px] sm:h-[70px] md:h-[80px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: sponsor.image,
                                                    alt: sponsor.name,
                                                    className: "object-contain filter",
                                                    style: {
                                                        filter: 'drop-shadow(0 2px 1px rgba(0,0,0,0.5))'
                                                    },
                                                    fill: true,
                                                    sizes: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw",
                                                    priority: index < 5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(home)/sposors.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(home)/sposors.tsx",
                                                lineNumber: 121,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(home)/sposors.tsx",
                                            lineNumber: 120,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(home)/sposors.tsx",
                                        lineNumber: 109,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `
                                absolute top-0 left-0 right-0
                                bg-gradient-to-b from-zinc-900/95 to-black/95
                                rounded-lg border border-orange-400/30
                                transition-all duration-300 ease-in-out
                                shadow-[0_0_20px_rgba(74,222,128,0.4)]
                                z-20
                                
                                /* Desktop hover behavior */
                                opacity-0 group-hover:opacity-100 
                                pointer-events-none group-hover:pointer-events-auto
                                
                                /* Height adjustments - taller on mobile */
                                h-0 group-hover:h-[200px]
                                md:group-hover:h-[210px] lg:group-hover:h-[220px]
                                
                                /* Mobile touch behavior override using state */
                                ${touchActiveCard === index ? 'opacity-100 h-[220px] pointer-events-auto' : ''}
                                
                                /* For mobile devices: height adjustments and persist expanded state */
                                @media (max-width: 640px) {
                                    ${touchActiveCard === index ? 'opacity-100 h-[220px] pointer-events-auto' : ''}
                                }
                            `,
                                        style: {
                                            backdropFilter: 'blur(3px)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center flex flex-col items-center w-full h-full p-3 sm:p-4 overflow-y-auto scrollbar-hide",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-orange-300 font-semibold text-sm mb-2",
                                                    children: sponsor.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(home)/sposors.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-orange-100 text-xs leading-tight mb-3 pr-1 overflow-y-auto scrollbar-hide",
                                                    children: sponsor.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(home)/sposors.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: sponsor.website,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs rounded-lg  hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:shadow-[0_0_10px_rgba(74,222,128,0.4)] w-full justify-center mt-auto",
                                                    onClick: (e)=>{
                                                        // Prevent the click from propagating to parent (card click)
                                                        e.stopPropagation();
                                                    },
                                                    children: [
                                                        "Visit Website",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-3 h-3",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(home)/sposors.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(home)/sposors.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(home)/sposors.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(home)/sposors.tsx",
                                            lineNumber: 155,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(home)/sposors.tsx",
                                        lineNumber: 128,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/(home)/sposors.tsx",
                                lineNumber: 107,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/sposors.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5  bg-gradient-to-r from-orange-500/20 to-orange-600/10 hover:from-orange-500/30 hover:to-orange-600/20 border border-orange-500/40 hover:border-orange-400/60 rounded-lg text-orange-400 hover:text-orange-300  shadow-sm hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all duration-300 text-sm sm:text-base",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Become a sponsor"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(home)/sposors.tsx",
                                    lineNumber: 200,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 ml-2",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(home)/sposors.tsx",
                                        lineNumber: 202,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(home)/sposors.tsx",
                                    lineNumber: 201,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(home)/sposors.tsx",
                            lineNumber: 190,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/sposors.tsx",
                        lineNumber: 189,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/sposors.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/sposors.tsx",
                lineNumber: 209,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/sposors.tsx",
                lineNumber: 210,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(home)/sposors.tsx",
        lineNumber: 81,
        columnNumber: 9
    }, this);
};
_s(SponsorBanner, "zCXGaTJVjZV6ZlA7A87STmrLsgI=");
_c = SponsorBanner;
const __TURBOPACK__default__export__ = SponsorBanner;
var _c;
__turbopack_context__.k.register(_c, "SponsorBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(home)/Awards.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const awards = [
    {
        title: 'Web3 Education Institution of the Year 2024',
        description: 'Awarded for excellence in cryptocurrency education and empowering New Zealanders with blockchain knowledge.',
        image: '/images/web3-awards-cryptosoc.jpg',
        year: '2024',
        organizer: 'Web3NZ Awards'
    },
    {
        title: 'WebNZ Hackathon Best UX Design Award',
        description: "Our team's commitment to creating intuitive and engaging blockchain interfaces earned us this prestigious recognition.",
        image: '/images/web3nz-award.jpg',
        year: '2025',
        organizer: 'Web3NZ Hackathon'
    }
];
const AwardsSection = ()=>{
    _s();
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AwardsSection.useEffect": ()=>{
            const timer = setInterval({
                "AwardsSection.useEffect.timer": ()=>{
                    setIsTransitioning(true);
                    setTimeout({
                        "AwardsSection.useEffect.timer": ()=>{
                            setCurrentImageIndex({
                                "AwardsSection.useEffect.timer": (prevIndex)=>prevIndex === awards.length - 1 ? 0 : prevIndex + 1
                            }["AwardsSection.useEffect.timer"]);
                            setIsTransitioning(false);
                        }
                    }["AwardsSection.useEffect.timer"], 500);
                }
            }["AwardsSection.useEffect.timer"], 8000);
            return ({
                "AwardsSection.useEffect": ()=>clearInterval(timer)
            })["AwardsSection.useEffect"];
        }
    }["AwardsSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full min-h-[70vh] flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: awards.map((award, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex && !isTransitioning ? 'opacity-100' : 'opacity-0'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-0 w-1/2 lg:w-1/2 h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: award.image,
                                        alt: award.title,
                                        fill: true,
                                        className: "object-contain object-center",
                                        sizes: "(max-width: 768px) 50vw, 50vw",
                                        priority: index === 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(home)/Awards.tsx",
                                        lineNumber: 57,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                    lineNumber: 56,
                                    columnNumber: 29
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/(home)/Awards.tsx",
                                lineNumber: 55,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/Awards.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black/10 to-transparent pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/Awards.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/Awards.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full lg:w-1/2 ml-auto flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl sm:text-3xl md:text-4xl font-bold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-orange-500 block mt-1",
                                                    children: "Our Awards"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 33
                                                }, this),
                                                "Industry Recognition"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                            lineNumber: 72,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 bg-black/80 rounded-2xl p-4 backdrop-blur-xl border border-orange-500/30 shadow-[0_0_30px_rgba(74,222,128,0.3)] transform hover:scale-105 transition-transform duration-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-10 h-10 text-orange-500",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 15C8.70005 15 6.00005 12.3 6.00005 9V3H18V9C18 12.3 15.3 15 12 15Z",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            strokeMiterlimit: "10",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M17.25 21H6.75C5.25 21 4.5 20.25 4.5 18.75V17.25C4.5 15.75 5.25 15 6.75 15H17.25C18.75 15 19.5 15.75 19.5 17.25V18.75C19.5 20.25 18.75 21 17.25 21Z",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            strokeMiterlimit: "10",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M3 3H6V9C6 9.6 6.4 11.1 7.2 12.2L4.8 7.8C4.3 6.8 3.5 6.1 3 6V3Z",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            strokeMiterlimit: "10",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M21 3H18V9C18 9.6 17.6 11.1 16.8 12.2L19.2 7.8C19.7 6.8 20.5 6.1 21 6V3Z",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            strokeMiterlimit: "10",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10.5 21V19.5C10.5 18.7 11.2 18 12 18C12.8 18 13.5 18.7 13.5 19.5V21",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            strokeMiterlimit: "10",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(home)/Awards.tsx",
                                                lineNumber: 82,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                            lineNumber: 77,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                    lineNumber: 71,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-base mt-4",
                                    children: "Celebrating our achievements in the Web3 and cryptocurrency space in New Zealand."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(home)/Awards.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 relative h-[220px] overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 right-0 w-full h-full",
                                children: awards.map((award, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            opacity: index === currentImageIndex ? 1 : 0,
                                            transform: `translateY(${index === currentImageIndex ? 0 : 30}px)`,
                                            transition: 'opacity 0.5s ease, transform 0.5s ease',
                                            pointerEvents: index === currentImageIndex ? 'auto' : 'none'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 pb-4 border-b border-orange-500/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl sm:text-2xl font-bold text-white mb-2",
                                                    children: award.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-orange-400 text-sm mb-2",
                                                    children: [
                                                        award.organizer,
                                                        " · ",
                                                        award.year
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300 mt-2",
                                                    children: award.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-200 text-sm",
                                                        children: [
                                                            index === 0 && 'This award recognizes companies making exceptional contributions to Web3 adoption and innovation in New Zealand. Our work in blockchain education and consulting helped secure this prestigious honor.',
                                                            index === 1 && "As a leader in cryptocurrency education, we've taught hundreds of Kiwis about blockchain technology through workshops, courses, and consulting services.",
                                                            index === 2 && "Our team's innovative approach to blockchain UI/UX design stood out among dozens of entries, demonstrating our commitment to making cryptocurrency technology accessible to everyone."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(home)/Awards.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                            lineNumber: 101,
                                            columnNumber: 37
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/src/app/(home)/Awards.tsx",
                                        lineNumber: 100,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(home)/Awards.tsx",
                                lineNumber: 98,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(home)/Awards.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: awards.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentImageIndex(index),
                                            className: `w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-orange-500 w-8' : 'bg-gray-500 hover:bg-gray-400'}`,
                                            "aria-label": `View award ${index + 1}`
                                        }, index, false, {
                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                            lineNumber: 127,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-xs text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                            lineNumber: 131,
                                            columnNumber: 29
                                        }, this),
                                        currentImageIndex + 1,
                                        " of ",
                                        awards.length,
                                        " awards"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(home)/Awards.tsx",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-3 mt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl font-bold text-orange-400",
                                            children: awards.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                            lineNumber: 139,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-300",
                                            children: "Awards Won"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                            lineNumber: 140,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                    lineNumber: 138,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl font-bold text-orange-400",
                                            children: "2024-25"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                            lineNumber: 143,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-300",
                                            children: "Award Period"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                            lineNumber: 144,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                    lineNumber: 142,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl font-bold text-orange-400",
                                            children: "Web3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                            lineNumber: 147,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-300",
                                            children: "Industry"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(home)/Awards.tsx",
                                            lineNumber: 148,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(home)/Awards.tsx",
                                    lineNumber: 146,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(home)/Awards.tsx",
                            lineNumber: 137,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(home)/Awards.tsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/Awards.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(home)/Awards.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
};
_s(AwardsSection, "eZE5WC7lHIFmYRdtEQU5UmIO/yo=");
_c = AwardsSection;
const __TURBOPACK__default__export__ = AwardsSection;
var _c;
__turbopack_context__.k.register(_c, "AwardsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_3fb320ed._.js.map