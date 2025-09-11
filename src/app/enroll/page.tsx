"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, ArrowRight, Filter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function EnrollmentPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Web Dev", "Full Stack", "AI/ML", "UI/UX", "DevOps", "Mobile", "Blockchain"]

  const courses = [
    {
      id: "advanced-react-nextjs",
      title: "Advanced React & Next.js",
      description: "Master modern React patterns, Next.js 14, Server Components, and advanced state management",
      category: "Web Dev",
      duration: "12 weeks",
      students: 1250,
      rating: 4.9,
      price: "$299",
      originalPrice: "$399",
      level: "Advanced",
      image: "/placeholder.svg?height=200&width=400",
      features: ["React 18", "Next.js 14", "TypeScript", "Server Components"],
      instructor: "Sarah Chen",
      popular: true,
    },
    {
      id: "ai-powered-web-apps",
      title: "AI-Powered Web Applications",
      description: "Integrate AI and machine learning into modern web applications using TensorFlow and OpenAI",
      category: "AI/ML",
      duration: "10 weeks",
      students: 567,
      rating: 4.9,
      price: "$499",
      originalPrice: "$699",
      level: "Advanced",
      image: "/placeholder.svg?height=200&width=400",
      features: ["OpenAI API", "TensorFlow.js", "Machine Learning", "Computer Vision"],
      instructor: "Dr. Emily Zhang",
      popular: false,
    },
    {
      id: "full-stack-javascript",
      title: "Full Stack JavaScript Mastery",
      description: "Complete MERN stack development with MongoDB, Express, React, and Node.js",
      category: "Full Stack",
      duration: "16 weeks",
      students: 890,
      rating: 4.8,
      price: "$399",
      originalPrice: "$549",
      level: "Intermediate",
      image: "/placeholder.svg?height=200&width=400",
      features: ["MongoDB", "Express.js", "React", "Node.js"],
      instructor: "Marcus Johnson",
      popular: true,
    },
    {
      id: "modern-ui-ux-design",
      title: "Modern UI/UX Design Systems",
      description: "Design systems, prototyping, user research, and experience optimization",
      category: "UI/UX",
      duration: "8 weeks",
      students: 743,
      rating: 4.7,
      price: "$249",
      originalPrice: "$349",
      level: "Beginner",
      image: "/placeholder.svg?height=200&width=400",
      features: ["Figma", "Design Systems", "User Research", "Prototyping"],
      instructor: "Alex Rivera",
      popular: false,
    },
    {
      id: "devops-cloud-architecture",
      title: "DevOps & Cloud Architecture",
      description: "Modern deployment strategies, containerization, and cloud infrastructure management",
      category: "DevOps",
      duration: "14 weeks",
      students: 432,
      rating: 4.8,
      price: "$449",
      originalPrice: "$599",
      level: "Advanced",
      image: "/placeholder.svg?height=200&width=400",
      features: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      instructor: "David Kim",
      popular: false,
    },
    {
      id: "mobile-first-development",
      title: "Mobile-First Development",
      description: "Responsive design, PWAs, and cross-platform mobile app development",
      category: "Mobile",
      duration: "10 weeks",
      students: 678,
      rating: 4.6,
      price: "$329",
      originalPrice: "$449",
      level: "Intermediate",
      image: "/placeholder.svg?height=200&width=400",
      features: ["React Native", "Flutter", "PWA", "Mobile UI"],
      instructor: "Lisa Park",
      popular: false,
    },
  ]

  const filteredCourses =
    activeFilter === "All" ? courses : courses.filter((course) => course.category === activeFilter)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl font-bold mb-6">
              Enroll in Your <span className="gradient-text">Future</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from our comprehensive selection of future-ready courses designed to accelerate your tech career.
              Start learning today and transform your professional journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>15,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>4.8 Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6-16 Week Programs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-gray-600 flex-shrink-0" />
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "ghost"}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap ${
                  activeFilter === filter ? "gradient-bg text-white" : "text-gray-600 hover:text-black"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white border-gray-200 hover:border-black/50 transition-all duration-300 h-full group shadow-sm">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                      {course.popular && <Badge className="bg-red-100 text-red-800">Popular</Badge>}
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 px-2 py-1 rounded text-sm font-semibold">
                        <span className="text-red-500 line-through text-xs mr-1">{course.originalPrice}</span>
                        <span className="text-black">{course.price}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge variant="outline" className="border-black text-black mb-2">
                        {course.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                      <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                          {feature}
                        </Badge>
                      ))}
                      {course.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                          +{course.features.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        {course.rating}
                      </div>
                    </div>

                    <Button asChild className="w-full gradient-bg text-white font-semibold hover:opacity-90">
                      <Link href={`/enroll/${course.id}`}>
                        Enroll Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Need Help <span className="gradient-text">Choosing</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Not sure which course is right for you? Our education consultants are here to help you find the perfect
              learning path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg text-white font-semibold text-lg px-8 py-3">
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-3 bg-transparent"
              >
                View Course Comparison
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
