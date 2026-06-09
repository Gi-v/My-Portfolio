import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Alex Chen | DevOps & Cloud Engineer",
  description: "Senior DevOps Engineer specializing in Kubernetes, Terraform, AWS/GCP/Azure, CI/CD pipelines, and cloud-native infrastructure. 8+ years building scalable, resilient systems.",
  keywords: ["DevOps Engineer", "Cloud Engineer", "Kubernetes", "Terraform", "AWS"],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    type: "website",
    title: "Alex Chen | DevOps & Cloud Engineer",
    description: "Senior DevOps Engineer specializing in Kubernetes, Terraform, and cloud-native infrastructure.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@alexchen_dev",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster
          toastOptions={{
            style: { background: "#fff", border: "1px solid #e2e8f0", color: "#0f172a" },
          }}
        />
      </body>
    </html>
  );
}
