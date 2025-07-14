"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, TrendingUp, Users, Award } from "lucide-react"
import Image from "next/image"

export default function SuccessStoriesPage() {
  const [currentStory, setCurrentStory] = useState(0)

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Senior Full Stack Developer",
      company: "Meta",
      image: "/placeholder.svg?height=400&width=400",
      story:
        "After completing the Full Stack JavaScript course, I landed my dream job at Meta. The curriculum was perfectly aligned with industry needs, and the mentorship was invaluable.",
      beforeRole: "Marketing Coordinator",
      salaryIncrease: "180%",
      timeToJob: "2 months",
      course: "Full Stack JavaScript",
      location: "San Francisco, CA",
      previousSalary: "$45,000",
      currentSalary: "$126,000",
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Engineer",
      company: "OpenAI",
      image: "/placeholder.svg?height=400&width=400",
      story:
        "The AI-Powered Web Apps course opened doors I never imagined. Now I'm working on cutting-edge AI projects that are shaping the future of technology.",
      beforeRole: "Junior Developer",
      salaryIncrease: "250%",
      timeToJob: "1 month",
      course: "AI-Powered Web Apps",
      location: "Austin, TX",
      previousSalary: "$55,000",
      currentSalary: "$192,500",
    },
    {
      name: "Emily Johnson",
      role: "Lead UX Designer",
      company: "Stripe",
      image: "/placeholder.svg?height=400&width=400",
      story:
        "The Modern UI/UX Design course transformed my approach to design. I went from struggling freelancer to leading design at one of the world's top fintech companies.",
      beforeRole: "Freelance Designer",
      salaryIncrease: "200%",
      timeToJob: "3 weeks",
      course: "Modern UI/UX Design",
      location: "New York, NY",
      previousSalary: "$40,000",
      currentSalary: "$120,000",
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      company: "Netflix",
      image: "/placeholder.svg?height=400&width=400",
      story:
        "The DevOps & Cloud Architecture course gave me the skills to handle massive scale. Now I'm helping Netflix deliver content to millions of users worldwide.",
      beforeRole: "System Administrator",
      salaryIncrease: "160%",
      timeToJob: "6 weeks",
      course: "DevOps & Cloud Architecture",
      location: "Los Angeles, CA",
      previousSalary: "$60,000",
      currentSalary: "$156,000",
    },
    {
      name: "Priya Patel",
      role: "Blockchain Developer",
      company: "Coinbase",
      image: "/placeholder.svg?height=400&width=400",
      story:
        "The Blockchain & Web3 course positioned me perfectly for the crypto boom. I'm now building the financial infrastructure of the future.",
      beforeRole: "Backend Developer",
      salaryIncrease: "220%",
      timeToJob: "4 weeks",
      course: "Blockchain & Web3",
      location: "Miami, FL",
      previousSalary: "$70,000",
      currentSalary: "$224,000",
    },
    {
      name: "James Wilson",
      role: "Mobile App Developer",
      company: "Uber",
      image: "/placeholder.svg?height=400&width=400",
      story:
        "The Mobile-First Development course taught me React Native and Flutter. Now I'm building apps used by millions of riders daily.",
      beforeRole: "Web Developer",
      salaryIncrease: "140%",
      timeToJob: "5 weeks",
      course: "Mobile-First Development",
      location: "Seattle, WA",
      previousSalary: "$65,000",
      currentSalary: "$156,000",
    },
    {
      name: "Lisa Park",
      role: "Cybersecurity Analyst",
      company: "Microsoft",
      image: "/placeholder.svg?height=400&width=400",
      story:
        "The Cybersecurity Fundamentals course opened up a completely new career path. I'm now protecting enterprise systems at Microsoft.",
      beforeRole: "IT Support",
      salaryIncrease: "190%",
      timeToJob: "7 weeks",
      course: "Cybersecurity Fundamentals",
      location: "Redmond, WA",
      previousSalary: "$42,000",
      currentSalary: "$121,800",
    },
    {
      name: "Chris Taylor",
      role: "Game Developer",
      company: "Epic Games",
      image: "/placeholder.svg?height=400&width=400",
      story:
        "The Game Development course with Unity transformed my hobby into a career. Now I'm working on Fortnite and Unreal Engine.",
      beforeRole: "Graphic Designer",
      salaryIncrease: "175%",
      timeToJob: "8 weeks",
      course: "Game Development with Unity",
      location: "Cary, NC",
      previousSalary: "$48,000",
      currentSalary: "$132,000",
    },
  ]

  const companies = [
    { name: "Google", logo: "/placeholder.svg?height=60&width=120", employees: 45 },
    { name: "Meta", logo: "/placeholder.svg?height=60&width=120", employees: 38 },
    { name: "Netflix", logo: "/placeholder.svg?height=60&width=120", employees: 23 },
    { name: "Stripe", logo: "/placeholder.svg?height=60&width=120", employees: 19 },
    { name: "OpenAI", logo: "/placeholder.svg?height=60&width=120", employees: 15 },
    { name: "Vercel", logo: "/placeholder.svg?height=60&width=120", employees: 12 },
    { name: "Shopify", logo: "/placeholder.svg?height=60&width=120", employees: 28 },
    { name: "Discord", logo: "/placeholder.svg?height=60&width=120", employees: 17 },
    { name: "Airbnb", logo: "/placeholder.svg?height=60&width=120", employees: 31 },
    { name: "Uber", logo: "/placeholder.svg?height=60&width=120", employees: 26 },
    { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120", employees: 52 },
    { name: "Amazon", logo: "/placeholder.svg?height=60&width=120", employees: 67 },
    { name: "Apple", logo: "/placeholder.svg?height=60&width=120", employees: 34 },
    { name: "Tesla", logo: "/placeholder.svg?height=60&width=120", employees: 21 },
    { name: "Coinbase", logo: "/placeholder.svg?height=60&width=120", employees: 18 },
    { name: "Epic Games", logo: "/placeholder.svg?height=60&width=120", employees: 14 },
  ]

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "10,000+", label: "Graduates Placed" },
    { icon: <TrendingUp className="h-8 w-8" />, number: "185%", label: "Average Salary Increase" },
    { icon: <Award className="h-8 w-8" />, number: "95%", label: "Job Placement Rate" },
    { icon: <Star className="h-8 w-8" />, number: "4.9/5", label: "Graduate Satisfaction" },
  ]

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length)
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl font-bold mb-6">
              Success <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real graduates, real transformations. See how WTF has changed careers and lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-black mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Graduate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Inspiring journeys from our community of successful developers
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <Card className="bg-white border-gray-200 overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <img
                    src={successStories[currentStory].image || "/placeholder.svg"}
                    alt={successStories[currentStory].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <Badge className="mb-4 bg-black/10 text-black border-black/20">
                      {successStories[currentStory].course}
                    </Badge>
                    <h3 className="text-2xl font-bold text-black mb-2">{successStories[currentStory].name}</h3>
                    <p className="text-black mb-4">
                      {successStories[currentStory].role} at {successStories[currentStory].company}
                    </p>
                  </div>

                  <blockquote className="text-lg text-gray-600 mb-6 italic">
                    &#34;{successStories[currentStory].story}&#34;
                  </blockquote>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">
                        +{successStories[currentStory].salaryIncrease}
                      </div>
                      <div className="text-sm text-gray-600">Salary Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">{successStories[currentStory].timeToJob}</div>
                      <div className="text-sm text-gray-600">Time to Job</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">
                        {successStories[currentStory].beforeRole.split(" ")[0]}
                      </div>
                      <div className="text-sm text-gray-600">Previous Role</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Button variant="ghost" size="icon" onClick={prevStory} className="text-black hover:bg-gray-100">
                      <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <div className="flex space-x-2">
                      {successStories.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentStory(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentStory ? "bg-black" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <Button variant="ghost" size="icon" onClick={nextStory} className="text-black hover:bg-gray-100">
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Graduates Work At</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Top companies worldwide trust WTF graduates</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="text-center">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    width={100}
                    height={100}
                    className="h-12 mx-auto mb-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                  <p className="text-xs text-gray-600">{company.employees} graduates</p>
                </div>
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
              Ready to Write Your <span className="gradient-text">Success Story</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have transformed their careers with WTF.
            </p>
            <Button size="lg" className="gradient-bg text-white font-semibold text-lg px-8 py-3 neon-glow">
              Start Your Journey Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
