import React from 'react';
import { Step } from '../types';

const steps: Step[] = [
  {
    number: '01',
    title: 'Create Your Profile',
    description: 'Sign up in seconds. Import your interests or take our personality quiz to help us understand what makes you tick.',
  },
  {
    number: '02',
    title: 'Discover & Connect',
    description: 'Browse curated events and suggested connections. Send a "Lynk" request to start a conversation.',
  },
  {
    number: '03',
    title: 'Meet Up IRL',
    description: 'Use our built-in scheduler to plan a meetup at a verified safe public location. Enjoy the connection!',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-base text-secondary-400 font-semibold tracking-wide uppercase">Simple Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl mb-8">
              From download to <br /> hangout in minutes
            </p>
            <p className="text-lg text-slate-300 mb-12">
              We stripped away the complexity. No endless swiping, no ghosting. Just tools designed to get you offline and living your life.
            </p>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-secondary-500 font-bold text-xl text-secondary-400">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl transform rotate-3 blur-lg opacity-30"></div>
            <img 
              src="https://picsum.photos/800/1000?grayscale" 
              alt="App interface mockup" 
              className="relative rounded-2xl shadow-2xl border border-slate-700 w-full object-cover h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;