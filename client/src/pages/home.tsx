import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <title>CXSpace - Community for Customer Success & Technical Support Professionals</title>
      <meta name="description" content="Join CXSpace, the premier community for technical support engineers, customer success professionals, and B2B SaaS experts. Connect, learn, and grow together." />
      <meta name="keywords" content="customer success, technical support, B2B SaaS, community, CXSpace, support engineers, customer obsessed" />
      
      <Hero />
      <Stats />
      
      {/* About Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">About CXSpace</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're building the world's largest community of customer-obsessed professionals who believe in the power of exceptional support and success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Mission</h3>
              <p className="text-lg text-neutral-600 mb-6">
                To create a thriving ecosystem where technical support engineers, customer success professionals, and solutions engineers can connect, learn, and grow together while advancing the art and science of customer success.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-accent h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900">Knowledge Sharing</h4>
                    <p className="text-neutral-600">Learn from industry experts and share your own insights</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900">Career Growth</h4>
                    <p className="text-neutral-600">Access mentorship, job opportunities, and skill development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900">Global Network</h4>
                    <p className="text-neutral-600">Connect with professionals worldwide and build lasting relationships</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Customer success team meeting"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <CTA />
    </>
  );
}
