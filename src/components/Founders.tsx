import React from 'react';
import { Founder } from '../types';
import { Linkedin, Twitter } from 'lucide-react';

const founders: Founder[] = [
  {
    name: 'Alex Rivera',
    role: 'Co-Founder & CEO',
    bio: 'Former Product Lead at TechSocial. Passionate about using technology to bring people together, not keep them apart.',
    image: 'https://picsum.photos/400/400?random=1'
  },
  {
    name: 'Sarah Chen',
    role: 'Co-Founder & CTO',
    bio: 'Full-stack wizard with a background in AI security. Building the safest, most intuitive social graph engine.',
    image: 'https://picsum.photos/400/400?random=2'
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Community',
    bio: 'Community builder extraordinaire. Organized over 500+ successful meetup events across the globe.',
    image: 'https://picsum.photos/400/400?random=3'
  }
];

const Founders: React.FC = () => {
  return (
    <section id="founders" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            The people behind the mission to reconnect the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                  src={founder.image}
                  alt={founder.name}
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{founder.name}</h3>
              <p className="text-primary-600 font-medium mb-3">{founder.role}</p>
              <p className="text-slate-500 mb-6 px-4">{founder.bio}</p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;