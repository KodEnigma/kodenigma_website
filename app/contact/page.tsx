import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { companyInfo } from "@/data/content";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Code Enigba Labs",
  description:
    "Get in touch with Code Enigba Labs. Let's discuss your next project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? We'd love to hear about it. Fill out the
              form below and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <SectionHeader title="Get in Touch" />
            <p className="text-muted-foreground">
              Whether you have a specific project in mind or just want to explore
              how we can work together, we're here to help.
            </p>
            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-center gap-4 pt-6">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 pt-6">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">
                      Remote-first team, global reach
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardContent className="p-6 space-y-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="project" className="text-sm font-medium">
                    Project Description
                  </label>
                  <Textarea
                    id="project"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
