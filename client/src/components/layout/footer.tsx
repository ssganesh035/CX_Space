import { Link } from "wouter";
import { MessageCircle, Twitter, Linkedin, Mail, Globe, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center blob pulse-rainbow animate-bounce-slow">
                <span className="text-white font-bold text-xl">CX</span>
              </div>
              <span className="ml-2 text-xl font-bold gradient-text">CXSpace</span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              The premier community for customer success engineers, technical support professionals, and B2B SaaS experts worldwide! 🌟
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/supportathon" className="text-neutral-400 hover:text-white transition-colors">
                  Supportathon
                </Link>
              </li>
              <li>
                <Link href="/meetups" className="text-neutral-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-neutral-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:hello@cxspace.tech" className="hover:text-white transition-colors">
                  hello@cxspace.tech
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                <a href="https://cxspace.tech" className="hover:text-white transition-colors">
                  cxspace.tech
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Global Community
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
          <p>
            &copy; 2024 CXSpace. All rights reserved. |{" "}
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
