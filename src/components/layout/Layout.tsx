import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link" onClick={(event) => {
        event.preventDefault();
        document.getElementById("main-content")?.focus();
      }}>Skip to content</a>
      <Navbar />
      <main id="main-content" className="flex-1 pt-[72px]" tabIndex={-1}>{children}</main>
      <Footer />
    </div>
  );
}
