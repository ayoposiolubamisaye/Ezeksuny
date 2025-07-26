'use client';

import Image from "next/image";
import { useState } from 'react';

export default function Services() {
  const [openService, setOpenService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  const services = [
    {
      title: "ALTERATIONS",
      icon: "👔",
      badge: "POPULAR",
      description: "Professional alterations for all types of garments with precision fitting.",
      features: [
        "Uniform tailoring (school, military, work)",
        "Pant & skirt alterations",
        "Zipper & button repair",
        "Same-day alterations available"
      ]
    },
    {
      title: "CUSTOM SUITS",
      icon: "🎩",
      badge: "PREMIUM",
      description: "Bespoke suits tailored to perfection for the modern professional.",
      features: [
        "Custom suit tailoring (men & women)",
        "Business attire & formal wear",
        "Prom & special occasions",
        "Multiple fittings included"
      ]
    },
    {
      title: "WEDDING DRESSES",
      icon: "👗",
      badge: "SPECIAL",
      description: "Expert alterations for bridal gowns and bridesmaid dresses.",
      features: [
        "Bridal gown alterations",
        "Bridesmaid dress fitting",
        "Wedding dress cleaning",
        "Preservation services"
      ]
    },
    {
      title: "DRY CLEANING",
      icon: "🧺",
      badge: "CARE",
      description: "Gentle cleaning for delicate and high-end garments.",
      features: [
        "Professional dry cleaning",
        "Stain removal services",
        "Wedding dress cleaning",
        "Preservation boxing"
      ]
    },
    {
      title: "CUSTOM CLOTHING",
      icon: "✂️",
      badge: "BESPOKE",
      description: "Create garments from scratch with custom design services.",
      features: [
        "Custom clothing design",
        "Pattern making",
        "Fabric selection guidance",
        "Multiple fittings included"
      ]
    },
    {
      title: "REPAIRS & MENDING",
      icon: "🪡",
      badge: "FAST",
      description: "Quick fixes and repairs for damaged or worn clothing.",
      features: [
        "Patchwork and mending",
        "Torn clothing repair",
        "Button replacement",
        "Hemming services"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-title text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="text-gold">OUR SERVICES</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Professional tailoring, cleaning, and alteration services in Baltimore, MD. 
            Quality craftsmanship meets convenience.
          </p>
          <a href="tel:6674350059" className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white transition-all duration-300 inline-block">
            Call (667) 435-0059
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl font-bold mb-6">
              <span className="gradient-text">TAILORING SERVICES</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From quick alterations to bespoke creations, we deliver exceptional craftsmanship 
              with attention to every detail. Your perfect fit is our priority.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-navy-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Service Header - Always Visible */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleService(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white text-navy rounded-lg flex items-center justify-center mr-4">
                        <span className="text-xl">{service.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-title text-xl font-semibold text-white">{service.title}</h3>
                        <p className="text-blue-100 text-sm mt-1">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-gold text-navy px-3 py-1 rounded-full text-xs font-bold">
                        {service.badge}
                      </span>
                      <div className={`w-6 h-6 transition-transform duration-300 ${openService === index ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dropdown Content */}
                <div className={`overflow-hidden transition-all duration-300 ${openService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 border-t border-navy/30">
                    <ul className="text-blue-100 space-y-3 mt-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-gold mr-3 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-title text-4xl font-bold mb-6 text-white">
            READY TO GET STARTED?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to schedule your fitting or get a quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6674350059" className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white transition-all duration-300">
              Call (667) 435-0059
            </a>
            <a href="/" className="border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold hover:text-navy transition-all duration-300">
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </>
  );
} 