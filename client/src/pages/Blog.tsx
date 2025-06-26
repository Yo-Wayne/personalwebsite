import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Lightbulb, Clock, Eye, Heart, Zap, Target, Brain, Rocket } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: "Philosophy" | "Technology" | "Industry" | "Innovation";
  tags: string[];
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Building Software That Matters",
    excerpt: "In a world saturated with digital solutions, the true challenge isn't building software—it's building software that creates meaningful impact.",
    content: "Technology should serve humanity, not the other way around. Every line of code we write is a small decision that compounds into larger outcomes. I believe in crafting software that doesn't just solve problems, but elevates human potential.",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Philosophy",
    tags: ["Software Design", "Purpose", "Impact"],
    featured: true
  },
  {
    id: "2",
    title: "The Future of Human-AI Collaboration",
    excerpt: "AI isn't here to replace us—it's here to amplify our capabilities. The future belongs to those who can dance with machines.",
    content: "The most exciting developments in AI aren't about automation replacing humans, but about creating symbiotic relationships where human creativity and machine intelligence complement each other. The future of work is collaborative, not competitive.",
    date: "2024-12-10",
    readTime: "7 min read",
    category: "Technology",
    tags: ["AI", "Future of Work", "Innovation"],
    featured: false
  },
  {
    id: "3",
    title: "Building for Billions: Scalability as a Mindset",
    excerpt: "True scalability isn't just about handling more users—it's about creating systems that remain elegant under pressure.",
    content: "Scalability is often misunderstood as simply 'making things faster' or 'handling more load.' But real scalability is architectural thinking—building systems that maintain their core principles even as they grow exponentially.",
    date: "2024-12-05",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Scalability", "Architecture", "Systems Design"],
    featured: true
  },
  {
    id: "4",
    title: "The Ethical Engineer's Dilemma",
    excerpt: "With great code comes great responsibility. How do we balance innovation with ethical considerations in our rapidly evolving industry?",
    content: "Every technical decision carries ethical weight. From data privacy to algorithmic bias, engineers are increasingly the guardians of digital ethics. We must code not just for functionality, but for fairness.",
    date: "2024-11-28",
    readTime: "8 min read",
    category: "Philosophy",
    tags: ["Ethics", "Responsibility", "Leadership"],
    featured: false
  },
  {
    id: "5",
    title: "Open Source: The Democracy of Innovation",
    excerpt: "Open source isn't just about free code—it's about democratizing innovation and building collective intelligence.",
    content: "The open source movement represents something profound: the idea that collective intelligence can solve problems no single organization ever could. It's not just a development model—it's a philosophy of shared progress.",
    date: "2024-11-20",
    readTime: "4 min read",
    category: "Industry",
    tags: ["Open Source", "Community", "Innovation"],
    featured: false
  },
  {
    id: "6",
    title: "Minimalism in Code: Less is Exponentially More",
    excerpt: "The best code isn't the cleverest—it's the simplest solution that elegantly solves the problem at hand.",
    content: "Complexity is the enemy of reliability, maintainability, and understanding. The most powerful code is often the most minimal—clear in purpose, elegant in execution, and effortless to understand.",
    date: "2024-11-15",
    readTime: "5 min read",
    category: "Philosophy",
    tags: ["Clean Code", "Simplicity", "Best Practices"],
    featured: true
  }
];

const categoryColors = {
  Philosophy: "blue",
  Technology: "cyan", 
  Industry: "green",
  Innovation: "purple"
};

const categoryIcons = {
  Philosophy: Brain,
  Technology: Zap,
  Industry: Target,
  Innovation: Rocket
};

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">Vision & Thoughts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exploring the intersection of technology, philosophy, and human potential. 
              Thoughts on building meaningful software and shaping our digital future.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Posts */}
        <ScrollReveal delay={0.2}>
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Lightbulb className="h-6 w-6 text-yellow-500 mr-3" />
              <h2 className="text-3xl font-bold">Featured Thoughts</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => {
                const IconComponent = categoryIcons[post.category];
                const color = categoryColors[post.category];
                
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className={`glass-effect border-0 border-l-4 border-l-${color}-500 h-full cursor-pointer group`}>
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-${color}-500/20`}>
                              <IconComponent className={`h-4 w-4 text-${color}-500`} />
                            </div>
                            <Badge className={`bg-${color}-500/20 text-${color}-400 border-${color}-500/20`}>
                              {post.category}
                            </Badge>
                          </div>
                          <div className="text-muted-foreground text-sm flex items-center space-x-4">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        <h3 className={`text-xl font-bold text-${color}-500 mb-3 group-hover:text-${color}-400 transition-colors`}>
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="mb-4">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {post.content}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className={`text-${color}-600 border-${color}-500/20 text-xs`}>
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <span className="text-muted-foreground text-sm">
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </ScrollReveal>

        {/* Regular Posts */}
        <ScrollReveal delay={0.4}>
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Eye className="h-6 w-6 text-purple-500 mr-3" />
              <h2 className="text-3xl font-bold">Recent Insights</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => {
                const IconComponent = categoryIcons[post.category];
                const color = categoryColors[post.category];
                
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className={`glass-effect border-0 border-l-4 border-l-${color}-500 h-full cursor-pointer group`}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <IconComponent className={`h-4 w-4 text-${color}-500`} />
                            <Badge className={`bg-${color}-500/20 text-${color}-400 border-${color}-500/20 text-xs`}>
                              {post.category}
                            </Badge>
                          </div>
                          <div className="flex items-center text-muted-foreground text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className={`text-lg font-bold text-${color}-500 mb-2 group-hover:text-${color}-400 transition-colors`}>
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className={`text-${color}-600 border-${color}-500/20 text-xs`}>
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 2 && (
                              <Badge variant="outline" className="text-muted-foreground border-muted text-xs">
                                +{post.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                          <span className="text-muted-foreground text-xs">
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </ScrollReveal>

        {/* Philosophy Statement */}
        <ScrollReveal delay={0.6}>
          <section className="text-center">
            <Card className="glass-effect border-0 border-l-4 border-l-gradient-to-r from-blue-500 to-purple-500">
              <CardContent className="p-8">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-6">
                    <Heart className="h-8 w-8 text-red-500 mr-3" />
                    <h2 className="text-2xl font-bold">Core Philosophy</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    "Technology is not about the code we write, but about the lives we touch. 
                    Every algorithm is an opportunity to make the world more equitable, every interface 
                    a chance to make complex things simple, and every system a foundation for human flourishing."
                  </p>
                  <p className="text-muted-foreground">
                    Building software is an act of optimism—a belief that tomorrow can be better than today.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}