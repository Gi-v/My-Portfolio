import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";
// TODO: Update name, description, and URLs for your own SEO metadata
export const metadata: Metadata = {
  title: "Alex Chen | DevOps & Cloud Engineer",
  description: "Senior DevOps Engineer — Kubernetes, Terraform, AWS/GCP/Azure, CI/CD, Platform Engineering.",
  authors: [{ name: "Alex Chen" }],
  openGraph: { type:"website", title:"Alex Chen | DevOps & Cloud Engineer", images:[{ url:"/og-image.png" }] },
  twitter: { card:"summary_large_image", creator:"@alexchen_dev" },
  robots: { index:true, follow:true },
};
export const viewport: Viewport = { themeColor:"#ffffff", width:"device-width", initialScale:1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster toastOptions={{ style:{ background:"#fff", border:"1px solid #e2e8f0", color:"#0f172a" } }} />
      </body>
    </html>
  );
}
