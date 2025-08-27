"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cookie, Settings, BarChart3, Globe, Zap } from "lucide-react"

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Essential Cookies",
      description: "Required for basic website functionality and security",
      purpose:
        "These cookies are necessary for our website to function properly. They enable core functionality such as security, network management, and accessibility.",
      examples: ["Authentication tokens", "Session management", "Security preferences", "Load balancing"],
      duration: "Session or up to 1 year",
      canDisable: false,
      color: "bg-red-100 text-red-800",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website",
      purpose:
        "We use these cookies to collect information about how visitors use our site, which pages are most popular, and how users navigate through our content.",
      examples: ["Google Analytics", "Page view tracking", "User behavior analysis", "Performance metrics"],
      duration: "Up to 2 years",
      canDisable: true,
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Functional Cookies",
      description: "Enable enhanced functionality and personalization",
      purpose: "These cookies allow us to remember choices you make and provide enhanced, more personal features.",
      examples: ["Language preferences", "Theme settings", "Course progress", "User preferences"],
      duration: "Up to 1 year",
      canDisable: true,
      color: "bg-green-100 text-green-800",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track campaigns",
      purpose:
        "These cookies track your browsing habits to enable us to show advertising which is more likely to be of interest to you.",
      examples: ["Ad targeting", "Campaign tracking", "Social media integration", "Remarketing pixels"],
      duration: "Up to 1 year",
      canDisable: true,
      color: "bg-purple-100 text-purple-800",
    },
  ]

  const thirdPartyServices = [
    {
      name: "Google Analytics",
      purpose: "Website analytics and performance tracking",
      dataCollected: "Usage statistics, page views, user interactions",
      privacyPolicy: "https://policies.google.com/privacy",
    },
    {
      name: "Stripe",
      purpose: "Payment processing for course enrollments",
      dataCollected: "Payment information, transaction data",
      privacyPolicy: "https://stripe.com/privacy",
    },
    {
      name: "Intercom",
      purpose: "Customer support and live chat functionality",
      dataCollected: "Chat messages, user identification",
      privacyPolicy: "https://www.intercom.com/legal/privacy",
    },
    {
      name: "YouTube",
      purpose: "Video content delivery for course materials",
      dataCollected: "Video viewing behavior, preferences",
      privacyPolicy: "https://policies.google.com/privacy",
    },
  ]

  return (
    <div className="pt-16 min-h-screen relative z-10">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Cookie className="h-12 w-12 text-black" />
              <h1 className="text-5xl font-bold">
                Cookie <span className="gradient-text">Policy</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Learn about how we use cookies and similar technologies to improve your experience on our platform.
            </p>
            <p className="text-sm text-gray-500">Last updated: July 17, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">What Are Cookies?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. They help us
                  provide you with a better experience by remembering your preferences, keeping you logged in, and
                  understanding how you use our platform.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use cookies and similar technologies (such as web beacons and pixels) to collect information about
                  your browsing behavior and preferences. This policy explains what cookies we use, why we use them, and
                  how you can control them.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> By continuing to use our website, you consent to our use of cookies as
                    described in this policy. You can change your cookie preferences at any time using our cookie
                    settings.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Types of <span className="gradient-text">Cookies We Use</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use different types of cookies for various purposes to enhance your learning experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 shadow-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-black">{cookie.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-black">{cookie.title}</h3>
                        <Badge className={cookie.color}>{cookie.canDisable ? "Optional" : "Required"}</Badge>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{cookie.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-black mb-2">Purpose:</h4>
                        <p className="text-sm text-gray-600">{cookie.purpose}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-black mb-2">Examples:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {cookie.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">
                          <strong>Duration:</strong> {cookie.duration}
                        </span>
                        {cookie.canDisable && (
                          <Button variant="outline" size="sm" className="text-xs bg-transparent">
                            Manage
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Third-Party <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with trusted partners who may also set cookies on our website
            </p>
          </motion.div>

          <div className="space-y-6">
            {thirdPartyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-black">{service.name}</h3>
                      <Button variant="outline" size="sm" asChild>
                        <a href={service.privacyPolicy} target="_blank" rel="noopener noreferrer">
                          Privacy Policy
                        </a>
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-black mb-2">Purpose:</h4>
                        <p className="text-sm text-gray-600">{service.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-black mb-2">Data Collected:</h4>
                        <p className="text-sm text-gray-600">{service.dataCollected}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="h-6 w-6 text-black" />
                  <h2 className="text-2xl font-bold text-black">Managing Your Cookie Preferences</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Cookie Settings</h3>
                    <p className="text-gray-600 mb-4">
                      You can control which cookies you accept through our cookie preference center. Click the button
                      below to access your settings:
                    </p>
                    <Button className="gradient-bg text-white">
                      <Settings className="mr-2 h-4 w-4" />
                      Manage Cookie Preferences
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Browser Settings</h3>
                    <p className="text-gray-600 mb-4">
                      You can also control cookies through your browser settings. Most browsers allow you to:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                        View and delete cookies that are already stored on your device
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                        Block third-party cookies
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                        Block cookies from specific sites
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                        Block all cookies (this may affect website functionality)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> Disabling certain cookies may affect the functionality of our website
                      and your learning experience. Essential cookies cannot be disabled as they are required for basic
                      website operation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-black mb-4">Questions About Cookies?</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our use of cookies or this Cookie Policy, please don&#39;t hesitate to
                  contact us.
                </p>
                <Button className="gradient-bg text-white">Contact Support</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}