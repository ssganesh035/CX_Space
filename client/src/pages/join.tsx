import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";

export default function Join() {
  return (
    <>
      <title>Join Our Community - CXSpace</title>
      <meta name="description" content="Join CXSpace community through Discord or WhatsApp. Connect with technical support engineers, customer success professionals, and B2B SaaS experts." />
      
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Join Our Community</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Connect with like-minded professionals, participate in discussions, and access exclusive resources across multiple platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Discord Card */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-12 w-12 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">Discord Community</h3>
                  <p className="text-indigo-100">Real-time discussions & networking</p>
                </div>
              </div>
              <p className="text-indigo-100 mb-6">
                Join our Discord server for instant messaging, voice chats, topic-specific channels, and real-time collaboration with community members.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-200 rounded-full mr-3"></div>
                  <span className="text-indigo-100">Topic-specific channels</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-200 rounded-full mr-3"></div>
                  <span className="text-indigo-100">Voice chat capabilities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-200 rounded-full mr-3"></div>
                  <span className="text-indigo-100">Real-time collaboration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-200 rounded-full mr-3"></div>
                  <span className="text-indigo-100">Event notifications</span>
                </div>
              </div>
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50 w-full">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Discord Server
              </Button>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-12 w-12 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">WhatsApp Groups</h3>
                  <p className="text-green-100">Quick updates & mobile networking</p>
                </div>
              </div>
              <p className="text-green-100 mb-6">
                Join our WhatsApp groups for quick updates, mobile-friendly discussions, and staying connected with the community on the go.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-200 rounded-full mr-3"></div>
                  <span className="text-green-100">Mobile-first experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-200 rounded-full mr-3"></div>
                  <span className="text-green-100">Quick updates & news</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-200 rounded-full mr-3"></div>
                  <span className="text-green-100">Regional groups</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-200 rounded-full mr-3"></div>
                  <span className="text-green-100">Direct messaging</span>
                </div>
              </div>
              <Button className="bg-white text-green-600 hover:bg-green-50 w-full">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join WhatsApp Group
              </Button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Why Join CXSpace?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-neutral-50 rounded-xl p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Networking</h3>
                <p className="text-neutral-600">Connect with 2,500+ professionals from 45+ countries</p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <MessageCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Knowledge</h3>
                <p className="text-neutral-600">Share insights and learn from industry experts</p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Growth</h3>
                <p className="text-neutral-600">Advance your career with mentorship and opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
