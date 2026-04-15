import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { companyInfo } from "@/data/content";

export const metadata: Metadata = {
  title: "Terms of Service | Code Enigba Labs",
  description:
    "Terms of service for Code Enigba Labs.",
};

export default function TermsPage() {
  return (
    <>
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using this website, you agree to be bound by these
            Terms of Service and all applicable laws and regulations. If you do
            not agree with any of these terms, you are prohibited from using this
            website.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily access the materials on{" "}
            {companyInfo.legalName}'s website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a transfer
            of title.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on this website are provided on an 'as is' basis.{" "}
            {companyInfo.legalName} makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall {companyInfo.legalName} or its suppliers be liable
            for any damages (including, without limitation, damages for loss of
            data or profit, or due to business interruption) arising out of the use
            or inability to use the materials on this website.
          </p>

          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on this website could include technical,
            typographical, or photographic errors. {companyInfo.legalName} does
            not warrant that any of the materials on its website are accurate,
            complete, or current.
          </p>

          <h2>6. Links</h2>
          <p>
            {companyInfo.legalName} has not reviewed all of the sites linked to
            its website and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by{" "}
            {companyInfo.legalName} of the site.
          </p>

          <h2>7. Modifications</h2>
          <p>
            {companyInfo.legalName} may revise these terms of service for its
            website at any time without notice. By using this website, you are
            agreeing to be bound by the then current version of these terms of
            service.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance
            with applicable laws, and you irrevocably submit to the exclusive
            jurisdiction of the courts in that location.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact
            us at <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
