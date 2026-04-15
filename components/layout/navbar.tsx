"use client"

import Link from "next/link"
import { Menu, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { useState, useEffect } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0A1428]/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00BFA5]/30 bg-[#00BFA5]/10 transition-colors duration-300 group-hover:bg-[#00BFA5]/20">
            <Code2 className="h-5 w-5 text-[#00BFA5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white">
              KODENIGMA
            </span>
            <span className="-mt-1 text-xs font-medium tracking-widest text-[#00BFA5]">
              LABS LTD
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00BFA5] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="rounded-lg bg-[#00BFA5] px-6 font-semibold text-[#0A1428] transition-all duration-300 hover:bg-[#00E5C9] hover:shadow-[0_0_20px_rgba(0,191,165,0.4)]"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] border-white/10 bg-[#0A1428]"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex h-full flex-col">
              {/* Mobile Logo */}
              <div className="mb-8 flex items-center gap-3 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00BFA5]/30 bg-[#00BFA5]/10">
                  <Code2 className="h-5 w-5 text-[#00BFA5]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">
                    KODENIGMA
                  </span>
                  <span className="-mt-1 text-xs tracking-widest text-[#00BFA5]">
                    LABS LTD
                  </span>
                </div>
              </div>

              <nav className="flex flex-1 flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-4 py-3 text-lg font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Button
                asChild
                className="mt-auto rounded-xl bg-[#00BFA5] py-6 font-semibold text-[#0A1428] hover:bg-[#00E5C9]"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
