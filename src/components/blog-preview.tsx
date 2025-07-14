"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"

export function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: What to Expect in 2024",
      excerpt:
        "Explore the emerging trends and technologies that will shape web development in the coming year, from AI integration to new frameworks.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Web Development",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Applications with Microservices",
      excerpt:
        "Learn how to architect and implement microservices that can handle millions of users while maintaining performance and reliability.",
      author: "Marcus Johnson",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      category: "Architecture",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 3,
      title: "AI in Web Development: Practical Applications",
      excerpt:
        "Discover how artificial intelligence is revolutionizing web development and how you can integrate AI tools into your workflow.",
      author: "Dr. Emily Zhang",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "AI/ML",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Modern Applications",
      excerpt:
        "Essential security measures every developer should implement to protect applications from emerging threats and vulnerabilities.",
      author: "Michael Brown",
      date: "Dec 8, 2024",
      readTime: "15 min read",
      category: "Security",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
  ]

  return (
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
            Latest from Our <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights from the world of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-gray-200 overflow-hidden shadow-sm h-full">
              <div className="relative">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-black text-white">Featured</Badge>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Badge className="mb-4 bg-gray-100 text-gray-700">{blogPosts[0].category}</Badge>
                <h3 className="text-2xl font-bold text-black mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <Button className="gradient-bg text-white">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Other Posts */}
          <div className="space-y-6">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                      <Clock className="h-3 w-3 ml-2" />
                      {post.readTime}
                    </div>
                    <Badge className="mb-3 bg-gray-100 text-gray-700 text-xs">{post.category}</Badge>
                    <h4 className="text-lg font-semibold text-black mb-2 line-clamp-2">{post.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">By {post.author}</span>
                      <Button variant="ghost" size="sm" className="text-black hover:text-gray-600">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="border-1 border-black text-black hover:bg-black hover:text-white bg-transparent">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
