import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Study Tracker App",
  description: "A premium educational dashboard to track skills and study sessions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{ padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 50, marginBottom: '2rem' }}>
          <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderRadius: '100px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }} className="heading-gradient">
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                StudyTracker
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>
                Dashboard
              </Link>
              <Link href="/calendar" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>
                Calendar
              </Link>
              <Link href="/skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>
                My Skills
              </Link>
            </div>
            <div>
              <button className="btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Profile</button>
            </div>
          </div>
        </nav>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
