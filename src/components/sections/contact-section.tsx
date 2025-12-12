import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { Icons } from '@/components/icons';
import { AnimatedSection } from '@/components/ui/animated-section';

const socialLinks = [
  { name: 'Behance', icon: Icons.behance, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:#' },
  { name: 'WhatsApp', icon: Icons.whatsapp, href: '#' },
];

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">Let’s Work Together</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Currently open for freelance projects and full-time roles in digital marketing & content creation.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimatedSection delay={100}>
            <Card className="h-full bg-card/80 backdrop-blur-sm shadow-lg border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-col justify-center items-center h-full space-y-6">
                <p className="text-center text-muted-foreground">Or reach out through my social channels:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {socialLinks.map(({ name, icon: Icon, href }) => (
                    <Button key={name} variant="outline" size="icon" asChild className="rounded-full h-14 w-14 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110">
                      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                        <Icon className="h-6 w-6" />
                      </a>
                    </Button>
                  ))}
                </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
