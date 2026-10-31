import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Box, Github, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SITE } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/showcase", label: "Implementation" },
  { href: "/about", label: "Developer" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  useEffect(() => setMobileMenuOpen(false), [location.pathname]);
  const themeButton = (
    <button onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
  return (
    <nav aria-label="Main navigation" className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-5 px-5 lg:px-8">
        <Link to="/" aria-label="Open//Civil home" className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center text-accent"><Box className="h-6 w-6" strokeWidth={1.7} /></span>
          <span>Open//Civil</span>
        </Link>
        <ul className="hidden items-center gap-6 text-sm lg:flex">
          {navLinks.map(link => (
            <li key={link.href}><Link to={link.href} aria-current={location.pathname === link.href ? "page" : undefined}
              className={location.pathname === link.href ? "font-semibold text-foreground" : "text-muted-foreground transition-colors hover:text-foreground"}>{link.label}</Link></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {themeButton}
          <a href={SITE.organization} target="_blank" rel="noopener noreferrer" aria-label="Open//Civil on GitHub" className="hidden p-2 text-muted-foreground hover:text-foreground lg:block"><Github className="h-5 w-5" /></a>
          <a href={SITE.download} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-80 lg:flex">Get Open//Structures <ArrowUpRight className="h-3.5 w-3.5" /></a>
          <button className="p-2 lg:hidden" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="border-t border-border bg-background px-5 py-5 lg:hidden">
          <ul className="space-y-4">
            {navLinks.map(link => <li key={link.href}><Link to={link.href} onClick={() => setMobileMenuOpen(false)} aria-current={location.pathname === link.href ? "page" : undefined} className="block text-sm">{link.label}</Link></li>)}
          </ul>
          <a href={SITE.download} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-between rounded-lg bg-primary p-3 text-sm font-semibold text-primary-foreground">Get Open//Structures <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      )}
    </nav>
  );
}
