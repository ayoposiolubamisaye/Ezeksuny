'use client';

import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Image src="/Logo.png" alt="EZEKSUNY Logo" width={180} height={180} className="object-contain rounded-xl bg-white p-4" />
          </div>
          <h1 className="font-title text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">EZEKSUNY</span>
            <br />
            <span className="text-white">Tailoring & Cleaning</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Professional tailoring, cleaning, and alteration services in Baltimore, MD. 
            Quality craftsmanship meets convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6674350059" className="bg-white !text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all text-center">
              Give us a call
            </a>
            <button className="bg-white !text-black px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-all">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Infinite Carousel Section */}
      <GalleryCarousel />

      {/* Process Section */}
      <section className="py-20 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-4xl font-bold text-center mb-16">
            <span className="gradient-text">THE EZEKSUNY PROCESS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-navy rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold border-4 border-navy shadow-lg">
                <span role="img" aria-label="calendar">📅</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-2">BOOK</h3>
              <p className="text-blue-100">Choose your service and schedule an appointment for a fitting.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-navy rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold border-4 border-navy shadow-lg">
                <span role="img" aria-label="ruler">📏</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-2">MEASURE</h3>
              <p className="text-blue-100">We take precise measurements of your garment(s) for the perfect fit.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-navy rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold border-4 border-navy shadow-lg">
                <span role="img" aria-label="needle">🧵</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-2">TAILOR</h3>
              <p className="text-blue-100">Expert craftsmanship to perfect your garments with precision.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-navy rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold border-4 border-navy shadow-lg">
                <span role="img" aria-label="delivery">📦</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-2">DELIVER</h3>
              <p className="text-blue-100">Your perfectly tailored garments delivered on time, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-4xl font-bold text-center mb-16">
            <span className="gradient-text">TAILORING SERVICES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-navy-light rounded-xl p-8 card-hover">
              <div className="w-12 h-12 bg-white text-navy rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">👔</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-4">ALTERATIONS</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• Uniform tailoring (school, military, work)</li>
                <li>• Pant & skirt alterations</li>
                <li>• Zipper & button repair</li>
                <li>• Same-day alterations</li>
              </ul>
            </div>
            <div className="bg-navy-light rounded-xl p-8 card-hover">
              <div className="w-12 h-12 bg-white text-navy rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">🎩</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-4">CUSTOM SUITS</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• Custom suit tailoring (men & women)</li>
                <li>• Business attire</li>
                <li>• Formal wear</li>
                <li>• Prom & special occasions</li>
              </ul>
            </div>
            <div className="bg-navy-light rounded-xl p-8 card-hover">
              <div className="w-12 h-12 bg-white text-navy rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">👰</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-4">WEDDING</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• Bridal dress alterations</li>
                <li>• Bridesmaid dress alterations</li>
                <li>• Wedding dress cleaning</li>
                <li>• Preservation services</li>
              </ul>
            </div>
            <div className="bg-navy-light rounded-xl p-8 card-hover">
              <div className="w-12 h-12 bg-white text-navy rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">🧵</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-4">CUSTOM DESIGN</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• Custom clothing design</li>
                <li>• Patchwork & mending</li>
                <li>• Creative alterations</li>
                <li>• Bespoke garments</li>
              </ul>
            </div>
            <div className="bg-navy-light rounded-xl p-8 card-hover">
              <div className="w-12 h-12 bg-white text-navy rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">🧼</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-4">DRY CLEANING</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• Gentle cleaning for delicate garments</li>
                <li>• Stain removal</li>
                <li>• High-end garment care</li>
                <li>• Wedding dress preservation</li>
              </ul>
            </div>
            <div className="bg-navy-light rounded-xl p-8 card-hover">
              <div className="w-12 h-12 bg-white text-navy rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">⚡</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-4">EXPRESS SERVICE</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• Same-day alterations</li>
                <li>• Rush orders</li>
                <li>• Emergency repairs</li>
                <li>• Quick turnaround</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-4xl font-bold text-center mb-16">
            <span className="gradient-text">CUSTOMER TESTIMONIALS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-navy rounded-xl p-8 card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white text-navy rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jeremi Duell</h4>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-yellow-400">
                      <span>★★★★★</span>
                    </div>
                    <span className="text-blue-100 text-sm">5 stars</span>
                  </div>
                  <p className="text-blue-100 text-sm">July 3rd, 2025</p>
                </div>
              </div>
              <p className="text-blue-50 italic">"Just moved to Baltimore and found this Tailor on google. Super fast dry clean just in time for my concert. I highly recommend because the service was quick and top notch"</p>
            </div>
            <div className="bg-navy rounded-xl p-8 card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white text-navy rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jimya Owens</h4>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-yellow-400">
                      <span>★★★★★</span>
                    </div>
                    <span className="text-blue-100 text-sm">5 stars</span>
                  </div>
                  <p className="text-blue-100 text-sm">July 2nd, 2025</p>
                </div>
              </div>
              <p className="text-blue-50 italic">"Impeccable job!! Needed an old dress opened up for the Beyonce concert. Added a piece and made perfect second revisions. 100/10"</p>
            </div>
            <div className="bg-navy rounded-xl p-8 card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white text-navy rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jean Seaborn</h4>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-yellow-400">
                      <span>★★★★★</span>
                    </div>
                    <span className="text-blue-100 text-sm">5 stars</span>
                  </div>
                  <p className="text-blue-100 text-sm">June 16th, 2025</p>
                </div>
              </div>
              <p className="text-blue-50 italic">"Words can't explain the work that EZ owner does. He will transform any article of clothing into your very own."</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-title text-4xl font-bold mb-6">
                <span className="gradient-text">MEET EZEKSUNY</span>
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                Hi, I'm the founder of EZEKSUNY Tailoring & Cleaning. With 24 years of experience in the industry, 
                I'm passionate about bringing exceptional service to Baltimore.
              </p>
              <p className="text-blue-100 mb-8">
              From flawless alterations to eco-friendly dry cleaning, we deliver! You can count on us for quality, convenience, and a perfect fit
              Look sharp. Feel confident. Choose EZEKSUNY.
              </p>
              <button className="bg-white !text-black px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-all">
                Learn More
              </button>
            </div>
            <div className="flex justify-center">
              <Image src="/Logo.png" alt="EZEKSUNY Logo" width={320} height={320} className="rounded-full object-contain w-80 h-80 bg-white p-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-4xl font-bold text-center mb-16">
            <span className="gradient-text">GET THE EZEKSUNY FIT</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-title text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-blue-100">5910 York Rd, Baltimore, MD 21212</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-100">(667) 435-0059</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm">🕒</span>
                  </div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <div className="text-blue-100">
                      <p>Monday–Friday: 8 AM–7 PM</p>
                      <p>Saturday: 8 AM–6 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.7331570765934!2d-76.61113367359302!3d39.36397178480326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80563880e5377%3A0xee432f5a881495c6!2s5910%20York%20Rd%2C%20Baltimore%2C%20MD%2021212!5e0!3m2!1sen!2sus!4v1751919349038!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EZEKSUNY Tailoring Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="tel:6674350059" className="bg-white !text-black px-12 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all inline-block">
              Give us a call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const galleryImages = [
  "509214291_694988946841955_4069598489533501815_n.jpg",
  "494683656_662116726795844_9139364769200123003_n (1).jpg",
  "491999281_644718968535620_1066741744683429412_n.jpg",
  "486405999_629866096687574_1141180367610689799_n.jpg",
  "480562182_619554704385380_6443033243955459859_n.jpg",
  "473793529_575562372117947_432943533574415590_n.jpg",
];

function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="embla bg-navy py-8 max-w-6xl mx-auto overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {galleryImages.map((img, idx) => (
            <div className="embla__slide min-w-[320px] max-w-[340px] h-[400px] rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-navy" key={img}>
              <Image src={`/images/${img}`} alt={`Gallery image ${idx + 1}`} width={340} height={400} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
