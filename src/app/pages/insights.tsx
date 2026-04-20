import { Calendar, User, ChevronRight, TrendingUp } from "lucide-react";

export default function Insights() {
  const featuredArticle = {
    title: "Navigating Cross-Border Investments Between India and UAE: A Comprehensive Guide",
    excerpt:
      "Understanding the legal framework and regulatory requirements for successful cross-border investments between India and the United Arab Emirates.",
    author: "Advocate Arvind Patel",
    date: "March 15, 2026",
    category: "Cross-Border Advisory",
    readTime: "8 min read",
  };

  const articles = [
    {
      title: "New RERA Regulations: What Property Buyers Need to Know",
      excerpt:
        "An overview of the latest amendments to Real Estate Regulatory Authority regulations and their impact on property transactions.",
      author: "Advocate Rohan Malhotra",
      date: "March 10, 2026",
      category: "Real Estate Law",
      readTime: "5 min read",
    },
    {
      title: "Arbitration vs. Litigation: Choosing the Right Path for Dispute Resolution",
      excerpt:
        "A detailed comparison of arbitration and traditional litigation, helping businesses make informed decisions for dispute resolution.",
      author: "Advocate Neha Kapoor",
      date: "March 5, 2026",
      category: "Dispute Resolution",
      readTime: "6 min read",
    },
    {
      title: "Corporate Compliance in 2026: Key Updates for Indian Businesses",
      excerpt:
        "Essential compliance requirements and recent regulatory changes that Indian companies need to be aware of in 2026.",
      author: "Advocate Priya Sharma",
      date: "February 28, 2026",
      category: "Corporate Law",
      readTime: "7 min read",
    },
    {
      title: "Understanding the New UAE Free Zone Regulations",
      excerpt:
        "Comprehensive analysis of recent changes to UAE free zone laws and their implications for foreign investors.",
      author: "Advocate Arvind Patel",
      date: "February 20, 2026",
      category: "Cross-Border Advisory",
      readTime: "6 min read",
    },
    {
      title: "Contract Drafting Best Practices for Technology Companies",
      excerpt:
        "Essential guidelines for drafting effective contracts in the fast-paced technology sector, including IP protection clauses.",
      author: "Advocate Vikram Singh",
      date: "February 15, 2026",
      category: "Contract Law",
      readTime: "5 min read",
    },
    {
      title: "Employee Rights and Employer Obligations: A 2026 Update",
      excerpt:
        "Latest developments in employment law covering rights, obligations, and recent case law affecting workplace relationships.",
      author: "Advocate Anjali Desai",
      date: "February 10, 2026",
      category: "Employment Law",
      readTime: "6 min read",
    },
  ];

  const categories = [
    "All",
    "Corporate Law",
    "Cross-Border Advisory",
    "Real Estate Law",
    "Dispute Resolution",
    "Contract Law",
    "Employment Law",
  ];

  const legalUpdates = [
    {
      title: "Supreme Court Ruling on Arbitration Clause Validity",
      date: "March 18, 2026",
    },
    {
      title: "New Tax Treaty Between India and UAE Effective April 2026",
      date: "March 12, 2026",
    },
    {
      title: "Amendment to Companies Act: Board Meeting Requirements",
      date: "March 8, 2026",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6">
              Legal Insights
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Expert analysis, updates, and perspectives on legal matters affecting businesses and individuals
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

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-[#d4af37] text-[#0a1628]"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-[#d4af37] text-[#0a1628] text-sm font-semibold rounded">
              Featured Article
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-lg overflow-hidden shadow-lg border border-slate-200">
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] h-full min-h-[300px] lg:min-h-[400px] flex items-center justify-center p-12">
              <div className="text-center text-white">
                <TrendingUp className="w-20 h-20 text-[#d4af37] mx-auto mb-4" />
                <p className="text-slate-300">Featured Legal Insight</p>
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded">
                  {featuredArticle.category}
                </span>
              </div>
              
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                {featuredArticle.title}
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#d4af37]" />
                  <span>{featuredArticle.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#d4af37]" />
                  <span>{featuredArticle.date}</span>
                </div>
                <div>
                  <span className="text-[#d4af37]">{featuredArticle.readTime}</span>
                </div>
              </div>
              
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a1628] text-white rounded hover:bg-[#1a3a5c] transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                Read Full Article
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Articles */}
            <div className="lg:col-span-2">
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0a1628] mb-8">
                Recent Articles
              </h2>
              
              <div className="space-y-8">
                {articles.map((article, index) => (
                  <article
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#d4af37]/30"
                  >
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded">
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0a1628] mb-3 hover:text-[#d4af37] transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#d4af37]" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#d4af37]" />
                        <span>{article.date}</span>
                      </div>
                      <div>
                        <span className="text-[#d4af37]">{article.readTime}</span>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center gap-2 text-[#0a1628] hover:text-[#d4af37] font-medium transition-colors">
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Legal Updates */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-slate-200 mb-8">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0a1628] mb-6">
                  Latest Legal Updates
                </h3>
                <div className="space-y-6">
                  {legalUpdates.map((update, index) => (
                    <div key={index} className="border-b border-slate-200 last:border-0 pb-4 last:pb-0">
                      <h4 className="text-[#0a1628] font-medium mb-2 hover:text-[#d4af37] transition-colors cursor-pointer">
                        {update.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="w-3 h-3" />
                        <span>{update.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white p-8 rounded-lg shadow-md">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-slate-300 mb-6 text-sm">
                  Get the latest legal insights and updates delivered directly to your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#d4af37] text-[#0a1628] rounded hover:bg-[#b8941f] transition-colors font-semibold"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Popular Topics */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-slate-200 mt-8">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0a1628] mb-6">
                  Popular Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Corporate Compliance",
                    "FDI Regulations",
                    "RERA",
                    "Arbitration",
                    "Contract Law",
                    "IP Protection",
                    "Employment Rights",
                    "Tax Treaties",
                  ].map((topic, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded hover:bg-[#d4af37] hover:text-[#0a1628] transition-colors cursor-pointer"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Need Legal Guidance?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our experts are here to help you navigate complex legal matters
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a1628] text-white rounded hover:bg-[#1a3a5c] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Schedule a Consultation
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
