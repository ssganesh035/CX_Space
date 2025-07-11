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
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Technical support team collaboration"
              className="rounded-xl shadow-2xl w-full h-auto relative z-10 floating border border-blue-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
