import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedback, setFeedback] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef(null);

  // Simple reCAPTCHA loading
  useEffect(() => {
    // Check if already loaded
    if (window.grecaptcha) {
      renderRecaptcha();
      return;
    }

    // Load script if not present
    if (!document.querySelector('script[src*="recaptcha"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.onload = () => {
        // Small delay to ensure API is ready
        setTimeout(renderRecaptcha, 100);
      };
      document.head.appendChild(script);
    }
  }, []);

  const renderRecaptcha = () => {
    if (window.grecaptcha && recaptchaRef.current && !recaptchaRef.current.hasChildNodes()) {
      window.grecaptcha.render(recaptchaRef.current, {
        // CHANGED: Reading site key from environment variables
        sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
        callback: (token) => {
          setRecaptchaToken(token);
          setFeedback("");
        },
        'expired-callback': () => {
          setRecaptchaToken("");
          setFeedback("reCAPTCHA expired. Please verify again.");
        }
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      setFeedback("Please complete the reCAPTCHA verification.");
      return;
    }

    setLoading(true);
    setFeedback("");

    try {
      // CHANGED: Reading all EmailJS keys from environment variables
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
          'g-recaptcha-response': recaptchaToken,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      setRecaptchaToken("");
      setFeedback("Message sent successfully!");
      
      // Reset reCAPTCHA
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFeedback("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Connect with Me for Collaboration"
          sub="❔Still Curious? Reach out!"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                {/* Simple reCAPTCHA */}
                <div className="flex justify-center">
                  <div ref={recaptchaRef}></div>
                </div>

                {feedback && (
                  <div className={`text-center text-sm ${
                    feedback.includes('successfully') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {feedback}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <div className="cta-button group px-3 py-3 md:px-4 md:py-4 min-h-[48px] md:min-h-[56px] flex items-center justify-center gap-2 w-full h-auto">
                    <div className="bg-circle" />
                    <span className="text text-xs md:text-base break-words w-full text-center">
                      {loading ? "Sending..." : recaptchaToken ? "Send Message" : "Send Message"}
                    </span>
                    <div className="arrow-wrapper flex items-center justify-center">
                      <img src="/images/arrow-down.svg" alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#434659] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
