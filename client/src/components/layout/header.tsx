import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Supportathon", href: "/supportathon" },
    { name: "Meetups", href: "/meetups" },
    { name: "Careers", href: "/careers" },
    { name: "FAQs", href: "/faq" },
  ];

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-black shadow-2xl sticky top-0 z-50 border-b border-blue-500/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center blob pulse-rainbow animate-bounce-slow group-hover:animate-wiggle shadow-lg shadow-blue-500/50">
              <span className="text-white font-bold text-xl">CX</span>
            </div>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">CXSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  location === item.href
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 font-semibold">
              <Link href="/join">✨ Join Community</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-300 hover:text-blue-400 hover:bg-slate-800">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-slate-900 border-l border-blue-500/20">
                <div className="flex flex-col space-y-4 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 text-base font-medium transition-colors ${
                        location === item.href
                          ? "text-blue-400"
                          : "text-slate-300 hover:text-blue-400"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                    <Link href="/join" onClick={() => setIsOpen(false)}>
                      ✨ Join Community
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
