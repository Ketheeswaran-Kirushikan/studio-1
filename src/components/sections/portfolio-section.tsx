import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/ui/animated-section';

export function PortfolioSection() {
  const portfolioImages = PlaceHolderImages.filter(img => img.id.startsWith('portfolio-'));

  return (
    <section id="portfolio" className="w-full py-20 md:py-32 bg-primary/20">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">Portfolio Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Showcasing 5+ Years of Social Media Management, Photography &amp; Editing in Textiles/Fashion
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-2xl font-bold text-accent">He &amp; She Fashions</h3>
              <p className="text-muted-foreground">
                Managed social media, created content, and executed campaigns for He &amp; She Fashions, a prominent textile brand. The work involved extensive product photography, video editing for Reels, and strategic promotion to boost online presence and sales.
              </p>
            </div>
            <div className="lg:col-span-2">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {portfolioImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                      <div className="p-1">
                        <Card className="overflow-hidden shadow-lg">
                          <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              data-ai-hint={image.imageHint}
                              width={600}
                              height={800}
                              className="object-cover w-full h-full"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-16 hidden sm:flex" />
                <CarouselNext className="mr-16 hidden sm:flex" />
              </Carousel>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
