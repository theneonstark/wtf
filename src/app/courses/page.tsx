"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Users,
  Star,
  Filter,
  Code,
  Database,
  Palette,
  Brain,
  Cloud,
  Smartphone,
  Shield,
  Gamepad2,
} from "lucide-react"
import Image from "next/image"

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = [
    "All",
    "Web Dev",
    "Full Stack",
    "UI/UX",
    "AI/ML",
    "Mobile",
    "DevOps",
    "Blockchain",
    "Cybersecurity",
    "Game Dev",
  ]

  const courses = [
    {
      id: 1,
      title: "Advanced React & Next.js",
      description: "Master modern React patterns, Next.js 14, Server Components, and advanced state management",
      category: "Web Dev",
      duration: "12 weeks",
      students: 1250,
      rating: 4.9,
      price: "$299",
      level: "Advanced",
      image: "/images/Nextjs-Vs-React.jpg",
      features: ["React 18", "Next.js 14", "TypeScript", "Server Components", "Tailwind CSS"],
      instructor: "Sarah Chen",
      projects: 8,
    },
    {
      id: 2,
      title: "Full Stack JavaScript Mastery",
      description: "Complete MERN stack development with MongoDB, Express, React, and Node.js",
      category: "Full Stack",
      duration: "16 weeks",
      students: 890,
      rating: 4.8,
      price: "$399",
      level: "Intermediate",
      image: "/images/javascript-full.jpg",
      features: ["MongoDB", "Express.js", "React", "Node.js", "GraphQL"],
      instructor: "Marcus Johnson",
      projects: 12,
    },
    {
      id: 3,
      title: "AI-Powered Web Applications",
      description: "Integrate AI and machine learning into modern web applications using TensorFlow and OpenAI",
      category: "AI/ML",
      duration: "10 weeks",
      students: 567,
      rating: 4.9,
      price: "$499",
      level: "Advanced",
      image: "/images/AI-Powered-Web-Development.png",
      features: ["TensorFlow.js", "OpenAI API", "Machine Learning", "Neural Networks", "Computer Vision"],
      instructor: "Dr. Emily Zhang",
      projects: 6,
    },
    {
      id: 4,
      title: "Modern UI/UX Design Systems",
      description: "Design systems, prototyping, user research, and experience optimization",
      category: "UI/UX",
      duration: "8 weeks",
      students: 743,
      rating: 4.7,
      price: "$249",
      level: "Beginner",
      image: "/images/UIUX.webp",
      features: ["Figma", "Design Systems", "User Research", "Prototyping", "Accessibility"],
      instructor: "Alex Rivera",
      projects: 5,
    },
    {
      id: 5,
      title: "DevOps & Cloud Architecture",
      description: "Modern deployment strategies, containerization, and cloud infrastructure management",
      category: "DevOps",
      duration: "14 weeks",
      students: 432,
      rating: 4.8,
      price: "$449",
      level: "Advanced",
      image: "/images/devops-architecture.jpg",
      features: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
      instructor: "David Kim",
      projects: 10,
    },
    {
      id: 6,
      title: "Mobile-First Development",
      description: "Responsive design, PWAs, and cross-platform mobile app development",
      category: "Mobile",
      duration: "10 weeks",
      students: 678,
      rating: 4.6,
      price: "$329",
      level: "Intermediate",
      image: "/images/mobilefirstdev.png",
      features: ["React Native", "Flutter", "PWA", "Mobile UI", "App Store"],
      instructor: "Lisa Park",
      projects: 7,
    },
    {
      id: 7,
      title: "Blockchain & Web3 Development",
      description: "Smart contracts, DeFi applications, and decentralized web development",
      category: "Blockchain",
      duration: "12 weeks",
      students: 345,
      rating: 4.8,
      price: "$549",
      level: "Advanced",
      image: "/images/blockchain.png",
      features: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts", "DeFi"],
      instructor: "James Wilson",
      projects: 6,
    },
    {
      id: 8,
      title: "Cybersecurity Fundamentals",
      description: "Web security, penetration testing, and secure coding practices",
      category: "Cybersecurity",
      duration: "8 weeks",
      students: 234,
      rating: 4.7,
      price: "$379",
      level: "Intermediate",
      image: "/images/cyber.jpeg",
      features: ["Ethical Hacking", "OWASP", "Security Testing", "Cryptography", "Network Security"],
      instructor: "Michael Brown",
      projects: 5,
    },
    {
      id: 9,
      title: "Game Development with Unity",
      description: "2D/3D game development, physics, animations, and game design principles",
      category: "Game Dev",
      duration: "14 weeks",
      students: 456,
      rating: 4.6,
      price: "$429",
      level: "Intermediate",
      image: "/images/gaming.jpeg",
      features: ["Unity 3D", "C#", "Game Physics", "Animation", "VR/AR"],
      instructor: "Chris Taylor",
      projects: 8,
    },
    {
      id: 10,
      title: "Python Data Science & Analytics",
      description: "Data analysis, visualization, machine learning, and statistical modeling",
      category: "AI/ML",
      duration: "12 weeks",
      students: 789,
      rating: 4.8,
      price: "$359",
      level: "Beginner",
      image: "/images/Data-Analysis-with-python.webp",
      features: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      instructor: "Dr. Anna Rodriguez",
      projects: 9,
    },
    {
      id: 11,
      title: "Advanced TypeScript & Node.js",
      description: "Enterprise-level backend development with TypeScript, Node.js, and microservices",
      category: "Full Stack",
      duration: "10 weeks",
      students: 567,
      rating: 4.9,
      price: "$389",
      level: "Advanced",
      image: "/images/nodets.png",
      features: ["TypeScript", "Node.js", "Microservices", "GraphQL", "Testing"],
      instructor: "Robert Chen",
      projects: 7,
    },
    {
      id: 12,
      title: "Progressive Web Apps (PWA)",
      description: "Build fast, reliable, and engaging web applications that work offline",
      category: "Web Dev",
      duration: "6 weeks",
      students: 432,
      rating: 4.7,
      price: "$199",
      level: "Intermediate",
      image: "/images/paw.webp",
      features: ["Service Workers", "Web App Manifest", "Push Notifications", "Offline Storage", "Performance"],
      instructor: "Jennifer Lee",
      projects: 4,
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Dev":
        return <Code className="h-4 w-4" />
      case "Full Stack":
        return <Database className="h-4 w-4" />
      case "UI/UX":
        return <Palette className="h-4 w-4" />
      case "AI/ML":
        return <Brain className="h-4 w-4" />
      case "DevOps":
        return <Cloud className="h-4 w-4" />
      case "Mobile":
        return <Smartphone className="h-4 w-4" />
      case "Cybersecurity":
        return <Shield className="h-4 w-4" />
      case "Game Dev":
        return <Gamepad2 className="h-4 w-4" />
      default:
        return <Code className="h-4 w-4" />
    }
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl font-bold mb-6">
              Future-Ready <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Master the technologies that will define the next decade of software development. From AI and blockchain
              to advanced web development and cybersecurity.
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
                className={`whitespace-nowrap flex items-center gap-2 ${
                  activeFilter === filter ? "gradient-bg text-white" : "text-gray-600 hover:text-black"
                }`}
              >
                {getCategoryIcon(filter)}
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Stats */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-black">{filteredCourses.length}</div>
              <div className="text-gray-600">Available Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">
                {filteredCourses.reduce((acc, course) => acc + course.students, 0).toLocaleString()}
              </div>
              <div className="text-gray-600">Total Enrollments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">
                {(filteredCourses.reduce((acc, course) => acc + course.rating, 0) / filteredCourses.length).toFixed(1)}
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">
                {filteredCourses.reduce((acc, course) => acc + course.projects, 0)}
              </div>
              <div className="text-gray-600">Total Projects</div>
            </div>
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
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90 border-gray-300">
                        {course.projects} Projects
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="border-black text-black flex items-center gap-1">
                        {getCategoryIcon(course.category)}
                        {course.category}
                      </Badge>
                      {/* <span className="text-2xl font-bold text-black">{course.price}</span> */}
                    </div>
                    <CardTitle className="text-black group-hover:text-gray-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4">{course.description}</p>

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

                    <Button className="w-full gradient-bg text-white font-semibold hover:opacity-90">Enroll Now</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Structured <span className="gradient-text">Learning Paths</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow our carefully designed learning paths to master complete skill sets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Developer Path",
                courses: ["Progressive Web Apps", "Advanced React & Next.js", "Modern UI/UX Design"],
                duration: "26 weeks",
                price: "$747",
                savings: "$100",
              },
              {
                title: "Full Stack Developer Path",
                courses: ["Full Stack JavaScript", "Advanced TypeScript", "DevOps & Cloud"],
                duration: "40 weeks",
                price: "$1,137",
                savings: "$200",
              },
              {
                title: "AI/ML Engineer Path",
                courses: ["Python Data Science", "AI-Powered Web Apps", "Advanced Machine Learning"],
                duration: "34 weeks",
                price: "$1,217",
                savings: "$150",
              },
            ].map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-4">{path.title}</h3>
                    <div className="space-y-2 mb-6">
                      {path.courses.map((course, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          {course}
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">{path.duration}</span>
                      </div>
                      {/* <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Bundle Price:</span>
                        <div>
                          <span className="font-bold text-xl">{path.price}</span>
                          <Badge className="ml-2 bg-green-100 text-green-800">Save {path.savings}</Badge>
                        </div>
                      </div> */}
                      <Button className="w-full gradient-bg text-white">Start Learning Path</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
