'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function Services() {
  const [openService, setOpenService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  const services = [
    {
      title: "MEN'S ALTERATIONS",
      icon: "👔",
      description: "Professional alterations for men with precision fitting.",
      features: [
        "Pants alterations (hemming, waist, length)",
        "Suit alterations (jackets, trousers, sleeves)",
        "Shirt alterations (sleeves, waist, length)",
        "Jacket alterations (sleeves, shoulders, length)",
        "Tie alterations and repairs",
        "Zipper & button repair",
        "Same-day alterations available"
      ]
    },
    {
      title: "WOMEN'S ALTERATIONS",
      icon: "👗",
      description: "Professional alterations for women with precision fitting.",
      features: [
        "Pants alterations (hemming, waist, length)",
        "Skirt alterations (hemming, waist, length)",
        "Dress alterations (hemming, fitting, sleeves)",
        "Blouse alterations (sleeves, waist, length)",
        "Jacket alterations (sleeves, shoulders, length)",
        "Zipper & button repair",
        "Same-day alterations available"
      ]
    },
    {
      title: "CUSTOM SUITS",
      icon: "🎩",
      description: "Bespoke suits tailored to perfection for men and women.",
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
      description: "Create garments from scratch with custom design services.",
      features: [
        "Custom clothing design",
        "Pattern making",
        "Fabric selection guidance",
        "Multiple fittings included"
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
            Give us a call
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
            
            {/* Gallery Carousel */}
            <div className="mb-16">
              <h3 className="font-title text-2xl font-bold mb-8 text-white">
            
              </h3>
              <GalleryCarousel />
            </div>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From quick alterations to bespoke creations, we deliver exceptional craftsmanship 
              with attention to every detail. Your perfect fit is our priority.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-navy border-2 border-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Service Header - Always Visible */}
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => toggleService(index)}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white text-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <h3 className="font-title text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="flex justify-center">
                    <div className={`w-8 h-8 transition-transform duration-300 ${openService === index ? 'rotate-180' : ''}`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Dropdown Content */}
                <div className={`overflow-hidden transition-all duration-300 ${openService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 border-t border-navy-light">
                    <ul className="text-blue-100 space-y-4 mt-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-gold mr-3 mt-1 text-lg">✓</span>
                          <span className="text-sm leading-relaxed">{feature}</span>
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

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-title text-3xl font-bold text-black mb-4">
              From Wedding Dresses to Special Occasions, We've Got You Covered
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <Image 
                src="/images4/z7.webp" 
                alt="Gallery image" 
                width={300} 
                height={200} 
                className="object-cover" 
                loading="lazy" 
              />
            </div>
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
              Give us a call
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

const galleryImages = [
  "z4.webp",
  "(Upload-from-mobile-1743186240)1000004327.webp",
  "(Upload-from-mobile-1743186117)1000004329.webp",
  "(Upload-from-mobile-1743185935)1000004333.webp",
  "(Upload-from-mobile-1743180789)1000004324.webp",
  "(Upload-from-mobile-1743088282)1000004223.webp",
  "(Upload-from-mobile-1743175284)1000004222.webp",
  // Duplicate images for better looping
  "z4.webp",
  "(Upload-from-mobile-1743186240)1000004327.webp",
  "(Upload-from-mobile-1743186117)1000004329.webp",
  "(Upload-from-mobile-1743185935)1000004333.webp",
  "(Upload-from-mobile-1743180789)1000004324.webp",
  "(Upload-from-mobile-1743088282)1000004223.webp",
  "(Upload-from-mobile-1743175284)1000004222.webp",
];

const galleryImages4 = [
  "%28Upload-from-mobile-1743171272%291000004220.jpg_1.webp",
  "z7.webp",
  "%28Upload-from-mobile-1743175183%291000004218.jpg_1.webp",
  "%28Upload-from-mobile-1743175284%291000004222.jpg_3.webp",
  "%28Upload-from-mobile-1743175465%291000004216.jpg_6.webp",
  "%28Upload-from-mobile-1743175569%291000004221.jpg.webp",
  "%28Upload-from-mobile-1743175767%291000004225.jpg_1.webp",
  "%28Upload-from-mobile-1743175868%291000004217.jpg_1.webp",
  "%28Upload-from-mobile-1743176072%291000004213.jpg_3.webp",
  "%28Upload-from-mobile-1743176174%291000004214.jpg_1.webp",
  "%28Upload-from-mobile-1743186578%291000004328.jpg_3.webp",
  "%28Upload-from-mobile-1743188119%291000004334.jpg_5.webp",
];

function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: false
  });

  useEffect(() => {
    if (!emblaApi) return;
    
    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 1500);
    
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {galleryImages.map((img, idx) => (
            <div className="embla__slide min-w-[200px] max-w-[250px] h-[250px] rounded-lg overflow-hidden shadow-lg" key={`${img}-${idx}`}>
              <Image src={`/images2/${img}`} alt={`Gallery image ${idx + 1}`} width={250} height={250} className="object-cover w-full h-full" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 