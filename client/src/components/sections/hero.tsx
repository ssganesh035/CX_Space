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
            <div className="w-full h-auto relative z-10 floating">
              <svg
                width="100%"
                height="320"
                viewBox="0 0 500 320"
                className="w-full h-auto"
              >
                <defs>
                  <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#3B82F6", stopOpacity:0.8}} />
                    <stop offset="100%" style={{stopColor:"#06B6D4", stopOpacity:0.8}} />
                  </linearGradient>
                  <linearGradient id="personGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#F8FAFC", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#E2E8F0", stopOpacity:1}} />
                  </linearGradient>
                </defs>
                
                {/* B2B SaaS Dashboard */}
                <rect x="80" y="60" width="180" height="120" rx="8" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" opacity="0.9" />
                <rect x="90" y="70" width="160" height="90" rx="4" fill="url(#screenGlow)" opacity="0.1" />
                
                {/* B2B SaaS Label */}
                <rect x="85" y="40" width="60" height="16" rx="8" fill="#3B82F6" />
                <text x="115" y="51" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">B2B SaaS</text>
                
                {/* Dashboard Content */}
                <text x="100" y="85" fill="#3B82F6" fontSize="8" fontWeight="bold">Customer Dashboard</text>
                <rect x="100" y="95" width="80" height="3" rx="1.5" fill="#06B6D4" opacity="0.8" />
                <rect x="100" y="105" width="60" height="3" rx="1.5" fill="#3B82F6" opacity="0.6" />
                <rect x="100" y="115" width="100" height="3" rx="1.5" fill="#10B981" opacity="0.6" />
                
                {/* Analytics Charts */}
                <rect x="100" y="130" width="20" height="15" fill="#3B82F6" opacity="0.7" />
                <rect x="125" y="125" width="20" height="20" fill="#06B6D4" opacity="0.7" />
                <rect x="150" y="120" width="20" height="25" fill="#10B981" opacity="0.7" />
                

                
                {/* Human Elements - Support Team - Bigger */}
                <g transform="translate(290, 70)">
                  {/* Person 1 - Customer Success Manager */}
                  <circle cx="20" cy="30" r="16" fill="url(#personGradient)" stroke="#3B82F6" strokeWidth="3" />
                  <circle cx="20" cy="24" r="5" fill="#3B82F6" />
                  <rect x="14" y="30" width="12" height="18" rx="2" fill="#3B82F6" />
                  <text x="20" y="65" textAnchor="middle" fill="#3B82F6" fontSize="7" fontWeight="bold">CS</text>
                  <text x="20" y="75" textAnchor="middle" fill="#3B82F6" fontSize="7">Manager</text>
                  
                  {/* Person 2 - Tech Support */}
                  <circle cx="80" cy="30" r="16" fill="url(#personGradient)" stroke="#06B6D4" strokeWidth="3" />
                  <circle cx="80" cy="24" r="5" fill="#06B6D4" />
                  <rect x="74" y="30" width="12" height="18" rx="2" fill="#06B6D4" />
                  <text x="80" y="65" textAnchor="middle" fill="#06B6D4" fontSize="7" fontWeight="bold">Tech</text>
                  <text x="80" y="75" textAnchor="middle" fill="#06B6D4" fontSize="7">Support</text>
                  
                  {/* Person 3 - Solutions Engineer */}
                  <circle cx="140" cy="30" r="16" fill="url(#personGradient)" stroke="#10B981" strokeWidth="3" />
                  <circle cx="140" cy="24" r="5" fill="#10B981" />
                  <rect x="134" y="30" width="12" height="18" rx="2" fill="#10B981" />
                  <text x="140" y="65" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="bold">Solutions</text>
                  <text x="140" y="75" textAnchor="middle" fill="#10B981" fontSize="7">Engineer</text>
                </g>
                

                
                {/* Cool Scattered Tech Keywords */}
                {/* Top Area */}
                <g transform="translate(30, 25)">
                  <rect x="0" y="0" width="25" height="16" rx="3" fill="#3B82F6" opacity="0.8" />
                  <text x="12" y="11" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">API</text>
                </g>
                
                <g transform="translate(280, 15)">
                  <rect x="0" y="0" width="30" height="16" rx="3" fill="#06B6D4" opacity="0.8" />
                  <text x="15" y="11" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">CRM</text>
                </g>
                
                <g transform="translate(380, 25)">
                  <rect x="0" y="0" width="35" height="16" rx="3" fill="#06B6D4" opacity="0.8" />
                  <text x="17" y="11" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">Frontend</text>
                </g>
                
                <g transform="translate(440, 15)">
                  <rect x="0" y="0" width="25" height="16" rx="3" fill="#10B981" opacity="0.8" />
                  <text x="12" y="11" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">DB</text>
                </g>
                
                {/* Left Side */}
                <g transform="translate(15, 90)">
                  <rect x="0" y="0" width="50" height="16" rx="3" fill="#8B5CF6" opacity="0.7" />
                  <text x="25" y="11" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">Enterprise</text>
                </g>
                
                <g transform="translate(10, 160)">
                  <rect x="0" y="0" width="42" height="18" rx="4" fill="#3B82F6" opacity="0.6" />
                  <text x="21" y="12" textAnchor="middle" fill="#3B82F6" fontSize="6" fontWeight="bold">Webhooks</text>
                </g>
                
                {/* Right Side */}
                <g transform="translate(460, 140)">
                  <rect x="0" y="0" width="32" height="16" rx="3" fill="#10B981" opacity="0.6" />
                  <text x="16" y="11" textAnchor="middle" fill="#10B981" fontSize="6" fontWeight="bold">Backend</text>
                </g>
                
                {/* Bottom Area */}
                <g transform="translate(70, 250)">
                  <rect x="0" y="0" width="70" height="16" rx="3" fill="#EF4444" opacity="0.7" />
                  <text x="35" y="11" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">Rapport Building</text>
                </g>
                
                {/* AI Innovation - Enhanced - Bigger */}
                <g transform="translate(40, 180)">
                  <rect x="0" y="0" width="120" height="60" rx="8" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="2" />
                  <rect x="5" y="5" width="110" height="10" rx="4" fill="#8B5CF6" opacity="0.8" />
                  <text x="60" y="13" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">AI INNOVATION</text>
                  
                  {/* Neural network style connections */}
                  <circle cx="25" cy="30" r="5" fill="#8B5CF6" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="60" cy="25" r="4" fill="#A855F7" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="95" cy="30" r="5" fill="#8B5CF6" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="40" cy="45" r="4" fill="#C084FC" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="80" cy="45" r="4" fill="#A855F7" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.4;0.7" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Connection lines */}
                  <line x1="25" y1="30" x2="60" y2="25" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
                  <line x1="60" y1="25" x2="95" y2="30" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
                  <line x1="40" y1="45" x2="80" y2="45" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
                  
                  <text x="60" y="56" textAnchor="middle" fill="#8B5CF6" fontSize="6">Machine Learning</text>
                </g>
                
                {/* Product Knowledge Base - Enhanced - Bigger */}
                <g transform="translate(180, 180)">
                  <rect x="0" y="0" width="130" height="60" rx="8" fill="#F59E0B" opacity="0.15" stroke="#F59E0B" strokeWidth="2" />
                  <rect x="5" y="5" width="120" height="10" rx="4" fill="#F59E0B" opacity="0.8" />
                  <text x="65" y="13" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">PRODUCT KNOWLEDGE</text>
                  
                  {/* Knowledge documents */}
                  <rect x="15" y="22" width="22" height="18" rx="2" fill="#F59E0B" opacity="0.7" />
                  <rect x="17" y="25" width="18" height="1.5" rx="0.5" fill="white" opacity="0.8" />
                  <rect x="17" y="28" width="14" height="1.5" rx="0.5" fill="white" opacity="0.6" />
                  <rect x="17" y="31" width="16" height="1.5" rx="0.5" fill="white" opacity="0.6" />
                  
                  <rect x="45" y="22" width="22" height="18" rx="2" fill="#F59E0B" opacity="0.8" />
                  <rect x="47" y="25" width="18" height="1.5" rx="0.5" fill="white" opacity="0.8" />
                  <rect x="47" y="28" width="12" height="1.5" rx="0.5" fill="white" opacity="0.6" />
                  <rect x="47" y="31" width="16" height="1.5" rx="0.5" fill="white" opacity="0.6" />
                  
                  <rect x="75" y="22" width="22" height="18" rx="2" fill="#F59E0B" opacity="0.6" />
                  <rect x="77" y="25" width="18" height="1.5" rx="0.5" fill="white" opacity="0.8" />
                  <rect x="77" y="28" width="15" height="1.5" rx="0.5" fill="white" opacity="0.6" />
                  <rect x="77" y="31" width="13" height="1.5" rx="0.5" fill="white" opacity="0.6" />
                  
                  <rect x="105" y="22" width="16" height="18" rx="2" fill="#F59E0B" opacity="0.9" />
                  <text x="113" y="33" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">FAQ</text>
                  
                  <text x="65" y="56" textAnchor="middle" fill="#F59E0B" fontSize="6">Training Materials</text>
                </g>
                
                {/* Customer Support - Enhanced - Bigger */}
                <g transform="translate(330, 180)">
                  <rect x="0" y="0" width="140" height="60" rx="8" fill="#EF4444" opacity="0.15" stroke="#EF4444" strokeWidth="2" />
                  <rect x="5" y="5" width="130" height="10" rx="4" fill="#EF4444" opacity="0.8" />
                  <text x="70" y="13" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">CUSTOMER SUPPORT</text>
                  
                  {/* Support Tickets with status indicators - Fixed positioning within boxes */}
                  <rect x="10" y="22" width="28" height="15" rx="2" fill="#EF4444" opacity="0.8" />
                  <circle cx="17" cy="29" r="2" fill="white" />
                  <text x="17" y="31" textAnchor="middle" fill="#EF4444" fontSize="4" fontWeight="bold">!</text>
                  <text x="29" y="31" textAnchor="middle" fill="white" fontSize="5">HIGH</text>
                  
                  <rect x="45" y="22" width="28" height="15" rx="2" fill="#10B981" opacity="0.8" />
                  <circle cx="52" cy="29" r="2" fill="white" />
                  <text x="52" y="31" textAnchor="middle" fill="#10B981" fontSize="4" fontWeight="bold">✓</text>
                  <text x="64" y="31" textAnchor="middle" fill="white" fontSize="5">DONE</text>
                  
                  <rect x="80" y="22" width="28" height="15" rx="2" fill="#06B6D4" opacity="0.8" />
                  <circle cx="87" cy="29" r="2" fill="white" />
                  <text x="87" y="31" textAnchor="middle" fill="#06B6D4" fontSize="4" fontWeight="bold">→</text>
                  <text x="99" y="31" textAnchor="middle" fill="white" fontSize="5">PROG</text>
                  
                  <rect x="115" y="22" width="28" height="15" rx="2" fill="#F59E0B" opacity="0.8" />
                  <circle cx="122" cy="29" r="2" fill="white" />
                  <text x="122" y="31" textAnchor="middle" fill="#F59E0B" fontSize="4" fontWeight="bold">⏱</text>
                  <text x="134" y="31" textAnchor="middle" fill="white" fontSize="5">PEND</text>
                  
                  <text x="70" y="50" textAnchor="middle" fill="#EF4444" fontSize="6">Ticket Management</text>
                </g>
                
                {/* Communication Bubbles - Moved to Bottom Horizontally */}
                <g transform="translate(150, 270)">
                  <ellipse cx="0" cy="0" rx="25" ry="15" fill="#3B82F6" opacity="0.3" />
                  <text x="0" y="3" textAnchor="middle" fill="#3B82F6" fontSize="8">Chat</text>
                  
                  <ellipse cx="60" cy="0" rx="25" ry="15" fill="#06B6D4" opacity="0.3" />
                  <text x="60" y="3" textAnchor="middle" fill="#06B6D4" fontSize="8">Email</text>
                  
                  <ellipse cx="120" cy="0" rx="25" ry="15" fill="#10B981" opacity="0.3" />
                  <text x="120" y="3" textAnchor="middle" fill="#10B981" fontSize="8">Voice</text>
                </g>
                

                
                {/* Floating Success Indicators - Adjusted Box Sizes */}
                <g opacity="0.9">
                  <animate attributeName="transform" values="translate(0,0);translate(0,-8);translate(0,0)" dur="4s" repeatCount="indefinite" />
                  <rect x="20" y="280" width="62" height="20" rx="10" fill="#10B981" opacity="0.3" />
                  <text x="51" y="293" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="bold">99.9% Uptime</text>
                </g>
                
                <g opacity="0.9">
                  <animate attributeName="transform" values="translate(0,0);translate(0,-6);translate(0,0)" dur="3.5s" repeatCount="indefinite" />
                  <rect x="410" y="280" width="70" height="20" rx="10" fill="#3B82F6" opacity="0.3" />
                  <text x="445" y="293" textAnchor="middle" fill="#3B82F6" fontSize="8" fontWeight="bold">24/7 Support</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
