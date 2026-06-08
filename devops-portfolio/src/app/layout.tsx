import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Alex Chen | DevOps & Cloud Engineer",
  description: "Senior DevOps Engineer specializing in Kubernetes, Terraform, AWS/GCP/Azure, CI/CD pipelines, and cloud-native infrastructure. 8+ years building scalable, resilient systems.",
  keywords: ["DevOps Engineer", "Cloud Engineer", "Kubernetes", "Terraform", "AWS", "GCP", "Azure", "CI/CD", "Infrastructure as Code", "SRE"],
  authors: [{ name: "Alex Chen" }],
  creator: "Alex Chen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexchen.dev",
    title: "Alex Chen | DevOps & Cloud Engineer",
    description: "Senior DevOps Engineer specializing in Kubernetes, Terraform, and cloud-native infrastructure.",
    siteName: "Alex Chen Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Alex Chen - DevOps Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen | DevOps & Cloud Engineer",
    description: "Senior DevOps Engineer specializing in Kubernetes, Terraform, and cloud-native infrastructure.",
    creator: "@alexchen_dev",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  alternates: { canonical: "https://alexchen.dev" },
};

export const viewport: Viewport = {
  themeColor: "#050a0e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alex Chen",
              jobTitle: "Senior DevOps & Cloud Engineer",
              url: "https://alexchen.dev",
              sameAs: [
                "https://github.com/alexchen-dev",
                "https://linkedin.com/in/alexchen-devops",
              ],
              knowsAbout: ["Kubernetes", "Terraform", "AWS", "GCP", "Azure", "Docker", "CI/CD", "DevOps", "Cloud Engineering"],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Toaster
          theme="dark"
          toastOptions={{
            style: { background: "hsl(220 20% 6%)", border: "1px solid hsl(220 15% 12%)", color: "#e2e8f0" },
          }}
        />
      </body>
    </html>
  );
}
