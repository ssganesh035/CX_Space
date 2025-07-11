import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Video, ArrowRight } from "lucide-react";
import { Event } from "@shared/schema";

export default function Meetups() {
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  if (isLoading) {
    return <div>Loading events...</div>;
  }

  return (
    <>
      <title>Meetups & Events - CXSpace</title>
      <meta name="description" content="Join CXSpace meetups, workshops, and networking events. Connect with customer success professionals worldwide through virtual and in-person events." />
      
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Meetups & Events</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Join our regular meetups, workshops, and networking events happening around the world and online.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {events && events.length > 0 ? (
              events.map((event) => (
                <Card key={event.id} className="bg-neutral-50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge variant="default" className="mr-3">
                        {event.date}
                      </Badge>
                      <span className="text-sm text-neutral-600">{event.time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{event.title}</h3>
                    <p className="text-neutral-600 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-neutral-500">
                        {event.type === 'virtual' ? (
                          <Video className="h-4 w-4 mr-1" />
                        ) : (
                          <MapPin className="h-4 w-4 mr-1" />
                        )}
                        <span>{event.location}</span>
                      </div>
                      <Button variant="link" className="text-primary hover:text-secondary p-0">
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              // Default events when no data is available
              <>
                <Card className="bg-neutral-50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge variant="default" className="mr-3">
                        Mar 28
                      </Badge>
                      <span className="text-sm text-neutral-600">6:00 PM PST</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Customer Success Metrics Workshop</h3>
                    <p className="text-neutral-600 mb-4">Learn how to measure and improve your customer success metrics with industry experts.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-neutral-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>San Francisco, CA</span>
                      </div>
                      <Button variant="link" className="text-primary hover:text-secondary p-0">
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge variant="secondary" className="mr-3">
                        Apr 5
                      </Badge>
                      <span className="text-sm text-neutral-600">12:00 PM EDT</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Virtual Networking Lunch</h3>
                    <p className="text-neutral-600 mb-4">Connect with fellow professionals in a casual virtual setting. Bring your lunch!</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-neutral-500">
                        <Video className="h-4 w-4 mr-1" />
                        <span>Online</span>
                      </div>
                      <Button variant="link" className="text-primary hover:text-secondary p-0">
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge variant="outline" className="mr-3">
                        Apr 12
                      </Badge>
                      <span className="text-sm text-neutral-600">7:00 PM GMT</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Technical Support Best Practices</h3>
                    <p className="text-neutral-600 mb-4">Deep dive into advanced technical support methodologies and troubleshooting techniques.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-neutral-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>London, UK</span>
                      </div>
                      <Button variant="link" className="text-primary hover:text-secondary p-0">
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
