import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/ui/animated-section';
import { cn } from '@/lib/utils';

export function PortfolioSection() {
  const portfolioImages = PlaceHolderImages.filter(img => img.id.startsWith('portfolio-'));
  const p1 = portfolioImages.slice(0,1);
  const p2 = portfolioImages.slice(1,3);
  const p3 = portfolioImages.slice(3,5);

  return (
    <section id="portfolio" className="w-full py-20 md:py-32 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">Portfolio Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Showcasing 5+ Years of Social Media Management, Photography & Editing in Textiles/Fashion
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-2xl font-bold text-primary">He & She Fashions</h3>
              <p className="text-muted-foreground">
                Managed social media, created content, and executed campaigns for He & She Fashions, a prominent textile brand. The work involved extensive product photography, video editing for Reels, and strategic promotion to boost online presence and sales.
              </p>
               <div className="grid grid-cols-2 gap-4">
                {p2.map((image, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg border-border">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
               <div className="grid grid-cols-2 gap-4">
                {p3.map((image, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg border-border">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
               {p1.map((image, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg border-border">
                    <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        width={600}
                        height={800}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
