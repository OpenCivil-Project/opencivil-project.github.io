import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/": "Open Civil — Open tools for structural engineering",
  "/features": "Open Structures features | Open Civil",
  "/showcase": "Implementation | Open Civil",
  "/about": "Shaikh Ahmed Azad | Open Civil",
  "/contact": "Contact | Open Civil",
  "/privacy-policy": "Privacy Policy | Open Civil",
  "/terms": "Terms of Service | Open Civil",
};

export function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] || "Page not found | Open Civil";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
