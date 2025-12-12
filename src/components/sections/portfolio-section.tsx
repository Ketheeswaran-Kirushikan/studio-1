import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/ui/animated-section';

export function PortfolioSection() {
  const portfolioImages = PlaceHolderImages.filter(img => img.id.startsWith('portfolio-'));

  return (
    <section id="portfolio" className="w-full py-20 md:py-32 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">Portfolio Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Showcasing 5+ Years of Social Media Management, Photography & Editing in Textiles/Fashion
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start max-w-7xl mx-auto">
              {portfolioImages.map((image, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg border-border group">
                    <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        width={400}
                        height={533}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
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
