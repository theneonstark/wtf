import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {Twitter, Linkedin, MessageCircle, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="gradient-bg-subtle border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              <Image src={'/logo.png'} alt="wtf-logo" width={180} height={100} />
            </h3>
            <p className="text-slate-600 mb-6 max-w-sm leading-relaxed">
              **Web Tech Foundation (WTF)** is the premier tech-education center in **Delhi NCR**. 
              Join thousands of developers mastering tomorrow&#39;s tech landscape in our Badarpur center.
            </p>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-black">Stay Updated</h4>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="bg-white border-slate-300 text-slate-900 focus:ring-primary h-11" />
                <Button className="gradient-bg text-white font-bold h-11 px-6">Subscribe</Button>
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
            <h4 className="text-lg font-bold text-slate-900 mb-4">Contact Info</h4>
            <ul className="space-y-3 text-slate-600 text-sm mb-6">
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">Add:</span> 
                Meethapur, Badarpur, New Delhi - 110044
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-primary">Tel:</span> 
                +91 9211579757, 9211578941
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-primary">Mail:</span> 
                info@webtechfoundation.in
              </li>
            </ul>
            <h4 className="text-lg font-bold text-slate-900 mb-4">Connect</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-black">
                <Link href={'https://www.youtube.com/@WTFCodee'}>
                  <Youtube className="h-5 w-5" />
                </Link>
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
                <Link href={"https://wa.me/919211578941"}>
                    <MessageCircle className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Policies */}
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
              <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm">
                <Link href="/privacy-policy" className="hover:text-black">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/cookie-policy" className="hover:text-black">
                  Cookie Policy
                </Link>
                <span>•</span>
                <Link href="/terms-conditions" className="hover:text-black">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <Image src={'/certified/msme.jpg'} width={150} height={150} alt="msme" className="mix-blend-multiply"/>
          <div>
            <p>&copy; 2025 **WTF - Web Tech Foundation**. Delhi NCR&#39;s Leading IT Institute.</p>
            <p className="text-sm mt-1">Powered By <Link href={'https://www.infinimorphconsulting.com/'} target="_blank" className="text-primary font-medium hover:underline">InfiniMorph Consulting</Link></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
