import { useState } from "react";
import {Menu, X} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-amber-900 text-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center shadow-inner">
            <span className="font-bold">IJ</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">Ijemba Community</h1>
            <p className="text-sm">Iseyin, Oyo State</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#news" className="hover:underline">News & Events</a>
          <a href="#directory" className="hover:underline">Directory</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#opps" className="hover:underline">Opportunities</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-amber-800 px-6 py-4 space-y-3 overflow-hidden"
          >
            <a href="#about" className="block hover:underline" onClick={() => setIsOpen(false)}>About</a>
            <a href="#news" className="block hover:underline" onClick={() => setIsOpen(false)}>News & Events</a>
            <a href="#directory" className="block hover:underline" onClick={() => setIsOpen(false)}>Directory</a>
            <a href="#gallery" className="block hover:underline" onClick={() => setIsOpen(false)}>Gallery</a>
            <a href="#opps" className="block hover:underline" onClick={() => setIsOpen(false)}>Opportunities</a>
            <a href="#contact" className="block hover:underline" onClick={() => setIsOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
