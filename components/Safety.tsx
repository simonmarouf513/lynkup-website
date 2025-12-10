import React from 'react';
import { ShieldCheck, Lock, Eye, AlertTriangle } from 'lucide-react';

const Safety: React.FC = () => {
  return (
    <section id="safety" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Trust & Safety</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Your safety is our top priority
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            We employ state-of-the-art technology and community moderation to ensure LYNKUP remains a safe space for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6">
            <div className="flex-shrink-0">
              <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                <ShieldCheck size={32} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">ID Verification</h3>
              <p className="text-slate-600">Every user must pass a mandatory photo verification process to prove they are real.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6">
            <div className="flex-shrink-0">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <Lock size={32} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Private by Design</h3>
              <p className="text-slate-600">Your location is fuzzy by default. You control exactly what you share and when.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6">
            <div className="flex-shrink-0">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                <Eye size={32} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Active Moderation</h3>
              <p className="text-slate-600">Our AI and human moderators work 24/7 to remove harmful content and bad actors.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6">
            <div className="flex-shrink-0">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                <AlertTriangle size={32} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Emergency Assist</h3>
              <p className="text-slate-600">In-app features allow you to discreetly alert authorities or emergency contacts if you feel unsafe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;