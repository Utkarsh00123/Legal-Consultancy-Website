import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Building } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    practiceArea: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          practiceArea: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMsg(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Connect with our legal experts to discuss your needs. We're here to help.
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

      {/* Contact Form & Quick Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Send Us a Message
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Fill out the form below and one of our legal experts will get back to you within 24 hours.
              </p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                  <p className="font-medium">Email Sent Successfully!</p>
                  <p className="text-sm">We'll be in touch with you shortly.</p>
                </div>
              )}
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
                  <p className="font-medium">Error</p>
                  <p className="text-sm">{errorMsg}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0a1628] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0a1628] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#0a1628] mb-2">
                      Landline Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                      placeholder="011-45727781"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-[#0a1628] mb-2">
                      Your Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                      placeholder="Enter your address or city"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="practiceArea" className="block text-sm font-medium text-[#0a1628] mb-2">
                    Practice Area of Interest
                  </label>
                  <select
                    id="practiceArea"
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                  >
                    <option value="">Select practice area</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="litigation">Civil & Criminal Litigation</option>
                    <option value="crossborder">Cross-Border Advisory</option>
                    <option value="contract">Contract Drafting & Compliance</option>
                    <option value="arbitration">Arbitration & Dispute Resolution</option>
                    <option value="realestate">Real Estate & Property Law</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0a1628] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your legal needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-10 py-4 bg-[#d4af37] text-[#0a1628] rounded hover:bg-[#b8941f] transition-all duration-300 font-bold inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>

            {/* Quick Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white p-8 rounded-lg shadow-xl mb-8">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4">
                  Our Office
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#0a1628]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Landline</h4>
                      <a href="tel:01145727781" className="text-slate-300 text-sm hover:text-[#d4af37] transition-colors">011-45727781</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#0a1628]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:apjurischambers@gmail.com" className="text-slate-300 text-sm break-all hover:text-[#d4af37] transition-colors">apjurischambers@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#0a1628]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        213, Kailash Building, 26, K G Marg, New Delhi, India 110001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#0a1628]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Office Hours (IST)</h4>
                      <p className="text-slate-300 text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p>
                      <p className="text-slate-300 text-sm">Sun: Closed</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
