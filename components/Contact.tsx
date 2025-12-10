import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative isolate overflow-hidden">
        {/* Decorative background */}
        <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style={{clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'}}></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
          Ready to start connecting?
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Join the waitlist today and be the first to experience the future of social networking in your city.
        </p>

        {submitted ? (
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 animate-fade-in">
            <div className="flex flex-col items-center">
              <CheckCircle className="text-green-400 w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-slate-300">We'll notify you as soon as LYNKUP launches in your area.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-slate-400 hover:text-white underline"
              >
                Register another email
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-full border-0 bg-white/5 px-6 py-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6 placeholder:text-slate-400 backdrop-blur-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="flex-none rounded-full bg-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Join Now <Send size={18} />
              </button>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              We care about your data. Read our <a href="#" className="font-semibold text-white hover:underline">Privacy Policy</a>.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;