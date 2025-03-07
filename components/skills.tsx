"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Database, Globe, Server, Smartphone, Cloud, Settings } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: ["React.js", "Next.js", "HTML/CSS", "JavaScript", "Tailwind CSS"],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: ["Node.js", "Express.js", "Java Spring Boot", "RESTful APIs", "WebSocket"],
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: <Smartphone className="h-5 w-5" />,
      skills: ["React Native", "Expo", "Mobile UI/UX"],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["MongoDB", "MySQL", "SQL Server", "PostgreSQL"],
    },
    {
      id: "cloud",
      name: "Cloud",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["Firebase", "MongoDB Cloud", "Supabase", "Cloudinary", "Railway"],
    },
    {
      id: "devops",
      name: "DevOps & Automation",
      icon: <Settings className="h-5 w-5" />,
      skills: ["Kafka", "GitHub Actions", "CI/CD", "Automation"],
    }
    
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      {category.icon}
                      {category.name} Skills
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

