import { Link, Outlet, useLocation } from "react-router";
import { Scale, Menu, X, Phone, Mail, Clock, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

interface RegionData {
  name: string;
  flag: string;
  timezone: string;
  phone: string;
  email: string;
  address: string;
  hotPreview: string[];
}

const regions: RegionData[] = [
  {
    name: "India",
    flag: "🇮🇳",
    timezone: "Asia/Kolkata",
    phone: "011-45727781",
    email: "apjurischambers@gmail.com",
    address: "213, Kailash Building, 26, K G Marg, New Delhi, India 110001",
    hotPreview: [
      "Corporate Restructuring & compliance regulatory frameworks",
      "Arbitration & high-stakes commercial disputes in High Courts/Supreme Court",
      "Drafting joint-venture & cross-border commercial contracts"
    ]
  },
  {
    name: "Dubai",
    flag: "🇦🇪",
    timezone: "Asia/Dubai",
    phone: "+971 4 321 0987",
    email: "dubai@apjuris.com",
    address: "Level 15, The Gate District, DIFC, Dubai, UAE",
    hotPreview: [
      "DIFC corporate setups, licensing, and compliance",
      "Family Office structuring & offshore trust management",
      "Golden Visa & executive residency legal counsel"
    ]
  },
  {
    name: "Abu Dhabi",
    flag: "🇦🇪",
    timezone: "Asia/Dubai",
    phone: "+971 2 987 6543",
    email: "abudhabi@apjuris.com",
    address: "Level 4, Al Sila Tower, ADGM Square, Al Maryah Island, Abu Dhabi, UAE",
    hotPreview: [
      "ADGM financial services regulatory authorization & compliance",
      "Sovereign wealth fund & joint-venture investment structures",
      "Maritime, logistics & energy sector commercial advisory"
    ]
  }
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [mobileActiveRegion, setMobileActiveRegion] = useState<string | null>(null);
  const [timeState, setTimeState] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeState(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getLocalTime = (timezone: string) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      }).format(timeState);
    } catch (e) {
      return "";
    }
  };

  const isOfficeOpen = (timezone: string) => {
    try {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "numeric",
        hour12: false,
        weekday: "short"
      });
      const parts = formatter.formatToParts(timeState);
      const hourPart = parts.find(p => p.type === "hour");
      const weekdayPart = parts.find(p => p.type === "weekday");
      
      if (!hourPart || !weekdayPart) return false;
      
      const hour = parseInt(hourPart.value, 10);
      const weekday = weekdayPart.value;
      
      if (weekday === "Sun") return false;
      return hour >= 10 && hour < 19;
    } catch (e) {
      return true;
    }
  };
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
      <div className="bg-[#0a1628] text-white py-2 hidden md:block relative z-[100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="flex justify-between items-center text-sm relative"
            onMouseLeave={() => setActiveRegion(null)}
          >
            <div className="flex items-center gap-6">
              <a href="tel:01145727781" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
                <Phone className="w-4 h-4" />
                <span>011-45727781 (New Delhi)</span>
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-slate-300">Serving clients in:</span>
              <div className="flex gap-2">
                {regions.map((reg) => (
                  <button
                    key={reg.name}
                    className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                      activeRegion === reg.name
                        ? "bg-[#d4af37] text-[#0a1628] shadow-md scale-105"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                    onClick={() => setActiveRegion(activeRegion === reg.name ? null : reg.name)}
                    onMouseEnter={() => setActiveRegion(reg.name)}
                  >
                    <span>{reg.flag}</span>
                    <span>{reg.name}</span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Local Hot Preview Dropdown */}
            {activeRegion && (
              <div className="absolute right-0 top-full w-72 bg-white text-[#0a1628] rounded-b-lg shadow-2xl border border-t-0 border-slate-200 z-50 overflow-hidden transform origin-top-right transition-all duration-300 animate-in fade-in">
                {(() => {
                  const reg = regions.find(r => r.name === activeRegion);
                  if (!reg) return null;
                  return (
                    <div className="p-4 space-y-4">
                      {/* Local Time Header */}
                      <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{reg.flag}</span>
                          <span className="font-semibold">{reg.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Clock className="w-4 h-4 text-[#d4af37]" />
                          <span className="font-mono font-medium">{getLocalTime(reg.timezone)}</span>
                        </div>
                      </div>

                      {/* Contact details */}
                      <div className="flex gap-2">
                        <a 
                          href={`tel:${reg.phone.replace(/[^+\d]/g, '')}`} 
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-[#d4af37]/10 hover:text-[#b8941f] text-slate-800 rounded font-semibold text-xs transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          Call Us
                        </a>
                        <Link 
                          to="/contact" 
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0a1628] hover:bg-[#1a3a5c] text-white rounded font-semibold text-xs transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          Email Us
                        </Link>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

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
              <img 
                src="/logo.png" 
                alt="AP JURIS CHAMBERS Logo" 
                className="h-16 w-auto object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-300" 
              />
              <div>
                <div className="font-['Playfair_Display'] font-bold text-xl text-[#0a1628] leading-tight">
                  AP JURIS CHAMBERS
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

              {/* Mobile Regional Switcher */}
              <div className="border-t border-slate-200 pt-4 mt-4">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  🌎 Regional Presence & Hot Preview
                </span>
                <div className="space-y-3">
                  {regions.map((reg) => {
                    const isOpen = mobileActiveRegion === reg.name;
                    const openStatus = isOfficeOpen(reg.timezone);
                    return (
                      <div key={reg.name} className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                        <button
                          type="button"
                          onClick={() => setMobileActiveRegion(isOpen ? null : reg.name)}
                          className="w-full px-4 py-3 flex justify-between items-center text-sm font-semibold text-[#0a1628] hover:bg-slate-100 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span>{reg.flag}</span>
                            <span>{reg.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${openStatus ? "bg-emerald-500" : "bg-amber-500"}`} />
                            <span className="text-xs text-slate-500">
                              {isOpen ? "Hide Info" : "Preview"}
                            </span>
                          </div>
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 border-t border-slate-200 pt-3 space-y-3 text-xs">
                            <div className="flex justify-between items-center font-mono pb-2 border-b border-slate-100">
                              <span className="text-slate-500">Local Time:</span>
                              <span className="font-semibold text-[#0a1628]">{getLocalTime(reg.timezone)}</span>
                            </div>
                            
                            <div className="flex gap-2 pt-1">
                              <a 
                                href={`tel:${reg.phone.replace(/[^+\d]/g, '')}`} 
                                className="flex-1 py-2 bg-white border border-slate-300 rounded text-center font-semibold text-[#0a1628] active:bg-slate-100"
                              >
                                Call
                              </a>
                              <Link 
                                to="/contact" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex-1 py-2 bg-[#0a1628] flex items-center justify-center text-white rounded text-center font-semibold active:bg-[#1a3a5c]"
                              >
                                Email
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

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
                <img 
                  src="/logo.png" 
                  alt="AP JURIS CHAMBERS Logo" 
                  className="h-16 w-auto object-contain bg-white rounded-lg p-1" 
                />
                <div>
                  <div className="font-['Playfair_Display'] font-bold text-xl leading-tight">
                    AP JURIS CHAMBERS
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
                A full-service law firm delivering legal excellence.
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
              <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-6 text-[#d4af37]">Our Office</h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li>
                  <div className="font-medium text-white mb-0.5">🇮🇳 New Delhi (HQ)</div>
                  <div className="text-[12px] text-slate-400">213, Kailash Bldg, 26, K G Marg, New Delhi 110001</div>
                  <div className="text-[12px] text-slate-400">Ph: 011-45727781</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>&copy; 2026 AP JURIS CHAMBERS. All rights reserved.</p>
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
