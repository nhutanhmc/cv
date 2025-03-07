"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Backend Developer",
      company: "Company: QS Land",
      period: "Nov 2024 - Jan 2025",
      description: "Developed a customer file management system using Node.js and Express.js.",
      technologies: ["Node.js", "Express.js", "MongoDB", "RESTful API"],
    },
    {
      title: "Fullstack Developer",
      company: "Company: Keizu",
      period: "May 2022 - Nov 2022",
      description: "Developed a Customer Relationship Management (CRM) system using Salesforce.",
      technologies: ["Salesforce", "CRM", "JavaScript", "Apex", "Lightning Web Components"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Work <span className="text-primary">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l border-primary/30 pl-6 ml-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-10 relative"
                >
                  <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-primary" />
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-primary" />
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

