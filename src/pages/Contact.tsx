import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import SEO from '@/components/SEO';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Pre-llenar el asunto si viene de una experiencia específica
    const experience = searchParams.get('experience');
    if (experience === 'bali') {
      setFormData(prev => ({
        ...prev,
        subject: t('contact.form.subjectBali')
      }));
    } else if (experience === 'thailand') {
      setFormData(prev => ({
        ...prev,
        subject: t('contact.form.subjectThailand')
      }));
    }
  }, [searchParams, t]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'admin@flow2b.org',
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'service_cv54ukd',
        'template_yb9grrn',
        templateParams,
        'OkgZusH9KfDxFHjOq'
      );

      toast({
        title: t('contact.form.success'),
        description: t('contact.form.successMessage'),
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t('contact.form.error'),
        description: error instanceof Error ? error.message : t('contact.form.errorMessage'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={t('contact.title')}
        description={t('contact.subtitle')}
        keywords="contacto, Flow2b, viajes Asia, consultas viajes"
        canonical="/contact"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="bg-travel-teal text-white pt-32 pb-8">
        <div className="container text-center flex flex-col items-center justify-center">
          <img src="/noBgBlack.png" alt="Flow2B Logo" className="h-32 md:h-40 w-auto object-contain mb-4 mx-auto block" />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            {t('contact.subtitle')}
          </p>
        </div>
      </div>
      
      <section className="pt-4 pb-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
              <div className="mb-6 text-center">
                <p className="text-travel-sage text-lg leading-relaxed">
                  {t('contact.form.intro')}
                </p>
              </div>
              <div>
                <Label htmlFor="name">{t('contact.form.name')}</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">{t('contact.form.email')}</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                <Input 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="message">{t('contact.form.message')}</Label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-travel-terracotta hover:bg-travel-teal text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('common.loading') : t('contact.form.submit')}
                {isSubmitting && <span className="animate-spin ml-2">⏳</span>}
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-8">
        <div className="container">
          <div className="h-96 rounded-lg overflow-hidden">
            <img 
              src="/general/scene-with-diverse-young-people-being-digital-nomads-working-remotely-from-dreamy-locations.jpg" 
              alt="Trabajo remoto en destinos soñados" 
              className="w-full h-full object-cover"
              loading="lazy"
              width={1200}
              height={600}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
