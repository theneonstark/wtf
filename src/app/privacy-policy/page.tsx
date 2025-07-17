"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, Mail, Phone } from "lucide-react"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, enroll in courses, contact us, or participate in our community forums. This may include your name, email address, phone number, billing information, and educational background.",
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect information about your use of our platform, including your IP address, browser type, operating system, referring URLs, access times, pages viewed, and course progress.",
        },
        {
          subtitle: "Educational Data",
          text: "We collect data related to your learning progress, including course completions, quiz scores, assignment submissions, and interaction with course materials to provide personalized learning experiences.",
        },
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Educational Services",
          text: "We use your information to provide, maintain, and improve our educational services, including delivering course content, tracking progress, and providing certificates upon completion.",
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you course updates, educational content, promotional materials, and important service announcements. You can opt out of marketing communications at any time.",
        },
        {
          subtitle: "Personalization",
          text: "We use your data to personalize your learning experience, recommend relevant courses, and provide customized content based on your interests and progress.",
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to improve our platform, develop new features, and enhance the overall learning experience for all users.",
        },
      ],
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Information Sharing and Disclosure",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with third-party service providers who assist us in operating our platform, processing payments, sending emails, or providing customer support. These providers are bound by confidentiality agreements.",
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change in ownership or control.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect our rights, property, or safety, or that of our users or the public.",
        },
        {
          subtitle: "Employer Partnerships",
          text: "If you enroll through an employer partnership program, we may share relevant progress and completion information with your employer as agreed upon in the partnership terms.",
        },
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data Security and Retention",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.",
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Course progress data may be retained indefinitely to maintain your learning records.",
        },
        {
          subtitle: "International Transfers",
          text: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.",
        },
      ],
    },
  ]

  const rights = [
    "Access and review your personal information",
    "Correct inaccurate or incomplete information",
    "Delete your personal information (subject to certain limitations)",
    "Restrict or object to certain processing of your information",
    "Data portability - receive a copy of your information in a structured format",
    "Withdraw consent for processing based on consent",
    "File a complaint with relevant data protection authorities",
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-12 w-12 text-black" />
              <h1 className="text-5xl font-bold">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information.
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
                <p className="text-gray-600 leading-relaxed mb-4">
                  At WTF (Web Tech Foundation), we are committed to protecting your privacy and ensuring the security of
                  your personal information. This Privacy Policy describes how we collect, use, share, and protect
                  information about you when you use our educational platform and services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By using our services, you agree to the collection and use of information in accordance with this
                  policy. We encourage you to read this policy carefully and contact us if you have any questions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-black">{section.icon}</div>
                    <h2 className="text-2xl font-bold text-black">{section.title}</h2>
                  </div>

                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3 className="text-lg font-semibold text-black mb-3">{item.subtitle}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-6">Your Rights and Choices</h2>
                <p className="text-gray-600 mb-6">
                  Depending on your location and applicable laws, you may have the following rights regarding your
                  personal information:
                </p>
                <ul className="space-y-3">
                  {rights.map((right, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{right}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 mt-6">
                  To exercise any of these rights, please contact us using the information provided in the &#34;Contact Us&#34;
                  section below.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
                <h2 className="text-2xl font-bold text-black mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-black" />
                    <div>
                      <p className="font-medium text-black">Email</p>
                      <p className="text-gray-600">info@webtechfoundation.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-black" />
                    <div>
                      <p className="font-medium text-black">Phone</p>
                      <p className="text-gray-600">+91 9211578941</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Mailing Address:</strong>
                    <br />
                    WTF - Web Tech Foundation
                    <br />
                    Meethapur
                    <br />
                    Badarpur, New Delhi - 110044
                    <br />
                    India
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}