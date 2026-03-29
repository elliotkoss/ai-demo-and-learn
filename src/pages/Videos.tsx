import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import { videos } from "@/data/videos";

const LinkedInLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Videos = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyVideoLink = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const extractYoutubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  return (
    <MainLayout>
      <PageHeader
        title="Videos"
        description="Watch recordings of our community events, demos, and AI deep dives"
      />

      <div className="container mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {videos.map((video) => {
            const youtubeId = extractYoutubeId(video.youtubeUrl);

            return (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted">
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>

                  <div className="p-4 space-y-3">
                    <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                      {video.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {video.date}
                    </p>

                    {video.speaker && (
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Speaker:</strong>{" "}
                        {video.speakerLinkedin ? (
                          <a
                            href={video.speakerLinkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline inline-flex items-center gap-1"
                          >
                            {video.speaker}
                            <LinkedInLogo className="h-4 w-4 text-[#0A66C2]" />
                          </a>
                        ) : (
                          video.speaker
                        )}
                      </p>
                    )}

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {video.description}
                    </p>

                    {video.tags && video.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {video.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => copyVideoLink(video.id, video.youtubeUrl)}
                    >
                      {copiedId === video.id ? (
                        <>
                          <Check className="h-4 w-4 mr-2 text-green-500" />
                          Link Copied!
                        </>
                      ) : (
                        <>
                          <YouTubeIcon className="h-4 w-4 mr-2 text-[#FF0000]" />
                          Copy Video Link
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contribution CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card shadow-card rounded-lg p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Share Our Videos
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Enjoyed a session? Share it with your network and help spread the word about AI Demo & Learn!
            </p>
            <Button onClick={() => copyVideoLink("page", window.location.href)}>
              {copiedId === "page" ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <YouTubeIcon className="h-4 w-4 mr-2 text-[#FF0000]" />
                  Copy Page Link
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Videos;
