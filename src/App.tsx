import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Leaf, 
  Heart, 
  Target, 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  ChevronRight, 
  ArrowRight,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white">
            <Leaf size={24} />
          </div>
          <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            Nourish<span className="text-brand-aqua">&</span>Glow
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-brand-aqua transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-aqua text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-aqua/90 transition-all shadow-md hover:shadow-lg">
            Réserver
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-slate-600 hover:text-brand-aqua"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-brand-aqua text-white py-3 rounded-xl font-semibold">
                Prendre rendez-vous
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-beige -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-aqua/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green rounded-full text-sm font-bold mb-6">
            Nutrition & Bien-être en Tunisie
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
            Retrouvez votre <br />
            <span className="text-brand-aqua">équilibre</span> naturellement.
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Spécialiste en rééquilibrage alimentaire et perte de poids saine. 
            Transformez votre relation avec la nourriture pour une vie plus énergique et épanouie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-aqua text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-aqua/90 transition-all shadow-xl shadow-brand-aqua/20 flex items-center justify-center gap-2 group">
              Prendre rendez-vous
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-brand-green text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-green/90 transition-all shadow-xl shadow-brand-green/20 flex items-center justify-center gap-2">
              Découvrir mes programmes
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
              alt="Nutritionniste souriante" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 animate-float">
            <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center text-white">
              <Heart size={24} fill="currentColor" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Santé & Vitalité</p>
              <p className="text-xs text-slate-500">Approche bienveillante</p>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 animate-float [animation-delay:1.5s]">
            <div className="w-12 h-12 bg-brand-aqua rounded-2xl flex items-center justify-center text-white">
              <Target size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Objectifs Atteints</p>
              <p className="text-xs text-slate-500">Résultats durables</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Target className="text-brand-aqua" size={32} />,
      title: "Programme personnalisé",
      desc: "Un plan adapté à votre métabolisme, vos goûts et votre mode de vie."
    },
    {
      icon: <Heart className="text-brand-green" size={32} />,
      title: "Suivi bienveillant",
      desc: "Un accompagnement régulier pour garder la motivation et ajuster le tir."
    },
    {
      icon: <CheckCircle2 className="text-brand-aqua" size={32} />,
      title: "Résultats durables",
      desc: "Apprenez à manger sainement sans frustration pour stabiliser votre poids."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
              alt="Lifestyle sain" 
              className="w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-green/20 rounded-full -z-10 blur-2xl" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Bonjour, je suis <span className="text-brand-green">Amira</span>, votre partenaire santé.
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Passionnée par la nutrition et le bien-être, j'aide les femmes et les hommes en Tunisie à retrouver leur vitalité à travers une alimentation équilibrée et savoureuse.
            </p>
            <p>
              Mon approche n'est pas basée sur les régimes restrictifs, mais sur l'éducation nutritionnelle et le plaisir de manger. Ensemble, nous construirons des habitudes qui durent toute une vie.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-aqua" size={20} />
                <span className="text-sm font-semibold text-slate-700">Diplômée d'État</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-aqua" size={20} />
                <span className="text-sm font-semibold text-slate-700">Expertise Perte de Poids</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-aqua" size={20} />
                <span className="text-sm font-semibold text-slate-700">Nutrition Sportive</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-aqua" size={20} />
                <span className="text-sm font-semibold text-slate-700">Coaching Motivationnel</span>
              </div>
            </div>
            
            <div className="mt-10 p-8 bg-white rounded-3xl border-l-8 border-brand-aqua shadow-lg italic text-slate-700 relative">
              <span className="absolute -top-4 -left-4 text-6xl text-brand-aqua/20 font-serif">"</span>
              La santé ne se trouve pas dans une assiette parfaite, mais dans un équilibre qui nourrit aussi bien le corps que l'esprit.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Rééquilibrage alimentaire",
      icon: <Leaf className="text-brand-aqua" size={28} />,
      desc: "Apprenez à composer vos repas de manière équilibrée sans frustration."
    },
    {
      title: "Perte de poids durable",
      icon: <Target className="text-brand-aqua" size={28} />,
      desc: "Une méthode progressive pour perdre du poids et ne jamais le reprendre."
    },
    {
      title: "Nutrition sportive",
      icon: <Target className="text-brand-aqua" size={28} />,
      desc: "Optimisez vos performances et votre récupération grâce à l'alimentation."
    },
    {
      title: "Coaching en ligne",
      icon: <MessageCircle className="text-brand-aqua" size={28} />,
      desc: "Un suivi personnalisé où que vous soyez via des consultations vidéo."
    },
    {
      title: "Programme personnalisé",
      icon: <Heart className="text-brand-aqua" size={28} />,
      desc: "Un plan sur mesure adapté à vos besoins spécifiques et vos contraintes."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Mes Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Des solutions adaptées à chaque profil pour une transformation sereine et efficace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-aqua/10 flex items-center justify-center mb-6 group-hover:bg-brand-aqua group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-4">{s.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{s.desc}</p>
              <button className="flex items-center gap-2 text-brand-aqua font-bold hover:gap-3 transition-all">
                En savoir plus <ChevronRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sonia B.",
      text: "Grâce à Amira, j'ai perdu 12kg en 6 mois sans jamais avoir l'impression d'être au régime. Une vraie révélation !",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=sonia"
    },
    {
      name: "Mehdi K.",
      text: "Le suivi est incroyable. Elle est toujours là pour motiver et donner des conseils pratiques. Je me sens beaucoup plus énergique.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=mehdi"
    },
    {
      name: "Ines R.",
      text: "Une approche humaine et professionnelle. Les recettes sont délicieuses et faciles à préparer au quotidien.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=ines"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Ils ont transformé leur vie</h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="text-brand-green fill-brand-green" size={20} />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] shadow-md hover:shadow-xl transition-shadow relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full border-2 border-brand-green" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="text-brand-green fill-brand-green" size={12} />)}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramGrid = () => {
  const images = [
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=400",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <Instagram className="text-brand-aqua" /> Suivez-moi sur Instagram
          </h2>
          <p className="text-slate-600">Conseils quotidiens, recettes et motivation.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <img src={img} alt="Instagram post" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-aqua/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors flex items-center gap-2 mx-auto">
            <Instagram size={20} /> @nourish_glow_tn
          </button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Contactez-moi</h2>
            <p className="text-lg text-slate-600 mb-12">
              Une question ? Envie de commencer votre transformation ? N'hésitez pas à m'envoyer un message ou à prendre rendez-vous directement.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-aqua/10 rounded-2xl flex items-center justify-center text-brand-aqua shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Cabinet</h4>
                  <p className="text-slate-600">Ennasr 2, Tunis, Tunisie</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Téléphone / WhatsApp</h4>
                  <p className="text-slate-600">+216 22 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-aqua/10 rounded-2xl flex items-center justify-center text-brand-aqua shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">contact@nourishglow.tn</p>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 rounded-3xl overflow-hidden shadow-inner border border-slate-100 grayscale hover:grayscale-0 transition-all">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.363721345678!2d10.156789!3d36.854321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3456789abcde%3A0x1234567890abcdef!2sEnnasr%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1234567890123" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-beige p-10 rounded-[40px] shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nom complet</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-brand-aqua shadow-sm" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-brand-aqua shadow-sm" placeholder="votre@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Sujet</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-brand-aqua shadow-sm">
                  <option>Rééquilibrage alimentaire</option>
                  <option>Perte de poids</option>
                  <option>Nutrition sportive</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-brand-aqua shadow-sm" placeholder="Comment puis-je vous aider ?"></textarea>
              </div>
              <button className="w-full bg-brand-aqua text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-aqua/90 transition-all shadow-lg shadow-brand-aqua/20">
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white">
                <Leaf size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Nourish<span className="text-brand-aqua">&</span>Glow
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Votre nutritionniste de confiance en Tunisie pour une approche saine, durable et bienveillante de l'alimentation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-aqua transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-green transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Liens rapides</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-aqua transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-brand-aqua transition-colors">À propos</a></li>
              <li><a href="#services" className="hover:text-brand-aqua transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-brand-aqua transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Horaires</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Lun - Ven : 09:00 - 18:00</li>
              <li>Samedi : 09:00 - 13:00</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Nourish & Glow. Tous droits réservés. Design by AI Studio.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingBookingButton = () => {
  return (
    <motion.button 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-40 bg-brand-aqua text-white p-5 rounded-full shadow-2xl shadow-brand-aqua/40 flex items-center gap-3 group"
    >
      <Calendar size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
        Réserver maintenant
      </span>
    </motion.button>
  );
};

// --- Main App Component ---

export default function App() {
  return (
    <div className="font-sans selection:bg-brand-aqua/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Testimonials />
        <InstagramGrid />
        <Contact />
      </main>
      <Footer />
      <FloatingBookingButton />
    </div>
  );
}
