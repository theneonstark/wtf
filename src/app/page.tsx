"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Zap,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  Target,
  Award,
  BookOpen,
  Clock,
  TrendingUp,
  PlayCircle,
  Calendar,
  MessageSquare,
  Briefcase,
  Rocket,
  Coffee,
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"
// import { BlogPreview } from "@/components/blog-preview"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const features = [
    {
      icon: <Code className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Future-Ready Curriculum",
      description: "Learn cutting-edge technologies that will dominate the next decade",
      details: "AI, Blockchain, Web3, Advanced React, Next.js 14, and more",
    },
    {
      icon: <Zap className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Lightning Fast Learning",
      description: "Accelerated learning paths designed for rapid skill acquisition",
      details: "Project-based learning with real-world applications",
    },
    {
      icon: <Users className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Community Driven",
      description: "Join a vibrant community of future-focused developers",
      details: "150+ active members, mentorship, and networking",
    },
    {
      icon: <Target className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Industry Partnerships",
      description: "Direct connections with 25+ top tech companies for job placement",
      // details: "Google, Meta, Netflix, OpenAI, and more",
      details: "",
    },
    {
      icon: <Award className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Certification Programs",
      description: "Earn industry-recognized certificates that boost your career prospects",
      details: "Verified credentials accepted by top employers",
    },
    {
      icon: <BookOpen className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Lifetime Access",
      description: "Keep learning with lifetime access to course materials and updates",
      details: "New content added monthly, forever access",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer at Meta",
      content:
        "WTF transformed my career. The future-focused approach gave me skills that set me apart in interviews. The mentorship program was incredible!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      course: "Full Stack JavaScript",
      salaryIncrease: "180%",
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Engineer at OpenAI",
      content:
        "The AI and machine learning courses here are unmatched. I landed my dream job within 3 months of completing the program.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      course: "AI-Powered Web Apps",
      salaryIncrease: "250%",
    },
    {
      name: "Emily Johnson",
      role: "Senior Frontend Developer at Stripe",
      content:
        "The community support and mentorship made all the difference. The projects I built are still in my portfolio today!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      course: "Advanced React & Next.js",
      salaryIncrease: "200%",
    },
    {
      name: "Alex Thompson",
      role: "DevOps Engineer at Netflix",
      content:
        "The hands-on projects and real-world scenarios prepared me perfectly for my current role. Amazing experience!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      course: "DevOps & Cloud Architecture",
      salaryIncrease: "160%",
    },
    {
      name: "Priya Patel",
      role: "UX Designer at Airbnb",
      content:
        "From zero design experience to landing at Airbnb in 6 months. The curriculum is incredibly well-structured.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      course: "Modern UI/UX Design",
      salaryIncrease: "220%",
    },
    {
      name: "James Wilson",
      role: "Blockchain Developer at Coinbase",
      content:
        "The emerging tech courses kept me ahead of the curve. Now I'm building the future of finance with Web3 technologies.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      course: "Blockchain & Web3",
      salaryIncrease: "300%",
    },
  ]

  const stats = [
    {
      icon: <Users className="h-6 sm:h-8 w-6 sm:w-8" />,
      number: "900+",
      label: "Students Trained",
      description: "Across 50+ placements",
    },
    { icon: <Award className="h-6 sm:h-8 w-6 sm:w-8" />, number: "73%", label: "Job Placement Rate", description: "Within 6 months" },
    {
      icon: <TrendingUp className="h-6 sm:h-8 w-6 sm:w-8" />,
      number: "185%",
      label: "Average Salary Increase",
      description: "Post-graduation",
    },
    {
      icon: <Star className="h-6 sm:h-8 w-6 sm:w-8" />,
      number: "4.9/5",
      label: "Student Satisfaction",
      description: "Based on 500+ reviews",
    },
  ]

  const courses = [
    {
      title: "Advanced React & Next.js",
      description: "Master modern React patterns and Next.js 14 for production-ready applications",
      duration: "12 weeks",
      students: 1250,
      rating: 4.9,
      price: "",
      image: "/images/Nextjs-Vs-React.jpg",
    },
    {
      title: "AI-Powered Web Applications",
      description: "Integrate AI and machine learning into modern web applications",
      duration: "10 weeks",
      students: 567,
      rating: 4.9,
      price: "",
      image: "/images/AI-Powered-Web-Development.png",
    },
    {
      title: "Full Stack JavaScript",
      description: "Complete MERN stack development from frontend to backend",
      duration: "16 weeks",
      students: 890,
      rating: 4.8,
      price: "",
      image: "/images/javascript-full.jpg",
    },
  ]

  const faqs = [
    {
      question: "How long are the courses?",
      answer:
        "Our courses range from 6-16 weeks depending on the program. Each is designed for intensive, focused learning with flexible scheduling options to accommodate working professionals.",
    },
    {
      question: "Do you offer job placement assistance?",
      answer:
        "Yes! We have a 95% job placement rate and provide comprehensive career support including resume reviews, interview preparation, salary negotiation coaching, and direct connections to our 500+ partner companies.",
    },
    {
      question: "What are the prerequisites?",
      answer:
        "Prerequisites vary by course, but most require basic computer literacy and problem-solving skills. We offer prep courses for complete beginners and provide pre-course materials to help you get ready.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with your learning experience within the first 30 days, we'll provide a full refund, no questions asked.",
    },
    {
      question: "Can I learn while working full-time?",
      answer:
        "Absolutely! Our courses are designed with working professionals in mind. We offer evening classes, weekend sessions, and self-paced options to fit your schedule.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide 24/7 community support, weekly 1-on-1 mentorship sessions, career coaching, technical support, and lifetime access to our alumni network.",
    },
  ]

  const upcomingEvents = [
    {
      title: "Free Web Development Workshop",
      date: "Dec 20, 2024",
      time: "7:00 PM EST",
      type: "Workshop",
      attendees: 245,
    },
    {
      title: "AI in Web Development Masterclass",
      date: "Dec 22, 2024",
      time: "2:00 PM EST",
      type: "Masterclass",
      attendees: 189,
    },
    {
      title: "Career Fair with Tech Giants",
      date: "Dec 28, 2024",
      time: "10:00 AM EST",
      type: "Career Event",
      attendees: 567,
    },
  ]

  const instructors = [
    {
      name: "Sahil Gautam",
      role: "Lead Graphic Designer",
      experience: "Ex-Google, 12+ years",
      image: "/placeholder.svg?height=100&width=100",
      students: 3200,    },
    {
      name: "Dr. Emily Zhang",
      role: "AI Research Director",
      experience: "PhD AI, 50+ papers",
      image: "/placeholder.svg?height=100&width=100",
      students: 1800,
    },
    {
      name: "Marcus Johnson",
      role: "Full Stack Architect",
      experience: "Ex-Netflix, 14+ years",
      image: "/placeholder.svg?height=100&width=100",
      students: 2900,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="pt-16 w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-transparent to-gray-50" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="rounded-4xl mb-4 sm:mb-6 bg-black/10 text-black border-black/20 text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2">
              🚀 The Future is Now - Join 900+ Developers
            </Badge>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">Decode the Future</span>
              <br />
              <span className="text-black">with Us</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join the bold tech-education revolution. Master tomorrow&apos;s technologies today with AI, Blockchain,
              Advanced Web Development, and cutting-edge frameworks. Get job-ready in 6-16 weeks with our
              industry-leading curriculum.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="gradient-bg text-white font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 neon-glow">
                Explore Courses
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
              <Button
                size="lg"
                className="border border-black text-black hover:bg-black hover:text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-transparent"
              >
                <PlayCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-black mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-transparent to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Why Choose <span className="gradient-text">WTF</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re not just another coding bootcamp. We&apos;re preparing you for the future of technology with cutting-edge
              curriculum, industry partnerships, and proven results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 hover:border-black/50 transition-all duration-300 h-full shadow-sm group">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="text-black mb-4 sm:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{feature.description}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{feature.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Most Popular <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Start your journey with our most sought-after programs designed for rapid career transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 hover:border-black/50 transition-all duration-300 h-full shadow-sm">
                  <div className="relative overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-40 sm:h-48 object-cover"
                      width={400}
                      height={400}
                    />
                    <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-green-600 text-black text-xs sm:text-sm">
                      Popular
                    </Badge>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">{course.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{course.description}</p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 sm:h-4 w-3 sm:w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 sm:h-4 w-3 sm:w-4" />
                        {course.students}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 sm:h-4 w-3 sm:w-4 text-yellow-400" />
                        {course.rating}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg sm:text-2xl font-bold text-black">{course.price}</span>
                      <Button className="gradient-bg text-white text-sm sm:text-base">Enroll Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              className="border-1 border-black text-black hover:bg-black hover:text-white bg-transparent text-sm sm:text-base"
            >
              View All Courses
              <ArrowRight className="ml-2 h-3 sm:h-4 w-3 sm:w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Our Instructors */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Learn from <span className="gradient-text">Industry Experts</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Our instructors are seasoned professionals from top tech companies with real-world experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 text-center shadow-sm">
                  <CardContent className="p-4 sm:p-8">
                    <Image
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      className="w-20 sm:w-24 h-20 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 object-cover"
                      width={100}
                      height={100}
                    />
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2">{instructor.name}</h3>
                    <p className="text-sm sm:text-base text-black mb-1 sm:mb-2">{instructor.role}</p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{instructor.experience}</p>
                    <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 sm:h-4 w-3 sm:w-4" />
                        {instructor.students.toLocaleString()} students
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 sm:h-4 w-3 sm:w-4 text-yellow-400" />
                        4.9
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our graduates who are now shaping the future of technology at top companies worldwide
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-4 sm:p-8">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevTestimonial}
                    className="text-black hover:bg-gray-100"
                  >
                    <ChevronLeft className="h-5 sm:h-6 w-5 sm:w-6" />
                  </Button>

                  <div className="text-center flex-1 max-w-xl sm:max-w-3xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <Image
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover"
                        width={100}
                        height={100}
                      />
                      <div className="text-center sm:text-left">
                        <p className="font-semibold text-black text-base sm:text-lg">{testimonials[currentTestimonial].name}</p>
                        <p className="text-black text-xs sm:text-sm">{testimonials[currentTestimonial].role}</p>
                        <Badge className="mt-1 bg-green-100 text-green-800 text-xs sm:text-sm">
                          +{testimonials[currentTestimonial].salaryIncrease} salary
                        </Badge>
                      </div>
                    </div>

                    <div className="flex justify-center mb-3 sm:mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-sm sm:text-lg text-gray-600 mb-3 sm:mb-4 italic">
                      &quot;{testimonials[currentTestimonial].content}&quot;
                    </blockquote>

                    <Badge variant="outline" className="border-gray-300 text-xs sm:text-sm">
                      {testimonials[currentTestimonial].course}
                    </Badge>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextTestimonial}
                    className="text-black hover:bg-gray-100"
                  >
                    <ChevronRight className="h-5 sm:h-6 w-5 sm:w-6" />
                  </Button>
                </div>

                <div className="flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-black" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Join our free workshops, masterclasses, and networking events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <Badge className="bg-black text-white text-xs sm:text-sm">{event.type}</Badge>
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                        <Users className="h-3 sm:h-4 w-3 sm:w-4" />
                        {event.attendees}
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">{event.title}</h3>
                    <div className="space-y-2 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 sm:h-4 w-3 sm:w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 sm:h-4 w-3 sm:w-4" />
                        {event.time}
                      </div>
                    </div>
                    <Button className="w-full gradient-bg text-white text-sm sm:text-base">Register Free</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our programs and learning experience
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white border-gray-200 h-full shadow-sm">
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3 flex items-start gap-2">
                        <MessageSquare className="h-4 sm:h-5 w-4 sm:w-5 mt-0.5 text-gray-600" />
                        {faq.question}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      {/* <BlogPreview /> */}

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Ready to <span className="gradient-text">Shape Your Future</span>?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Join 15,000+ developers who are already building tomorrow&apos;s applications. Start your transformation
                today with our proven curriculum, expert mentorship, and industry connections.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm">
                    <Rocket className="h-6 sm:h-8 w-6 sm:w-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-1 sm:mb-2 text-base sm:text-lg">Start Learning</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Choose your course and begin your journey</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm">
                    <Users className="h-6 sm:h-8 w-6 sm:w-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-1 sm:mb-2 text-base sm:text-lg">Build Projects</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Create real-world applications with mentorship</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm">
                    <Briefcase className="h-6 sm:h-8 w-6 sm:w-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-1 sm:mb-2 text-base sm:text-lg">Land Your Job</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Get hired at top tech companies</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 neon-glow">
                  Start Your Journey Today
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Button>
                <Button
                  size="lg"
                  className="border border-black text-black hover:bg-black hover:text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-transparent"
                >
                  <Coffee className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Schedule a Call
                </Button>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
                💝 30-day money-back guarantee • 🎓 Lifetime access • 🤝 Career support included
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}