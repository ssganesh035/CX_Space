import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-black py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full floating"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-400 rounded-full animate-wiggle"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Welcome to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">CXSpace</span> 🚀
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-slate-300">
              The premier community for Customer Success Engineers, Technical Support Professionals, and B2B SaaS experts who are passionate about customer success! ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25">
                <Link href="/join">
                  <Users className="mr-2 h-5 w-5 animate-bounce" />
                  🎉 Join Our Community
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Link href="/about">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-xl opacity-25 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur-lg opacity-20 animate-pulse delay-75"></div>
            <div className="rounded-xl shadow-2xl w-full h-auto relative z-10 floating border border-blue-500/20 bg-gradient-to-br from-slate-800 to-slate-900 p-8">
              <svg
                width="100%"
                height="300"
                viewBox="0 0 400 300"
                className="w-full h-auto"
              >
                <defs>
                  <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#3B82F6", stopOpacity:0.1}} />
                    <stop offset="100%" style={{stopColor:"#06B6D4", stopOpacity:0.1}} />
                  </linearGradient>
                  <linearGradient id="deviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#3B82F6", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#06B6D4", stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#1E293B", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#0F172A", stopOpacity:1}} />
                  </linearGradient>
                </defs>
                
                <rect width="400" height="300" fill="url(#bgGradient)" />
                
                <circle cx="50" cy="50" r="3" fill="#3B82F6" opacity="0.6">
                  <animate attributeName="cy" values="50;40;50" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="350" cy="80" r="2" fill="#06B6D4" opacity="0.8">
                  <animate attributeName="cy" values="80;70;80" dur="2.5s" repeatCount="indefinite" />
                </circle>
                
                <rect x="120" y="80" width="160" height="120" rx="8" fill="url(#deviceGradient)" />
                <rect x="130" y="90" width="140" height="90" rx="4" fill="url(#screenGradient)" />
                
                <rect x="140" y="100" width="120" height="4" rx="2" fill="#3B82F6" opacity="0.8" />
                <rect x="140" y="110" width="80" height="3" rx="1.5" fill="#06B6D4" opacity="0.6" />
                
                <circle cx="150" cy="165" r="6" fill="#10B981" opacity="0.8" />
                <circle cx="180" cy="165" r="6" fill="#10B981" opacity="0.8" />
                <circle cx="210" cy="165" r="6" fill="#10B981" opacity="0.8" />
                
                <rect x="300" y="120" width="60" height="100" rx="12" fill="url(#deviceGradient)" />
                <rect x="308" y="130" width="44" height="70" rx="4" fill="url(#screenGradient)" />
                
                <g opacity="0.8">
                  <animate attributeName="transform" values="translate(0,0);translate(0,-5);translate(0,0)" dur="3s" repeatCount="indefinite" />
                  <rect x="20" y="120" width="40" height="25" rx="4" fill="#10B981" opacity="0.2" />
                  <text x="40" y="135" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="bold">98%</text>
                  <text x="40" y="145" textAnchor="middle" fill="#10B981" fontSize="6">CSAT</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
