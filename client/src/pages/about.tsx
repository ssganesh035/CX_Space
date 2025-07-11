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
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Technical support team collaboration"
                className="rounded-xl shadow-lg w-full h-auto"
              />
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
