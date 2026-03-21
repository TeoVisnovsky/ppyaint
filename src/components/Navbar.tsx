import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Linkedin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Team", to: "/team" },
  { label: "What We Do", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Partners", to: "/partners" },
  { label: "Contact", to: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsMobileOpen, setProjectsMobileOpen] = useState(false);
  const [projectsDesktopOpen, setProjectsDesktopOpen] = useState(false);
  const location = useLocation();
  const projectsView = new URLSearchParams(location.search).get("view");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    setProjectsDesktopOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!mobileOpen) {
      setProjectsMobileOpen(false);
    }
  }, [mobileOpen]);

  const normalizeDestination = (destination: string) => {
    const [pathPart, hashPart] = destination.split("#");
    const path = pathPart && pathPart.length > 0 ? pathPart : "/";
    const hash = hashPart ? `#${hashPart}` : "";
    return { path, hash };
  };

  const isActiveLink = (destination: string) => {
    const { path, hash } = normalizeDestination(destination);
    if (hash) {
      return location.pathname === path && location.hash === hash;
    }
    return location.pathname === path;
  };

  const linkClasses = (destination: string) =>
    cn(
      "text-sm font-bold text-foreground/70 transition-colors hover:text-primary relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-papaya-orange after:rounded-full after:transition-all after:duration-200",
      isActiveLink(destination) && "text-primary after:w-full",
    );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-narrow mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <Link to="/" className="font-heading text-xl md:text-2xl font-extrabold flex items-center gap-1">
          <span className="text-papaya-orange">Papaya</span>
          <span className="text-foreground">International</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            if (link.label === "Projects") {
              return (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setProjectsDesktopOpen(true)}
                  onMouseLeave={() => setProjectsDesktopOpen(false)}
                >
                  <Link to={link.to} className={linkClasses(link.to)}>
                    {link.label}
                  </Link>
                  <div
                    className={cn(
                      "absolute left-1/2 top-full z-30 w-64 -translate-x-1/2 pt-4 transition-all duration-200",
                      projectsDesktopOpen
                        ? "pointer-events-auto opacity-100 translate-y-0"
                        : "pointer-events-none opacity-0 translate-y-2",
                    )}
                  >
                    <div className="rounded-3xl border border-border bg-card shadow-xl shadow-primary/10 p-3 flex flex-col gap-1">
                      <Link
                        to="/projects?view=current"
                        className={cn(
                          "rounded-2xl px-4 py-3 text-left hover:bg-primary/5 transition-colors",
                          projectsView === "current" && "bg-primary/10 text-primary",
                        )}
                      >
                        <p className="text-sm font-bold">Currently Open</p>
                        <span className="text-xs text-muted-foreground">Live calls, trainings, and exchanges</span>
                      </Link>
                      <Link
                        to="/projects?view=past"
                        className={cn(
                          "rounded-2xl px-4 py-3 text-left hover:bg-primary/5 transition-colors",
                          projectsView === "past" && "bg-primary/10 text-primary",
                        )}
                      >
                        <p className="text-sm font-bold">Previous Projects</p>
                        <span className="text-xs text-muted-foreground">Completed collaborations worth revisiting</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link key={link.to} to={link.to} className={linkClasses(link.to)}>
                {link.label}
              </Link>
            );
          })}
          <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/#contact">Contact us</Link>
          </Button>
          <div className="flex gap-2 ml-1">
            <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/papaya-international/?viewAsMember=true"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="text-foreground" />
          ) : (
            <Menu className="text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card/98 backdrop-blur-lg border-b border-border"
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => {
                if (link.label === "Projects") {
                  return (
                    <div key={link.to} className="rounded-2xl border border-border/70">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between py-2 px-4 text-foreground font-bold"
                        onClick={() => setProjectsMobileOpen((prev) => !prev)}
                        aria-expanded={projectsMobileOpen}
                      >
                        <span>Projects</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${projectsMobileOpen ? "rotate-180" : "rotate-0"}`} />
                      </button>
                      {projectsMobileOpen && (
                        <div className="flex flex-col gap-2 pb-3">
                          <Link
                            to="/projects?view=current"
                            className={cn(
                              "mx-4 rounded-xl bg-muted/60 px-4 py-2 text-sm font-semibold text-foreground",
                              projectsView === "current" && "bg-primary/10 text-primary",
                            )}
                            onClick={() => {
                              setMobileOpen(false);
                              setProjectsMobileOpen(false);
                            }}
                          >
                            Currently Open
                          </Link>
                          <Link
                            to="/projects?view=past"
                            className={cn(
                              "mx-4 rounded-xl bg-muted/60 px-4 py-2 text-sm font-semibold text-foreground",
                              projectsView === "past" && "bg-primary/10 text-primary",
                            )}
                            onClick={() => {
                              setMobileOpen(false);
                              setProjectsMobileOpen(false);
                            }}
                          >
                            Previous Projects
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={cn(
                      "text-foreground font-bold py-2 px-4 rounded-xl hover:bg-papaya-light transition-colors relative after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-0.5 after:w-0 after:bg-papaya-orange after:rounded-full after:transition-all after:duration-200",
                      isActiveLink(link.to) && "text-primary after:w-[calc(100%-2rem)]",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button variant="cta" size="sm" className="mt-2" asChild>
                <Link to="/#contact" onClick={() => setMobileOpen(false)}>Contact us</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
