import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Anderson",
      role: "Senior Customer Success Manager",
      initials: "SA",
      content: "CXSpace has been instrumental in my career growth! 🚀 The networking opportunities and knowledge sharing have helped me become a better customer success professional.",
      bgColor: "bg-primary",
      emoji: "🌟"
    },
    {
      name: "Michael Chen",
      role: "Technical Support Engineer",
      initials: "MC",
      content: "The technical workshops and peer-to-peer learning in CXSpace have significantly improved my troubleshooting skills and helped me advance to a senior role! 💪",
      bgColor: "bg-accent",
      emoji: "🔧"
    },
    {
      name: "Emily Johnson",
      role: "Solutions Engineer",
      initials: "EJ",
      content: "Finding a job in customer success seemed impossible until I joined CXSpace. The career resources and mentorship program made all the difference! 🎯",
      bgColor: "bg-secondary",
      emoji: "💼"
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">What Our Members Say</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Hear from professionals who've grown their careers and expanded their networks through CXSpace.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 blob">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <Avatar className={`${testimonial.bgColor} text-white animate-bounce-slow`}>
                      <AvatarFallback className={`${testimonial.bgColor} text-white`}>
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2 text-xl animate-wiggle">
                      {testimonial.emoji}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-neutral-600 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
