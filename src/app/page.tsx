"use client"

import { Gravity, MatterBody } from "@/components/ui/gravity";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [shouldDrop, setShouldDrop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;

      const bannerRect = bannerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Trigger when banner is halfway up the screen
      if (bannerRect.top <= viewportHeight / 2 && !shouldDrop) {
        setShouldDrop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldDrop]);

  const apps = [
    {
      name: "Fish for Compliments",
      description: "get your crush to\nreact to your story",
      image: "https://ext.same-assets.com/3723280312/2036637701.png",
      bgColor: "bg-[#14b8a6]",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-[#14b8a6]"
    },
    {
      name: "vandalizefriend.com",
      description: "graffiti any friend.com\nsubway ad",
      image: "https://ext.same-assets.com/3723280312/4066041998.png",
      bgColor: "bg-[#f97316]",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-[#f97316]"
    },
    {
      name: "day of generator",
      description: "generate any day in\nthe life of",
      image: "https://ext.same-assets.com/3723280312/58754368.png",
      bgColor: "bg-[#1e293b]",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-black"
    },
    {
      name: "iChallengers",
      description: "Swing your phone\nand win",
      image: "https://ext.same-assets.com/3723280312/391401805.png",
      bgColor: "bg-[#059669]",
      textColor: "text-white",
      buttonColor: "bg-[#fbbf24]",
      buttonTextColor: "text-black"
    },
    {
      name: "Crowd Critic",
      description: "Get feedback from\nthe crowd",
      image: "https://ext.same-assets.com/3723280312/4183040494.png",
      bgColor: "bg-[#0f172a]",
      textColor: "text-[#10b981]",
      buttonColor: "bg-[#10b981]",
      buttonTextColor: "text-black"
    },
    {
      name: "iMatcha",
      description: "iBeer but\nfor Matcha",
      image: "https://ext.same-assets.com/3723280312/4066041998.png",
      bgColor: "bg-[#fce7f3]",
      textColor: "text-[#831843]",
      buttonColor: "bg-[#581c87]"
    },
    {
      name: "Performative",
      description: "hang a digital labubu\non your hip",
      image: "https://ext.same-assets.com/3723280312/2816592954.png",
      bgColor: "bg-white",
      textColor: "text-[#ea580c]",
      buttonColor: "bg-[#ea580c]"
    },
    {
      name: "Mog Cam",
      description: "Mog your\nfriends live.",
      image: "https://ext.same-assets.com/3723280312/1727164209.png",
      bgColor: "bg-[#22d3ee]",
      textColor: "text-[#0c4a6e]",
      buttonColor: "bg-[#0f172a]"
    },
    {
      name: "Powers of Ten",
      description: "Life is\nokay.",
      image: "https://ext.same-assets.com/3723280312/41583936.png",
      bgColor: "bg-[#334155]",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-black"
    },
    {
      name: "Iceberg Search",
      description: "Generate iceberg memes\nfor deep research",
      image: "https://ext.same-assets.com/3723280312/710508867.png",
      bgColor: "bg-[#7dd3fc]",
      textColor: "text-[#7c2d12]",
      buttonColor: "bg-[#ea580c]"
    },
    {
      name: "Yapwars",
      description: "Create characters and\nyap to win",
      image: "https://ext.same-assets.com/3723280312/1495745138.png",
      bgColor: "bg-[#475569]",
      textColor: "text-[#fde047]",
      buttonColor: "bg-[#fbbf24]",
      buttonTextColor: "text-black"
    },
    {
      name: "Kawaii App",
      description: "Rewind ur memories\nwith uwu collages",
      image: "https://ext.same-assets.com/3723280312/2738865647.png",
      bgColor: "bg-[#ec4899]",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-[#ec4899]"
    },
    {
      name: "Knowing Fun",
      description: "Go down the\nrabbit hole",
      image: "https://ext.same-assets.com/3723280312/1866264660.png",
      bgColor: "bg-[#d946ef]",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-[#d946ef]"
    },
    {
      name: "Curate Curator",
      description: "Curate a\ncurator",
      image: "https://ext.same-assets.com/3723280312/4172628487.png",
      bgColor: "bg-[#dc2626]",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-[#dc2626]"
    },
    {
      name: "AI Pope",
      description: "This AI pope thinks you're going\nto hell, convince him you're not",
      image: "https://ext.same-assets.com/3723280312/100211574.png",
      bgColor: "bg-[#7c2d12]",
      textColor: "text-[#fdba74]",
      buttonColor: "bg-[#f97316]"
    },
    {
      name: "Fake Until Real",
      description: "See what it's like\nto be successful",
      image: "https://ext.same-assets.com/3723280312/121689664.png",
      bgColor: "bg-[#fde047]",
      textColor: "text-[#713f12]",
      buttonColor: "bg-[#dc2626]"
    },
    {
      name: "Neue Blumen",
      description: "art of\narranging flowers",
      image: "https://ext.same-assets.com/3723280312/902226641.png",
      bgColor: "bg-[#7c3aed]",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-[#7c3aed]"
    },
    {
      name: "Clockwork",
      description: "generate chatgpt\npush notifications",
      image: "https://ext.same-assets.com/3723280312/1002871628.png",
      bgColor: "bg-[#6366f1]",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-[#6366f1]"
    },
    {
      name: "Buy or Not",
      description: "Fun opportunity\ncost calculator",
      image: "https://ext.same-assets.com/3723280312/2545785048.png",
      bgColor: "bg-[#1e3a8a]",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-black"
    },
    {
      name: "keep going",
      description: "Make your habits\na movie",
      image: "https://ext.same-assets.com/3723280312/2723225361.png",
      bgColor: "bg-[#0d9488]",
      textColor: "text-[#fef08a]",
      buttonColor: "bg-[#fde047]",
      buttonTextColor: "text-black"
    },
    {
      name: "MogOrNot",
      description: "take a photo of you and\nyour friend, see who mogs who?",
      image: "https://ext.same-assets.com/3723280312/3666138685.png",
      bgColor: "bg-[#8b5cf6]",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-[#8b5cf6]"
    },
    {
      name: "Go Offline",
      description: "app that only\nworks offline",
      image: "https://ext.same-assets.com/3723280312/993237454.png",
      bgColor: "bg-[#be123c]",
      textColor: "text-white",
      buttonColor: "bg-black"
    },
    {
      name: "Manifest",
      description: "i'm not gonna\ncrashout today",
      image: "https://ext.same-assets.com/3723280312/1255717005.png",
      bgColor: "bg-black",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-black"
    },
    {
      name: "Glaze",
      description: "show your\nfriends love",
      image: "https://ext.same-assets.com/3723280312/4030438393.png",
      bgColor: "bg-[#f472b6]",
      textColor: "text-white",
      buttonColor: "bg-[#06b6d4]"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#f7f9f9]">
      {/* Header */}
      <header className="relative px-4 py-8 md:px-8">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-600 tracking-tight mb-6">
          NOTABLES
        </h1>
        <nav className="flex gap-6 text-gray-600 text-lg">
          <a href="#" className="hover:text-gray-800 transition-colors">Apps</a>
          <a href="#" className="hover:text-gray-800 transition-colors">Connect</a>
        </nav>
      </header>

      {/* Apps Grid */}
      <main className="relative px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
          {apps.map((app, index) => (
            <div key={index} className={`${app.bgColor} p-6 flex flex-col gap-4`}>
              {/* App Image */}
              <div className="flex justify-center items-center h-48">
                <img
                  src={app.image}
                  alt={app.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* App Info */}
              <div className="flex-1">
                <h2 className={`${app.textColor} font-bold text-xl mb-2 uppercase`}>
                  {app.name}
                </h2>
                <p className={`${app.textColor} text-sm whitespace-pre-line`}>
                  {app.description}
                </p>
              </div>

              {/* Button */}
              {index === 0 ? (
                <Link href="/dashboard">
                  <button
                    className={`${app.buttonColor} ${app.buttonTextColor || 'text-white'} py-3 px-6 font-mono lowercase hover:opacity-90 transition-opacity w-full`}
                  >
                    enter
                  </button>
                </Link>
              ) : (
                <button
                  className={`${app.buttonColor} ${app.buttonTextColor || 'text-white'} py-3 px-6 font-mono lowercase hover:opacity-90 transition-opacity`}
                >
                  enter
                </button>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Scrolling Banner */}
      <div ref={bannerRef} className="relative bg-[#a78bfa] border-y-4 border-black py-3 overflow-hidden my-12">
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="text-black font-bold text-sm uppercase inline-block">
            danger zone&nbsp;&nbsp;·&nbsp;&nbsp;get early access to new app drops&nbsp;&nbsp;·&nbsp;&nbsp;experimental apps before anyone else&nbsp;&nbsp;·&nbsp;&nbsp;
            danger zone&nbsp;&nbsp;·&nbsp;&nbsp;get early access to new app drops&nbsp;&nbsp;·&nbsp;&nbsp;experimental apps before anyone else&nbsp;&nbsp;·&nbsp;&nbsp;
          </span>
          <span className="text-black font-bold text-sm uppercase inline-block">
            danger zone&nbsp;&nbsp;·&nbsp;&nbsp;get early access to new app drops&nbsp;&nbsp;·&nbsp;&nbsp;experimental apps before anyone else&nbsp;&nbsp;·&nbsp;&nbsp;
            danger zone&nbsp;&nbsp;·&nbsp;&nbsp;get early access to new app drops&nbsp;&nbsp;·&nbsp;&nbsp;experimental apps before anyone else&nbsp;&nbsp;·&nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative px-4 md:px-8 py-16 flex flex-col items-center min-h-[600px]">
        <div className="mb-8 relative z-10">
          <svg width="280" height="280" viewBox="0 0 280 280" fill="none" className="text-gray-500">
            {/* Turtle silhouette */}
            <ellipse cx="140" cy="160" rx="80" ry="60" fill="currentColor"/>
            {/* Head */}
            <ellipse cx="95" cy="120" rx="28" ry="32" fill="currentColor"/>
            {/* Legs */}
            <ellipse cx="100" cy="200" rx="18" ry="35" fill="currentColor" transform="rotate(-20 100 200)"/>
            <ellipse cx="180" cy="200" rx="18" ry="35" fill="currentColor" transform="rotate(20 180 200)"/>
            <ellipse cx="120" cy="185" rx="15" ry="28" fill="currentColor" transform="rotate(-10 120 185)"/>
            <ellipse cx="160" cy="185" rx="15" ry="28" fill="currentColor" transform="rotate(10 160 185)"/>
            {/* Tail */}
            <path d="M210 160 L240 150 L235 160 L240 170 Z" fill="currentColor"/>
          </svg>
        </div>
        <p className="text-gray-500 text-sm font-mono relative z-10">
          2025 Notables. All Rights Reserved.
        </p>

        {/* Falling Elements in Footer */}
        {shouldDrop && (
          <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full" grabCursor={true}>
            <MatterBody
              matterBodyOptions={{ friction: 0.3, restitution: 0.5, density: 0.001 }}
              isDraggable={true}
              x="15%"
              y="-10%"
            >
              <div className="text-base sm:text-lg md:text-xl bg-[#0015ff] text-white rounded-full px-6 py-3 shadow-lg select-none">
                react
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.3, restitution: 0.5, density: 0.001 }}
              isDraggable={true}
              x="30%"
              y="-15%"
            >
              <div className="text-base sm:text-lg md:text-xl bg-[#E794DA] text-white rounded-full px-6 py-3 shadow-lg select-none">
                typescript
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.3, restitution: 0.5, density: 0.001 }}
              isDraggable={true}
              x="50%"
              y="-8%"
              angle={10}
            >
              <div className="text-base sm:text-lg md:text-xl bg-[#1f464d] text-white rounded-full px-6 py-3 shadow-lg select-none">
                motion
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.3, restitution: 0.5, density: 0.001 }}
              isDraggable={true}
              x="65%"
              y="-12%"
            >
              <div className="text-base sm:text-lg md:text-xl bg-[#ff5941] text-white rounded-full px-6 py-3 shadow-lg select-none">
                tailwind
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.3, restitution: 0.5, density: 0.001 }}
              isDraggable={true}
              x="80%"
              y="-5%"
            >
              <div className="text-base sm:text-lg md:text-xl bg-orange-500 text-white rounded-full px-6 py-3 shadow-lg select-none">
                drei
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.3, restitution: 0.5, density: 0.001 }}
              isDraggable={true}
              x="5%"
              y="-18%"
            >
              <div className="text-base sm:text-lg md:text-xl bg-[#ffd726] text-black rounded-full px-6 py-3 shadow-lg select-none">
                matter-js
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.3, restitution: 0.5, density: 0.001 }}
              isDraggable={true}
              x="42%"
              y="-20%"
              angle={-15}
            >
              <div className="text-base sm:text-lg md:text-xl bg-[#22d3ee] text-black rounded-full px-6 py-3 shadow-lg select-none">
                shadcn
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.3, restitution: 0.5, density: 0.001 }}
              isDraggable={true}
              x="72%"
              y="-14%"
            >
              <div className="text-base sm:text-lg md:text-xl bg-[#a78bfa] text-white rounded-full px-6 py-3 shadow-lg select-none">
                next.js
              </div>
            </MatterBody>
          </Gravity>
        )}
      </footer>
    </div>
  );
}
