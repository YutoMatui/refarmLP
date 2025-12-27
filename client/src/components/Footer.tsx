/**
 * VegeKobe Footer Component
 * Design: Simple footer with logo and copyright
 */

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
          >
            <img
              src="/images/logo.png"
              alt="ベジコベ VegeKobe"
              className="h-8 md:h-10 brightness-0 invert" // Make logo white for dark footer
            />
          </a>

          {/* Copyright */}
          <p className="text-slate-400 text-sm">
            © 2024 VegeKobe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
