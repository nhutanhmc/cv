"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="https://res.cloudinary.com/ddyhzrir5/image/upload/v1741328676/anh_cv_zlpz1y.jpg"
                  alt="Nguyen Hoang Nhut Anh"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-lg mb-6">
                Fullstack Developer with experience in developing high-performance Web and Mobile applications.
                Passionate about new technologies and eager to learn in a professional environment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Email</Badge>
                      <span className="text-sm">nhutanhmc@gmail.com</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Phone</Badge>
                      <span className="text-sm">0342894891 - 0789524779</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Location</Badge>
                      <span className="text-sm">Ho Chi Minh City, Vietnam</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Languages</Badge>
                      <span className="text-sm">Vietnamese, English</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-muted-foreground">
                I specialize in building full-stack applications using modern JavaScript frameworks, with experience in
                both web and mobile development. I'm proficient in OOP, MVC, WebSocket, and RESTful API development, and
                have worked with various cloud services.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

