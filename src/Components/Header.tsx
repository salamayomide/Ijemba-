import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#2E7D32] text-[#FFF8E1] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#FB8C00] flex items-center justify-center shadow-inner text-white font-bold">
            IJ
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#FFF8E1]">
              Ijemba Community
            </h1>
            <p className="text-sm text-[#FFF8E1]/80">Iseyin, Oyo State</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#about" className="hover:text-[#FB8C00] transition-colors">
            About
          </a>
          <a href="#news" className="hover:text-[#FB8C00] transition-colors">
            News & Events
          </a>
          <a href="#directory" className="hover:text-[#FB8C00] transition-colors">
            Directory
          </a>
          <a href="#gallery" className="hover:text-[#FB8C00] transition-colors">
            Gallery
          </a>
          <a href="#opps" className="hover:text-[#FB8C00] transition-colors">
            Opportunities
          </a>
          <a href="#contact" className="hover:text-[#FB8C00] transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#FFF8E1]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FB8C00]/30 px-6 py-4 space-y-3 overflow-hidden"
          >
            {[
              { name: "About", id: "#about" },
              { name: "News & Events", id: "#news" },
              { name: "Directory", id: "#directory" },
              { name: "Gallery", id: "#gallery" },
              { name: "Opportunities", id: "#opps" },
              { name: "Contact", id: "#contact" },
            ].map((link) => (
              <a
                key={link.id}
                href={link.id}
                className="block text-[#2E7D32] font-medium hover:text-[#FB8C00] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
