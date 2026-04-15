import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { companyInfo } from "@/data/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Code Enigba Labs",
  description:
    "Privacy policy for Code Enigba Labs - how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <h2>1. Introduction</h2>
          <p>
            {companyInfo.legalName} ("we," "our," or "us") respects your privacy
            and is committed to protecting your personal data. This privacy policy
            explains how we collect, use, and safeguard your information when you
            visit our website.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect the following types of information:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, and any
              other information you provide when contacting us.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              website, including IP address, browser type, and pages visited.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to enhance your browsing
              experience.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website and services</li>
            <li>Send you updates and marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data.
            To exercise these rights, please contact us at{" "}
            <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us
            at <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
