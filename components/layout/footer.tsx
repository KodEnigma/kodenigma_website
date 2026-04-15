import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Globe,
  Share2,
  GitBranch,
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-white/10 bg-[#0A1428]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00BFA5]/30 bg-[#00BFA5]/10">
                <Code2 className="h-5 w-5 text-[#00BFA5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">KODENIGMA</span>
                <span className="-mt-1 text-xs font-medium tracking-widest text-[#00BFA5]">
                  LABS LTD
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Innovating software solutions for emerging markets. Custom
              development, digital transformation, and IT strategy consulting.
            </p>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-[#00BFA5]/30 bg-[#00BFA5]/10 px-3 py-1 text-xs font-medium text-[#00BFA5]">
                RC: 9339579
              </span>
              <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                Active
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#00BFA5]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#00BFA5]"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#00BFA5]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#00BFA5]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-slate-400">
                  Software Development
                </span>
              </li>
              <li>
                <span className="text-sm text-slate-400">
                  Custom Applications
                </span>
              </li>
              <li>
                <span className="text-sm text-slate-400">
                  IT Strategy Consulting
                </span>
              </li>
              <li>
                <span className="text-sm text-slate-400">
                  Digital Transformation
                </span>
              </li>
              <li>
                <span className="text-sm text-slate-400">
                  Technology Optimization
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00BFA5]" />
                <a
                  href="mailto:enigma.kodx@gmail.com"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#00BFA5]"
                >
                  enigma.kodx@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00BFA5]" />
                <a
                  href="tel:+2347052936789"
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#00BFA5]"
                >
                  +234 705 293 6789
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00BFA5]" />
                <span className="text-sm text-slate-400">
                  No. 6, Araromi Zone B,
                  <br />
                  Ilorin, Kwara State, Nigeria
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-[#00BFA5]/30 hover:text-[#00BFA5]"
                aria-label="LinkedIn"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-[#00BFA5]/30 hover:text-[#00BFA5]"
                aria-label="Twitter"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-[#00BFA5]/30 hover:text-[#00BFA5]"
                aria-label="GitHub"
              >
                <GitBranch className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {currentYear} KODENIGMA LABS LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-slate-500 transition-colors duration-300 hover:text-[#00BFA5]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-500 transition-colors duration-300 hover:text-[#00BFA5]"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Bottom badge */}
        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-slate-600">
            Registered with the Corporate Affairs Commission of Nigeria • RC:
            9339579
          </p>
        </div>
      </div>
    </footer>
  )
}
