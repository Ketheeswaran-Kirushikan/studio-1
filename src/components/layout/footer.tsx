import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Icons } from '@/components/icons';

const socialLinks = [
  { name: 'Behance', icon: Icons.behance, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:#' },
  { name: 'WhatsApp', icon: Icons.whatsapp, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Copyright © 2025 Loganathan Abibarnman
        </p>
        <div className="flex gap-4">
          {socialLinks.map(({ name, icon: Icon, href }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-muted-foreground hover:text-primary transition-colors">
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
