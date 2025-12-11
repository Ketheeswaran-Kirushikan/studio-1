'use client';

import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderVideos } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/ui/animated-section';

export function VideoPortfolioSection() {
  const portfolioVideos = PlaceHolderVideos.filter(vid => vid.id.startsWith('video-'));

  return (
    <section id="videos" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">Project Videos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of video projects showcasing editing and production skills.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioVideos.map((video, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <video
                    src={video.videoUrl}
                    data-ai-hint={video.videoHint}
                    controls
                    className="object-cover w-full aspect-video"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
