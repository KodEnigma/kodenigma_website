import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { companyInfo } from "@/data/content";
import { Target, Zap, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Code Enigba Labs",
  description:
    "Learn about Code Enigba Labs - our mission, values, and engineering philosophy.",
};

const philosophyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Simplicity over complexity": Target,
  "Performance-first": Zap,
  "Design is functional": Palette,
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          <SectionHeader title="Who We Are" centered />
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in {companyInfo.founded}, {companyInfo.legalName} (operating
              as {companyInfo.name}) is a software development studio focused on
              building products that make a difference. We believe that great
              software is born from the intersection of technical excellence and
              deep empathy for users.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team brings together decades of experience across product
              development, systems engineering, and user experience design. We
              work with startups and established companies alike, helping them
              turn ambitious ideas into reality.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/50">
        <SectionHeader
          title="Engineering Philosophy"
          description="The principles that guide our work every day."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {companyInfo.philosophy.map((item) => {
            const Icon = philosophyIcons[item.title];
            return (
              <Card key={item.title} className="h-full">
                <CardContent className="pt-6 space-y-4">
                  {Icon && <Icon className="h-8 w-8 text-primary" />}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}
