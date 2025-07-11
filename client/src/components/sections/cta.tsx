import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blob"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-400 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full floating"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Join CXSpace? 🎯</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Connect with thousands of customer success professionals, accelerate your career, and make a lasting impact in the industry! ✨
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25">
            <Link href="/join">
              <Users className="mr-2 h-5 w-5 animate-bounce" />
              🚀 Join Our Community
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300">
            <Link href="/meetups">
              <Calendar className="mr-2 h-5 w-5" />
              🎉 Explore Events
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
