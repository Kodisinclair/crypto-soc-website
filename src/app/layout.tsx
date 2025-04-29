import type { Metadata } from 'next'
import { Alegreya_SC, Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const agreya = Alegreya_SC({
    weight: ['400', '500', '700', '800', '900'],
    variable: '--font-alegreya',
    subsets: ['latin']
})

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'Cryptocurrency NZ - New Zealand Crypto Community & Guide',
    description: "Cryptocurrency NZ | New Zealand grassroots crypto community organization and guide powering the physical and digital infrastructure of NZ's crypto revolution.",
    robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    metadataBase: new URL('https://cryptocurrency.org.nz/'),
    alternates: {
        canonical: 'https://cryptocurrency.org.nz/'
    },
    openGraph: {
        locale: 'en_US',
        type: 'website',
        title: 'Cryptocurrency NZ - New Zealand Crypto Community & Guide',
        description: "Learn how to set up a wallet, buy cryptocurrency in NZ and connect with New Zealand's cryptocurrency community. :)",
        url: 'https://cryptocurrency.org.nz/',
        siteName: 'Cryptocurrency NZ',
        images: [
            {
                url: 'https://cryptocurrency.org.nz/wp-content/uploads/2023/06/Cryptocurrency-NZ-Aotearoa.png',
                secureUrl: 'https://cryptocurrency.org.nz/wp-content/uploads/2023/06/Cryptocurrency-NZ-Aotearoa.png',
                width: 1200,
                height: 630,
                alt: 'Bitcoin Ethereum Cryptocurrency NZ',
                type: 'image/png'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cryptocurrency NZ - New Zealand Crypto Community & Guide',
        description: "Learn how to set up a wallet, buy cryptocurrency in NZ and connect with New Zealand's cryptocurrency community. :)",
        creator: '@Aoraki_RangerNZ',
        images: ['https://cryptocurrency.org.nz/wp-content/uploads/2023/06/Cryptocurrency-NZ-Aotearoa.png']
    },
    authors: [{ name: 'Harry Satoshi' }],
    other: {
        'article:published_time': '2020-07-21T20:24:34+12:00',
        'article:modified_time': '2025-01-28T13:52:43+13:00',
        'twitter:label1': 'Written by',
        'twitter:data1': 'Harry Satoshi',
        'twitter:label2': 'Time to read',
        'twitter:data2': '1 minute'
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/cropped-CNZ-Favicon-Maker-32x32.png" sizes="32x32" />
                <link rel="icon" href="/cropped-CNZ-Favicon-Maker-192x192.png" sizes="192x192" />
                <link rel="apple-touch-icon" href="/cropped-CNZ-Favicon-Maker-180x180.png" />
            </head>
            <body className={`${agreya.variable} ${inter.variable} antialiased bg-dark`}>
                <div className="relative w-full min-h-screen bg-dark text-white">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
