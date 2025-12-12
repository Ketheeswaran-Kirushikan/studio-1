import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-portrait');

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-background overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid-primary/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
      <div className="container px-4 md:px-6 z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none font-headline text-foreground">
                Hello, I’m Loganathan Abibarnman
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium">
                Digital Marketing Executive | Visual Content Creator
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto lg:mx-0">
              A passionate and result-driven Digital Marketing Executive & Visual Content Creator with a keen eye for aesthetics and a strategic mindset. Specializing in elevating fashion and textile brands through compelling visual narratives and impactful digital campaigns.
            </p>
            <div className="w-full max-w-sm space-y-2 mx-auto lg:mx-0 pt-4">
                <a href="#portfolio">
                    <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        View My Work
                        <ArrowDown className="ml-2 h-5 w-5" />
                    </Button>
                </a>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in-scale [animation-delay:200ms]">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={400}
                height={400}
                priority
                className="rounded-full object-cover aspect-square border-8 border-primary/50 shadow-2xl shadow-primary/20"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
