import { Link } from "react-router";
import {
  Scale,
  Building2,
  Gavel,
  Globe,
  FileText,
  Shield,
  Home as HomeIcon,
  ChevronRight,
  Play,
  CheckCircle2,
  Users,
  Award,
  Heart,
  Target,
  Zap,
  HandshakeIcon,
  MapPin,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const practiceAreas = [
    {
      icon: Building2,
      title: "Corporate Law",
      description: "Comprehensive legal support for businesses, from incorporation to governance.",
    },
    {
      icon: Gavel,
      title: "Civil & Criminal Litigation",
      description: "Expert representation in courts across India and UAE jurisdictions.",
    },
    {
      icon: Globe,
      title: "Cross-Border Legal Advisory",
      description: "Seamless legal guidance for India-UAE business operations.",
    },
    {
      icon: FileText,
      title: "Contract Drafting & Compliance",
      description: "Precision in drafting and ensuring regulatory compliance.",
    },
    {
      icon: Shield,
      title: "Arbitration & Dispute Resolution",
      description: "Efficient resolution of commercial disputes through ADR mechanisms.",
    },
    {
      icon: HomeIcon,
      title: "Real Estate & Property Law",
      description: "Complete legal services for property transactions and disputes.",
    },
  ];

  const values = [
    {
      icon: HandshakeIcon,
      title: "Trust and Integrity",
      description: "Building lasting relationships through honest and ethical practice.",
    },
    {
      icon: Target,
      title: "Business-Oriented Solutions",
      description: "Practical legal strategies aligned with your business objectives.",
    },
    {
      icon: Zap,
      title: "Going the Extra Mile",
      description: "Commitment beyond expectations to secure the best outcomes.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Leveraging technology and modern approaches to legal challenges.",
    },
    {
      icon: Scale,
      title: "Ethics and Equity",
      description: "Upholding the highest standards of professional conduct.",
    },
    {
      icon: Heart,
      title: "Empathy and Care",
      description: "Understanding client needs with compassion and dedication.",
    },
  ];


  const testimonials = [
    {
      quote: "AP JURIS CHAMBERS provided exceptional cross-border legal support for our expansion into the UAE. Their expertise and professionalism were unmatched.",
      author: "Rajesh Sharma",
      role: "CEO, TechVenture India",
    },
    {
      quote: "The team's attention to detail and personalized service made a complex property transaction seamless. Highly recommended.",
      author: "Priya Menon",
      role: "Director, RealEstate Holdings",
    },
    {
      quote: "Their corporate law expertise helped us navigate regulatory challenges with confidence. True partners in our business journey.",
      author: "Ahmed Al-Mansouri",
      role: "Managing Partner, Gulf Enterprises",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#1a3a5c] text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1598139384902-5a8217874645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsYXclMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ1NDE1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Law office"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-sm font-medium">
                Building Trust. Delivering Justice.
              </span>
            </div>
            
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              A Firm That Delivers Legal Excellence
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
              We are your trusted partners in every step of your legal journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-[#d4af37] text-[#0a1628] rounded hover:bg-[#b8941f] transition-all duration-300 font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded hover:bg-white hover:text-[#0a1628] transition-all duration-300 font-semibold inline-flex items-center gap-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-white rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              At <span className="font-semibold text-[#0a1628]">AP JURIS CHAMBERS</span>, we serve clients from our office in{" "}
              <span className="font-semibold text-[#0a1628]">New Delhi</span>. 
              We are built on <span className="font-semibold text-[#d4af37]">trust, integrity, and personalized service</span>, making legal solutions simple and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Video Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              How We Work
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover our approach to delivering exceptional legal services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group">
                  <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-[#0a1628] ml-1" fill="currentColor" />
                  </div>
                </button>
              </div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <p className="text-center text-slate-600 mt-4 italic">Click to watch our firm introduction video</p>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              Our Practice Areas
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive legal expertise across multiple disciplines to serve your diverse needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-slate-200 p-8 rounded-lg hover:shadow-xl hover:border-[#d4af37] transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37]/10 to-[#d4af37]/5 rounded-lg flex items-center justify-center group-hover:from-[#d4af37] group-hover:to-[#b8941f] transition-all duration-300">
                      <Icon className="w-8 h-8 text-[#d4af37] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0a1628] mb-3">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-[#d4af37] font-medium hover:gap-2 transition-all duration-300"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a1628] text-white rounded hover:bg-[#1a3a5c] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Services
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide our practice and define who we are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#d4af37]/20"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0a1628] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it — hear from those we've served
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200"
              >
                <div className="text-[#d4af37] text-6xl font-['Playfair_Display'] leading-none mb-4">"</div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-semibold text-[#0a1628]">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#1a3a5c] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1641060272821-df59e2c0b5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc0NTQxNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern office"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Experience the difference of working with a law firm that truly understands complex legal challenges can help protect your interests and achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#d4af37] text-[#0a1628] rounded hover:bg-[#b8941f] transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Book Your Consultation
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
