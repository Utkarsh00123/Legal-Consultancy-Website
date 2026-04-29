import { Link } from "react-router";
import { ChevronRight, Target, Eye, Globe, Award, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "2,000+", label: "Cases Handled" },
    { number: "30+", label: "Expert Attorneys" },
    { number: "95%", label: "Success Rate" },
  ];

  const expertise = [
    {
      icon: Globe,
      title: "Cross-Border Expertise",
      description: "Unique capability in handling legal matters across India and UAE jurisdictions.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Personalized legal solutions tailored to each client's unique needs and goals.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Consistent success in delivering favorable outcomes for our clients.",
    },
    {
      icon: TrendingUp,
      title: "Business Acumen",
      description: "Deep understanding of business dynamics combined with legal expertise.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6">
              About AP JURIS CHAMBERS
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Building bridges of legal excellence between India and the UAE since our inception
            </p>
          </div>
        </div>
        
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Firm Overview Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0a1628] mb-6">
                Who We Are
              </h2>
              <div className="w-24 h-1 bg-[#d4af37] mb-6"></div>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-[#0a1628]">AP JURIS CHAMBERS</span> is a full-service law firm that stands at the intersection of legal excellence and practical business solutions. Our firm is uniquely positioned to serve clients across India and the UAE, offering seamless cross-border legal expertise.
                </p>
                <p>
                  Founded on the principles of <span className="font-semibold text-[#d4af37]">trust, integrity, and personalized service</span>, we have grown into a respected name in the legal community. Our team of experienced attorneys brings together diverse expertise across multiple practice areas, ensuring comprehensive legal support for our clients.
                </p>
                <p>
                  We serve clients across <span className="font-semibold">New Delhi, Mumbai, Bangalore, Chennai, Gurgaon, Hyderabad, Chandigarh, and Dubai</span>, providing localized knowledge combined with international perspective. Whether you're a multinational corporation, a growing startup, or an individual seeking legal counsel, we are committed to making legal solutions simple and accessible.
                </p>
                <p>
                  Our approach is client-centric, business-oriented, and results-driven. We don't just provide legal advice; we partner with you to achieve your objectives while protecting your interests every step of the way.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjByb29tfGVufDF8fHx8MTc3NDUzOTA0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white p-10 rounded-lg shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4af37] rounded-full mb-6">
                <Target className="w-8 h-8 text-[#0a1628]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To provide exceptional legal services that bridge geographical boundaries, combining deep local knowledge with international expertise. We strive to be trusted advisors who empower our clients through practical, business-oriented legal solutions delivered with integrity, innovation, and unwavering commitment to excellence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#d4af37] to-[#b8941f] text-white p-10 rounded-lg shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <Eye className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-[#0a1628]/90 leading-relaxed">
                To be the leading cross-border law firm connecting India and the UAE, recognized for our exceptional client service, innovative legal strategies, and unwavering ethical standards. We envision a future where businesses and individuals can navigate legal complexities across jurisdictions with confidence, supported by our expertise and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Border Expertise Focus */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              Cross-Border Excellence
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our unique strength lies in seamlessly navigating legal landscapes across India and the UAE
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766405532163-e38c3033f862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMGdhdGUlMjBkZWxoaSUyMGxhbmRtYXJrfGVufDF8fHx8MTc3NDUyNDc1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="India landmark"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#0a1628] mb-4">
                India Expertise
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                With offices across major Indian cities including New Delhi, Mumbai, Bangalore, Chennai, Gurgaon, Hyderabad, and Chandigarh, we offer comprehensive legal services grounded in deep understanding of Indian law, regulatory frameworks, and business practices.
              </p>
              <ul className="space-y-3">
                {[
                  "Multi-jurisdictional presence across India",
                  "Expert knowledge of Indian legal system",
                  "Strong relationships with regulatory authorities",
                  "Understanding of regional business cultures"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#0a1628] mb-4">
                UAE Expertise
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Our Dubai office provides strategic legal support for businesses operating in the UAE, leveraging our understanding of both common law and civil law systems to deliver exceptional cross-border advisory services.
              </p>
              <ul className="space-y-3">
                {[
                  "Deep knowledge of UAE legal framework",
                  "Experience with free zone regulations",
                  "Understanding of Sharia law principles",
                  "Expertise in UAE business practices"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759214483344-ef154537f082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBza3lsaW5lJTIwZHViYWl8ZW58MXx8fHwxNzc0NTQxNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dubai skyline"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              Why Choose AP JURIS CHAMBERS
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to excellence sets us apart in the legal industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-6 p-8 bg-slate-50 rounded-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#d4af37]/20"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-lg flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0a1628] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Experience the difference of working with a law firm that truly understands cross-border complexities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-[#0a1628] rounded hover:bg-[#b8941f] transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Schedule a Consultation
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded hover:bg-white hover:text-[#0a1628] transition-all duration-300 font-semibold"
            >
              Meet Our Team
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
