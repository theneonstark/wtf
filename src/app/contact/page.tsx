"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["Meethapur", "Badarpur, New Delhi - 110044", "India"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+91 9211579757", "+91 9211578941"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["info@webtechfoundation.in", "support@webtechfoundation.in"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 5:00 PM", "Sun: Closed"],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Web Tech Foundation (WTF)",
    "image": "https://www.webtechfoundation.in/logo.png",
    "@id": "https://www.webtechfoundation.in",
    "url": "https://www.webtechfoundation.in",
    "telephone": "+91 9211579757",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Meethapur, Badarpur",
      "addressLocality": "New Delhi",
      "postalCode": "110044",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5087,
      "longitude": 77.3071
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our courses? Want to join our community? We&#39;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black flex items-center gap-2">
                    <MessageCircle className="h-6 w-6 text-black" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-black">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="bg-white border-gray-300 text-black placeholder-gray-500 focus:border-black"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-black">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="bg-white border-gray-300 text-black placeholder-gray-500 focus:border-black"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-black">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-white border-gray-300 text-black placeholder-gray-500 focus:border-black"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-black">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        className="bg-white border-gray-300 text-black placeholder-gray-500 focus:border-black"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-black">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="bg-white border-gray-300 text-black placeholder-gray-500 focus:border-black resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full gradient-bg text-white font-semibold text-lg py-3">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-black mt-1">{info.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-black mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Find <span className="gradient-text">Our Delhi Center</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our main campus is located in Badarpur, New Delhi, serving students across the NCR region.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-slate-200 overflow-hidden shadow-xl rounded-2xl">
              <div className="h-[450px] w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.518600024!2d77.3045!3d28.5087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzMxLjMiTiA3N8KwMTgnMTYuMiJF!5e0!3m2!1sen!2sin!4v1711380000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Web Tech Foundation Location"
                ></iframe>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Quick <span className="gradient-text">Answers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Common questions about WTF and our programs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 h-full shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">How long are the courses?</h3>
                  <p className="text-gray-600">
                    Our courses range from 8-16 weeks depending on the program. Each is designed for intensive, focused
                    learning with flexible scheduling options.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 h-full shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Do you offer job placement assistance?</h3>
                  <p className="text-gray-600">
                    Yes! We have a 97% job placement rate and provide career coaching, interview prep, and direct
                    connections to our partner companies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 h-full shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">What are the prerequisites?</h3>
                  <p className="text-gray-600">
                    Prerequisites vary by course, but most require basic computer literacy and problem-solving skills.
                    We offer prep courses for complete beginners.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 h-full shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Is there a money-back guarantee?</h3>
                  <p className="text-gray-600">
                    We offer a 30-day money-back guarantee. If you&#39;re not satisfied with your learning experience, we&#39;ll
                    provide a full refund.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
