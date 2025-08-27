"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, Shield, CreditCard, Users, AlertTriangle, Mail, Phone } from "lucide-react"

export default function TermsConditionsPage() {
  const sections = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Acceptance of Terms",
      content: [
        {
            subtitle: "",
          text: "By accessing and using the WTF (Web Tech Foundation) platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
        },
        {
            subtitle: "",
          text: "These Terms of Service constitute a legally binding agreement between you and WTF regarding your use of our educational platform, courses, and related services.",
        },
        {
            subtitle: "",
          text: "We reserve the right to update these terms at any time without prior notice. Your continued use of the platform after any changes indicates your acceptance of the new terms.",
        },
      ],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Use License and Restrictions",
      content: [
        {
          subtitle: "Permitted Use",
          text: "You are granted a limited, non-exclusive, non-transferable license to access and use our educational content for personal, non-commercial educational purposes only.",
        },
        {
          subtitle: "Prohibited Activities",
          text: "You may not: (a) reproduce, distribute, or create derivative works from our content; (b) reverse engineer or attempt to extract source code; (c) use automated systems to access the platform; (d) share your account credentials with others.",
        },
        {
          subtitle: "Intellectual Property",
          text: "All course materials, including videos, text, graphics, logos, and software, are the property of WTF or our licensors and are protected by copyright and other intellectual property laws.",
        },
      ],
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Terms and Refunds",
      content: [
        {
          subtitle: "Course Fees",
          text: "Course fees are clearly displayed on our website and must be paid in full before accessing course materials. All prices are in INR unless otherwise specified.",
        },
        {
          subtitle: "Payment Processing",
          text: "Payments are processed securely through our third-party payment processors. By providing payment information, you authorize us to charge the applicable fees.",
        },
        {
          subtitle: "Refund Policy",
          text: "We offer a 30-day money-back guarantee from the date of enrollment. Refund requests must be submitted through our support system. Refunds are processed within 5-10 business days.",
        },
        {
          subtitle: "Subscription Services",
          text: "For subscription-based services, you will be charged automatically at the beginning of each billing cycle until you cancel your subscription.",
        },
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "User Accounts and Responsibilities",
      content: [
        {
          subtitle: "Account Creation",
          text: "You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.",
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized use of your account or any other breach of security.",
        },
        {
          subtitle: "User Conduct",
          text: "You agree to use our platform in a manner consistent with applicable laws and regulations. Harassment, spam, or any form of disruptive behavior is prohibited.",
        },
        {
          subtitle: "Content Submission",
          text: "Any content you submit (comments, questions, assignments) must be original and not infringe on third-party rights. You grant us a license to use such content for educational purposes.",
        },
      ],
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Disclaimers and Limitation of Liability",
      content: [
        {
          subtitle: "Educational Purpose",
          text: "Our courses are provided for educational purposes only. We do not guarantee employment, salary increases, or specific career outcomes upon completion of our programs.",
        },
        {
          subtitle: "Platform Availability",
          text: "While we strive for 100% uptime, we do not guarantee uninterrupted access to our platform. We may perform maintenance or updates that temporarily affect availability.",
        },
        {
          subtitle: "Limitation of Liability",
          text: "In no event shall WTF be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or use.",
        },
        {
          subtitle: "Maximum Liability",
          text: "Our total liability to you for any claims arising from your use of our services shall not exceed the amount you paid for the specific course or service in question.",
        },
      ],
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Termination and Suspension",
      content: [
        {
          subtitle: "Termination by User",
          text: "You may terminate your account at any time by contacting our support team. Upon termination, your access to course materials will be revoked according to our refund policy.",
        },
        {
          subtitle: "Termination by WTF",
          text: "We reserve the right to suspend or terminate your account if you violate these terms, engage in fraudulent activity, or for any other reason at our sole discretion.",
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, all rights and licenses granted to you will immediately cease, and you must stop using our platform and delete any downloaded materials.",
        },
      ],
    },
  ]

  const additionalTerms = [
    {
      title: "Privacy and Data Protection",
      content:
        "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.",
    },
    {
      title: "Third-Party Services",
      content:
        "Our platform may integrate with third-party services. Your use of such services is subject to their respective terms and conditions.",
    },
    {
      title: "Governing Law",
      content:
        "These terms are governed by the laws of the State of California, United States, without regard to conflict of law principles.",
    },
    {
      title: "Dispute Resolution",
      content:
        "Any disputes arising from these terms will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.",
    },
    {
      title: "Severability",
      content:
        "If any provision of these terms is found to be unenforceable, the remaining provisions will continue to be valid and enforceable.",
    },
    {
      title: "Entire Agreement",
      content:
        "These terms constitute the entire agreement between you and WTF regarding your use of our services and supersede all prior agreements.",
    },
  ]

  return (
    <div className="pt-16 min-h-screen relative z-10">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Scale className="h-12 w-12 text-black" />
              <h1 className="text-5xl font-bold">
                Terms & <span className="gradient-text">Conditions</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Please read these terms and conditions carefully before using our educational platform and services.
            </p>
            <div className="flex items-center justify-center gap-4">
              <p className="text-sm text-gray-500">Last updated: July 17, 2025</p>
              <Badge className="bg-green-100 text-green-800">Version 1.0</Badge>
            </div>
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
                <h2 className="text-2xl font-bold text-black mb-4">Welcome to WTF</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These Terms and Conditions (&#34;Terms&#34;, &#34;Terms and Conditions&#34;) govern your relationship with the WTF
                  (Web Tech Foundation) website and educational platform operated by InfiniMorph Consulting (&#34;us&#34;, &#34;we&#34;, or
                  &#34;our&#34;).
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Please read these Terms and Conditions carefully before using our Service. Your access to and use of
                  the Service is conditioned on your acceptance of and compliance with these Terms.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm text-blue-800">
                    <strong>Important:</strong> By accessing or using our service, you agree to be bound by these Terms.
                    If you disagree with any part of these terms, then you may not access the Service.
                  </p>
                </div>
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
                        {item.subtitle && <h3 className="text-lg font-semibold text-black mb-3">{item.subtitle}</h3>}
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

      {/* Additional Terms */}
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
              Additional <span className="gradient-text">Provisions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Important additional terms that govern your use of our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalTerms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 shadow-sm h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-black mb-3">{term.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{term.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
                <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-black" />
                    <div>
                      <p className="font-medium text-black">Legal Department</p>
                      <p className="text-gray-600">info@webtechfoundation.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-black" />
                    <div>
                      <p className="font-medium text-black">Support</p>
                      <p className="text-gray-600">+91 9211578941</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Web Tech Foundation</strong>
                    <br />
                    Meethapur
                    <br />
                    Badarpur, New Delhi - 110044
                    <br />
                    India
                  </p>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> These terms are effective as of the date listed above. We recommend checking
                    this page periodically for any updates or changes.
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