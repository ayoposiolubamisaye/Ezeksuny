'use client';

import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Fallback background */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70"></div>
          
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source src="/video/0728(2)-compressed.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-navy/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-50 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <a href="https://g.co/kgs/t4Prcnv" target="_blank" rel="noopener noreferrer">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <Image src="/Logo-optimized.webp" alt="EZEKSUNY Logo" width={200} height={200} className="object-contain" priority />
              </div>
            </a>
          </div>
          <h1 className="font-title text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gold drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">EZEKSUNY</span>
            <br />
            <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">Tailoring & Cleaners LLC</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            Expert alterations, tailoring, and premium dry cleaning services in Baltimore, MD
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => window.location.href = '/services'} className="border-2 border-gold text-white px-8 py-4 text-lg font-semibold hover:bg-gold hover:text-navy transition-all duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer bg-navy/80 backdrop-blur-sm">
              VIEW SERVICES
            </button>
            <button onClick={() => window.location.href = 'tel:6674350059'} className="border-2 border-gold text-white px-8 py-4 text-lg font-semibold hover:bg-gold hover:text-navy transition-all duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer bg-navy/80 backdrop-blur-sm">
              GIVE US A CALL
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          <div className="w-3 h-3 bg-gold rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-4xl font-bold text-center mb-16 text-black">
            OUR WORK
          </h2>
          <GalleryCarousel />
          
          {/* Second Carousel */}
          <div className="mt-8">
            <GalleryCarousel2 />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-4xl font-bold text-center mb-16 text-white">
            THE EZEKSUNY PROCESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white text-navy rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:bg-gold transition-all duration-300">
                <span role="img" aria-label="calendar">📅</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-4 text-white">BOOK</h3>
              <p className="text-blue-100">Choose your service and schedule an appointment for a fitting.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white text-navy rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:bg-gold transition-all duration-300">
                <span role="img" aria-label="ruler">📏</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-4 text-white">MEASURE</h3>
              <p className="text-blue-100">We take precise measurements of your garment(s) for the perfect fit.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white text-navy rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:bg-gold transition-all duration-300">
                <span role="img" aria-label="needle">🧵</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-4 text-white">TAILOR</h3>
              <p className="text-blue-100">Expert craftsmanship to perfect your garments with precision.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white text-navy rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:bg-gold transition-all duration-300">
                <span role="img" aria-label="delivery">📦</span>
              </div>
              <h3 className="font-title text-xl font-semibold mb-4 text-white">DELIVER</h3>
              <p className="text-blue-100">Your perfectly tailored garments delivered on time, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-4xl font-bold text-center mb-6 text-white">
            CUSTOMER TESTIMONIALS
          </h2>
          <div className="text-center mb-16">
            <a href="https://g.co/kgs/t4Prcnv" target="_blank" rel="noopener noreferrer" className="bg-gold text-navy px-6 py-2 rounded-lg font-semibold hover:bg-white transition-all duration-300 inline-block border-2 border-white">
              View more
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-navy-light rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Jeremi Duell</h4>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-gold">
                      <span>★★★★★</span>
                    </div>
                    <span className="text-blue-100 text-sm">5 stars</span>
                  </div>
                  <p className="text-blue-100 text-sm">July 3rd, 2025</p>
                </div>
              </div>
              <p className="text-white italic">"Just moved to Baltimore and found this Tailor on google. Super fast dry clean just in time for my concert. I highly recommend because the service was quick and top notch"</p>
            </div>
            <div className="bg-navy-light rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Jimya Owens</h4>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-gold">
                      <span>★★★★★</span>
                    </div>
                    <span className="text-blue-100 text-sm">5 stars</span>
                  </div>
                  <p className="text-blue-100 text-sm">July 2nd, 2025</p>
                </div>
              </div>
              <p className="text-white italic">"Impeccable job!! Needed an old dress opened up for the Beyonce concert. Added a piece and made perfect second revisions. 100/10"</p>
            </div>
            <div className="bg-navy-light rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Jean Seaborn</h4>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-gold">
                      <span>★★★★★</span>
                    </div>
                    <span className="text-blue-100 text-sm">5 stars</span>
                  </div>
                  <p className="text-blue-100 text-sm">June 16th, 2025</p>
                </div>
              </div>
              <p className="text-white italic">"Words can't explain the work that EZ owner does. He will transform any article of clothing into your very own."</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-title text-4xl font-bold mb-6 text-navy">
                MEET EZEKSUNY
              </h2>
              <h3 className="font-title text-2xl font-semibold mb-4 text-black">
                About Me
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                Hi, I'm the founder of EZEKSUNY Tailoring & Cleaners LLC. With 24 years of experience in the industry, 
                I'm passionate about bringing exceptional service to Baltimore.
              </p>
              <p className="text-gray-600 mb-8">
                From flawless alterations to eco-friendly dry cleaning, we deliver! You can count on us for quality, convenience, and a perfect fit.
                Look sharp. Feel confident. Choose EZEKSUNY.
              </p>
              <a href="tel:6674350059" className="bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold transition-all duration-300 inline-block">
                Book a Fitting
              </a>
            </div>
            <div className="flex justify-center">
              <Image src="/aboutpic-compressed.webp" alt="About EZEKSUNY" width={400} height={500} className="rounded-lg object-cover w-80 h-96 shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-4xl font-bold text-center mb-16 text-white">
            GET THE EZEKSUNY FIT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-title text-2xl font-semibold mb-8 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center mr-6">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-gray-300">5910 York Rd, Baltimore, MD 21212</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center mr-6">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-gray-300">Give us a call</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center mr-6">
                    <span className="text-xl">🕒</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Hours</p>
                    <div className="text-gray-300">
                      <p>Monday–Friday: 8 AM–7 PM</p>
                      <p>Saturday: 8 AM–6 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
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
            <a href="tel:6674350059" className="bg-gold text-navy px-12 py-4 rounded-lg font-semibold text-lg hover:bg-white transition-all duration-300 inline-block">
              Give us a call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const galleryImages = [
  "509214291_694988946841955_4069598489533501815_n.webp",
  "494683656_662116726795844_9139364769200123003_n (1).webp",
  "491999281_644718968535620_1066741744683429412_n.webp",
  "486405999_629866096687574_1141180367610689799_n.webp",
  "480562182_619554704385380_6443033243955459859_n.webp",
  "473793529_575562372117947_432943533574415590_n.webp",
];

