import { Link } from "react-router";
import { ChevronRight, Mail, Linkedin } from "lucide-react";

export default function Team() {
  const leadership = [
    {
      name: "Advocate Ayushi Chauhan",
      role: "Founder & Managing Partner",
      specialization: "Civil, Commercial, Arbitration, Criminal, Service, and Banking Laws",
      education: "LL.B., Delhi University | Diploma in Corporate Laws & IR | Karnataka State Law University",
      experience: "27+ years",
      bar: "Supreme Court of India, High Courts, Tribunals/Commissions",
      image: "/partner-1.jpg",
      description:
        "Ms. Ayushi Chauhan is a seasoned legal professional with wide experience practicing in the Supreme Court, High Courts, and Tribunals/Commissions. She brings a strong background in international legal matters, assisting companies in corporate, service, and criminal matters, formulating strategic legal solutions, and managing litigation across various courts worldwide.",
    },
    {
      name: "Advocate Pankaj Kumar",
      role: "Senior Partner",
      specialization: "Corporate Law & Cross-Border Advisory",
      education: "LL.M., National Law School of India University",
      experience: "20+ years",
      bar: "Supreme Court of India, Delhi High Court",
      description:
        "Pankaj brings extensive expertise in corporate law, navigating complex regulatory landscapes, and offering strategic legal counsel to domestic and international clients.",
    },
    {
      name: "Advocate Arvind Patel",
      role: "Partner",
      specialization: "Corporate Law & International Transactions",
      education: "LL.M., Harvard Law School | B.A., LL.B., National Law School of India University",
      experience: "25+ years",
      bar: "Supreme Court of India, Delhi High Court",
      description:
        "Arvind brings over two decades of experience in corporate law and international transactions. His expertise in India-UAE legal frameworks has been instrumental in establishing the firm's cross-border practice.",
    },
  ];

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

          <div className="space-y-12">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Photo Placeholder */}
                  <div className="lg:col-span-1 bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] flex items-center justify-center p-12">
                    {'image' in member && member.image ? (
                      <img 
                        src={member.image as string} 
                        alt={member.name} 
                        className="w-48 h-48 rounded-full object-cover border-4 border-[#d4af37]"
                      />
                    ) : (
                      <div className="w-48 h-48 rounded-full bg-slate-700/30 flex items-center justify-center border-4 border-[#d4af37]">
                        <span className="text-6xl font-['Playfair_Display'] font-bold text-[#d4af37]">
                          {member.name.split(" ").slice(-1)[0].charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2 p-10">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded">
                        {member.role}
                      </span>
                    </div>
                    <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#0a1628] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#d4af37] font-semibold mb-4">{member.specialization}</p>
                    
                    <p className="text-slate-700 leading-relaxed mb-6">
                      {member.description}
                    </p>

                    <div className="space-y-3 text-sm text-slate-600 mb-6">
                      <div>
                        <span className="font-semibold text-[#0a1628]">Education:</span> {member.education}
                      </div>
                      <div>
                        <span className="font-semibold text-[#0a1628]">Experience:</span> {member.experience}
                      </div>
                      <div>
                        <span className="font-semibold text-[#0a1628]">Bar Admissions:</span> {member.bar}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[#0a1628] hover:text-[#d4af37] transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">Contact</span>
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[#0a1628] hover:text-[#d4af37] transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
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
