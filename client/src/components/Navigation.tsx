import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Star, Users, Trophy } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const resumeSubLinks = [
  { href: "/resume#skills", label: "Technical Skills", icon: Star },
  { href: "/resume#leadership", label: "Leadership", icon: Users },
  { href: "/resume#competitions", label: "Competitions", icon: Trophy },
];

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeHovered, setIsResumeHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-effect border-b border-border/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <motion.span
                className="text-xl font-bold gradient-text cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Alex Chen
              </motion.span>
            </Link>

            {/* Desktop Navigation - moved to the right */}
            <div className="hidden md:flex items-center justify-end flex-1">
              <div className="flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <motion.span
                      className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200 relative ${
                        location === link.href
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.label}
                      {location === link.href && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                          layoutId="activeIndicator"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.span>
                  </Link>
                ))}

                {/* Resume Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsResumeHovered(true)}
                  onMouseLeave={() => setIsResumeHovered(false)}
                >
                  <Link href="/resume">
                    <motion.span
                      className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200 relative flex items-center ${
                        location === "/resume" || location.startsWith("/resume")
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Resume
                      <ChevronDown className="ml-1 h-3 w-3" />
                      {(location === "/resume" || location.startsWith("/resume")) && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                          layoutId="activeIndicator"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.span>
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isResumeHovered && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-48 glass-effect rounded-lg border border-border/20 py-2 z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {resumeSubLinks.map((subLink) => (
                          <Link key={subLink.href} href={subLink.href}>
                            <motion.div
                              className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors duration-200 cursor-pointer"
                              whileHover={{ x: 5 }}
                            >
                              <subLink.icon className="h-4 w-4 mr-3" />
                              {subLink.label}
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden glass-effect border-t border-border/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <motion.span
                      className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-200 ${
                        location === link.href
                          ? "text-primary bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                ))}
                <Link href="/resume">
                  <motion.span
                    className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-200 ${
                      location === "/resume" || location.startsWith("/resume")
                        ? "text-primary bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    Resume
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
}