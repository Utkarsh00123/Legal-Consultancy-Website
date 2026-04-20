import { Link, Outlet, useLocation } from "react-router";
import { Scale, Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#0a1628] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 123 456 7890</span>
              </a>
              <a href="mailto:info@apsolicitorsandconsultants.com" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@apsolicitorsandconsultants.com</span>
              </a>
            </div>
            <div className="text-slate-300">
              Serving clients in India & UAE
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md" 
          : "bg-white"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <Scale className="w-10 h-10 text-[#d4af37] transform group-hover:rotate-12 transition-transform duration-300" />
              <div>
                <div className="font-['Playfair_Display'] font-bold text-xl text-[#0a1628] leading-tight">
                  AP Solicitors
                </div>
                <div className="text-[11px] text-slate-600 tracking-wide uppercase">
                  Legal Consultants
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`text-[15px] hover:text-[#d4af37] transition-colors relative group ${
                  isActive("/") ? "text-[#d4af37]" : "text-[#0a1628]"
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full ${
                  isActive("/") ? "w-full" : ""
                }`}></span>
              </Link>
              <Link
                to="/about"
                className={`text-[15px] hover:text-[#d4af37] transition-colors relative group ${
                  isActive("/about") ? "text-[#d4af37]" : "text-[#0a1628]"
                }`}
              >
                About
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full ${
                  isActive("/about") ? "w-full" : ""
                }`}></span>
              </Link>
              <Link
                to="/services"
                className={`text-[15px] hover:text-[#d4af37] transition-colors relative group ${
                  isActive("/services") ? "text-[#d4af37]" : "text-[#0a1628]"
                }`}
              >
                Practice Areas
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full ${
                  isActive("/services") ? "w-full" : ""
                }`}></span>
              </Link>
              <Link
                to="/team"
                className={`text-[15px] hover:text-[#d4af37] transition-colors relative group ${
                  isActive("/team") ? "text-[#d4af37]" : "text-[#0a1628]"
                }`}
              >
                Our Team
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full ${
                  isActive("/team") ? "w-full" : ""
                }`}></span>
              </Link>
              <Link
                to="/insights"
                className={`text-[15px] hover:text-[#d4af37] transition-colors relative group ${
                  isActive("/insights") ? "text-[#d4af37]" : "text-[#0a1628]"
                }`}
              >
                Insights
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full ${
                  isActive("/insights") ? "w-full" : ""
                }`}></span>
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-[#d4af37] text-[#0a1628] rounded hover:bg-[#b8941f] transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#0a1628]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-6 space-y-4 border-t border-slate-200 pt-4">
              <Link
                to="/"
                className={`block py-2 text-[15px] hover:text-[#d4af37] transition-colors ${
                  isActive("/") ? "text-[#d4af37]" : "text-[#0a1628]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block py-2 text-[15px] hover:text-[#d4af37] transition-colors ${
                  isActive("/about") ? "text-[#d4af37]" : "text-[#0a1628]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`block py-2 text-[15px] hover:text-[#d4af37] transition-colors ${
                  isActive("/services") ? "text-[#d4af37]" : "text-[#0a1628]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Practice Areas
              </Link>
              <Link
                to="/team"
                className={`block py-2 text-[15px] hover:text-[#d4af37] transition-colors ${
                  isActive("/team") ? "text-[#d4af37]" : "text-[#0a1628]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link
                to="/insights"
                className={`block py-2 text-[15px] hover:text-[#d4af37] transition-colors ${
                  isActive("/insights") ? "text-[#d4af37]" : "text-[#0a1628]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Insights
              </Link>
              <Link
                to="/contact"
                className="block py-3 px-6 bg-[#d4af37] text-[#0a1628] rounded hover:bg-[#b8941f] transition-colors font-medium text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-10 h-10 text-[#d4af37]" />
                <div>
                  <div className="font-['Playfair_Display'] font-bold text-xl leading-tight">
                    AP Solicitors
                  </div>
                  <div className="text-[11px] text-slate-300 tracking-wide uppercase">
                    Legal Consultants
                  </div>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Building Trust. Delivering Justice.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                A full-service law firm bridging legal excellence across India and the UAE.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-6 text-[#d4af37]">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" className="text-slate-300 hover:text-[#d4af37] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-300 hover:text-[#d4af37] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-300 hover:text-[#d4af37] transition-colors">
                    Practice Areas
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-slate-300 hover:text-[#d4af37] transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/insights" className="text-slate-300 hover:text-[#d4af37] transition-colors">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-300 hover:text-[#d4af37] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-6 text-[#d4af37]">Practice Areas</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>Corporate Law</li>
                <li>Civil & Criminal Litigation</li>
                <li>Cross-Border Advisory</li>
                <li>Contract Drafting</li>
                <li>Arbitration</li>
                <li>Real Estate Law</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-6 text-[#d4af37]">Contact Us</h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li>
                  <div className="font-medium text-white mb-1">India Office</div>
                  <div>New Delhi, Mumbai, Bangalore</div>
                  <div>Chennai, Gurgaon, Hyderabad</div>
                  <div>Chandigarh</div>
                </li>
                <li>
                  <div className="font-medium text-white mb-1">UAE Office</div>
                  <div>Dubai</div>
                </li>
                <li className="pt-2">
                  <div>Phone: +91 123 456 7890</div>
                  <div>Email: info@apsolicitorsandconsultants.com</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>&copy; 2026 AP Solicitors and Legal Consultants. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#d4af37] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#d4af37] transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
