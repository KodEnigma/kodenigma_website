"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Code2,
  Lightbulb,
  Cpu,
  TrendingUp,
  ArrowRight,
  Mail,
  MapPin,
  Shield,
  Award,
  Users,
  Sparkles,
  Globe,
  Zap,
  Target,
  CheckCircle2,
  Building2,
  Rocket,
  Layers,
  ArrowUpRight,
  Quote,
} from "lucide-react"
import { useEffect, useState, useRef } from "react"

// Particle background component
function ParticleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="animate-float-particle absolute h-1 w-1 rounded-full bg-[#00BFA5]/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
      <div className="animate-float absolute top-[10%] left-[5%] font-mono text-xs text-[#00BFA5]/15 sm:text-sm">
        {"<Innovate />"}
      </div>
      <div className="animate-float-delayed absolute top-[25%] right-[8%] font-mono text-xs text-[#00BFA5]/15 sm:text-sm">
        {"{ transformation }"}
      </div>
      <div className="animate-float absolute bottom-[30%] left-[12%] font-mono text-xs text-[#00BFA5]/15 sm:text-sm">
        {"[ emerging_markets ]"}
      </div>
      <div className="animate-float-delayed absolute right-[5%] bottom-[15%] font-mono text-xs text-[#00BFA5]/15 sm:text-sm">
        {"const future = now"}
      </div>
      <div className="animate-float absolute top-[60%] left-[20%] font-mono text-xs text-[#00BFA5]/10">
        {"01001000 01101001"}
      </div>
      <div className="animate-float-delayed absolute top-[40%] right-[25%] font-mono text-xs text-[#00BFA5]/10">
        {"import { success }"}
      </div>
      <div className="animate-float absolute bottom-[45%] left-[35%] font-mono text-xs text-[#00BFA5]/10">
        {"<KODENIGMA />"}
      </div>
      <div className="animate-float-delayed absolute top-[75%] right-[15%] font-mono text-xs text-[#00BFA5]/10">
        {"// Excellence"}
      </div>
    </div>
  )
}

// Service card component with enhanced hover
function ServiceCard({
  icon: Icon,
  title,
  description,
  delay,
  features,
}: {
  icon: React.ElementType
  title: string
  description: string
  delay: number
  features: string[]
}) {
  return (
    <Card
      className="group relative h-full overflow-hidden border-white/10 bg-[#111827]/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#00BFA5]/40 hover:shadow-[0_0_60px_rgba(0,191,165,0.15)]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA5]/10 via-transparent to-[#00BFA5]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#00BFA5]/10 blur-3xl transition-all duration-500 group-hover:bg-[#00BFA5]/20" />
      <CardContent className="relative space-y-5 p-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00BFA5]/20 to-[#00BFA5]/5 transition-all duration-300 group-hover:scale-110 group-hover:from-[#00BFA5]/30 group-hover:to-[#00BFA5]/10">
          <Icon className="h-8 w-8 text-[#00BFA5] transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#00BFA5]">
          {title}
        </h3>
        <p className="leading-relaxed text-slate-400">{description}</p>
        <ul className="space-y-2 pt-2">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-sm text-slate-500"
            >
              <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#00BFA5]/70" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

// Value proposition card
function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="group flex items-start gap-5 rounded-2xl border border-white/5 bg-gradient-to-br from-[#111827]/80 to-[#111827]/40 p-6 transition-all duration-300 hover:border-[#00BFA5]/30 hover:shadow-[0_0_30px_rgba(0,191,165,0.1)]">
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00BFA5]/20 to-[#00BFA5]/5 transition-all duration-300 group-hover:from-[#00BFA5]/30 group-hover:to-[#00BFA5]/10">
        <Icon className="h-7 w-7 text-[#00BFA5]" />
      </div>
      <div>
        <h4 className="mb-2 text-lg font-bold text-white">{title}</h4>
        <p className="text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
    </div>
  )
}

