import React from 'react';
import { Users, Shield, Zap, Globe, Heart, Calendar } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Smart Matching',
    description: 'Our AI-driven algorithm connects you with people who truly share your passions and values.',
    icon: Zap,
  },
  {
    title: 'Verified Profiles',
    description: 'Safety first. Every profile is verified to ensure you are connecting with real people.',
    icon: Shield,
  },
  {
    title: 'Local Events',
    description: 'Discover events happening right now in your neighborhood tailored to your interests.',
    icon: Calendar,
  },
  {
    title: 'Global Community',
    description: 'Travel mode allows you to connect with locals and travelers wherever you go.',
    icon: Globe,
  },
  {
    title: 'Interest Groups',
    description: 'Join micro-communities for everything from rock climbing to retro gaming.',
    icon: Users,
  },
  {
    title: 'Meaningful Connections',
    description: 'Designed to move you off the app and into the real world for genuine interaction.',
    icon: Heart,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Why LYNKUP</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to find your people
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            We've built a platform that removes the friction from socializing, making it easier than ever to build your network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 group"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;