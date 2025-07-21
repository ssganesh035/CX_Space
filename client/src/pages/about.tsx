import { CheckCircle, Users, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <>
      <title>About Us - CXSpace</title>
      <meta name="description" content="Learn about CXSpace's mission to build the world's largest community of customer success professionals, technical support engineers, and B2B SaaS experts." />
      
      <div className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">About CXSpace</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're building the world's largest community of customer-obsessed professionals who believe in the power of exceptional support and success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
              <p className="text-lg text-neutral-600 mb-6">
                CXSpace was founded by a group of passionate customer success professionals who recognized the need for a dedicated community where technical support engineers, customer success managers, and solutions engineers could connect, learn, and grow together.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                What started as a small group of like-minded professionals has grown into a global community of over 2,500 members from 45+ countries, all united by their commitment to customer success.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-xl shadow-lg w-full h-auto bg-gradient-to-br from-slate-800 to-slate-900 p-8">
                <svg
                  width="100%"
                  height="300"
                  viewBox="0 0 400 300"
                  className="w-full h-auto"
                >
                  <defs>
                    <linearGradient id="communityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#3B82F6", stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:"#06B6D4", stopOpacity:1}} />
                    </linearGradient>
                    <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#1E293B", stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:"#0F172A", stopOpacity:1}} />
                    </linearGradient>
                    <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" style={{stopColor:"#3B82F6", stopOpacity:0.3}} />
                      <stop offset="100%" style={{stopColor:"#3B82F6", stopOpacity:0}} />
                    </radialGradient>
                  </defs>
                  
                  <rect width="400" height="300" fill="url(#nodeGradient)" />
                  
                  <circle cx="200" cy="150" r="40" fill="url(#communityGradient)" />
                  <circle cx="200" cy="150" r="60" fill="url(#glowGradient)" />
                  <text x="200" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CX</text>
                  <text x="200" y="160" textAnchor="middle" fill="white" fontSize="8">Community</text>
                  
                  <g opacity="0.9">
                    <circle cx="120" cy="80" r="20" fill="#10B981" />
                    <text x="120" y="85" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">CS</text>
                    <line x1="140" y1="95" x2="175" y2="125" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                    
                    <circle cx="280" cy="80" r="20" fill="#F59E0B" />
                    <text x="280" y="85" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">TS</text>
                    <line x1="260" y1="95" x2="225" y2="125" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                    
                    <circle cx="80" cy="180" r="20" fill="#8B5CF6" />
                    <text x="80" y="185" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">SE</text>
                    <line x1="100" y1="165" x2="160" y2="150" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                    
                    <circle cx="320" cy="180" r="20" fill="#EF4444" />
                    <text x="320" y="185" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">PS</text>
                    <line x1="300" y1="165" x2="240" y2="150" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                    
                    <circle cx="150" cy="240" r="20" fill="#06B6D4" />
                    <text x="150" y="245" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">AM</text>
                    <line x1="165" y1="225" x2="185" y2="185" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                    
                    <circle cx="250" cy="240" r="20" fill="#84CC16" />
                    <text x="250" y="245" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">IM</text>
                    <line x1="235" y1="225" x2="215" y2="185" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                  </g>
                  
                  <g opacity="0.7">
                    <animate attributeName="transform" values="translate(0,0);translate(0,-10);translate(0,0)" dur="4s" repeatCount="indefinite" />
                    <rect x="40" y="40" width="30" height="20" rx="4" fill="#3B82F6" opacity="0.3" />
                    <text x="55" y="53" textAnchor="middle" fill="#3B82F6" fontSize="8">Events</text>
                  </g>
                  
                  <g opacity="0.7">
                    <animate attributeName="transform" values="translate(0,0);translate(0,-8);translate(0,0)" dur="3.5s" repeatCount="indefinite" />
                    <rect x="330" y="40" width="30" height="20" rx="4" fill="#06B6D4" opacity="0.3" />
                    <text x="345" y="53" textAnchor="middle" fill="#06B6D4" fontSize="8">Jobs</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Our Mission</h3>
              <p className="text-neutral-600">
                To create a thriving ecosystem where customer success professionals can connect, learn, and grow together while advancing the art and science of customer success.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Our Values</h3>
              <p className="text-neutral-600">
                Customer obsession, continuous learning, collaborative growth, and building meaningful relationships that last beyond professional boundaries.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Our Community</h3>
              <p className="text-neutral-600">
                A diverse group of professionals from technical support engineers to customer success managers, all united by their passion for customer success.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-accent h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900">Knowledge Sharing</h4>
                    <p className="text-neutral-600">Access to industry insights, best practices, and peer-to-peer learning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900">Career Development</h4>
                    <p className="text-neutral-600">Mentorship programs, job opportunities, and skill development workshops</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900">Networking Events</h4>
                    <p className="text-neutral-600">Regular meetups, conferences, and virtual events to connect with peers</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-accent h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900">Global Community</h4>
                    <p className="text-neutral-600">Connect with professionals from around the world and build lasting relationships</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900">Industry Resources</h4>
                    <p className="text-neutral-600">Access to tools, templates, and resources to excel in your role</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900">Certification Programs</h4>
                    <p className="text-neutral-600">Industry-recognized certifications to advance your career</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
