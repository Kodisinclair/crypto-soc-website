"use client";
import { useState, useEffect, useRef } from "react";
import {
  Heart,
  Users,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import React from "react";

interface GalleryItem {
  category: string;
  title: string;
  description: string;
  image: string;
}

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

interface StatBoxProps {
  icon: React.ReactNode;
  label: string;
  value: number;
}

const AnimatedCounter = ({ end, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
      const easedProgress = easeOutQuart(progress);
      setCount(Math.round(easedProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span className="text-2xl font-bold text-green-400 tabular-nums">
      {count.toLocaleString()}
    </span>
  );
};

const StatBox = ({ icon, label, value }: StatBoxProps) => (
  <div className="flex flex-col items-center justify-center px-2 py-4 bg-black/30 rounded-lg border border-green-400/30 text-center">
    {icon}
    <AnimatedCounter end={value} />
    <span className="text-xs text-green-100 mt-1 w-full text-center whitespace-normal leading-tight">
      {label}
    </span>
  </div>
);

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Use a completely different approach for mobile
  useEffect(() => {
    const playPauseVideo = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch((err) => console.error("Error playing video:", err));
        }
      }
    };

    const button = buttonRef.current;
    if (button) {
      // Remove any existing listeners to prevent duplicates
      button.removeEventListener("click", playPauseVideo);

      // Add a simple click handler - this works better on mobile
      button.addEventListener("click", playPauseVideo);

      // If video ends, reset state
      if (videoRef.current) {
        videoRef.current.onended = () => setIsPlaying(false);
      }
    }

    return () => {
      if (button) {
        button.removeEventListener("click", playPauseVideo);
      }
    };
  }, [isPlaying]);

  return (
    <div className="relative w-full mb-12 rounded-xl overflow-hidden">
      {/* Container with controlled width to prevent stretching */}
      <div className="max-w-3xl mx-auto h-[28rem] bg-black rounded-xl">
        <video
          ref={videoRef}
          className="w-full h-full object-contain rounded-xl"
          playsInline
          // autoPlay removed to prevent auto-playing
        >
          <source src="/nic.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="absolute bottom-6 right-6 flex items-center gap-4">
        <button
          ref={buttonRef}
          className="p-4 rounded-full bg-green-500 text-white hover:bg-green-400 transition-colors cursor-pointer touch-auto"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          style={{
            WebkitTapHighlightColor: "transparent",
            zIndex: 50, // Ensure it's above everything else
          }}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
      </div>

      <div className="absolute bottom-6 left-6 max-w-lg">
        <h3 className="text-xl font-bold text-white mb-2">
          Cryptocurrency NZ Meetups
        </h3>
        <p className="text-green-100 text-sm">
          Join our thriving community of crypto enthusiasts, developers, and
          innovators across Aotearoa.
        </p>
      </div>
    </div>
  );
};

const ImageCarousel = ({ items }: { items: GalleryItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Updated touch event handlers with proper React types
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  function nextSlide() {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % items.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }

  function prevSlide() {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div
      className="relative h-[28rem] w-full overflow-hidden rounded-lg"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: "manipulation" }}
    >
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="relative min-w-full h-full">
            <div className="relative w-full h-full">
              {/* Adjusted to make images larger while preventing extreme cropping */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover bg-black object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
                draggable="false"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="text-green-400 text-sm font-medium">
                {item.category}
              </span>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              <p className="text-green-100 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="Previous slide"
        style={{ touchAction: "manipulation" }}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="Next slide"
        style={{ touchAction: "manipulation" }}
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-green-400 w-6" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

{
  /* MeetupLocations component removed as it's been replaced with a StatBox */
}

const Gallery = () => {
  const items: GalleryItem[] = [
    {
      category: "Christchurch",
      title: "Christchurch Meetup",
      description: "August 2024",
      image: "/images/Chch.jpg",
    },
    {
      category: "Auckland",
      title: "Auckland Meetup",
      description: "September 2024",
      image: "/images/hawkes bay.jpeg",
    },
    {
      category: "Hawkes Bay",
      title: "Hawkes Bay Meetup",
      description: "August 2024",
      image: "/images/hawkes bay 2.jpeg",
    },
    {
      category: "Tauranga",
      title: "Tauranga Meetup",
      description: "October 2024",
      image: "/images/tauranga.jpg",
    },
  ];

  return (
    // Using TeamSection's background and structure
    <section
      id="gallery"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/15 via-zinc-800/95 to-zinc-900/15" />

      {/* Decorative gradient elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute -top-32 right-1/3 w-64 h-64 bg-zinc-600/20 rounded-full blur-3xl opacity-30" />

      {/* Content container with better responsive padding */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="alegreya text-3xl md:text-4xl font-bold text-center mb-2 text-white">
            Cryptocurrency NZ{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text alegreya text-transparent">
              Monthly Meetups
            </span>
          </h2>
          <p className="text-green-100 text-center text-sm md:text-base">
            Explore the physical social realm of New Zealand's Bitcoin, crypto
            and web3 community, forging friendships and connections; catalyzing
            collaboration, innovation, enterprise and industry.
          </p>
        </div>

        <VideoSection />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              Recent Meetups
            </h3>
            <ImageCarousel items={items} />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white mb-4">Get Involved</h3>

            <button className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-green-600 p-[1px] transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]">
              <div className="relative bg-black/90 backdrop-blur-xl px-8 py-4 rounded-lg transition-all duration-300 group-hover:bg-black/80">
                <div className="flex items-center justify-center gap-3">
                  <Heart className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">
                    Sponsor Our Meetups
                  </span>
                </div>
              </div>
            </button>

            <button className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-green-600 p-[1px] transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]">
              <div className="relative bg-black/90 backdrop-blur-xl px-8 py-4 rounded-lg transition-all duration-300 group-hover:bg-black/80">
                <div className="flex items-center justify-center gap-3">
                  <Sparkles className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">
                    Host A Meetup
                  </span>
                </div>
              </div>
            </button>

            <button className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-green-600 p-[1px] transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]">
              <div className="relative bg-black/90 backdrop-blur-xl px-8 py-4 rounded-lg transition-all duration-300 group-hover:bg-black/80">
                <div className="flex items-center justify-center gap-3">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">
                    Join Community
                  </span>
                </div>
              </div>
            </button>

            {/* Stats now in 2 rows with 2 columns each */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <StatBox
                icon={<Users className="w-6 h-6 text-green-400 mb-2" />}
                label="Total Attendees"
                value={5247}
              />
              <StatBox
                icon={<Sparkles className="w-6 h-6 text-green-400 mb-2" />}
                label="Total Events"
                value={452}
              />
              <StatBox
                icon={<Heart className="w-6 h-6 text-green-400 mb-2" />}
                label="Sponsorships"
                value={11}
              />
              <StatBox
                icon={<MapPin className="w-6 h-6 text-green-400 mb-2" />}
                label="Meetup Locations"
                value={12}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
