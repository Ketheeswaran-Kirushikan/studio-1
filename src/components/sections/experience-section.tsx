import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Film, Megaphone, Camera, Target, Check } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

const experiences = [
  {
    icon: <Megaphone className="h-8 w-8 text-accent" />,
    title: 'Social Media Marketing Content',
    points: [
      'Content Calendar Planning',
      'Post Scheduling & Optimization',
      'Community Engagement & Growth',
      'Performance Analytics & Reporting',
    ],
  },
  {
    icon: <Film className="h-8 w-8 text-accent" />,
    title: 'Video Editing & Reels Production',
    points: [
      'Short-form Video Editing',
      'Reels & TikTok Content Creation',
      'Motion Graphics & Text Overlays',
      'Color Grading & Audio Enhancement',
    ],
  },
  {
    icon: <Camera className="h-8 w-8 text-accent" />,
    title: 'Product Photography &amp; Visual Branding',
    points: [
      'E-commerce Product Shoots',
      'Lifestyle & Lookbook Photography',
      'Photo Retouching & Editing',
      'Visual Identity Consistency',
    ],
  },
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: 'Campaign Planning &amp; Promotions',
    points: [
      'Influencer Collaboration',
      'Paid Ad Campaign Management',
      'Seasonal &amp; Promotional Content',
      'Cross-platform Strategy',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">My Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A blend of creative and analytical skills honed over years of practice.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.title} delay={index * 100}>
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-primary/20">
                <CardHeader className="flex flex-row items-center gap-4">
                  {exp.icon}
                  <CardTitle className="text-accent">{exp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.points.map(point => (
                      <li key={point} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-primary-foreground fill-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