// Animated section wrapper
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className} ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero relative flex min-h-screen items-center justify-center overflow-hidden">
        <ParticleBackground />

        {/* Gradient orbs with enhanced animation */}
        <div className="animate-pulse-slow absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#00BFA5]/20 blur-[150px]" />
        <div
          className="animate-pulse-slow absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-[#00BFA5]/15 blur-[120px]"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="animate-pulse-slow absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00BFA5]/10 blur-[100px]"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
          {/* Enhanced Company badge */}
          <AnimatedSection>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#00BFA5]/30 bg-[#00BFA5]/10 px-5 py-2.5 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-[#00BFA5]" />
              <span className="text-sm font-semibold text-[#00BFA5]">
                Innovating for Emerging Markets
              </span>
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#00BFA5]" />
            </div>
          </AnimatedSection>

          {/* Main headline with enhanced typography */}
          <AnimatedSection delay={100}>
            <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Innovating Software for{" "}
              <span className="text-gradient relative">
                Emerging Markets
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 100 2 150 8C200 14 250 14 298 8"
                    stroke="#00BFA5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeOpacity="0.3"
                  />
                </svg>
              </span>
            </h1>
          </AnimatedSection>

          {/* Subheadline with better hierarchy */}
          <AnimatedSection delay={200}>
            <p className="mx-auto mb-4 max-w-3xl text-xl font-semibold text-white sm:text-2xl">
              KODENIGMA LABS LTD
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="mx-auto mb-12 max-w-2xl text-base text-slate-400 sm:text-lg">
              Custom Software Solutions • Digital Transformation • IT Strategy •
              Technology Optimization
            </p>
          </AnimatedSection>

          {/* CTA Buttons with enhanced styling */}
          <AnimatedSection delay={400}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-xl bg-[#00BFA5] px-10 py-7 text-lg font-bold text-[#0A1428] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(0,191,165,0.5)]"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E5C9] to-[#00BFA5] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-xl border-2 border-white/20 bg-white/5 px-10 py-7 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#00BFA5]/50 hover:bg-white/10"
              >
                <Link href="/work" className="flex items-center">
                  View Our Work
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-500">Scroll to explore</span>
            <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white/30 p-1">
              <div className="animate-scroll-bounce h-2 w-2 rounded-full bg-[#00BFA5]" />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Enhanced */}
      <section className="relative bg-[#0A1428] py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00BFA5]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <AnimatedSection>
              <div className="relative">
                <Badge className="mb-6 border-[#00BFA5]/30 bg-[#00BFA5]/10 px-4 py-1.5 text-[#00BFA5]">
                  <Building2 className="mr-2 h-4 w-4" />
                  About Us
                </Badge>
                <h2 className="mb-8 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
                  Building the Future of{" "}
                  <span className="text-gradient">Technology</span> in Emerging
                  Markets
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-slate-400">
                  <p>
                    At{" "}
                    <span className="font-semibold text-white">
                      KODENIGMA LABS LTD
                    </span>
                    , we specialize in building innovative proprietary
                    applications and delivering expert consulting in IT
                    strategy, digital transformation, and custom software
                    solutions tailored specifically to emerging market needs.
                  </p>
                  <p>
                    Founded in February 2026 and headquartered in Ilorin, Kwara
                    State, Nigeria, we combine deep technical expertise with a
                    profound understanding of the unique challenges and
                    opportunities present in emerging markets across Africa and
                    beyond.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 rounded-full border border-[#00BFA5]/20 bg-[#00BFA5]/5 px-5 py-2">
                    <Rocket className="h-5 w-5 text-[#00BFA5]" />
                    <span className="text-sm font-medium text-white">
                      Fast Delivery
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-full border border-[#00BFA5]/20 bg-[#00BFA5]/5 px-5 py-2">
                    <Award className="h-5 w-5 text-[#00BFA5]" />
                    <span className="text-sm font-medium text-white">
                      Quality Assured
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-full border border-[#00BFA5]/20 bg-[#00BFA5]/5 px-5 py-2">
                    <Globe className="h-5 w-5 text-[#00BFA5]" />
                    <span className="text-sm font-medium text-white">
                      Global Reach
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00BFA5]/30 to-[#00BFA5]/10 blur-3xl" />
                <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827]/90 to-[#111827]/70 p-8 backdrop-blur-xl">
                  <div className="mb-8 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      Our Expertise
                    </h3>
                    <Sparkles className="h-6 w-6 text-[#00BFA5]" />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      {
                        icon: Code2,
                        title: "Software",
                        subtitle: "Development",
                      },
                      {
                        icon: Lightbulb,
                        title: "Digital",
                        subtitle: "Transformation",
                      },
                      { icon: Cpu, title: "Custom", subtitle: "Solutions" },
                      {
                        icon: TrendingUp,
                        title: "IT Strategy",
                        subtitle: "Consulting",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="group rounded-2xl border border-white/5 bg-gradient-to-br from-[#0A1428]/80 to-[#0A1428]/40 p-6 text-center transition-all duration-300 hover:border-[#00BFA5]/30 hover:shadow-[0_0_20px_rgba(0,191,165,0.1)]"
                      >
                        <item.icon className="mx-auto mb-4 h-10 w-10 text-[#00BFA5] transition-transform duration-300 group-hover:scale-110" />
                        <div className="text-xl font-bold text-white">
                          {item.title}
                        </div>
                        <div className="text-sm text-slate-500">
                          {item.subtitle}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with more detail */}
      <section className="relative bg-[#0A1428] py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/50 via-transparent to-[#111827]/50" />
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#00BFA5]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#00BFA5]/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-20 text-center">
              <Badge className="mb-6 border-[#00BFA5]/30 bg-[#00BFA5]/10 px-4 py-1.5 text-[#00BFA5]">
                <Layers className="mr-2 h-4 w-4" />
                Our Services
              </Badge>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                What We <span className="text-gradient">Deliver</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-400">
                Comprehensive technology solutions designed to accelerate your
                business growth and operational efficiency in emerging markets.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection delay={0}>
              <ServiceCard
                icon={Code2}
                title="Software Development"
                description="End-to-end software development services creating robust, scalable applications using modern technologies and best practices."
                delay={0}
                features={[
                  "Full-Stack Development",
                  "Cloud Solutions",
                  "API Integration",
                  "Quality Assurance",
                ]}
              />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <ServiceCard
                icon={Sparkles}
                title="Bespoke Applications"
                description="Custom-built proprietary applications tailored to your unique business requirements and market positioning."
                delay={100}
                features={[
                  "Custom Architecture",
                  "Proprietary Tech",
                  "Scalable Design",
                  "Ongoing Support",
                ]}
              />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <ServiceCard
                icon={Lightbulb}
                title="IT Strategy & Consulting"
                description="Expert guidance on digital transformation, technology roadmaps, and strategic IT planning for sustainable growth."
                delay={200}
                features={[
                  "Digital Strategy",
                  "Tech Roadmaps",
                  "Process Optimization",
                  "Risk Management",
                ]}
              />
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <ServiceCard
                icon={Zap}
                title="Technology Optimization"
                description="Performance tuning, system modernization, and process automation to maximize your technology investments."
                delay={300}
                features={[
                  "Performance Tuning",
                  "System Modernization",
                  "Automation",
                  "Cost Optimization",
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Credentials Section - Enhanced */}
      <section className="relative bg-[#0A1428] py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00BFA5]/5 via-transparent to-[#00BFA5]/5" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-20 text-center">
              <Badge className="mb-6 border-[#00BFA5]/30 bg-[#00BFA5]/10 px-4 py-1.5 text-[#00BFA5]">
                <Shield className="mr-2 h-4 w-4" />
                Corporate Information
              </Badge>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Trusted & <span className="text-gradient">Verified</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-400">
                Fully registered and compliant with the Corporate Affairs
                Commission of Nigeria under the Companies and Allied Matters Act
                2020.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Award,
                title: "Registration Number",
                value: "RC: 9339579",
                subtitle: "CAC Registered",
                color: "text-[#00BFA5]",
              },
              {
                icon: Building2,
                title: "Date of Registration",
                value: "Feb 17, 2026",
                subtitle: "Private Company Limited by Shares",
                color: "text-[#00BFA5]",
              },
              {
                icon: Users,
                title: "Director & Founder",
                value: "Yusuf Olamilekan",
                subtitle: "Managing Director",
                color: "text-[#00BFA5]",
              },
              {
                icon: MapPin,
                title: "Headquarters",
                value: "Ilorin, Nigeria",
                subtitle: "Kwara State",
                color: "text-[#00BFA5]",
              },
              {
                icon: Shield,
                title: "Company Status",
                value: "ACTIVE",
                subtitle: "CAMA 2020 Compliant",
                color: "text-green-400",
              },
            ].map((card, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <Card className="group h-full overflow-hidden border-white/10 bg-gradient-to-br from-[#111827]/80 to-[#111827]/40 transition-all duration-300 hover:border-[#00BFA5]/30 hover:shadow-[0_0_30px_rgba(0,191,165,0.1)]">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00BFA5]/20 to-[#00BFA5]/5 transition-all duration-300 group-hover:from-[#00BFA5]/30 group-hover:to-[#00BFA5]/10">
                      <card.icon className="h-8 w-8 text-[#00BFA5]" />
                    </div>
                    <h3 className="mb-2 text-base font-medium text-slate-400">
                      {card.title}
                    </h3>
                    <p className={`mb-1 text-3xl font-bold ${card.color}`}>
                      {card.value}
                    </p>
                    <p className="text-sm text-slate-500">{card.subtitle}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Additional corporate info */}
          <AnimatedSection delay={400}>
            <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827]/80 to-[#111827]/40 p-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <p className="text-sm text-slate-500">Principal Activity</p>
                  <p className="mt-1 font-semibold text-white">
                    Software Development
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-500">Company Type</p>
                  <p className="mt-1 font-semibold text-white">
                    Private Limited
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-500">Due Date of Accounts</p>
                  <p className="mt-1 font-semibold text-white">16/08/2030</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-500">Tax Residency</p>
                  <p className="mt-1 font-semibold text-white">Nigeria</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section className="relative bg-[#0A1428] py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00BFA5]/5 via-transparent to-[#00BFA5]/5" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <Badge className="mb-6 border-[#00BFA5]/30 bg-[#00BFA5]/10 px-4 py-1.5 text-[#00BFA5]">
                  <Target className="mr-2 h-4 w-4" />
                  Why Choose Us
                </Badge>
                <h2 className="mb-8 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
                  Your Competitive Edge in{" "}
                  <span className="text-gradient">Emerging Markets</span>
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-slate-400">
                  We combine deep technical expertise with local market
                  knowledge to deliver solutions that drive real business
                  impact. Our focus on emerging markets gives us unique insights
                  into the challenges and opportunities that traditional tech
                  companies often miss.
                </p>

                <div className="space-y-4">
                  {[
                    "Deep understanding of African & emerging markets",
                    "Proprietary technology built for local conditions",
                    "End-to-end digital transformation expertise",
                    "Cost-effective, scalable solutions",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#111827]/40 p-4 transition-all duration-300 hover:border-[#00BFA5]/20"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00BFA5]/10">
                        <CheckCircle2 className="h-5 w-5 text-[#00BFA5]" />
                      </div>
                      <span className="font-medium text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="space-y-5">
                <ValueCard
                  icon={Target}
                  title="Operational Efficiency"
                  description="Streamline your operations with custom-built software solutions designed to eliminate bottlenecks and maximize productivity."
                />
                <ValueCard
                  icon={TrendingUp}
                  title="Competitive Edge"
                  description="Stay ahead of the competition with innovative proprietary applications that give you unique advantages in your market."
                />
                <ValueCard
                  icon={Globe}
                  title="Tailored to Emerging Markets"
                  description="Solutions designed specifically for the unique challenges, infrastructure, and opportunities present in emerging economies."
                />
                <ValueCard
                  icon={Users}
                  title="Expert Consulting"
                  description="Strategic IT guidance from seasoned professionals who understand both global best practices and local market dynamics."
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials / Trust Section */}
      <section className="relative bg-[#0A1428] py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00BFA5]/5 via-transparent to-[#00BFA5]/5" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <Badge className="mb-6 border-[#00BFA5]/30 bg-[#00BFA5]/10 px-4 py-1.5 text-[#00BFA5]">
                <Quote className="mr-2 h-4 w-4" />
                Our Promise
              </Badge>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Committed to <span className="text-gradient">Excellence</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative overflow-hidden rounded-3xl border border-[#00BFA5]/20 bg-gradient-to-br from-[#111827]/90 to-[#111827]/60 p-10 backdrop-blur-xl">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#00BFA5]/10 blur-3xl" />
              <Quote className="mb-6 h-12 w-12 text-[#00BFA5]/30" />
              <blockquote className="mb-8 text-2xl leading-relaxed font-medium text-white sm:text-3xl">
                &ldquo;Our mission is to bridge the technology gap in emerging
                markets by delivering world-class software solutions that are
                accessible, affordable, and tailored to local needs.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00BFA5]/20">
                  <Users className="h-7 w-7 text-[#00BFA5]" />
                </div>
                <div>
                  <p className="font-bold text-white">Yusuf Olamilekan</p>
                  <p className="text-sm text-slate-400">
                    Founder & Managing Director, KODENIGMA LABS LTD
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative bg-[#0A1428] py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BFA5]/5 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl border border-[#00BFA5]/20 bg-gradient-to-br from-[#111827]/90 via-[#111827]/70 to-[#111827]/90 p-12 backdrop-blur-xl sm:p-16">
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#00BFA5]/10 blur-3xl" />
              <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#00BFA5]/10 blur-3xl" />

              <h2 className="relative mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to Transform Your{" "}
                <span className="text-gradient">Business?</span>
              </h2>
              <p className="relative mx-auto mb-10 max-w-2xl text-lg text-slate-400">
                Let&apos;s discuss how KODENIGMA LABS LTD can help you achieve
                your technology goals and drive growth in emerging markets.
              </p>
              <div className="relative flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden rounded-xl bg-[#00BFA5] px-12 py-7 text-lg font-bold text-[#0A1428] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(0,191,165,0.5)]"
                >
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group rounded-xl border-2 border-white/20 bg-white/5 px-12 py-7 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#00BFA5]/50 hover:bg-white/10"
                >
                  <Link href="mailto:enigma.kodx@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