const galleryImages3 = [
  "z4-compressed.webp",
  "(Upload-from-mobile-1743087522)1000004224-compressed.webp",
  "(Upload-from-mobile-1743171272)1000004220-compressed.webp",
  "(Upload-from-mobile-1743175183)1000004218-compressed.webp",

  "(Upload-from-mobile-1743175465)1000004216-compressed.webp",
  "(Upload-from-mobile-1743175569)1000004221-compressed.webp",
  "(Upload-from-mobile-1743175868)1000004217-compressed.webp",
  "(Upload-from-mobile-1743176072)1000004213-compressed.webp",
  "(Upload-from-mobile-1743176174)1000004214-compressed.webp",
  "(Upload-from-mobile-1743176311)1000004219-compressed.webp",
  "(Upload-from-mobile-1743186240)1000004327-compressed.webp",
  "(Upload-from-mobile-1743186578)1000004328(1)-compressed.webp",
  "(Upload-from-mobile-1743187329)1000004325-compressed.webp",
  "(Upload-from-mobile-1743187508)1000004330(1)-compressed.webp",
  "(Upload-from-mobile-1743188328)1000004332-compressed.webp",
];

function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          {galleryImages.map((img, idx) => (
            <div className="embla__slide min-w-[200px] max-w-[250px] h-[250px] rounded-lg overflow-hidden shadow-lg" key={img}>
              <Image src={`/images/${img}`} alt={`Gallery image ${idx + 1}`} width={250} height={250} className="object-cover w-full h-full" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryCarousel2() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          {galleryImages3.map((img, idx) => (
            <div className="embla__slide min-w-[200px] max-w-[250px] h-[250px] rounded-lg overflow-hidden shadow-lg" key={img}>
              <Image src={`/images3/${img}`} alt={`Gallery image ${idx + 1}`} width={250} height={250} className="object-cover w-full h-full" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
