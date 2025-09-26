"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Clock,
  Users,
  Star,
  CheckCircle,
  Calendar,
  CreditCard,
  Shield,
  Award,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  User,
} from "lucide-react"
import { useParams } from "next/navigation"

export default function EnrollPage() {
  const params = useParams()
  const courseId = params.courseId as string
  const [currentStep, setCurrentStep] = useState(1)
  // const [selectedPlan, setSelectedPlan] = useState("full")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    experience: "",
    goals: "",
    paymentMethod: "card",
  })

  // Course data - in a real app, this would come from an API
  const courses = {
  "advanced-react-nextjs": {
    "id": "advanced-react-nextjs",
    "title": "Advanced React & Next.js",
    "subtitle": "Master Modern React Patterns and Next.js 14",
    "description": "Dive deep into advanced React concepts, Next.js 14 features, Server Components, and build production-ready applications that scale.",
    "duration": "12 weeks",
    "students": 1250,
    "rating": 4.9,
    "reviews": 324,
    "level": "Advanced",
    "image": "/placeholder.svg?height=400&width=600",
    "instructor": {
      "name": "Sarah Chen",
      "title": "Senior React Engineer at Meta",
      "experience": "12+ years",
      "students": 3200,
      "image": "/placeholder.svg?height=100&width=100"
    },
    "features": [
      "Advanced React Patterns & Hooks",
      "Next.js 14 App Router & Server Components",
      "TypeScript Integration",
      "Performance Optimization",
      "Testing with Jest & React Testing Library",
      "Deployment & CI/CD",
      "Real-world Project Portfolio",
      "1-on-1 Mentorship Sessions"
    ],
    "curriculum": [
      {
        "week": "Week 1-2",
        "title": "Advanced React Fundamentals",
        "topics": ["Custom Hooks", "Context API", "Error Boundaries", "Suspense & Concurrent Features"]
      },
      {
        "week": "Week 3-4",
        "title": "Next.js 14 Deep Dive",
        "topics": ["App Router", "Server Components", "Streaming", "Metadata API"]
      },
      {
        "week": "Week 5-6",
        "title": "State Management & Data Fetching",
        "topics": ["Zustand", "React Query", "Server Actions", "Database Integration"]
      },
      {
        "week": "Week 7-8",
        "title": "Performance & Optimization",
        "topics": ["Code Splitting", "Image Optimization", "Caching Strategies", "Bundle Analysis"]
      },
      {
        "week": "Week 9-10",
        "title": "Testing & Quality Assurance",
        "topics": ["Unit Testing", "Integration Testing", "E2E Testing", "Code Quality Tools"]
      },
      {
        "week": "Week 11-12",
        "title": "Deployment & Production",
        "topics": ["Vercel Deployment", "CI/CD Pipelines", "Monitoring", "Final Project"]
      }
    ],
    "pricing": {
      "full": { "price": 299, "originalPrice": 399, "savings": 100, "popular": true },
      "installments": { "price": 99, "installments": 3, "total": 297, "savings": 102 },
      "premium": { "price": 499, "originalPrice": 699, "savings": 200, "includes": "1-on-1 mentoring + job placement" }
    },
    "includes": [
      "12 weeks of intensive training",
      "40+ hours of video content",
      "8 hands-on projects",
      "Weekly live Q&A sessions",
      "Private Discord community",
      "Certificate of completion",
      "Lifetime access to materials",
      "Career support & job placement assistance"
    ],
    "prerequisites": [
      "Solid understanding of JavaScript ES6+",
      "Basic React knowledge (components, props, state)",
      "Familiarity with HTML/CSS",
      "Git version control basics"
    ]
  },
  "ai-powered-web-apps": {
    "id": "ai-powered-web-apps",
    "title": "AI-Powered Web Applications",
    "subtitle": "Integrate AI and Machine Learning into Modern Web Apps",
    "description": "Learn to build intelligent web applications using cutting-edge AI technologies, from OpenAI APIs to custom machine learning models.",
    "duration": "10 weeks",
    "students": 567,
    "rating": 4.9,
    "reviews": 189,
    "level": "Advanced",
    "image": "/placeholder.svg?height=400&width=600",
    "instructor": {
      "name": "Dr. Emily Zhang",
      "title": "AI Research Director",
      "experience": "16+ years",
      "students": 1800,
      "image": "/placeholder.svg?height=100&width=100"
    },
    "features": [
      "OpenAI API Integration",
      "TensorFlow.js Implementation",
      "Computer Vision Applications",
      "Natural Language Processing",
      "Machine Learning Model Training",
      "AI Ethics & Best Practices",
      "Production AI Deployment",
      "Industry Case Studies"
    ],
    "curriculum": [
      {
        "week": "Week 1-2",
        "title": "AI Fundamentals for Web Developers",
        "topics": ["Machine Learning Basics", "AI APIs Overview", "Data Preprocessing", "Model Selection"]
      },
      {
        "week": "Week 3-4",
        "title": "OpenAI Integration",
        "topics": ["GPT API Usage", "Prompt Engineering", "Text Generation", "Chat Applications"]
      },
      {
        "week": "Week 5-6",
        "title": "Computer Vision & Image Processing",
        "topics": ["Image Classification", "Object Detection", "Face Recognition", "Image Generation"]
      },
      {
        "week": "Week 7-8",
        "title": "Natural Language Processing",
        "topics": ["Sentiment Analysis", "Text Classification", "Language Translation", "Chatbots"]
      },
      {
        "week": "Week 9-10",
        "title": "Production AI Applications",
        "topics": ["Model Deployment", "Performance Optimization", "Monitoring", "Final AI Project"]
      }
    ],
    "pricing": {
      "full": { "price": 499, "originalPrice": 699, "savings": 200, "popular": true },
      "installments": { "price": 169, "installments": 3, "total": 507, "savings": 192 },
      "premium": { "price": 799, "originalPrice": 999, "savings": 200, "includes": "AI mentorship + research project" }
    },
    "includes": [
      "10 weeks of AI-focused training",
      "50+ hours of video content",
      "6 AI-powered projects",
      "Access to premium AI tools",
      "Weekly expert sessions",
      "AI ethics certification",
      "Lifetime access to materials",
      "AI career guidance"
    ],
    "prerequisites": [
      "Strong JavaScript/Python knowledge",
      "Basic understanding of APIs",
      "Familiarity with data structures",
      "Mathematical thinking (statistics helpful)"
    ]
  },
  "full-stack-javascript": {
    "id": "full-stack-javascript",
    "title": "Full Stack JavaScript Mastery",
    "subtitle": "Complete MERN Stack Development",
    "description": "Master the complete JavaScript ecosystem from frontend to backend, databases, and deployment with the MERN stack.",
    "duration": "16 weeks",
    "students": 890,
    "rating": 4.8,
    "reviews": 267,
    "level": "Intermediate",
    "image": "/placeholder.svg?height=400&width=600",
    "instructor": {
      "name": "Marcus Johnson",
      "title": "Full Stack Architect at Netflix",
      "experience": "14+ years",
      "students": 2900,
      "image": "/placeholder.svg?height=100&width=100"
    },
    "features": [
      "MongoDB Database Design",
      "Express.js Backend Development",
      "React Frontend Mastery",
      "Node.js Server Architecture",
      "GraphQL API Development",
      "Authentication & Security",
      "Cloud Deployment",
      "DevOps Fundamentals"
    ],
    "curriculum": [
      {
        "week": "Week 1-2",
        "title": "JavaScript Fundamentals",
        "topics": ["ES6+ Features", "Async Programming", "Modules", "Testing Basics"]
      },
      {
        "week": "Week 3-4",
        "title": "Node.js & Express Backend",
        "topics": ["Server Setup", "Routing", "Middleware", "Error Handling"]
      },
      {
        "week": "Week 5-6",
        "title": "Database Design & MongoDB",
        "topics": ["Schema Design", "CRUD Operations", "Aggregation", "Indexing"]
      },
      {
        "week": "Week 7-8",
        "title": "React Frontend Development",
        "topics": ["Component Architecture", "State Management", "Routing", "Forms"]
      },
      {
        "week": "Week 9-10",
        "title": "API Development & Integration",
        "topics": ["RESTful APIs", "GraphQL", "Authentication", "Data Validation"]
      },
      {
        "week": "Week 11-12",
        "title": "Advanced Features",
        "topics": ["Real-time Features", "File Uploads", "Email Integration", "Payment Processing"]
      },
      {
        "week": "Week 13-14",
        "title": "Testing & Quality Assurance",
        "topics": ["Unit Testing", "Integration Testing", "API Testing", "Code Quality"]
      },
      {
        "week": "Week 15-16",
        "title": "Deployment & DevOps",
        "topics": ["Cloud Deployment", "CI/CD", "Monitoring", "Final Project"]
      }
    ],
    "pricing": {
      "full": { "price": 399, "originalPrice": 549, "savings": 150, "popular": true },
      "installments": { "price": 139, "installments": 3, "total": 417, "savings": 132 },
      "premium": { "price": 649, "originalPrice": 849, "savings": 200, "includes": "DevOps training + job guarantee" }
    },
    "includes": [
      "16 weeks comprehensive training",
      "60+ hours of video content",
      "12 full-stack projects",
      "Weekly code reviews",
      "Private community access",
      "Industry certification",
      "Lifetime access to materials",
      "Job placement assistance"
    ],
    "prerequisites": [
      "Basic JavaScript knowledge",
      "HTML/CSS fundamentals",
      "Understanding of programming concepts",
      "Willingness to learn and practice"
    ]
  },
  "modern-ui-ux-design": {
    "id": "modern-ui-ux-design",
    "title": "Modern UI/UX Design Systems",
    "subtitle": "Create User-Centric Design Systems and Prototypes",
    "description": "Learn to design intuitive and accessible user interfaces, create robust design systems, and conduct user research for optimal user experiences.",
    "duration": "8 weeks",
    "students": 743,
    "rating": 4.7,
    "reviews": 210,
    "level": "Beginner",
    "image": "/placeholder.svg?height=400&width=600",
    "instructor": {
      "name": "Alex Rivera",
      "title": "Lead UX Designer at Adobe",
      "experience": "10+ years",
      "students": 2500,
      "image": "/placeholder.svg?height=100&width=100"
    },
    "features": [
      "Figma for Prototyping",
      "Design System Creation",
      "User Research Techniques",
      "Accessibility Standards",
      "User Testing & Feedback"
    ],
    "curriculum": [
      {
        "week": "Week 1-2",
        "title": "UI/UX Fundamentals",
        "topics": ["Design Principles", "User-Centered Design", "Wireframing", "Figma Basics"]
      },
      {
        "week": "Week 3-4",
        "title": "Design Systems",
        "topics": ["Component Libraries", "Style Guides", "Design Tokens", "Consistency"]
      },
      {
        "week": "Week 5-6",
        "title": "User Research & Prototyping",
        "topics": ["User Interviews", "Surveys", "Interactive Prototypes", "Usability Testing"]
      },
      {
        "week": "Week 7-8",
        "title": "Accessibility & Final Projects",
        "topics": ["WCAG Guidelines", "Accessible Design", "Portfolio Building", "Final Presentation"]
      }
    ],
    "pricing": {
      "full": { "price": 249, "originalPrice": 349, "savings": 100, "popular": true },
      "installments": { "price": 85, "installments": 3, "total": 255, "savings": 94 },
      "premium": { "price": 399, "originalPrice": 549, "savings": 150, "includes": "1-on-1 design critiques + portfolio review" }
    },
    "includes": [
      "8 weeks of design training",
      "30+ hours of video content",
      "5 design projects",
      "Weekly design critiques",
      "Private design community",
      "Certificate of completion",
      "Lifetime access to materials",
      "Career support for designers"
    ],
    "prerequisites": [
      "Basic understanding of design tools",
      "Familiarity with user interfaces",
      "No prior design experience required",
      "Creative mindset"
    ]
  },
  "devops-cloud-architecture": {
    "id": "devops-cloud-architecture",
    "title": "DevOps & Cloud Architecture",
    "subtitle": "Master Deployment and Cloud Infrastructure",
    "description": "Learn modern DevOps practices, containerization, and cloud architecture to deploy scalable and reliable applications.",
    "duration": "14 weeks",
    "students": 432,
    "rating": 4.8,
    "reviews": 145,
    "level": "Advanced",
    "image": "/placeholder.svg?height=400&width=600",
    "instructor": {
      "name": "David Kim",
      "title": "Cloud Architect at Google",
      "experience": "15+ years",
      "students": 2000,
      "image": "/placeholder.svg?height=100&width=100"
    },
    "features": [
      "Docker Containerization",
      "Kubernetes Orchestration",
      "AWS Cloud Services",
      "CI/CD Pipelines",
      "Infrastructure as Code"
    ],
    "curriculum": [
      {
        "week": "Week 1-2",
        "title": "DevOps Fundamentals",
        "topics": ["DevOps Principles", "Version Control", "CI/CD Concepts", "Automation"]
      },
      {
        "week": "Week 3-4",
        "title": "Containerization with Docker",
        "topics": ["Docker Basics", "Docker Compose", "Image Management", "Container Networking"]
      },
      {
        "week": "Week 5-6",
        "title": "Kubernetes Orchestration",
        "topics": ["Pods & Deployments", "Services", "Scaling", "Cluster Management"]
      },
      {
        "week": "Week 7-8",
        "title": "Cloud Infrastructure",
        "topics": ["AWS Services", "EC2", "S3", "Lambda Functions"]
      },
      {
        "week": "Week 9-10",
        "title": "CI/CD Pipelines",
        "topics": ["GitHub Actions", "Jenkins", "Pipeline Design", "Testing Automation"]
      },
      {
        "week": "Week 11-12",
        "title": "Infrastructure as Code",
        "topics": ["Terraform", "CloudFormation", "Resource Management", "Security"]
      },
      {
        "week": "Week 13-14",
        "title": "Monitoring & Deployment",
        "topics": ["Monitoring Tools", "Logging", "Performance Tuning", "Final Project"]
      }
    ],
    "pricing": {
      "full": { "price": 449, "originalPrice": 599, "savings": 150, "popular": true },
      "installments": { "price": 155, "installments": 3, "total": 465, "savings": 134 },
      "premium": { "price": 699, "originalPrice": 899, "savings": 200, "includes": "Cloud certification prep + mentorship" }
    },
    "includes": [
      "14 weeks of DevOps training",
      "50+ hours of video content",
      "10 cloud projects",
      "Weekly expert Q&A",
      "Private DevOps community",
      "Certificate of completion",
      "Lifetime access to materials",
      "Career support for DevOps roles"
    ],
    "prerequisites": [
      "Basic Linux knowledge",
      "Familiarity with cloud concepts",
      "Experience with programming",
      "Understanding of networking basics"
    ]
  },
  "mobile-first-development": {
    "id": "mobile-first-development",
    "title": "Mobile-First Development",
    "subtitle": "Build Responsive and Cross-Platform Apps",
    "description": "Master responsive design, Progressive Web Apps (PWAs), and cross-platform mobile development with modern frameworks.",
    "duration": "10 weeks",
    "students": 678,
    "rating": 4.6,
    "reviews": 198,
    "level": "Intermediate",
    "image": "/placeholder.svg?height=400&width=600",
    "instructor": {
      "name": "Lisa Park",
      "title": "Mobile Developer at Uber",
      "experience": "11+ years",
      "students": 2300,
      "image": "/placeholder.svg?height=100&width=100"
    },
    "features": [
      "Responsive Design Techniques",
      "Progressive Web Apps",
      "React Native Development",
      "Flutter Framework",
      "App Store Deployment"
    ],
    "curriculum": [
      {
        "week": "Week 1-2",
        "title": "Responsive Design Basics",
        "topics": ["Mobile-First CSS", "Media Queries", "Flexbox", "Grid Systems"]
      },
      {
        "week": "Week 3-4",
        "title": "Progressive Web Apps",
        "topics": ["Service Workers", "Web App Manifest", "Offline Capabilities", "Push Notifications"]
      },
      {
        "week": "Week 5-6",
        "title": "React Native Development",
        "topics": ["Components", "Navigation", "State Management", "Native APIs"]
      },
      {
        "week": "Week 7-8",
        "title": "Flutter Development",
        "topics": ["Widgets", "State Management", "Animations", "Cross-Platform Builds"]
      },
      {
        "week": "Week 9-10",
        "title": "Deployment & Optimization",
        "topics": ["App Store Submission", "Performance Tuning", "Testing", "Final Project"]
      }
    ],
    "pricing": {
      "full": { "price": 329, "originalPrice": 449, "savings": 120, "popular": true },
      "installments": { "price": 110, "installments": 3, "total": 330, "savings": 119 },
      "premium": { "price": 499, "originalPrice": 649, "savings": 150, "includes": "Mentorship + app store guidance" }
    },
    "includes": [
      "10 weeks of mobile development training",
      "40+ hours of video content",
      "7 mobile projects",
      "Weekly live sessions",
      "Private mobile dev community",
      "Certificate of completion",
      "Lifetime access to materials",
      "Career support for mobile developers"
    ],
    "prerequisites": [
      "Basic JavaScript knowledge",
      "HTML/CSS fundamentals",
      "Familiarity with mobile interfaces",
      "Basic understanding of APIs"
    ]
  },
  "blockchain-web3-development": {
    "id": "blockchain-web3-development",
    "title": "Blockchain & Web3 Development",
    "subtitle": "Build Decentralized Apps and Smart Contracts",
    "description": "Learn to develop decentralized applications, smart contracts, and DeFi solutions using Ethereum and Web3 technologies.",
    "duration": "12 weeks",
    "students": 345,
    "rating": 4.8,
    "reviews": 120,
    "level": "Advanced",
    "image": "/placeholder.svg?height=400&width=600",
    "instructor": {
      "name": "James Wilson",
      "title": "Blockchain Engineer at ConsenSys",
      "experience": "9+ years",
      "students": 1500,
      "image": "/placeholder.svg?height=100&width=100"
    },
    "features": [
      "Solidity Programming",
      "Ethereum Blockchain",
      "Web3.js Integration",
      "Smart Contract Development",
      "DeFi Applications"
    ],
    "curriculum": [
      {
        "week": "Week 1-2",
        "title": "Blockchain Fundamentals",
        "topics": ["Blockchain Basics", "Ethereum Overview", "Cryptography", "Wallets"]
      },
      {
        "week": "Week 3-4",
        "title": "Smart Contract Development",
        "topics": ["Solidity Basics", "Smart Contract Design", "Testing Contracts", "Security"]
      },
      {
        "week": "Week 5-6",
        "title": "Web3.js Integration",
        "topics": ["Web3.js Setup", "Interacting with Contracts", "DApp Frontends", "Metamask"]
      },
      {
        "week": "Week 7-8",
        "title": "DeFi Applications",
        "topics": ["Decentralized Exchanges", "Lending Protocols", "Yield Farming", "Staking"]
      },
      {
        "week": "Week 9-10",
        "title": "Testing & Deployment",
        "topics": ["Hardhat", "Truffle", "Mainnet Deployment", "Gas Optimization"]
      },
      {
        "week": "Week 11-12",
        "title": "Advanced Topics & Projects",
        "topics": ["NFTs", "DAOs", "Cross-Chain Bridges", "Final DApp Project"]
      }
    ],
    "pricing": {
      "full": { "price": 549, "originalPrice": 749, "savings": 200, "popular": true },
      "installments": { "price": 185, "installments": 3, "total": 555, "savings": 194 },
      "premium": { "price": 799, "originalPrice": 999, "savings": 200, "includes": "Blockchain mentorship + DeFi project" }
    },
    "includes": [
      "12 weeks of blockchain training",
      "45+ hours of video content",
      "6 blockchain projects",
      "Weekly expert sessions",
      "Private Web3 community",
      "Certificate of completion",
      "Lifetime access to materials",
      "Blockchain career guidance"
    ],
    "prerequisites": [
      "Strong JavaScript knowledge",
      "Basic understanding of blockchain",
      "Familiarity with APIs",
      "Experience with smart contracts helpful"
    ]
  },
  "cybersecurity-fundamentals": {
    "id": "cybersecurity-fundamentals",
    "title": "Cybersecurity Fundamentals",
    "subtitle": "Master Web Security and Ethical Hacking",
    "description": "Learn to secure web applications, perform penetration testing, and implement secure coding practices.",
    "duration": "8 weeks",
    "students": 234,
    "rating": 4.7,
    "reviews": 95,
    "level": "Intermediate",
    "image": "/placeholder.svg?height=400&width=600",
    "instructor": {
      "name": "Michael Brown",
      "title": "Cybersecurity Expert at Cisco",
      "experience": "13+ years",
      "students": 1700,
      "image": "/placeholder.svg?height=100&width=100"
    },
    "features": [
      "Ethical Hacking Techniques",
      "OWASP Security Standards",
      "Penetration Testing",
      "Cryptography Basics",
      "Network Security"
    ],
    "curriculum": [
      {
        "week": "Week 1-2",
        "title": "Cybersecurity Basics",
        "topics": ["Threat Models", "OWASP Top 10", "Security Principles", "Risk Assessment"]
      },
      {
        "week": "Week 3-4",
        "title": "Penetration Testing",
        "topics": ["Vulnerability Scanning", "Exploitation", "SQL Injection", "XSS Attacks"]
      },
      {
        "week": "Week 5-6",
        "title": "Secure Coding Practices",
        "topics": ["Input Validation", "Authentication", "Session Management", "Error Handling"]
      },
      {
        "week": "Week 7-8",
        "title": "Network Security & Projects",
        "topics": ["Firewalls", "Encryption", "Monitoring", "Final Security Project"]
      }
    ],
    "pricing": {
      "full": { "price": 379, "originalPrice": 499, "savings": 120, "popular": true },
      "installments": { "price": 130, "installments": 3, "total": 390, "savings": 109 },
      "premium": { "price": 549, "originalPrice": 699, "savings": 150, "includes": "Security certification prep + mentorship" }
    },
    "includes": [
      "8 weeks of cybersecurity training",
      "35+ hours of video content",
      "5 security projects",
      "Weekly expert Q&A",
      "Private security community",
      "Certificate of completion",
      "Lifetime access to materials",
      "Career support for security roles"
    ],
    "prerequisites": [
      "Basic programming knowledge",
      "Understanding of web applications",
      "Familiarity with networking",
      "Interest in security"
    ]
  },
  "game-development-unity": {
    "id": "game-development-unity",
    "title": "Game Development with Unity",
    "subtitle": "Create 2D/3D Games with Unity",
    "description": "Learn to build immersive 2D and 3D games using Unity, focusing on physics, animations, and game design principles.",
    "duration": "14 weeks",
    "students": 456,
    "rating": 4.6,
    "reviews": 140,
    "level": "Intermediate",
    "image": "/placeholder.svg?height=400&width=600",
    "instructor": {
      "name": "Chris Taylor",
      "title": "Game Developer at Epic Games",
      "experience": "12+ years",
      "students": 2100,
      "image": "/placeholder.svg?height=100&width=100"
    },
    "features": [
      "Unity 3D Development",
      "C# Programming",
      "Game Physics",
      "Animation Systems",
      "VR/AR Basics"
    ],
    "curriculum": [
      {
        "week": "Week 1-2",
        "title": "Game Development Basics",
        "topics": ["Unity Interface", "C# Basics", "Game Objects", "Scenes"]
      },
      {
        "week": "Week 3-4",
        "title": "2D Game Development",
        "topics": ["Sprites", "2D Physics", "Tilemaps", "UI Design"]
      },
      {
        "week": "Week 5-6",
        "title": "3D Game Development",
        "topics": ["3D Models", "Lighting", "Terrain", "Camera Systems"]
      },
      {
        "week": "Week 7-8",
        "title": "Game Physics & Animations",
        "topics": ["Rigidbody", "Colliders", "Animation Controller", "Particle Systems"]
      },
      {
        "week": "Week 9-10",
        "title": "Advanced Game Features",
        "topics": ["AI Behaviors", "Multiplayer Basics", "Audio", "Scriptable Objects"]
      },
      {
        "week": "Week 11-12",
        "title": "VR/AR & Optimization",
        "topics": ["VR Setup", "AR Basics", "Performance Optimization", "Testing"]
      },
      {
        "week": "Week 13-14",
        "title": "Publishing & Projects",
        "topics": ["Build Settings", "Game Publishing", "Portfolio", "Final Game Project"]
      }
    ],
    "pricing": {
      "full": { "price": 429, "originalPrice": 579, "savings": 150, "popular": true },
      "installments": { "price": 145, "installments": 3, "total": 435, "savings": 144 },
      "premium": { "price": 649, "originalPrice": 799, "savings": 150, "includes": "Game mentorship + publishing guidance" }
    },
    "includes": [
      "14 weeks of game dev training",
      "50+ hours of video content",
      "8 game projects",
      "Weekly live sessions",
      "Private game dev community",
      "Certificate of completion",
      "Lifetime access to materials",
      "Career support for game developers"
    ],
    "prerequisites": [
      "Basic programming knowledge",
      "Familiarity with C# helpful",
      "Interest in game design",
      "Basic understanding of 3D concepts"
    ]
  },
  "python-data-science": {
    "id": "python-data-science",
    "title": "Python Data Science & Analytics",
    "subtitle": "Master Data Analysis and Machine Learning",
    "description": "Learn data analysis, visualization, and machine learning using Python and its powerful data science libraries.",
    "duration": "12 weeks",
    "students": 789,
    "rating": 4.8,
    "reviews": 230,
    "level": "Beginner",
    "image": "/placeholder.svg?height=400&width=600",
    "instructor": {
      "name": "Dr. Anna Rodriguez",
      "title": "Data Scientist at IBM",
      "experience": "14+ years",
      "students": 2700,
      "image": "/placeholder.svg?height=100&width=100"
    },
    "features": [
      "Python for Data Science",
      "Pandas Data Analysis",
      "NumPy Computations",
      "Matplotlib Visualizations",
      "Scikit-learn Models"
    ],
    "curriculum": [
      {
        "week": "Week 1-2",
        "title": "Python for Data Science",
        "topics": ["Python Basics", "Data Types", "Functions", "Libraries Setup"]
      },
      {
        "week": "Week 3-4",
        "title": "Data Analysis with Pandas",
        "topics": ["DataFrames", "Data Cleaning", "Merging", "Grouping"]
      },
      {
        "week": "Week 5-6",
        "title": "Data Visualization",
        "topics": ["Matplotlib", "Seaborn", "Plotly", "Dashboard Creation"]
      },
      {
        "week": "Week 7-8",
        "title": "Machine Learning Basics",
        "topics": ["Regression", "Classification", "Clustering", "Model Evaluation"]
      },
      {
        "week": "Week 9-10",
        "title": "Advanced Machine Learning",
        "topics": ["Feature Engineering", "Hyperparameter Tuning", "Pipelines", "Cross-Validation"]
      },
      {
        "week": "Week 11-12",
        "title": "Data Science Projects",
        "topics": ["Real-World Datasets", "End-to-End Projects", "Presentation", "Portfolio"]
      }
    ],
    "pricing": {
      "full": { "price": 359, "originalPrice": 499, "savings": 140, "popular": true },
      "installments": { "price": 120, "installments": 3, "total": 360, "savings": 139 },
      "premium": { "price": 549, "originalPrice": 699, "savings": 150, "includes": "Data science mentorship + portfolio review" }
    },
    "includes": [
      "12 weeks of data science training",
      "45+ hours of video content",
      "9 data science projects",
      "Weekly expert sessions",
      "Private data science community",
      "Certificate of completion",
      "Lifetime access to materials",
      "Career support for data scientists"
    ],
    "prerequisites": [
      "Basic Python knowledge",
      "Familiarity with mathematics",
      "No prior data science experience required",
      "Analytical mindset"
    ]
  },
  "advanced-typescript-nodejs": {
    "id": "advanced-typescript-nodejs",
    "title": "Advanced TypeScript & Node.js",
    "subtitle": "Build Enterprise-Level Backend Systems",
    "description": "Master TypeScript and Node.js for building scalable, enterprise-grade backend systems and microservices.",
    "duration": "10 weeks",
    "students": 567,
    "rating": 4.9,
    "reviews": 180,
    "level": "Advanced",
    "image": "/placeholder.svg?height=400&width=600",
    "instructor": {
      "name": "Robert Chen",
      "title": "Backend Engineer at Stripe",
      "experience": "13+ years",
      "students": 2200,
      "image": "/placeholder.svg?height=100&width=100"
    },
    "features": [
      "TypeScript Advanced Features",
      "Node.js Scalable Architecture",
      "Microservices Design",
      "GraphQL APIs",
      "Testing & Deployment"
    ],
    "curriculum": [
      {
        "week": "Week 1-2",
        "title": "Advanced TypeScript",
        "topics": ["Type System", "Generics", "Decorators", "Utility Types"]
      },
      {
        "week": "Week 3-4",
        "title": "Node.js Architecture",
        "topics": ["Event Loop", "Modules", "Async Patterns", "Error Handling"]
      },
      {
        "week": "Week 5-6",
        "title": "Microservices Development",
        "topics": ["Service Design", "Message Brokers", "API Gateways", "Scalability"]
      },
      {
        "week": "Week 7-8",
        "title": "GraphQL & APIs",
        "topics": ["GraphQL Schema", "Resolvers", "Subscriptions", "Authentication"]
      },
      {
        "week": "Week 9-10",
        "title": "Testing & Deployment",
        "topics": ["Unit Testing", "Integration Testing", "Docker Deployment", "Final Project"]
      }
    ],
    "pricing": {
      "full": { "price": 389, "originalPrice": 529, "savings": 140, "popular": true },
      "installments": { "price": 130, "installments": 3, "total": 390, "savings": 139 },
      "premium": { "price": 599, "originalPrice": 749, "savings": 150, "includes": "Backend mentorship + job placement" }
    },
    "includes": [
      "10 weeks of backend training",
      "40+ hours of video content",
      "7 backend projects",
      "Weekly code reviews",
      "Private backend community",
      "Certificate of completion",
      "Lifetime access to materials",
      "Career support for backend developers"
    ],
    "prerequisites": [
      "Strong JavaScript knowledge",
      "Basic TypeScript experience",
      "Familiarity with Node.js",
      "Understanding of APIs"
    ]
  },
  "progressive-web-apps": {
    "id": "progressive-web-apps",
    "title": "Progressive Web Apps (PWA)",
    "subtitle": "Build Fast and Reliable Web Applications",
    "description": "Learn to create fast, reliable, and engaging Progressive Web Apps that work offline and feel like native apps.",
    "duration": "6 weeks",
    "students": 432,
    "rating": 4.7,
    "reviews": 150,
    "level": "Intermediate",
    "image": "/placeholder.svg?height=400&width=600",
    "instructor": {
      "name": "Jennifer Lee",
      "title": "Frontend Developer at Airbnb",
      "experience": "10+ years",
      "students": 1900,
      "image": "/placeholder.svg?height=100&width=100"
    },
    "features": [
      "Service Workers Implementation",
      "Web App Manifest",
      "Push Notifications",
      "Offline Storage",
      "Performance Optimization"
    ],
    "curriculum": [
      {
        "week": "Week 1-2",
        "title": "PWA Fundamentals",
        "topics": ["PWA Basics", "Service Workers", "Web App Manifest", "Caching Strategies"]
      },
      {
        "week": "Week 3-4",
        "title": "Offline & Notifications",
        "topics": ["Offline Storage", "Background Sync", "Push Notifications", "IndexedDB"]
      },
      {
        "week": "Week 5-6",
        "title": "Performance & Deployment",
        "topics": ["Lighthouse Audits", "Performance Optimization", "PWA Deployment", "Final Project"]
      }
    ],
    "pricing": {
      "full": { "price": 199, "originalPrice": 299, "savings": 100, "popular": true },
      "installments": { "price": 70, "installments": 3, "total": 210, "savings": 89 },
      "premium": { "price": 349, "originalPrice": 499, "savings": 150, "includes": "PWA mentorship + performance audit" }
    },
    "includes": [
      "6 weeks of PWA training",
      "25+ hours of video content",
      "4 PWA projects",
      "Weekly live Q&A",
      "Private PWA community",
      "Certificate of completion",
      "Lifetime access to materials",
      "Career support for web developers"
    ],
    "prerequisites": [
      "Basic JavaScript knowledge",
      "HTML/CSS fundamentals",
      "Familiarity with web development",
      "Understanding of APIs"
    ]
  }
}

  const course = courses[courseId as keyof typeof courses]

  if (!course) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Course Not Found</h1>
          <p className="text-gray-600">The course you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleEnroll = () => {
    // Handle enrollment logic here
    // console.log("Enrolling with data:", { course: course.id, plan: selectedPlan, formData })
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-12 border-b relative z-10 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-4 bg-green-100 text-green-800">Enrollment Open</Badge>
              <h1 className="text-4xl font-bold text-black mb-4">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{course.subtitle}</p>
              <p className="text-gray-600 mb-6">{course.description}</p>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {course.students.toLocaleString()} students
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  {course.rating} ({course.reviews} reviews)
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  {course.level}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={course.instructor.image || "/placeholder.svg"}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black">{course.instructor.name}</p>
                  <p className="text-sm text-gray-600">{course.instructor.title}</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                {/* Course Details */}
                <Card className="bg-white border-gray-200 shadow-sm mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-6 w-6" />
                      Course Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-black mb-3">What You&apos;ll Learn</h3>
                        <ul className="space-y-2">
                          {course.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-3">Course Includes</h3>
                        <ul className="space-y-2">
                          {course.includes.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Curriculum */}
                <Card className="bg-white border-gray-200 shadow-sm mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-6 w-6" />
                      Curriculum
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {course.curriculum.map((module, index) => (
                        <div key={index} className="border-l-2 border-gray-200 pl-6">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className="border-gray-300">
                              {module.week}
                            </Badge>
                            <h3 className="font-semibold text-black">{module.title}</h3>
                          </div>
                          <ul className="space-y-1">
                            {module.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="text-gray-600 text-sm flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Prerequisites */}
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-6 w-6" />
                      Prerequisites
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.prerequisites.map((prereq, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-6 w-6" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          className="bg-white border-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className="bg-white border-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="bg-white border-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="bg-white border-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="United States"
                          className="bg-white border-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Experience Level</Label>
                        <Input
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          placeholder="Beginner, Intermediate, Advanced"
                          className="bg-white border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <Label htmlFor="goals">Learning Goals (Optional)</Label>
                      <Textarea
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        placeholder="Tell us about your learning goals and what you hope to achieve..."
                        rows={4}
                        className="bg-white border-gray-300"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-6 w-6" />
                      Payment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <Label className="text-base font-medium">Payment Method</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                          <div
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                              formData.paymentMethod === "card"
                                ? "border-black bg-gray-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() => setFormData({ ...formData, paymentMethod: "card" })}
                          >
                            <div className="flex items-center gap-3">
                              <CreditCard className="h-5 w-5" />
                              <div>
                                <p className="font-medium">Credit/Debit Card</p>
                                <p className="text-sm text-gray-600">Visa, Mastercard, American Express</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                              formData.paymentMethod === "paypal"
                                ? "border-black bg-gray-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() => setFormData({ ...formData, paymentMethod: "paypal" })}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 bg-blue-600 rounded"></div>
                              <div>
                                <p className="font-medium">PayPal</p>
                                <p className="text-sm text-gray-600">Pay with your PayPal account</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {formData.paymentMethod === "card" && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number *</Label>
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              className="bg-white border-gray-300"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiry">Expiry Date *</Label>
                              <Input id="expiry" placeholder="MM/YY" className="bg-white border-gray-300" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV *</Label>
                              <Input id="cvv" placeholder="123" className="bg-white border-gray-300" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Name on Card *</Label>
                            <Input id="cardName" placeholder="John Doe" className="bg-white border-gray-300" />
                          </div>
                        </div>
                      )}

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-5 w-5 text-green-600" />
                          <span className="font-medium text-black">Secure Payment</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Your payment information is encrypted and secure. We use industry-standard SSL encryption to
                          protect your data.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="bg-transparent border-gray-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              {currentStep < 3 ? (
                <Button onClick={nextStep} className="gradient-bg text-white">
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleEnroll} className="gradient-bg text-white">
                  Complete Enrollment
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Progress */}
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-black mb-4">Enrollment Progress</h3>
                  <div className="space-y-3">
                    {[
                      { step: 1, title: "Course Details", icon: <BookOpen className="h-4 w-4" /> },
                      { step: 2, title: "Personal Info", icon: <User className="h-4 w-4" /> },
                      { step: 3, title: "Payment", icon: <CreditCard className="h-4 w-4" /> },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className={`flex items-center gap-3 p-2 rounded-lg ${
                          currentStep === item.step
                            ? "bg-black text-white"
                            : currentStep > item.step
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.icon}
                        <span className="font-medium">{item.title}</span>
                        {currentStep > item.step && <CheckCircle className="h-4 w-4 ml-auto" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              {/* <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle>Choose Your Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(course.pricing).map(([key, plan]) => (
                      <div
                        key={key}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                          selectedPlan === key ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setSelectedPlan(key)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold capitalize">
                              {key === "installments" ? "3 Installments" : key} Plan
                            </h4>
                            {plan.popular && <Badge className="bg-green-100 text-green-800 text-xs">Popular</Badge>}
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">${plan.price}</div>
                            {plan.originalPrice && (
                              <div className="text-sm text-gray-500 line-through">${plan.originalPrice}</div>
                            )}
                          </div>
                        </div>
                        {plan.installments && (
                          <p className="text-sm text-gray-600">
                            {plan.installments} payments of ${plan.price}
                          </p>
                        )}
                        {plan.includes && <p className="text-sm text-gray-600 mt-2">{plan.includes}</p>}
                        {plan.savings && (
                          <Badge className="bg-red-100 text-red-800 text-xs mt-2">Save ${plan.savings}</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card> */}

              {/* Guarantees */}
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-black mb-4">Our Guarantees</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-black">30-Day Money Back</p>
                        <p className="text-sm text-gray-600">Full refund if not satisfied</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-black">Certificate Included</p>
                        <p className="text-sm text-gray-600">Industry-recognized completion certificate</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-black">Lifetime Access</p>
                        <p className="text-sm text-gray-600">Access materials forever</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
