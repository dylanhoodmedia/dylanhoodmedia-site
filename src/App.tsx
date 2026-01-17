import { useState } from "react";
import { VideoGallery } from "./components/VideoGallery";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

import { X, Menu } from "lucide-react";



export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

return (
  <div className="min-h-screen bg-white">
    {/* Header */}
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/assets/logos/main-logo.svg"
            alt="Dylan Hood Media"
            className="h-5"
          />
        </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('work')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Photography
            </button>
            <button onClick={() => scrollToSection('videos')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Videos
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-6 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('work')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                Photography
              </button>
              <button onClick={() => scrollToSection('videos')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                Videos
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <PhotoGallery />
        <VideoGallery />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2026 Dylan Hood Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}