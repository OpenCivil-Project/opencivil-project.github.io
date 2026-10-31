import { Box, Braces, Activity, Waves, Grid3X3, Terminal, Ruler, MoveVertical } from "lucide-react";

export const SITE = {
  github: "https://github.com/OpenCivil-Project/Open-Structures",
  download: "https://github.com/OpenCivil-Project/Open-Structures/releases/latest",
  organization: "https://github.com/OpenCivil-Project",
};

export const features = [
  { icon: Box, title: "3D frame modeling", description: "Define geometry, materials, supports, and loads, with member releases, rigid end offsets, and cardinal insertion points." },
  { icon: Ruler, title: "Section Designer", description: "Define section geometry and material properties, then inspect the cross-section used by the structural model." },
  { icon: Activity, title: "Linear static & modal analysis", description: "Review load-driven displacements, member forces, and reactions, then examine natural frequencies and mode shapes." },
  { icon: Waves, title: "Response spectrum & time history", description: "Study dynamic response with TBDY 2018 spectrum generation and linear time-history workflows." },
  { icon: MoveVertical, title: "Buckling analysis", description: "Explore eigenvalue buckling modes and load factors to study the stability of a structural model." },
  { icon: Braces, title: "Matrix Spy & result inspection", description: "Inspect element stiffness and transformation matrices, fixed-end forces, and support reaction tables." },
  { icon: Grid3X3, title: "Nonlinear analysis & OpenSees", description: "Nonlinear workflows and OpenSees integration are being actively developed and integrated.", status: "Work in Progress" },
  { icon: Terminal, title: "An inspectable workflow", description: "Work with human-readable model files and explore the Python API and embedded command-line tools." },
];
