import { Twitter, Facebook, Instagram, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-black py-12 px-4 border-t border-orange-500/20 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    {/* 1️⃣ Logo + Description + Socials */}
                    <div>
                        <div className="relative w-50 mb-4">
                            <img src="/images/Crypto-soc-Logo.png" alt="CNZ Logo" className="object-contain" />
                        </div>
                        <a href="$">
                            <h3 className="text-white font-bold text-xl mb-4">
                                UC CryptoSociety <span className="text-orange-400">DAO</span>
                            </h3>
                        </a>
                        <p className="text-gray-400 text-sm mb-4">
                            UC Crypto Soc, summoned as New Zealand’s first university DAO in 2024, empowers and unites the University of Canterbury’s Bitcoin, crypto and blockchain student body through decentralized governance, educational events and collaboration with the broader NZ industry. 
                        </p>
                        <div className="flex gap-4 mb-6">
                            {[{
                                href: "https://x.com/CNZ_DAO", Icon: Twitter
                            }, {
                                href: "https://www.facebook.com/CryptocurrencyNZ", Icon: Facebook
                            }, {
                                href: "https://www.instagram.com/cryptocurrency_nz/", Icon: Instagram
                            }, {
                                href: "https://www.linkedin.com/company/cryptocurrencynz/posts/?feedView=all", Icon: Linkedin
                            }].map(({ href, Icon }, i) => (
                                <a key={i} href={href} className="text-orange-400 hover:text-orange-300 transition-colors" aria-label={Icon.name}>
                                    <Icon size={20} />
                                    <span className="sr-only">{Icon.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2️⃣ Community Links */}
                    <div className="mt-5 md:mt- pl-20">
                        <h3 className="text-white font-semibold text-base mb-4">
                            <a href="#">Join Us</a>
                        </h3>
                        <h3 className="text-white font-semibold text-base mb-4">
                            <a href="#">Sponsor Us</a>
                        </h3>
                        <h3 className="text-white font-semibold text-base mb-4">  <a href="mailto:UCCryptoSocDAO@protonmail.com" >
                        Contact Us</a></h3>
                      
                        <h3 className="text-white font-semibold text-base mb-4">
                            <a href="#">Media Enquiries</a>
                        </h3>
                    </div>

                    {/* 3️⃣ Sponsor Logos */}
                    
                    <div className="flex flex-col gap-6 mt-9 md:mt-5 items-center pr-20">
                    <h3 className="text-white font-semibold text-base">Industry Partners</h3>

                    <div className="w-50  h-20 relative">
                            <Image src="/images/Horizontal Community & Education.png" alt="BlockchainNZ" fill className="object-contain" />
                        </div>
                        <div className="w-50 h-14 relative">
                            <Image src="/images/Blockchain-NZ-logo-removebg-preview.png" alt="BlockchainNZ" fill className="object-contain" />
                        </div>
                        <div className="w-32 h-14 relative">
                            <Image src="/images/Web3NZ-logo.png" alt="Web3NZ" fill className="object-contain" />
                        </div>
                        {/* Add more logos here as needed */}
                    </div>

                    {/* 4️⃣ Mailing List */}
                    <div className="mt-5 md:mt-3">
                        <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
                            <Mail size={16} className="text-orange-400" />
                            Mailing List
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">Join our mailing list to stay connected.</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md 
                                    focus:outline-none focus:border-orange-500 text-sm text-white placeholder-gray-500"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 transition-all 
                                    rounded-md text-black font-semibold text-sm shadow-[0_0_10px_rgba(255,165,0,0.3)]"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-zinc-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
                        <p>© {currentYear} UC CryptoSociety DAO. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
