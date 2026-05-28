import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { leadership } from "../data/team";

export default function Team() {

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Meet the legal experts dedicated to protecting your interests and delivering excellence
            </p>
          </div>
        </div>
        
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-white rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              Leadership Team
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our founding partners who set the vision and direction for the firm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {leadership.map((member) => (
              <div key={member.slug} className="flex flex-col items-center text-center group">
                <div className="w-full aspect-[4/5] overflow-hidden mb-6 bg-slate-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#0a1628] mb-2 group-hover:text-[#d4af37] transition-colors">
                  {member.name.replace('Advocate ', '')}
                </h3>
                <p className="text-[#d4af37] font-semibold mb-6">
                  {member.role}
                </p>
                <Link
                  to={`/team/${member.slug}`}
                  className="inline-flex items-center justify-center w-12 h-12 bg-[#0a1628] text-white hover:bg-[#d4af37] transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
            Work With Our Expert Team
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Connect with our experienced legal professionals to discuss your needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#d4af37] text-[#0a1628] rounded hover:bg-[#b8941f] transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Schedule a Consultation
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
