import { Link } from "react-router";
import {
  Building2,
  Gavel,
  Globe,
  FileText,
  Shield,
  Home as HomeIcon,
  ChevronRight,
  CheckCircle2,
  Scale,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Corporate Law",
      description:
        "Comprehensive legal support for businesses at every stage of their lifecycle.",
      services: [
        "Company incorporation and structuring",
        "Mergers and acquisitions",
        "Corporate governance and compliance",
        "Shareholder agreements and disputes",
        "Joint ventures and partnerships",
        "Corporate restructuring",
        "Due diligence services",
        "Board advisory services",
      ],
    },
    {
      icon: Gavel,
      title: "Civil & Criminal Litigation",
      description:
        "Expert representation in courts across India and UAE jurisdictions.",
      services: [
        "Commercial litigation",
        "Civil disputes and claims",
        "Criminal defense",
        "Appellate advocacy",
        "Writ petitions and constitutional matters",
        "Enforcement of judgments",
        "Class action suits",
        "White-collar crime defense",
      ],
    },
    {
      icon: Globe,
      title: "Cross-Border Legal Advisory (India–UAE)",
      description:
        "Seamless legal guidance for international business operations between India and UAE.",
      services: [
        "Cross-border investment structuring",
        "International trade compliance",
        "Multi-jurisdictional transactions",
        "Bilateral agreements",
        "Foreign direct investment (FDI) advisory",
        "Repatriation of funds",
        "Tax treaty optimization",
        "Cultural and legal adaptation support",
      ],
    },
    {
      icon: FileText,
      title: "Contract Drafting & Compliance",
      description:
        "Precision in drafting and ensuring regulatory compliance for all your agreements.",
      services: [
        "Commercial contracts",
        "Employment agreements",
        "Service level agreements (SLAs)",
        "Non-disclosure agreements (NDAs)",
        "Franchise agreements",
        "Distribution agreements",
        "Licensing agreements",
        "Compliance audits and risk assessment",
      ],
    },
    {
      icon: Shield,
      title: "Arbitration & Dispute Resolution",
      description:
        "Efficient resolution of commercial disputes through alternative dispute resolution mechanisms.",
      services: [
        "Domestic and international arbitration",
        "Mediation services",
        "Conciliation",
        "Expert determination",
        "Construction disputes",
        "Commercial arbitration",
        "Investment treaty arbitration",
        "Enforcement of arbitral awards",
      ],
    },
    {
      icon: HomeIcon,
      title: "Real Estate & Property Law",
      description:
        "Complete legal services for property transactions and real estate disputes.",
      services: [
        "Property acquisition and sale",
        "Title verification and due diligence",
        "Lease agreements and negotiations",
        "Property development advisory",
        "Real estate financing",
        "RERA compliance",
        "Property dispute resolution",
        "Land use and zoning matters",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive understanding of your legal needs and business objectives.",
    },
    {
      number: "02",
      title: "Strategic Analysis",
      description: "Our team conducts thorough research and analysis to develop the optimal legal strategy.",
    },
    {
      number: "03",
      title: "Execution",
      description: "We implement the strategy with precision, keeping you informed at every step.",
    },
    {
      number: "04",
      title: "Resolution & Beyond",
      description: "We deliver results and remain available for ongoing support and advisory services.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6">
              Our Practice Areas
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive legal expertise across multiple disciplines to serve your diverse needs
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our multidisciplinary approach ensures that we can address all your legal needs with expertise and efficiency
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Service Header */}
                    <div className="lg:col-span-1 bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white p-8 lg:p-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-[#d4af37] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Icon className="w-7 h-7 text-[#0a1628]" />
                        </div>
                        <div>
                          <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-2">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Details */}
                    <div className="lg:col-span-2 p-8 lg:p-10">
                      <h4 className="font-semibold text-[#0a1628] mb-6 text-lg">
                        Our Services Include:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.services.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              Our Process
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A streamlined, client-focused approach to delivering exceptional legal services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0a1628] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our expertise spans across diverse sectors and industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Technology & IT",
              "Manufacturing",
              "Real Estate & Construction",
              "Financial Services",
              "Healthcare & Pharmaceuticals",
              "Retail & E-commerce",
              "Energy & Natural Resources",
              "Hospitality & Tourism",
              "Transportation & Logistics",
              "Education",
              "Media & Entertainment",
              "Telecommunications",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-lg text-center hover:bg-white hover:shadow-md transition-all duration-300 border border-slate-200 hover:border-[#d4af37]/30"
              >
                <p className="text-slate-700 font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Connect with our expert team to discuss your specific legal requirements
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
