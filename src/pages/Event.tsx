import { Calendar, Clock, MapPin, Users, ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import EventSignupForm from "@/components/EventSignupForm";
import { SITE } from "@/config";

const LinkedInLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Event type
type EventData = {
  id: string;
  title: string;
  date: string;
  time: string;
  speaker: string;
  speakerLinkedin?: string;
  description: string;
  topics: string[];
  videoUrl?: string;
};

// Past events data
const pastEvents: EventData[] = [
  {
    id: "jan-2026",
    title: "Code Puppy Live Demo",
    date: "Thursday, January 29, 2026",
    time: "6 PM ET",
    speaker: "Michael Pfaffenberger",
    speakerLinkedin: "https://www.linkedin.com/in/michael-pfaffenberger-a3b23657/",
    description: "Discover Code Puppy, a powerful alternative to Claude Code that's been adopted by companies including Walmart. This AI-based terminal tool supports multiple models, is completely open source, and can transform your development workflow.",
    topics: [
      "Multi-model AI support (OpenAI, Gemini, and more)",
      "Terminal-based workflow without bloated IDEs",
      "Open source alternative to expensive tools",
      "Live Q&A with the creator"
    ],
    videoUrl: "https://youtu.be/D2p_nh5wN0U"
  },
  {
    id: "feb-2026",
    title: "Build Your Own GPT: A Live Hands-On Workshop",
    date: "Thursday, February 26, 2026",
    time: "6 PM ET",
    speaker: "Rob Strobel",
    speakerLinkedin: "https://www.linkedin.com/in/rstrobel/",
    description: "In this live session, we will design and build a Custom GPT from scratch inside ChatGPT and walk through the thinking behind every decision. You will leave with a working GPT and a clear framework for systemizing your own AI workflows.",
    topics: [
      "The difference between prompting and system design",
      "How to structure a Custom GPT for repeatable workflows",
      "How to encode your expertise into instructions",
      "When to use Custom GPTs vs standard prompting",
      "A practical framework you can apply immediately"
    ],
    videoUrl: "https://youtu.be/IUMPNMVF-iU"
  },
  {
    id: "mar-2026",
    title: "Setup OpenClaw on a Cloud Server",
    date: "Thursday, March 26, 2026",
    time: "6 PM ET",
    speaker: "Simon Bergeron",
    speakerLinkedin: "https://www.linkedin.com/in/slbergeron/",
    description: "Simon will walk us through setting up OpenClaw, an open-source personal AI assistant, on a Digital Ocean Droplet so it runs 24/7 in the cloud. See how to self-host your own AI workspace, connect it to chat apps, and start building agent workflows on your own hardware.",
    topics: [
      "What OpenClaw is and why you'd want to self-host it",
      "Spinning up a Digital Ocean Droplet for OpenClaw",
      "Connecting OpenClaw to chat apps and integrations",
      "Building agent workflows on your own infrastructure"
    ],
    videoUrl: "https://youtu.be/CVlIcodlV7I"
  },
  {
    id: "apr-2026",
    title: "Mastering Claude: From Basics to Advanced Workflows",
    date: "Thursday, April 16, 2026",
    time: "7 PM ET",
    speaker: "Dr. Robert Voss",
    speakerLinkedin: "https://www.linkedin.com/in/ai-robvoss",
    description: "Join us for a comprehensive overview into the entire Claude ecosystem with Dr. Robert Voss. Whether you're just getting started or looking to unlock advanced capabilities, this session takes you step-by-step through Claude, Claude Code, and Claude Cowork, with hands-on demonstrations, practical workflows, and bonus content you won't want to miss. You are not required to have a paid Claude account. We will discuss the capabilities of free and paid versions of Claude.",
    topics: [
      "Getting started with Claude: prompting fundamentals and best practices",
      "Introduction to Claude Code for terminal-based AI-assisted development",
      "Using Claude Cowork for non-developers to automate files and tasks",
      "Advanced techniques: chaining workflows, system prompts, and agentic tasks"
    ],
    videoUrl: "https://youtu.be/xlHcNtp8g28"
  }
];

// Upcoming events data
const upcomingEvents: EventData[] = [
  {
    id: "may-2026",
    title: "Building Humane AI Agents without the Pandering Bits",
    date: "Thursday, May 21, 2026",
    time: "6 PM ET",
    speaker: "Jim Benson",
    speakerLinkedin: "https://www.linkedin.com/in/jimbenson/",
    description: "Join us for a practical and refreshingly honest session led by Jim Benson (Public Speaker, Consultant, Shingo Research Award Winning Author) where we'll explore how to build AI agents that are human-centered without turning them into yes-machines. Even though this specific demo will continue with Claude, the lessons on how to create agents that support real work, stay grounded in context, and offer constructive pushback are helpful with any model. This session is a great fit for anyone who wants AI that elevates your work to the next level. Expect practical examples and a few jokes at AI's expense.",
    topics: [
      "Prompt practices that set agents up for better behavior",
      "How to design AI agents without them being overly agreeable",
      "Ways to build more humane workflows that respect context, judgment, and nuance",
      "Recommendations on how to audit and improve agent responses"
    ]
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
        description="Join our monthly meetups on the 3rd Thursday of each month featuring live demos, AI discussions, and hands-on learning"
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
                          <strong className="text-foreground">Speaker:</strong>{" "}
                          {event.speakerLinkedin ? (
                            <a
                              href={event.speakerLinkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline inline-flex items-center gap-1"
                            >
                              {event.speaker}
                              <LinkedInLogo className="h-4 w-4 text-[#0A66C2]" />
                            </a>
                          ) : (
                            event.speaker
                          )}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">Zoom (link via signup or Discord community)</span>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {event.description}
                      </p>
                      
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

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Past Events
            </h2>

            <div className="space-y-8 max-w-5xl mx-auto">
              {pastEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden shadow-md opacity-80">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-[240px_1fr] gap-0">
                      {/* Left Column - Date */}
                      <div className="p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-muted/50 to-muted/30">
                        <div className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold mb-4">
                          PAST EVENT
                        </div>
                        <Calendar className="h-12 w-12 mb-4 text-muted-foreground" />
                        <div className="text-sm mb-2 text-muted-foreground">
                          {event.date.split(',')[0]}
                        </div>
                        <div className="text-2xl font-bold mb-1 text-foreground">
                          {event.date.split(',')[1]?.trim()}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
                            <strong className="text-foreground">Speaker:</strong>{" "}
                            {event.speakerLinkedin ? (
                              <a
                                href={event.speakerLinkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline inline-flex items-center gap-1"
                              >
                                {event.speaker}
                                <LinkedInLogo className="h-4 w-4 text-[#0A66C2]" />
                              </a>
                            ) : (
                              event.speaker
                            )}
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          {event.description}
                        </p>

                        {event.topics[0] !== "Details coming soon" && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground text-sm mb-2">What Was Covered:</h4>
                            <ul className="space-y-1">
                              {event.topics.map((topic, topicIdx) => (
                                <li key={topicIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <span className="text-muted-foreground mt-0.5">•</span>
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {event.videoUrl && (
                          <Button asChild variant="outline">
                            <a href={event.videoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Watch Recording
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

      </div>
    </MainLayout>
  );
};

export default Event;
