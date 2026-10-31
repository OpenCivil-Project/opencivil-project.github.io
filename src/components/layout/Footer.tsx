import { Link } from "react-router-dom";
import { Box, Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="mb-4 flex items-center gap-2.5 text-xl font-bold"><Box className="h-5 w-5 text-accent" /><span>Open Civil</span></Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Open tools for civil engineering, learning, and research. Home of Open Structures.</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Explore</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/features" className="hover:text-foreground">Open Structures</Link></li>
              <li><Link to="/showcase" className="hover:text-foreground">Implementation</Link></li>
              <li><Link to="/about" className="hover:text-foreground">Developer & CV</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a href={SITE.organization} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground"><Github className="h-5 w-5" /></a>
              <a href="mailto:ahmed.azad@metu.edu.tr" aria-label="Email Shaikh Ahmed Azad" className="text-muted-foreground hover:text-foreground"><Mail className="h-5 w-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Open Civil. Created by Shaikh Ahmed Azad.</p>
          <div className="flex gap-5"><Link to="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></div>
        </div>
      </div>
    </footer>
  );
}
