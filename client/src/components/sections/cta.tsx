import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Join CXSpace?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Connect with thousands of customer success professionals, accelerate your career, and make a lasting impact in the industry.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Link href="/join">
              <Users className="mr-2 h-5 w-5" />
              Join Our Community
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            <Link href="/meetups">
              <Calendar className="mr-2 h-5 w-5" />
              Explore Events
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
