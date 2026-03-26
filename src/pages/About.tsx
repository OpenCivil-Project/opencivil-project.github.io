import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { MapPin, Mail, GraduationCap, Code2, Cpu, Building2, Download, Trophy, BookOpen, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  {
    category: "Structural & Computational Analysis",
    items: "Finite Element Analysis (FEA), Structural Dynamics (SDOF/MDOF), Seismic Design, Matrix Structural Analysis",
  },
  {
    category: "Programming & Software Development",
    items: "Python (PyQt6, SciPy, ObsPy), MATLAB, Object-Oriented Design (OOP), GUI Development",
  },
  {
    category: "Engineering Software & BIM",
    items: "SAP2000, ETABS, AutoCAD, Revit, RocScience, Navisworks, Synchro 4D, OpenRoads, HEC-RAS, MS Project, LaTeX",
  },
];

const projects = [
  {
    title: "OpenCivil: Structural Analysis Software",
    role: "Sole Developer",
    year: "2024 – Present",
    description:
      'Open-source "glass box" 3D FEA desktop application built on MVC; ships 5 solvers (Linear Static, Modal, RSA, LTHA, Solid FEM) with 6–7 decimal place agreement to SAP2000. Implements Timoshenko beam theory, static condensation, cardinal insertion points, rigid end offsets, and Tet10 quadratic solid elements. Includes a pip-installable Python API and an embedded CLI terminal with real-time two-way state synchronization.',
    icon: Code2,
  },
  {
    title: "CE-Star: Seismic Hazard & Signal Processing Software",
    role: "Undergraduate Research Program",
    year: "2025 – 2026",
    description:
      "Desktop platform with an interactive map interface for automated AFAD batch-downloading filtered via a custom Mw-distance matrix; integrates a full PSHA hazard model. Pipeline for instrument response removal and computation of 5+ intensity measures (Arias, CAV, Fourier, Housner, SED). 1-click TBDY 2018 compliant geospatial PDF report generator applied to a real-time monitored 216m building in Izmir.",
    icon: Cpu,
  },
];

const publications = [
  {
    citation:
      'Azad, S. A., Saldamlı, K. A., & Türer, A. (Submitted). "Failure Mode and Capacity of Nailed/Screwed Timber CLT Slab Segments Under Four-Point Bending." Submitted to INTER 2026 (Norway).',
    bullets: [
      "Executed displacement-controlled four-point bending tests on mechanically fastened, recycled timber CLT segments to evaluate load-deflection responses.",
      "Analyzed composite action and stiffness using the γ-method (TABY 2024), achieving 93% agreement between analytical predictions and experimental results.",
      "Compared 4-nail, 5-nail, and 4-screw configurations, identifying that ultimate capacity is governed by bending rupture of outer laminations rather than fastener shear.",
    ],
  },
];

const honors = [
  {
    title: "DASK Earthquake Resistant Building Design",
    award: "National Finalist (ODTÜ Kuleleri)",
    period: "Feb 2026 – Present",
    description:
      "Selected from a competitive national pool to construct and dynamically test a 30-story twin-tower model. Designed a coupled shear wall and macro-braced system with bridge links for torsional stability, sizing members via TBDY 2018 Equivalent Seismic Load and modal analysis.",
  },
];

const experience = [
  {
    company: "DSI – State Hydraulic Works",
    role: "Civil Engineering Intern (Dams Department)",
    period: "Aug 2025 – Sep 2025",
    location: "Ankara, Turkey",
    bullets: [
      "Validated hydraulic design calculations and reviewed technical design files for large-scale dam construction projects.",
      "Conducted on-site inspections to correlate technical design specifications with field implementation realities.",
    ],
  },
  {
    company: "Parabol Yazılım (METU Technopolis)",
    role: "Urban Mobility Intern",
    period: "Jul 2025 – Aug 2025",
    location: "Ankara, Turkey",
    bullets: [
      "Analyzed large-scale pedestrian and micromobility datasets to assess infrastructure performance against Level of Service (LOS) benchmarks.",
      "Submitted technical reports proposing evidence-based infrastructure improvements to enhance urban safety.",
    ],
  },
];

const About = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-5">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-extrabold mb-4">Shaikh Ahmed Azad</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Civil Engineering Student — Computational Structural & Earthquake Engineering
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Ankara, Turkey
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                ahmed.azad@metu.edu.tr
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent" />
                METU, 4th Year
              </span>
            </div>
            <Button asChild size="lg" className="gap-2">
              <a href="/ShaikhAhmedAzad_CV.pdf" download>
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-accent" />
              Education
            </h2>
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold">Middle East Technical University (METU)</h3>
              <p className="text-muted-foreground">B.Sc. Civil Engineering (4th Year)</p>
              <p className="text-sm text-muted-foreground mt-1">Oct 2022 – Expected Sep 2026 • Ankara, Turkey</p>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Wrench className="w-6 h-6 text-accent" />
              Technical Skills
            </h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.category} className="bg-muted/50 rounded-xl p-5 border border-border">
                  <p className="font-semibold text-sm text-accent mb-1">{skill.category}</p>
                  <p className="text-muted-foreground text-sm">{skill.items}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-accent" />
              Publications & Conference Submissions
            </h2>
            {publications.map((pub, i) => (
              <div key={i} className="bg-muted/50 rounded-xl p-6 border border-border">
                <p className="text-sm text-muted-foreground italic mb-4">{pub.citation}</p>
                <ul className="space-y-2">
                  {pub.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Honors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-accent" />
              Honors & Competitions
            </h2>
            {honors.map((h) => (
              <div key={h.title} className="bg-muted/50 rounded-xl p-6 border border-border">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold">{h.title}</h3>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">{h.award}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{h.period}</p>
                <p className="text-sm text-muted-foreground">{h.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-accent" />
              Computational Engineering Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.title} className="bg-muted/50 rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-sm text-accent font-medium">{project.role} • {project.year}</p>
                      <p className="text-muted-foreground mt-2 text-[0.95rem]">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-accent" />
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.company} className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-bold">{exp.company}</h3>
                  <p className="text-accent font-medium text-sm">{exp.role}</p>
                  <p className="text-muted-foreground text-sm mt-1 mb-3">{exp.period} • {exp.location}</p>
                  <ul className="space-y-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default About;