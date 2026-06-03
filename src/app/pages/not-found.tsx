import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-20">
      <div className="text-center max-w-lg px-4">
        <h1 className="font-['Playfair_Display'] text-6xl md:text-8xl font-bold text-[#d4af37] mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0a1628] text-white rounded font-medium hover:bg-[#1a3a5c] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
