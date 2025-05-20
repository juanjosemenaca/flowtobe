import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !email.includes('@')) {
      toast({
        title: t('common.error'),
        description: t('common.invalidEmail'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: t('common.success'),
        description: t('newsletter.successMessage'),
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-travel-teal py-16 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">{t('footer.newsletter')}</h2>
          <p className="text-lg opacity-90 mb-8">
            {t('footer.newsletterText')}
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder={t('common.email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-travel-dark placeholder:text-travel-sage"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-travel-terracotta hover:bg-travel-gold text-white"
            >
              {isSubmitting ? t('common.loading') : t('footer.subscribe')}
            </Button>
          </form>
          
          <p className="text-sm opacity-80 mt-6">
            {t('newsletter.privacyNotice')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
