"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      institution: "FPT University (HCM Campus)",
      degree: "Software Engineering",
      period: "2021 - 2025",
    },
  ]

  const certifications = [
    {
      name: "Project Management Principles and Practices",
      link: "https://www.coursera.org/account/accomplishments/specialization/3W4X4CTSAECX",
    },
    {
      name: "Software Development Lifecycle",
      link: "https://www.coursera.org/account/accomplishments/specialization/ASX3KRAAWK4G",
    },
    {
      name: "User Experience Research and Design",
      link: "https://www.coursera.org/account/accomplishments/specialization/TYC6A4942ZE7",
    },
    {
      name: "Agile Software Development",
      link: "https://www.coursera.org/account/accomplishments/verify/MNAKTUYAC5PP",
    },
  ]


  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Education & <span className="text-primary">Certifications</span>
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
                <CardDescription>Academic background</CardDescription>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h3 className="text-lg font-semibold">{edu.institution}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    <Badge variant="outline" className="mt-2">
                      {edu.period}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certifications
                </CardTitle>
                <CardDescription>Professional development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                      {/* Link đến trang chứng chỉ */}
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {cert.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Additional Skills</h4>
                  <p className="text-muted-foreground">
                    Proficient in OOP, MVC, WebSocket, and RESTful API; experienced with Salesforce and Google APIs.
                    Implemented Kafka for performance optimization and integrated AI into projects.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

