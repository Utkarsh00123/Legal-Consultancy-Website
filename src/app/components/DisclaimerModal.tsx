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
      className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4 cursor-pointer"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-6 pt-10 relative overflow-hidden animate-in fade-in zoom-in duration-300 cursor-default"
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
          <div className="text-center mb-6">
            <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#0a1628] mb-2 uppercase tracking-wide">
              Disclaimer
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto"></div>
          </div>

          <div className="text-xs leading-relaxed space-y-4">
            <p>
              The current rules of the Bar Council of India restrict / prohibit law firms from advertising and soliciting work through communication in the public domain. This website has been designed solely for the purposes of dissemination of basic information about <strong>AP Juris Chambers</strong>, which is made available on the specific request of the visitor/user. By clicking on 'AGREE', the visitor acknowledges that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>the contents of this website do not amount to advertising or solicitation;</li>
              <li>the information provided on the website is meant only for his/her understanding about our activities and who we are on their own volition;</li>
              <li>the contents of this website do not constitute, and shall not be construed as, legal advice or substitute for legal advice;</li>
              <li>the use of this website is completely at the user's own volition and shall not create or amount to an attorney-client relationship;</li>
              <li><strong>AP Juris Chambers</strong> is not liable for the consequence of any action or decision taken by the visitor by relying on the contents of this website or of any external links on this website;</li>
              <li><strong>AP Juris Chambers</strong> does not assume any liability for the interpretation or use of the information provided on this website and does not offer any warranty, either express or implied;</li>
              <li>the contents of this website are the property of <strong>AP Juris Chambers</strong> and the visitor is not authorised to use any part thereof, with or without adaptation, without the express prior written consent of <strong>AP Juris Chambers</strong>;</li>
              <li><strong>AP Juris Chambers</strong>, uses cookies on this website to improve user experience. By continuing to use this website without changing your privacy settings, you agree to the use of cookies.</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-center mt-6">
            <button 
              onClick={handleClose}
              className="px-8 py-3 bg-[#d4af37] text-[#0a1628] font-bold rounded shadow hover:bg-[#b8941f] transition-colors"
            >
              I AGREE
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
