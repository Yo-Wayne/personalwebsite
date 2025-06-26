import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { 
  Code, 
  Coffee, 
  Zap, 
  Users, 
  FileText, 
  Laptop, 
  PenTool, 
  Mail,
  ArrowRight
} from "lucide-react";

const stats = [
  {
    icon: Code,
    value: "5+ Years",
    label: "Coding Experience",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Coffee,
    value: "2847",
    label: "Cups of Coffee",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Zap,
    value: "50+",
    label: "Projects Built",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Users,
    value: "25+",
    label: "Team Projects",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

const quickNav = [
  {
    href: "/resume",
    icon: FileText,
    title: "Resume",
    description: "Experience & Skills",
    color: "hover:bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    href: "/projects",
    icon: Laptop,
    title: "Projects",
    description: "Recent Work",
    color: "hover:bg-cyan-500/10",
    iconColor: "text-cyan-500",
  },
  {
    href: "/publications",
    icon: PenTool,
    title: "Writing",
    description: "Articles & Papers",
    color: "hover:bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    href: "/contact",
    icon: Mail,
    title: "Contact",
    description: "Let's Connect",
    color: "hover:bg-purple-500/10",
    iconColor: "text-purple-500",
  },
];

export default function Home() {
  // Console Easter egg
  console.log(`
    ██╗  ██╗███████╗██╗     ██╗      ██████╗ 
    ██║  ██║██╔════╝██║     ██║     ██╔═══██╗
    ███████║█████╗  ██║     ██║     ██║   ██║
    ██╔══██║██╔══╝  ██║     ██║     ██║   ██║
    ██║  ██║███████╗███████╗███████╗╚██████╔╝
    ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ 
    
    Hey there, fellow developer! 👋
    Thanks for checking out my portfolio.
    
    Built with: React + TypeScript + Tailwind CSS
    Hosted on: Replit
    
    Want to collaborate? Let's build something amazing together!
    
    - Alex
  `);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-8">
              <div>
                <motion.h1 
                  className="text-5xl lg:text-7xl font-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="gradient-text">Alex Chen</span>
                </motion.h1>
                <motion.p 
                  className="text-xl lg:text-2xl text-muted-foreground mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Full-Stack Software Engineer
                </motion.p>
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Crafting elegant solutions to complex problems. Passionate about building scalable applications that make a difference.
                </motion.p>
              </div>
              
              {/* Fun Facts Section */}
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className={`glass-effect cursor-pointer transition-all duration-300 ${stat.bgColor} border-0`}>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <stat.icon className={`h-6 w-6 ${stat.color}`} />
                          <div>
                            <p className="font-semibold">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link href="/projects">
                  <Button 
                    size="lg" 
                    className="group"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Get In Touch
                  </Button>
                </Link>
              </motion.div>
            </ScrollReveal>

            {/* Professional Photo */}
            <ScrollReveal direction="left" delay={0.4}>
              <motion.div 
                className="relative animate-float"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full max-w-md mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                    alt="Alex Chen - Professional headshot" 
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover" 
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Quick Navigation Cards */}
          <ScrollReveal delay={0.8}>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
              {quickNav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <Link href={item.href}>
                    <Card className={`glass-effect cursor-pointer transition-all duration-300 hover:scale-105 ${item.color} border-0 group`}>
                      <CardContent className="p-6 text-center">
                        <item.icon className={`h-8 w-8 ${item.iconColor} mb-4 mx-auto transition-transform duration-300 group-hover:scale-110`} />
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
