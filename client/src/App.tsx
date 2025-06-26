import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navigation } from "./components/Navigation";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Resume from "@/pages/Resume";
import Projects from "@/pages/Projects";
import Publications from "@/pages/Publications";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />

        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen">
            <Navigation />
            <main>
              <Router />
            </main>
            {/* Footer */}
            <footer className="bg-background border-t border-border py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold gradient-text">Alex Chen</span>
                    <p className="text-muted-foreground mt-2">Building the future, one line of code at a time.</p>
                  </div>
                  <div className="flex space-x-6">
                    <a href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Home</a>
                    <a href="/resume" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Resume</a>
                    <a href="/projects" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Projects</a>

                    <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Contact</a>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-muted-foreground">&copy; 2023 Alex Chen. All rights reserved. Made with ❤️ and lots of ☕</p>
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
