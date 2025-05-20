import React, { useEffect } from 'react';
import { Briefcase, Users, Heart, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-travel-teal text-white pt-32 pb-16">
        <div className="container text-center flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/logo.jfif" alt="Flow2Bali Logo" className="h-20 w-20 rounded-full object-cover mr-4" />
            <h1 className="text-4xl md:text-5xl font-serif">{t('about.title')}</h1>
          </div>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            {t('about.subtitle')}
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-travel-dark mb-6">{t('about.ourStory.title')}</h2>
              <p className="text-travel-sage mb-4">
                {t('about.ourStory.paragraph1')}
              </p>
              <p className="text-travel-sage mb-4">
                {t('about.ourStory.paragraph2')}
              </p>
              <p className="text-travel-sage">
                {t('about.ourStory.paragraph3')}
              </p>
            </div>
            <div>
              <img 
                src="/general/dos-boxeadores-luchan-con-las-artes-marciales-del-muay-thai.jpg" 
                alt="El equipo de Flow2bali" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-travel-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-travel-dark mb-4">{t('about.values.title')}</h2>
            <p className="text-travel-sage max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-travel-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-travel-dark">{t('about.values.passion.title')}</h3>
              <p className="text-travel-sage">
                {t('about.values.passion.description')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-travel-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-travel-dark">{t('about.values.experience.title')}</h3>
              <p className="text-travel-sage">
                {t('about.values.experience.description')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-travel-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-travel-dark">{t('about.values.sustainability.title')}</h3>
              <p className="text-travel-sage">
                {t('about.values.sustainability.description')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-travel-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-travel-dark">{t('about.values.community.title')}</h3>
              <p className="text-travel-sage">
                {t('about.values.community.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-travel-dark mb-4">{t('about.team.title')}</h2>
            <p className="text-travel-sage max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {name: "Elena Rodríguez", role: "Fundadora & CEO", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"},
              {name: "Carlos Chen", role: "Director de Operaciones Asia", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"},
              {name: "Sofía Kim", role: "Especialista en Japón", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"},
              {name: "Miguel Tanaka", role: "Guía Senior", image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349"}
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="relative mb-4 mx-auto w-40 h-40 rounded-full overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-serif text-travel-dark">{member.name}</h3>
                <p className="text-travel-sage">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
