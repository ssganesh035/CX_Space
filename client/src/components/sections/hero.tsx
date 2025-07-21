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
                height="320"
                viewBox="0 0 500 320"
                className="w-full h-auto"
              >
                <defs>
                  <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#1E293B", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#0F172A", stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#3B82F6", stopOpacity:0.8}} />
                    <stop offset="100%" style={{stopColor:"#06B6D4", stopOpacity:0.8}} />
                  </linearGradient>
                  <linearGradient id="personGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#F8FAFC", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#E2E8F0", stopOpacity:1}} />
                  </linearGradient>
                </defs>
                
                <rect width="500" height="320" fill="url(#bgGradient)" />
                
                {/* B2B SaaS Dashboard */}
                <rect x="80" y="60" width="180" height="120" rx="8" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
                <rect x="90" y="70" width="160" height="90" rx="4" fill="url(#screenGlow)" opacity="0.1" />
                
                {/* B2B SaaS Label */}
                <rect x="85" y="40" width="60" height="16" rx="8" fill="#3B82F6" />
                <text x="115" y="51" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">B2B SaaS</text>
                
                {/* Dashboard Content */}
                <text x="100" y="85" fill="#3B82F6" fontSize="8" fontWeight="bold">Product Dashboard</text>
                <rect x="100" y="95" width="80" height="3" rx="1.5" fill="#06B6D4" opacity="0.8" />
                <rect x="100" y="105" width="60" height="3" rx="1.5" fill="#3B82F6" opacity="0.6" />
                <rect x="100" y="115" width="100" height="3" rx="1.5" fill="#10B981" opacity="0.6" />
                
                {/* Analytics Charts */}
                <rect x="100" y="130" width="20" height="15" fill="#3B82F6" opacity="0.7" />
                <rect x="125" y="125" width="20" height="20" fill="#06B6D4" opacity="0.7" />
                <rect x="150" y="120" width="20" height="25" fill="#10B981" opacity="0.7" />
                
                {/* Customer Success Metrics */}
                <circle cx="210" cy="130" r="8" fill="#10B981" />
                <text x="210" y="135" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">98%</text>
                <text x="210" y="150" textAnchor="middle" fill="#10B981" fontSize="6">CSAT</text>
                
                {/* Human Elements - Support Team - Repositioned Horizontally Below Dashboard */}
                <g transform="translate(100, 190)">
                  {/* Person 1 - Customer Success Manager */}
                  <circle cx="20" cy="15" r="10" fill="url(#personGradient)" stroke="#3B82F6" strokeWidth="2" />
                  <circle cx="20" cy="12" r="3" fill="#3B82F6" />
                  <rect x="16" y="18" width="8" height="12" rx="2" fill="#3B82F6" />
                  <text x="20" y="40" textAnchor="middle" fill="#3B82F6" fontSize="5" fontWeight="bold">CS Manager</text>
                  
                  {/* Person 2 - Tech Support */}
                  <circle cx="60" cy="15" r="10" fill="url(#personGradient)" stroke="#06B6D4" strokeWidth="2" />
                  <circle cx="60" cy="12" r="3" fill="#06B6D4" />
                  <rect x="56" y="18" width="8" height="12" rx="2" fill="#06B6D4" />
                  <text x="60" y="40" textAnchor="middle" fill="#06B6D4" fontSize="5" fontWeight="bold">Tech Support</text>
                  
                  {/* Person 3 - Solutions Engineer */}
                  <circle cx="100" cy="15" r="10" fill="url(#personGradient)" stroke="#10B981" strokeWidth="2" />
                  <circle cx="100" cy="12" r="3" fill="#10B981" />
                  <rect x="96" y="18" width="8" height="12" rx="2" fill="#10B981" />
                  <text x="100" y="40" textAnchor="middle" fill="#10B981" fontSize="5" fontWeight="bold">Solutions Eng</text>
                </g>
                
                {/* Communication Lines - Updated for New Positions */}
                <path d="M 200 180 Q 150 170 120 205" stroke="#3B82F6" strokeWidth="2" opacity="0.6" strokeDasharray="4,4">
                  <animate attributeName="strokeDashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M 200 180 Q 180 170 160 205" stroke="#06B6D4" strokeWidth="2" opacity="0.6" strokeDasharray="4,4">
                  <animate attributeName="strokeDashoffset" values="0;8" dur="1.8s" repeatCount="indefinite" />
                </path>
                
                {/* Additional Tech Elements - Adjusted Box Sizes */}
                <g transform="translate(30, 60)">
                  <rect x="0" y="0" width="42" height="18" rx="4" fill="#3B82F6" opacity="0.4" />
                  <text x="21" y="12" textAnchor="middle" fill="#3B82F6" fontSize="7" fontWeight="bold">Webhooks</text>
                </g>
                
                <g transform="translate(415, 20)">
                  <rect x="0" y="0" width="35" height="16" rx="3" fill="#06B6D4" opacity="0.4" />
                  <text x="17" y="11" textAnchor="middle" fill="#06B6D4" fontSize="6" fontWeight="bold">Frontend</text>
                </g>
                
                <g transform="translate(10, 160)">
                  <rect x="0" y="0" width="32" height="16" rx="3" fill="#10B981" opacity="0.4" />
                  <text x="16" y="11" textAnchor="middle" fill="#10B981" fontSize="6" fontWeight="bold">Backend</text>
                </g>
                
                <g transform="translate(455, 120)">
                  <rect x="0" y="0" width="38" height="16" rx="3" fill="#8B5CF6" opacity="0.4" />
                  <text x="19" y="11" textAnchor="middle" fill="#8B5CF6" fontSize="6" fontWeight="bold">Enterprise</text>
                </g>
                
                <g transform="translate(15, 100)">
                  <rect x="0" y="0" width="26" height="16" rx="3" fill="#F59E0B" opacity="0.4" />
                  <text x="13" y="11" textAnchor="middle" fill="#F59E0B" fontSize="6" fontWeight="bold">Data</text>
                </g>
                
                <g transform="translate(440, 180)">
                  <rect x="0" y="0" width="54" height="16" rx="3" fill="#EF4444" opacity="0.4" />
                  <text x="27" y="11" textAnchor="middle" fill="#EF4444" fontSize="6" fontWeight="bold">Rapport Building</text>
                </g>
                
                {/* AI Innovation - Enhanced - Moved Adjacent to Dashboard Vertically */}
                <g transform="translate(300, 60)">
                  <rect x="0" y="0" width="90" height="45" rx="8" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="2" />
                  <rect x="5" y="5" width="80" height="8" rx="4" fill="#8B5CF6" opacity="0.8" />
                  <text x="45" y="11" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">AI INNOVATION</text>
                  
                  {/* Neural network style connections */}
                  <circle cx="20" cy="25" r="4" fill="#8B5CF6" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="45" cy="20" r="3" fill="#A855F7" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="70" cy="25" r="4" fill="#8B5CF6" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="32" cy="35" r="3" fill="#C084FC" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="58" cy="35" r="3" fill="#A855F7" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.4;0.7" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Connection lines */}
                  <line x1="20" y1="25" x2="45" y2="20" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
                  <line x1="45" y1="20" x2="70" y2="25" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
                  <line x1="32" y1="35" x2="58" y2="35" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
                  
                  <text x="45" y="42" textAnchor="middle" fill="#8B5CF6" fontSize="5">Machine Learning</text>
                </g>
                
                {/* Product Knowledge Base - Enhanced - Adjacent to Dashboard Vertically */}
                <g transform="translate(300, 120)">
                  <rect x="0" y="0" width="100" height="45" rx="8" fill="#F59E0B" opacity="0.15" stroke="#F59E0B" strokeWidth="2" />
                  <rect x="5" y="5" width="90" height="8" rx="4" fill="#F59E0B" opacity="0.8" />
                  <text x="50" y="11" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">PRODUCT KNOWLEDGE</text>
                  
                  {/* Knowledge documents */}
                  <rect x="10" y="18" width="18" height="14" rx="2" fill="#F59E0B" opacity="0.7" />
                  <rect x="12" y="20" width="14" height="1" rx="0.5" fill="white" opacity="0.8" />
                  <rect x="12" y="22" width="10" height="1" rx="0.5" fill="white" opacity="0.6" />
                  <rect x="12" y="24" width="12" height="1" rx="0.5" fill="white" opacity="0.6" />
                  
                  <rect x="34" y="18" width="18" height="14" rx="2" fill="#F59E0B" opacity="0.8" />
                  <rect x="36" y="20" width="14" height="1" rx="0.5" fill="white" opacity="0.8" />
                  <rect x="36" y="22" width="8" height="1" rx="0.5" fill="white" opacity="0.6" />
                  <rect x="36" y="24" width="12" height="1" rx="0.5" fill="white" opacity="0.6" />
                  
                  <rect x="58" y="18" width="18" height="14" rx="2" fill="#F59E0B" opacity="0.6" />
                  <rect x="60" y="20" width="14" height="1" rx="0.5" fill="white" opacity="0.8" />
                  <rect x="60" y="22" width="11" height="1" rx="0.5" fill="white" opacity="0.6" />
                  <rect x="60" y="24" width="9" height="1" rx="0.5" fill="white" opacity="0.6" />
                  
                  <rect x="82" y="18" width="12" height="14" rx="2" fill="#F59E0B" opacity="0.9" />
                  <text x="88" y="27" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">FAQ</text>
                  
                  <text x="50" y="42" textAnchor="middle" fill="#F59E0B" fontSize="5">Training Materials</text>
                </g>
                
                {/* Customer Support - Enhanced - Adjacent to Dashboard Vertically */}
                <g transform="translate(410, 60)">
                  <rect x="0" y="0" width="85" height="105" rx="8" fill="#EF4444" opacity="0.15" stroke="#EF4444" strokeWidth="2" />
                  <rect x="5" y="5" width="75" height="8" rx="4" fill="#EF4444" opacity="0.8" />
                  <text x="42" y="11" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">CUSTOMER SUPPORT</text>
                  
                  {/* Support Tickets with status indicators - Stacked Vertically */}
                  <rect x="10" y="20" width="65" height="15" rx="2" fill="#EF4444" opacity="0.8" />
                  <circle cx="20" cy="27" r="3" fill="white" />
                  <text x="20" y="29" textAnchor="middle" fill="#EF4444" fontSize="5" fontWeight="bold">!</text>
                  <text x="30" y="29" fill="white" fontSize="6" fontWeight="bold">HIGH PRIORITY</text>
                  
                  <rect x="10" y="40" width="65" height="15" rx="2" fill="#10B981" opacity="0.8" />
                  <circle cx="20" cy="47" r="3" fill="white" />
                  <text x="20" y="49" textAnchor="middle" fill="#10B981" fontSize="5" fontWeight="bold">✓</text>
                  <text x="30" y="49" fill="white" fontSize="6" fontWeight="bold">COMPLETED</text>
                  
                  <rect x="10" y="60" width="65" height="15" rx="2" fill="#06B6D4" opacity="0.8" />
                  <circle cx="20" cy="67" r="3" fill="white" />
                  <text x="20" y="69" textAnchor="middle" fill="#06B6D4" fontSize="5" fontWeight="bold">→</text>
                  <text x="30" y="69" fill="white" fontSize="6" fontWeight="bold">IN PROGRESS</text>
                  
                  <rect x="10" y="80" width="65" height="15" rx="2" fill="#F59E0B" opacity="0.8" />
                  <circle cx="20" cy="87" r="3" fill="white" />
                  <text x="20" y="89" textAnchor="middle" fill="#F59E0B" fontSize="5" fontWeight="bold">⏱</text>
                  <text x="30" y="89" fill="white" fontSize="6" fontWeight="bold">PENDING</text>
                  
                  <text x="42" y="103" textAnchor="middle" fill="#EF4444" fontSize="5">Ticket Management</text>
                </g>
                
                {/* Communication Bubbles - Moved to Top Horizontally */}
                <g transform="translate(150, 20)">
                  <ellipse cx="0" cy="0" rx="20" ry="12" fill="#3B82F6" opacity="0.3" />
                  <text x="0" y="3" textAnchor="middle" fill="#3B82F6" fontSize="7">Chat</text>
                  
                  <ellipse cx="50" cy="0" rx="22" ry="12" fill="#06B6D4" opacity="0.3" />
                  <text x="50" y="3" textAnchor="middle" fill="#06B6D4" fontSize="7">Email</text>
                  
                  <ellipse cx="100" cy="0" rx="22" ry="12" fill="#10B981" opacity="0.3" />
                  <text x="100" y="3" textAnchor="middle" fill="#10B981" fontSize="7">Voice</text>
                </g>
                
                {/* Technology Stack Icons */}
                <g transform="translate(420, 60)">
                  <rect x="0" y="0" width="20" height="15" rx="3" fill="#3B82F6" opacity="0.7" />
                  <text x="10" y="10" textAnchor="middle" fill="white" fontSize="6">API</text>
                  
                  <rect x="0" y="20" width="20" height="15" rx="3" fill="#06B6D4" opacity="0.7" />
                  <text x="10" y="30" textAnchor="middle" fill="white" fontSize="6">CRM</text>
                  
                  <rect x="0" y="40" width="20" height="15" rx="3" fill="#10B981" opacity="0.7" />
                  <text x="10" y="50" textAnchor="middle" fill="white" fontSize="6">DB</text>
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
