"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  // Hizmet detaylarını tutan state
  const [selectedService, setSelectedService] = useState<any>(null);

  // WhatsApp Yönlendirme Fonksiyonu
  const handleWhatsApp = () => {
    window.open('https://wa.me/905414109452?text=Merhaba, premium klinik hizmetleriniz hakkında bilgi ve randevu almak istiyorum.', '_blank');
  };

  const services = [
    { 
      id: 1,
      video: '/implant-video.mp4', 
      title: 'Diş İmplantı', 
      shortDesc: 'Kayıp dişlerinize kalıcı ve doğal çözüm.',
      fullDesc: 'Eksik dişlerin yerini alan, çene kemiğine yerleştirilen yüksek kaliteli titanyum vidalardır. Doğal dişinize en yakın görünümü ve kusursuz çiğneme hissini sağlar. İşlem lokal anestezi altında, modern cerrahi yöntemlerimizle tamamen ağrısız bir şekilde gerçekleştirilir.'
    },
    { 
      id: 2,
      video: '/beyazlatma-video.mp4', 
      title: 'Diş Beyazlatma', 
      shortDesc: 'Işıltılı bir gülüş için modern yöntemler.',
      fullDesc: 'Özel geliştirilmiş jeller ve yeni nesil lazer ışınları kullanılarak diş yüzeyindeki lekelerin temizlenmesi işlemidir. Diş renginiz güvenli bir şekilde birkaç ton açılır. Sadece tek seansta bile gözle görülür, Hollywood standartlarında ışıltılı ve kalıcı bir beyazlık elde edilir.'
    },
    { 
      id: 3,
      video: '/ortodonti-video.mp4', 
      title: 'Ortodonti', 
      shortDesc: 'Kusursuz diş hizalaması ve estetik gülüş.',
      fullDesc: 'Çapraşık dişlerin ve uyumsuz çene ilişkilerinin kişiye özel şeffaf plaklar (Invisalign) veya modern estetik braketler ile düzeltilmesi tedavisidir. Tedavi sürecinde dışarıdan belli olmayan aparatlarla hem estetik bir gülüş hem de sağlıklı bir çiğneme fonksiyonu kazandırılır.'
    },
  ];

  return (
    <main className="bg-zinc-950 min-h-screen text-zinc-200 font-sans selection:bg-amber-500/30">
      
      {/* Sabit ve Şık Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-light tracking-widest text-white">
            PREMIUM <span className="font-bold text-amber-500">DENTAL</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
            <a href="#hero" className="hover:text-amber-500 transition-colors">Ana Sayfa</a>
            <a href="#hizmetler" className="hover:text-amber-500 transition-colors">Uzmanlıklarımız</a>
            <button 
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-amber-500 text-zinc-950 px-6 py-2.5 rounded-full font-bold hover:bg-amber-400 transition-all transform hover:scale-105"
            >
              <MessageCircle size={18} />
              Randevu Al
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Lüks Karartma Katmanı */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/60 to-zinc-950"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-amber-500 uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-semibold">
              Mükemmellik Standardı
            </h2>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              Gülüşünüz <br className="md:hidden" /> <span className="font-bold">Sanata Dönüşsün.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              İleri teknoloji, acısız tedavi protokolleri ve kişiye özel estetik yaklaşımla tanışın. Siz sadece gülümsemeye odaklanın.
            </p>
            <button 
              onClick={handleWhatsApp}
              className="group flex items-center gap-3 mx-auto bg-white text-zinc-950 px-8 py-4 text-lg rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300"
            >
              <MessageCircle size={24} />
              <span className="font-semibold">Hemen WhatsApp'tan Ulaşın</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-32 relative z-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Uzmanlık <span className="font-bold text-amber-500">Alanlarımız</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px] group cursor-pointer border border-white/5 bg-zinc-900"
                whileHover={{ y: -10 }}
              >
                <video
                  autoPlay loop muted playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                >
                  <source src={service.video} type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 text-left">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl font-light text-white mb-2">{service.title}</h3>
                      <p className="text-zinc-400 font-light">{service.shortDesc}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA Area */}
      <footer className="py-12 border-t border-white/10 bg-zinc-950 text-center">
        <p className="text-zinc-500 font-light mb-4">Mükemmel gülüşünüz için buradayız.</p>
        <p className="text-xl font-light tracking-wider text-white">PREMIUM <span className="text-amber-500 font-bold">DENTAL</span> © 2026</p>
      </footer>

      {/* Hizmet Detay Modalı (Tıklayınca Açılan Pencere) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Arka plan karartması (Tıklayınca kapanır) */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal İçeriği */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Kapatma Butonu */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-amber-500 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              {/* Sol Taraf Video */}
              <div className="md:w-2/5 h-64 md:h-auto relative">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src={selectedService.video} type="video/mp4" />
                </video>
              </div>

              {/* Sağ Taraf Metin */}
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-light text-white mb-4">{selectedService.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed mb-8 text-sm md:text-base">
                  {selectedService.fullDesc}
                </p>
                <button 
                  onClick={handleWhatsApp}
                  className="w-full bg-amber-500 text-zinc-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors"
                >
                  <MessageCircle size={20} />
                  Bu İşlem İçin Randevu Al
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}