/**
 * VegeKobe Footer Component
 * Design: Simple footer with logo and copyright
 */

import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-800">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-white font-black text-xl"
          >
            <Leaf className="w-6 h-6" strokeWidth={2.5} />
            <span>VegeKobe</span>
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
