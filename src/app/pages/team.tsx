import { Link } from "react-router";
import { ChevronRight, Mail, Linkedin } from "lucide-react";

export default function Team() {
  const leadership = [
    {
      name: "Advocate Arvind Patel",
      role: "Founding Partner",
      specialization: "Corporate Law & Cross-Border Transactions",
      education: "LL.M., Harvard Law School | B.A., LL.B., National Law School of India University",
      experience: "25+ years",
      bar: "Supreme Court of India, Delhi High Court",
      image: "/partner-1.jpg",
      description:
        "Arvind brings over two decades of experience in corporate law and international transactions. His expertise in India-UAE legal frameworks has been instrumental in establishing the firm's cross-border practice.",
    },
    {
      name: "Advocate Priya Sharma",
      role: "Senior Partner",
      specialization: "Civil & Criminal Litigation",
      education: "LL.M., University of Cambridge | B.A., LL.B., Faculty of Law, Delhi University",
      experience: "20+ years",
      bar: "Supreme Court of India, Delhi High Court, Bombay High Court",
      description:
        "Priya is recognized for her exceptional advocacy skills and has successfully represented clients in high-stakes litigation matters across various courts in India.",
    },
  ];

  const partners = [
    {
      name: "Advocate Rohan Malhotra",
      role: "Partner",
      specialization: "Real Estate & Property Law",
      education: "LL.B., Government Law College, Mumbai | Diploma in Real Estate Law",
      experience: "18+ years",
      bar: "Bombay High Court, Supreme Court of India",
    },
    {
      name: "Advocate Neha Kapoor",
      role: "Partner",
      specialization: "Arbitration & Dispute Resolution",
      education: "LL.M., London School of Economics | B.A., LL.B., Symbiosis Law School",
      experience: "15+ years",
      bar: "Delhi High Court, Supreme Court of India",
    },
    {
      name: "Advocate Vikram Singh",
      role: "Partner",
      specialization: "Contract Drafting & Compliance",
      education: "LL.B., National Law University, Bangalore | PG Diploma in Corporate Law",
      experience: "16+ years",
      bar: "Karnataka High Court, Supreme Court of India",
    },
    {
      name: "Advocate Anjali Desai",
      role: "Partner",
      specialization: "Intellectual Property & Technology Law",
      education: "LL.M., University of California, Berkeley | B.A., LL.B., NALSAR University",
      experience: "14+ years",
      bar: "Telangana High Court, Supreme Court of India",
    },
  ];

  const associates = [
    {
      name: "Advocate Karan Mehta",
      specialization: "Corporate Law",
      education: "B.A., LL.B., Jindal Global Law School",
      experience: "8 years",
    },
    {
      name: "Advocate Shreya Iyer",
      specialization: "Litigation",
      education: "LL.B., Chennai Law College",
      experience: "7 years",
    },
    {
      name: "Advocate Aditya Rao",
      specialization: "Cross-Border Advisory",
      education: "LL.M., National University of Singapore | B.A., LL.B., Christ University",
      experience: "6 years",
    },
    {
      name: "Advocate Meera Nair",
      specialization: "Real Estate Law",
      education: "B.A., LL.B., Amity Law School",
      experience: "5 years",
    },
    {
      name: "Advocate Rahul Verma",
      specialization: "Dispute Resolution",
      education: "LL.B., Delhi University | Diploma in ADR",
      experience: "6 years",
    },
    {
      name: "Advocate Diya Patel",
      specialization: "Contract Law",
      education: "B.A., LL.B., Gujarat National Law University",
      experience: "5 years",
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

      {/* Partners */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              Partners
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced attorneys leading our practice areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#d4af37]/30"
              >
                <div className="flex items-start gap-6">
                  {'image' in member && member.image ? (
                    <img 
                      src={member.image as string} 
                      alt={member.name} 
                      className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-[#d4af37]"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] flex items-center justify-center flex-shrink-0 border-2 border-[#d4af37]">
                      <span className="text-3xl font-['Playfair_Display'] font-bold text-[#d4af37]">
                        {member.name.split(" ").slice(-1)[0].charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs font-medium rounded">
                        {member.role}
                      </span>
                    </div>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#0a1628] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#d4af37] font-medium text-sm mb-4">{member.specialization}</p>
                    
                    <div className="space-y-2 text-sm text-slate-600 mb-4">
                      <div>
                        <span className="font-semibold text-[#0a1628]">Education:</span>
                        <br />
                        {member.education}
                      </div>
                      <div>
                        <span className="font-semibold text-[#0a1628]">Experience:</span> {member.experience}
                      </div>
                      <div>
                        <span className="font-semibold text-[#0a1628]">Bar:</span> {member.bar}
                      </div>
                    </div>

                    <div className="flex gap-3 text-sm">
                      <a href="#" className="text-[#0a1628] hover:text-[#d4af37] transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-[#0a1628] hover:text-[#d4af37] transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              Associates
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Talented legal professionals supporting our clients with dedication and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associates.map((member, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[#d4af37]/30"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941f] flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-['Playfair_Display'] font-bold text-white">
                      {member.name.split(" ").slice(-1)[0].charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#0a1628] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#d4af37] text-sm font-medium mb-3">{member.specialization}</p>
                  
                  <div className="text-xs text-slate-600 space-y-1 mb-4">
                    <div>{member.education}</div>
                    <div className="font-semibold text-[#0a1628]">{member.experience} experience</div>
                  </div>

                  <div className="flex gap-3 justify-center text-sm">
                    <a href="#" className="text-[#0a1628] hover:text-[#d4af37] transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-[#0a1628] hover:text-[#d4af37] transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
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
