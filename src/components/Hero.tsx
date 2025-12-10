import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 transform translate-x-1/3 -translate-y-1/4">
        <div className="w-[800px] h-[800px] bg-gradient-to-br from-secondary-400 to-primary-300 rounded-full blur-3xl filter" />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-30 transform -translate-x-1/3 translate-y-1/4">
        <div className="w-[600px] h-[600px] bg-gradient-to-tr from-primary-400 to-emerald-300 rounded-full blur-3xl filter" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-slate-200 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-600">Now live in 50+ cities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            Connect Authentically <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Without Limits.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            LYNKUP reimagines social discovery. Find your tribe, attend exclusive events, and build meaningful relationships in the real world.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Join the Waitlist <ArrowRight size={20} />
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all hover:shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles size={20} className="text-secondary-500" />
              See How It Works
            </a>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10 bottom-0 h-20"></div>
            <img 
              src="https://picsum.photos/1200/600?grayscale" 
              alt="People connecting" 
              className="rounded-2xl shadow-2xl border border-slate-200 mx-auto w-full object-cover h-[400px] md:h-[600px]"
            />
            {/* Floating Cards Mockup */}
            <div className="absolute -bottom-10 left-10 md:left-20 bg-white p-4 rounded-xl shadow-xl z-20 max-w-xs hidden md:block transform -rotate-3 border border-slate-100">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">JD</div>
                 <div>
                   <p className="font-bold text-slate-800">John Doe</p>
                   <p className="text-xs text-slate-500">Just joined the 'Hiking Hikers' group</p>
                 </div>
               </div>
            </div>
             <div className="absolute -top-10 right-10 md:right-20 bg-white p-4 rounded-xl shadow-xl z-20 max-w-xs hidden md:block transform rotate-3 border border-slate-100">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 font-bold">AS</div>
                 <div>
                   <p className="font-bold text-slate-800">Anna Smith</p>
                   <p className="text-xs text-slate-500">Created a new event: 'Tech Talk'</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;