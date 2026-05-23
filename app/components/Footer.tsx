import { Linkedin, Github, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-white text-sm font-display">
              AP
            </div>
            <div>
              <div className="font-display font-semibold text-white text-sm">
                ASIT PIRI
              </div>
              <div className="text-gray-600 text-xs">
                Enterprise AI Strategist
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/asit-piri/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="https://github.com/asit-piri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.youtube.com/@asitpiri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-red-400 hover:bg-white/10 transition-all"
              aria-label="YouTube"
            >
              <Youtube size={17} />
            </a>
            <a
              href="mailto:asit.piri@gmail.com"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm">
            © {year} Asit Piri. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
