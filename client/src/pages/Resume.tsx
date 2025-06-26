import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Download } from "lucide-react";
import { skills, experiences } from "@/lib/mockData";

const skillCategories = ["Frontend", "Backend", "DevOps"] as const;

const colorMap = {
  blue: "text-blue-500 border-blue-500/20",
  cyan: "text-cyan-500 border-cyan-500/20", 
  green: "text-green-500 border-green-500/20",
  purple: "text-purple-500 border-purple-500/20",
};

export default function Resume() {
  const categorizedSkills = skillCategories.map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category),
    color: category === "Frontend" ? "blue" : category === "Backend" ? "cyan" : "green"
  }));

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">Resume</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey through my professional experience, education, and skills in software engineering.
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Section */}
        <ScrollReveal delay={0.2}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categorizedSkills.map((categoryData, categoryIndex) => (
                <motion.div
                  key={categoryData.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.2 }}
                >
                  <Card className="glass-effect border-0">
                    <CardContent className="p-6">
                      <h3 className={`text-lg font-semibold mb-4 text-${categoryData.color}-500`}>
                        {categoryData.category}
                      </h3>
                      <div className="space-y-3">
                        {categoryData.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            className="flex justify-between items-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 
                            }}
                          >
                            <span className="text-sm">{skill.name}</span>
                            <div className="w-32 bg-muted rounded-full h-2">
                              <motion.div
                                className={`bg-${categoryData.color}-500 h-2 rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ 
                                  duration: 0.8, 
                                  delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1 
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal delay={0.4}>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500" />
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  {/* Left side content for even indices, right side for odd */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex-1 pr-8 text-right">
                        <Card className={`glass-effect border-0 ${experience.type === 'education' ? 'border-l-4 border-l-green-500' : experience.type === 'award' ? 'border-l-4 border-l-purple-500' : ''}`}>
                          <CardContent className="p-6">
                            <Badge 
                              variant="outline" 
                              className={colorMap[experience.color as keyof typeof colorMap]}
                            >
                              {experience.startDate} - {experience.endDate}
                            </Badge>
                            <h3 className="text-xl font-bold mb-2 mt-2">{experience.title}</h3>
                            <p className="text-foreground mb-2">{experience.company}</p>
                            <p className="text-muted-foreground">{experience.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${experience.color}-500 rounded-full border-4 border-background`} />
                      <div className="flex-1 pl-8" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1 pr-8" />
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${experience.color}-500 rounded-full border-4 border-background`} />
                      <div className="flex-1 pl-8">
                        <Card className={`glass-effect border-0 ${experience.type === 'education' ? 'border-l-4 border-l-green-500' : experience.type === 'award' ? 'border-l-4 border-l-purple-500' : ''}`}>
                          <CardContent className="p-6">
                            <Badge 
                              variant="outline" 
                              className={colorMap[experience.color as keyof typeof colorMap]}
                            >
                              {experience.startDate} - {experience.endDate}
                            </Badge>
                            <h3 className="text-xl font-bold mb-2 mt-2">{experience.title}</h3>
                            <p className="text-foreground mb-2">{experience.company}</p>
                            <p className="text-muted-foreground">{experience.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Download Resume Button */}
        <ScrollReveal delay={0.8}>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Full Resume
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
