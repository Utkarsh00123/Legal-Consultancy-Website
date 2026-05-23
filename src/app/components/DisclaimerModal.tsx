import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAccepted = sessionStorage.getItem('disclaimerAccepted');
    if (!hasAccepted) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('disclaimerAccepted', 'true');
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-[#0a1628]/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-8 pt-10 relative overflow-hidden animate-in fade-in zoom-in duration-300 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-[#d4af37]" />
        
        {/* Close Button Top Left */}
        <button 
          onClick={handleClose}
          className="absolute top-4 left-4 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close disclaimer"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-slate-700 space-y-6 max-h-[75vh] overflow-y-auto pr-4 custom-scrollbar mt-2">
          
          <div className="text-center">
            <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#d4af37] mb-2 uppercase tracking-wide">
              Delivering Justice in India, Dubai & Abu Dhabi
            </h2>
            <h3 className="font-semibold text-[#0a1628] text-lg uppercase">
              Disclaimer Window (For Solicitation)
            </h3>
          </div>

          <p className="leading-relaxed">
            <strong className="text-[#0a1628]">AP Juris Chambers</strong>, we serve clients across all major cities in India as well as internationally. AP Juris Chambers is recognised for its cutting-edge legal expertise and unwavering commitment to client needs, delivering bespoke, sustainable, and innovative legal solutions.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h4 className="font-bold text-[#0a1628] mb-3 uppercase tracking-wider text-sm">What Our Clients Say</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-semibold text-slate-600">
              <div className="flex items-center justify-center p-3 bg-white rounded border border-slate-200 shadow-sm">NOBSCI</div>
              <div className="flex items-center justify-center p-3 bg-white rounded border border-slate-200 shadow-sm">RHINO CULT</div>
              <div className="flex items-center justify-center p-3 bg-white rounded border border-slate-200 shadow-sm text-center leading-tight">IYENGAR<br/>PULIYOGARE</div>
              <div className="flex items-center justify-center p-3 bg-white rounded border border-slate-200 shadow-sm">NEST VIBES</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#0a1628] mb-3 uppercase tracking-wider text-sm">Founder and Managing Partner</h4>
            <p className="leading-relaxed text-sm">
              Ms. Ayushi Chauhan is a seasoned legal professional with a wide experience. Ms. Ayushi Chauhan is an Advocate, Supreme Court of India, practicing in the Supreme Court, High Courts, and Tribunals/Commissions. He pursued his law degree from Delhi University in 1996 and has been enrolled with the Bar Council of Delhi since then. She also holds a diploma in Corporate Laws and Industrial Relations from leading law and management institutes. Ms. Ayushi Chauhan, has studied from Karnataka State Law University, Bangalore, and brings a strong background in international legal matters. Together, they have over 27 years of combined practice, representing national, multinational, private, and cooperative institutions. They specialise in diverse fields, including civil, commercial, arbitration, criminal, service, and banking laws. Adept at providing tailored legal advice, they assist companies in corporate, service, and criminal matters, formulating strategic legal solutions, and managing litigation across various courts. Their unwavering commitment ensures each client receives bespoke, sustainable, and innovative legal support worldwide.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
