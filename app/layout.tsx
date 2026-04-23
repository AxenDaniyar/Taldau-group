import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taldau Group — Инвестиционный холдинг",
  description: "Инвестиции в недвижимость, туризм и международные активы. Казахстан и Дубай.",
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          <span className="text-gradient-gold">TALDAU</span>
          <span className="text-text-dim ml-2 font-light">GROUP</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-text-muted hover:text-gold transition-colors">
            Главная
          </Link>
          <Link href="/projects" className="text-sm text-text-muted hover:text-gold transition-colors">
            Проекты
          </Link>
          <Link href="/contact" className="text-sm text-text-muted hover:text-gold transition-colors">
            Инвесторам
          </Link>
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-flex px-5 py-2 text-sm bg-navy text-surface border border-navy rounded hover:bg-navy-light transition-colors"
        >
          Стать инвестором
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-lg font-semibold mb-3">
              <span className="text-gradient-gold">TALDAU</span>
              <span className="text-white/50 ml-2 font-light">GROUP</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Инвестиционный холдинг. Казахстан и Дубай.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-white/60 mb-3">Направления</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li>Недвижимость — Алматы</li>
              <li>Туризм — Боровое</li>
              <li>Международные активы — Дубай</li>
              <li>Технопарк — СЭЗ Алатау</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-white/60 mb-3">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li>Алматы, Казахстан</li>
              <li>info@taldaugroup.kz</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/30">
          2026 Taldau Group. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
