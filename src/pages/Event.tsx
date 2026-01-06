import { Calendar, Clock, MapPin, Users, MessageSquare, ExternalLink, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import EventSignupForm from "@/components/EventSignupForm";
import { SITE } from "@/config";

// Event type
type EventData = {
  id: string;
  title: string;
  date: string;
  time: string;
  speaker: string;
  description: string;
  topics: string[];
};

// Upcoming events data
const upcomingEvents: EventData[] = [
  {
    id: "jan-2025",
    title: "Code Puppy Live Demo",
    date: "Thursday, January 22, 2025",
    time: "7:00 PM ET",
    speaker: "Michael Pfaffenberger",
    description: "Discover Code Puppy, a powerful alternative to Claude Code that's been adopted by companies including Walmart. This AI-based terminal tool supports multiple models, is completely open source, and can transform your development workflow.",
    topics: [
      "Multi-model AI support (OpenAI, Gemini, and more)",
      "Terminal-based workflow without bloated IDEs",
      "Open source alternative to expensive tools",
      "Live Q&A with the creator"
    ]
  },
  {
    id: "feb-2025",
    title: "TBD - February Event",
    date: "Thursday, February 27, 2025",
    time: "7:00 PM ET",
    speaker: "To Be Announced",
    description: "Join us for our February monthly event. Speaker and topic to be announced soon! Join Discord or sign up for our newsletter to get notified.",
    topics: ["Details coming soon"]
  },
  {
    id: "mar-2025",
    title: "TBD - March Event",
    date: "Thursday, March 27, 2025",
    time: "7:00 PM ET",
    speaker: "To Be Announced",
    description: "Join us for our March monthly event. Speaker and topic to be announced soon! Join Discord or sign up for our newsletter to get notified.",
    topics: ["Details coming soon"]
  }
];

const Event = () => {
  const scrollToSignup = () => {
    document.getElementById('event-signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MainLayout>
      <PageHeader 
        title="Community Events"
        description="Join our monthly meetups on the last Thursday of each month featuring live demos, AI discussions, and hands-on learning"
      />

      <div className="container mx-auto py-12">
        {/* Event Calendar */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Upcoming Events
          </h2>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, idx) => (
              <Card key={event.id} className={`overflow-hidden ${idx === 0 ? 'ring-2 ring-primary shadow-lg' : 'shadow-md'}`}>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[240px_1fr] gap-0">
                    {/* Left Column - Date */}
                    <div className={`p-8 flex flex-col justify-center items-center text-center ${
                      idx === 0 
                        ? 'bg-gradient-to-br from-primary to-primary/80' 
                        : 'bg-gradient-to-br from-muted/50 to-muted/30'
                    }`}>
                      {idx === 0 && (
                        <div className="inline-block bg-card/40 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-semibold mb-4">
                          NEXT EVENT
                        </div>
                      )}
                      <Calendar className={`h-12 w-12 mb-4 ${
                        idx === 0 ? 'text-foreground' : 'text-primary'
                      }`} />
                      <div className={`text-sm mb-2 ${
                        idx === 0 ? 'text-foreground/90' : 'text-muted-foreground'
                      }`}>
                        {event.date.split(',')[0]}
                      </div>
                      <div className={`text-2xl font-bold mb-1 ${
                        idx === 0 ? 'text-foreground' : 'text-foreground'
                      }`}>
                        {event.date.split(',')[1]?.trim()}
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${
                        idx === 0 ? 'text-foreground/90' : 'text-muted-foreground'
                      }`}>
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {event.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">
                          <strong className="text-foreground">Speaker:</strong> {event.speaker}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">Discord / Zoom (link via signup or Discord)</span>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {event.description}
                      </p>
                      
                      {event.id === "jan-2025" && (
                        <div className="mb-4">
                          <a 
                            href="https://code-puppy.dev" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                          >
                            Learn more about Code Puppy
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      )}

                      {event.topics[0] !== "Details coming soon" && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground text-sm mb-2">What You'll Learn:</h4>
                          <ul className="space-y-1">
                            {event.topics.map((topic, topicIdx) => (
                              <li key={topicIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-0.5">•</span>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Button 
                        onClick={scrollToSignup}
                        className="w-full sm:w-auto"
                      >
                        Register for Event
                        <ArrowDown className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div id="event-signup" className="scroll-mt-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Register for Events
              </h2>
              <p className="text-muted-foreground">
                Sign up to receive Zoom links and calendar invites for our upcoming events
              </p>
            </div>
            
            <Card className="shadow-lg border-2 border-primary/10">
              <CardContent className="p-8">
                <EventSignupForm />
              </CardContent>
            </Card>

            <p className="text-center text-sm text-muted-foreground mt-4">
              By registering, you'll receive email invitations with Zoom links for all upcoming events
            </p>
          </div>
        </div>


      </div>
    </MainLayout>
  );
};

export default Event;
