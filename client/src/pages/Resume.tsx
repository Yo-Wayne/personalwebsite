import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Download, Award, GraduationCap, Trophy, Star, Calendar, MapPin, Users, Target } from "lucide-react";
import { skills, education, competitions } from "@/lib/mockData";

const skillCategories = ["Frontend", "Backend", "DevOps", "Mobile", "AI/ML"] as const;

export default function Resume() {
  const categorizedSkills = skillCategories.map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category),
    color: category === "Frontend" ? "blue" : 
           category === "Backend" ? "cyan" : 
           category === "DevOps" ? "green" :
           category === "Mobile" ? "purple" : "indigo"
  }));

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">Resume</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My technical expertise, educational background, and competitive achievements.
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Section */}
        <ScrollReveal delay={0.2}>
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <Star className="h-6 w-6 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold">Technical Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorizedSkills.map((categoryData, categoryIndex) => (
                <motion.div
                  key={categoryData.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
                >
                  <Card className="glass-effect border-0 h-full">
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
                              delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 
                            }}
                          >
                            <span className="text-sm font-medium">{skill.name}</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-20 bg-muted rounded-full h-2">
                                <motion.div
                                  className={`bg-${categoryData.color}-500 h-2 rounded-full`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ 
                                    duration: 0.8, 
                                    delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05 
                                  }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground font-medium">
                                {skill.level}%
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Education Section */}
        <ScrollReveal delay={0.4}>
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="glass-effect border-0 border-l-4 border-l-green-500">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Info */}
                        <div className="lg:col-span-1">
                          <h3 className="text-2xl font-bold text-green-500 mb-2">{edu.school}</h3>
                          <p className="text-xl font-semibold mb-2">{edu.degree}</p>
                          <div className="space-y-2 text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{edu.startDate} - {edu.endDate}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Award className="h-4 w-4 mr-2" />
                              <span className="font-semibold text-green-500">GPA: {edu.gpa}</span>
                            </div>
                          </div>
                        </div>

                        {/* Coursework */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Relevant Coursework</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, courseIndex) => (
                              <motion.div
                                key={course}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + courseIndex * 0.05 }}
                              >
                                <Badge variant="outline" className="text-green-600 border-green-500/20">
                                  {course}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Honors */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Academic Honors</h4>
                          <div className="space-y-2">
                            {edu.honors.map((honor, honorIndex) => (
                              <motion.div
                                key={honor}
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 + honorIndex * 0.1 }}
                              >
                                <Trophy className="h-4 w-4 text-yellow-500 mr-2" />
                                <span className="text-sm">{honor}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Competitions Section */}
        <ScrollReveal delay={0.6}>
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Trophy className="h-6 w-6 text-purple-500 mr-3" />
              <h2 className="text-3xl font-bold">Competitions & Achievements</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {competitions.map((comp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glass-effect border-0 border-l-4 border-l-purple-500 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-purple-500 mb-1">{comp.name}</h3>
                          <p className="text-sm text-muted-foreground">{comp.role}</p>
                        </div>
                        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/20">
                          {comp.year}
                        </Badge>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <Target className="h-4 w-4 text-purple-500 mr-2" />
                          <span className="font-semibold text-purple-400">{comp.placement}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {comp.description}
                      </p>

                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          Skills Demonstrated
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {comp.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1 + index * 0.2 + skillIndex * 0.05 }}
                            >
                              <Badge variant="outline" className="text-xs text-purple-600 border-purple-500/20">
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Download Resume Button */}
        <ScrollReveal delay={0.8}>
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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