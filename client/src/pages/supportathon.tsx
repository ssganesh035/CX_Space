import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Trophy, Rocket } from "lucide-react";

export default function Supportathon() {
  return (
    <>
      <title>Supportathon 2024 - CXSpace</title>
      <meta name="description" content="Join Supportathon 2024, CXSpace's flagship hackathon-style event for customer support professionals. March 15-17, 2024 in San Francisco and virtual." />
      
      <div className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h1 className="text-4xl font-bold mb-4">Supportathon 2024</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Our flagship event bringing together the best minds in customer support and success for intensive collaboration, learning, and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">What is Supportathon?</h2>
              <p className="text-lg text-purple-100 mb-6">
                Supportathon is our annual hackathon-style event where teams compete to solve real customer support challenges, build innovative solutions, and share best practices.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="text-pink-300 h-6 w-6 mr-3" />
                  <span className="text-purple-100">March 15-17, 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-pink-300 h-6 w-6 mr-3" />
                  <span className="text-purple-100">Virtual & In-Person (San Francisco)</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-pink-300 h-6 w-6 mr-3" />
                  <span className="text-purple-100">500+ Expected Participants</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="text-pink-300 h-6 w-6 mr-3" />
                  <span className="text-purple-100">$50,000 in Prizes</span>
                </div>
              </div>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                <Rocket className="mr-2 h-5 w-5" />
                Register Now
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional community event"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Event Highlights</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Three days of intensive collaboration, learning, and innovation in customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Team Collaboration</h3>
                <p className="text-neutral-600">
                  Work in diverse teams to tackle real-world customer support challenges and develop innovative solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Innovation</h3>
                <p className="text-neutral-600">
                  Build cutting-edge tools and solutions that can transform the customer support industry.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Recognition</h3>
                <p className="text-neutral-600">
                  Compete for cash prizes, recognition, and the opportunity to implement your solution.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-neutral-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Event Schedule</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-lg px-3 py-1 text-sm font-semibold min-w-[80px] text-center mr-4">
                  Day 1
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Kickoff & Team Formation</h4>
                  <p className="text-neutral-600">Welcome session, problem presentation, and team formation</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-accent text-white rounded-lg px-3 py-1 text-sm font-semibold min-w-[80px] text-center mr-4">
                  Day 2
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Development & Mentorship</h4>
                  <p className="text-neutral-600">Intensive development with expert mentorship and workshops</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary text-white rounded-lg px-3 py-1 text-sm font-semibold min-w-[80px] text-center mr-4">
                  Day 3
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Presentation & Awards</h4>
                  <p className="text-neutral-600">Final presentations, judging, and awards ceremony</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
