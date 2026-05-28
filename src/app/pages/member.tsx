import { useParams, Link } from "react-router";
import { leadership } from "../data/team";
import { ArrowLeft } from "lucide-react";

export default function Member() {
  const { slug } = useParams();
  const member = leadership.find((m) => m.slug === slug);

  if (!member) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a1628] mb-4">Member Not Found</h2>
          <Link to="/team" className="text-[#d4af37] hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link to="/team" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#0a1628] transition-colors font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Team
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Image */}
          <div className="lg:col-span-4">
            <div className="w-full aspect-[3/4] overflow-hidden bg-slate-100">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="lg:col-span-8">
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0a1628] mb-2">
              {member.name.replace('Advocate ', '')}
            </h1>
            <p className="text-[#d4af37] text-lg font-bold uppercase tracking-wider mb-6">
              {member.role}
            </p>

            <div className="prose prose-lg text-slate-700 leading-relaxed max-w-none whitespace-pre-wrap">
              {member.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
