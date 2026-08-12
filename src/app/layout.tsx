import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Hareem Ahmad | Software Engineer & Researcher",
  description: "Software Engineering student at GIKI with experience in full-stack development, cloud-native systems, DevOps, and applied machine learning.",
  authors: [{ name: "Hareem Ahmad" }],
  openGraph: { type:"website", title:"Hareem Ahmad | Software Engineer & Researcher", images:[{ url:"/og-image.png" }] },
  twitter: { card:"summary_large_image", creator:"@Gi_v" },
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
