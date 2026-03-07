import { motion } from "framer-motion";
import { Download, Code, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroVideo from "@/assets/Home1.mp4";

export function HeroSection() {
  return (
    <header className="relative pt-20 pb-24 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* 1. Updated the grid to a 12-column layout with a smaller gap for a tighter feel */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          {/* 2. assigned this column to span 5 out of 12 on large screens and added right padding */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:pr-8"
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Created by Shaikh Ahmed Azad
            </p>
            
            <div className="flex gap-2.5 mb-6">
              <Badge variant="secondary" className="bg-sky-100 text-sky-700 hover:bg-sky-100">
                Student Project
              </Badge>
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                Open Source
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Structural Analysis.
              <br />
              <span className="text-gradient opacity-80">Transparent.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Bridging the gap between simplified 2D analysis and black-box commercial software.{" "}
              <strong className="text-foreground">Open Civil</strong> provides a fully transparent
              workspace to model, visualize, and inspect the physics of 3D structures.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" asChild>
                <a href="https://github.com/ShaikhAhmedAzad/OpenCivil/releases/latest" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Download for Windows
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/ShaikhAhmedAzad/OpenCivil" target="_blank" rel="noopener noreferrer">
                  <Code className="w-5 h-5 mr-2" />
                  View Source
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-semibold">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Python 3.10+
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                PyQt6 & OpenGL
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                Custom Solver
              </span>
            </div>
            
            <p className="text-xs text-muted-foreground italic mt-5">
              * Note: This is an educational project for learning and experimenting. Not intended for professional commercial use.
            </p>
          </motion.div>
          
          {/* Hero Video (Larger and with Fade) */}
          {/* 3. assigned this column to span 7 out of 12, added a negative right margin, and removed the rotation hover effect */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="lg:col-span-7 lg:-mr-16 relative"
          >
            <div className="bg-background p-2 rounded-xl shadow-2xl border border-border">
              <video 
                src={heroVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full rounded-lg" 
              />
            </div>
            
            {/* 4. Added a radial gradient overlay to make the video fade into the background at the sides */}
            <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, hsl(var(--background)) 100%)' }} />
            
            {/* 5. Removed the entire 'Floating Matrix Card' block from here */}
          </motion.div>
        </div>
      </div>
    </header>
  );
}