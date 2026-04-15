import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Job Tracker",
  description: "Career CRM and job application tracker"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
