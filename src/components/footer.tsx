import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              <Image src={'/logo.png'} alt="wtf-logo" width={160} height={100} />
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Decode the Future with Us. Join thousands of developers preparing for tomorrow&#39;s tech landscape.
            </p>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-black">Stay Updated</h4>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="bg-white border-gray-300 text-black" />
                <Button className="gradient-bg text-white font-semibold">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-600 hover:text-black">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-600 hover:text-black">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-black">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-black">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-black">
                <Link href={"https://www.linkedin.com/company/wtfcode/"} target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-black">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 WTF - Web Tech Foundation. All rights reserved.</p>
          <p>Powered By <Link href={'https://www.infinimorphconsulting.com/'} target="_blank">InfiniMorph Consulting</Link></p>
        </div>
      </div>
    </footer>
  )
}
