"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Users, Award, Zap, 
  // Globe  ,
   BookOpen, Heart, Lightbulb, Shield, Rocket} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
  name: "Masooma",
  role: "Founder & Director",
  bio: "Visionary leader with a strong background in technology and education. Dedicated to shaping the future of tech learning and making innovation accessible worldwide.",
  image: "/experts/woman-user.png",
  skills: ["Leadership", "Strategic Vision", "Business Development"],
  experience: "15 years",
  education: "MBA in Technology Management, Harvard Business School",
  achievements: ["Founded multiple successful ventures", "Top 100 Women in Tech", "Keynote Speaker at Global Tech Summits"],
},
{
  name: "Mohd Shahid",
  role: "Co-Founder & CEO",
  bio: "Entrepreneur and strategist with expertise in building scalable businesses and driving digital transformation. Passionate about leading teams and creating sustainable impact.",
  image: "/experts/shahid.png",
  skills: ["Entrepreneurship", "Business Strategy", "Team Building"],
  experience: "12 years",
  education: "Master’s in Business Administration, IIM Bangalore",
  achievements: ["Built and scaled startups", "Young CEO Award", "Featured in Business Today’s 40 Under 40"],
},
{
  name: "Sabra",
  role: "COO & Managing Director",
  bio: "Operational excellence specialist with deep expertise in managing teams, optimizing processes, and ensuring organizational growth and stability.",
  image: "/placeholder.svg?height=300&width=300",
  skills: ["Operations Management", "Process Optimization", "People Management"],
  experience: "11 years",
  education: "Master’s in Management, London Business School",
  achievements: ["Operational Leadership Award", "Best COO Recognition", "Led global expansion initiatives"],
},
    // {
    //   name: "Abhishek",
    //   role: "AI Research Director",
    //   bio: "Leading AI researcher specializing in machine learning applications. Published 50+ papers in top-tier conferences.",
    //   image: "/placeholder.svg?height=300&width=300",
    //   skills: ["Machine Learning", "Deep Learning", "Research"],
    //   experience: "16 years",
    //   education: "PhD AI, Carnegie Mellon",
    //   achievements: ["AI Research Excellence", "Patent Holder", "IEEE Fellow"],
    // },
    // {
    //   name: "Mohd Alquama",
    //   role: "Lead Instructor",
    //   bio: "Full-stack architect with expertise in scalable systems. Mentored 1000+ developers into successful tech careers.",
    //   image: "/placeholder.svg?height=300&width=300",
    //   skills: ["Full Stack", "Cloud Architecture", "Mentoring"],
    //   experience: "14 years",
    //   education: "BS Computer Science, UC Berkeley",
    //   achievements: ["AWS Solutions Architect", "Kubernetes Certified", "Tech Mentor of the Year"],
    // },
    // {
    //   name: "Sahil Gautam",
    //   role: "Sr. Graphic Designer",
    //   bio: "Ex-Meta developer advocate with expertise in modern web technologies. Designs future-ready curricula that bridge industry gaps.",
    //   image: "/experts/sahil_sir.png",
    //   skills: ["Curriculum Design", "React", "Developer Experience"],
    //   experience: "12 years",
    //   education: "MS Software Engineering, MIT",
    //   achievements: ["React Core Contributor", "Conference Speaker", "Open Source Advocate"],
    // },
    // {
    //   name: "David Kim",
    //   role: "DevOps Architect",
    //   bio: "Cloud infrastructure expert with experience scaling systems for millions of users. Former Netflix and Uber engineer.",
    //   image: "/placeholder.svg?height=300&width=300",
    //   skills: ["DevOps", "Cloud Computing", "System Design"],
    //   experience: "13 years",
    //   education: "MS Systems Engineering, Georgia Tech",
    //   achievements: ["Cloud Architecture Expert", "DevOps Innovator", "System Reliability Engineer"],
    // },
  ]

  const timeline = [
    {
      year: "2024 Dec",
      title: "The Vision",
      description:
        "WTF was founded with a mission to prepare developers for the future of technology. Started with a small team of passionate educators.",
      milestone: "Foundation Founded",
    },
    {
      year: "2025 Mar",
      title: "First Cohort",
      description:
        "Launched our first course with 50 students, achieving 95% job placement rate. Established partnerships with 10 tech companies.",
      milestone: "50 Students",
    },
    {
      year: "2025 Apr",
      title: "Rapid Growth",
      description:
        "Expanded to 100+ students across multiple cutting-edge technology tracks. Introduced AI and blockchain courses.",
      milestone: "100+ Students",
    },
    // {
    //   year: "2022",
    //   title: "Industry Recognition",
    //   description:
    //     "Recognized as Best Tech Education Platform by TechCrunch. Launched corporate training programs for Fortune 500 companies.",
    //   milestone: "Industry Awards",
    // },
    // {
    //   year: "2023",
    //   title: "Global Expansion",
    //   description:
    //     "Expanded internationally with students from 50+ countries. Launched scholarship programs for underrepresented communities.",
    //   milestone: "Global Reach",
    // },
    // {
    //   year: "2025 May",
    //   title: "Innovation Hub",
    //   description:
    //     "Serving 15,000+ students worldwide with 98% satisfaction rate. Opened innovation labs and research centers.",
    //   milestone: "15,000+ Students",
    // },
    {
      year: "2025 May",
      title: "Collaborated with SEA",
      description:
        "Formed a strategic partnership with SEA (Skill Earth Academy) to enhance global educational impact.",
      milestone: "Collaboration",
    },
  ]

  const stats = [
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      number: "900+",
      label: "Students Trained",
      description: "Well Placed",
    },
    { icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />, number: "73%", label: "Job Placement Rate", description: "Within 6 months" },
    {
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
      number: "500+",
      label: "Partner Companies",
      description: "Including 25+",
    },
    { icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />, number: "98%", label: "Satisfaction Rate", description: "Student feedback" },
    // { icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />, number: "50+", label: "Countries", description: "Global presence" },
    { icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />, number: "100+", label: "Courses", description: "Across 10 domains" },
  ]

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends and integrate cutting-edge tools into our curriculum before they become mainstream.",
    },
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Student Success",
      description:
        "Every decision we make is centered around student outcomes. Your success is our primary metric of achievement.",
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Quality Assurance",
      description:
        "We maintain the highest standards in education delivery, instructor expertise, and learning outcomes.",
    },
    {
      icon: <Rocket className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Future Ready",
      description:
        "We prepare students not just for today&#39;s jobs, but for careers that will emerge in the next decade.",
    },
  ]

  const partnerships = [
  { 
    name: "InfiniMorph Consulting", 
    logo: "/infini-logo.png", 
    type: "Powered By", 
    link: "https://www.infinimorphconsulting.com/",
    description: "Powered by InfiniMorph Consulting, driving innovation through web, mobile, branding, and digital transformation solutions."
  },
  { 
    name: "SEA - Skill Earth Academy", 
    logo: "/sea-logo.png", 
    type: "Co-powered by", 
    link: "https://skillsearthacademy.com/",
    description: "Co-powered by Skill Earth Academy, enabling skill-based learning and empowering students with industry-ready knowledge."
  }
]


  return (
    <div className="pt-16 min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              About <span className="gradient-text">WTF - Web Tech Foundation</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
              We&#39;re not just teaching code – we&#39;re preparing the next generation of developers for a rapidly evolving
              technological landscape. Founded in 2019, we&#39;ve become the leading platform for future-ready tech
              education.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <Badge className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2">Founded 2025</Badge>
              <Badge className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2">900+ Graduates</Badge>
              {/* <Badge className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2">50+ Countries</Badge> */}
              <Badge className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2">73% Job Placement</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                At WTF (Web Tech Foundation), we believe that traditional education isn&#39;t keeping pace with technological
                advancement. We&#39;re bridging that gap by providing cutting-edge, future-focused education that prepares
                developers for tomorrow&#39;s challenges.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                Our curriculum is constantly evolving, incorporating the latest technologies and industry best practices
                to ensure our graduates are always ahead of the curve. We don&#39;t just teach current technologies – we
                anticipate and prepare for what&#39;s coming next.
              </p>
              <Button className="gradient-bg text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                Learn More About Our Approach
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white border-gray-200 text-center shadow-sm">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-black mb-3 sm:mb-4 flex justify-center">{stat.icon}</div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-1 sm:mb-2">{stat.number}</div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 h-full text-center shadow-sm">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-black mb-3 sm:mb-4 flex justify-center">{value.icon}</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">{value.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-transparent to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Meet Our <span className="gradient-text">Leadership Team</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Industry experts and passionate educators dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white border-gray-200 hover:border-black/50 transition-all duration-300 h-full shadow-sm">
                  <CardContent className="p-4 sm:p-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 object-cover"
                    />
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 text-center">{member.name}</h3>
                    <p className="text-sm sm:text-base text-black mb-2 sm:mb-3 text-center font-medium">{member.role}</p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 text-center">{member.bio}</p>

                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                      {/* <div className="text-center">
                        <span className="text-xs sm:text-sm font-medium text-gray-700">Experience: </span>
                        <span className="text-xs sm:text-sm text-gray-600">{member.experience}</span>
                      </div> */}
                      {/* <div className="text-center">
                        <span className="text-xs sm:text-sm font-medium text-gray-700">Education: </span>
                        <span className="text-xs sm:text-sm text-gray-600">{member.education}</span>
                      </div> */}
                    </div>

                    {/* <div className="mb-3 sm:mb-4">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 text-center">Achievements</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                        {member.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-gray-300">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div> */}

                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} className="text-xs bg-gray-100 text-gray-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              From a bold vision to transforming thousands of careers worldwide
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-black to-gray-400"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col sm:flex-row items-center mb-8 sm:mb-12 ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <div className="w-full sm:w-5/12 sm:pr-8 sm:pl-8">
                  <Card className="bg-white border-gray-200 shadow-sm">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-3">
                        <div className="text-xl sm:text-2xl font-bold text-black">{item.year}</div>
                        <Badge className="bg-gray-100 text-gray-700 text-xs sm:text-sm mt-2 sm:mt-0">{item.milestone}</Badge>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">{item.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Collaborating with industry leaders to provide the best education experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-white border-gray-200 p-4 sm:p-6 h-full shadow-sm flex flex-col items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-black mb-1">{partner.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{partner.type}</p>
                  </div>
                  <Link href={partner.link} target="_blank">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={150}
                    height={150}
                    className="max-h-24 w-auto mx-auto mb-3 sm:mb-4 transition-opacity duration-300 object-contain"
                  />
                  </Link>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">{partner.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Join Our <span className="gradient-text">Community</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Become part of a global network of future-ready developers and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="gradient-bg text-white font-semibold text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3">
                Explore Courses
              </Button>
              <Button
                size="lg"
                className="border-1 border-black text-black hover:bg-black hover:text-white text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 bg-transparent"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}