import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(1, 'Required'),
  destination: z.string().min(1, 'Required'),
  startDate: z.string().min(1, 'Required'),
  endDate: z.string().min(1, 'Required'),
  accommodation: z.string().min(1, 'Required'),
  trainingLevel: z.string().min(1, 'Required'),
  specialRequirements: z.string().optional(),
  cardNumber: z.string().min(16, 'Invalid card number'),
  expiryDate: z.string().min(5, 'Invalid expiry date'),
  cvv: z.string().min(3, 'Invalid CVV'),
  cardholderName: z.string().min(1, 'Required'),
  terms: z.boolean().refine((val) => val === true, 'You must accept the terms')
});

type FormData = z.infer<typeof formSchema>;

export function BookingForm() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      destination: '',
      startDate: '',
      endDate: '',
      accommodation: '',
      trainingLevel: '',
      specialRequirements: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: '',
      terms: false
    }
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 2));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Calculate prices based on accommodation type
  const calculatePrices = () => {
    const accommodationType = form.watch('accommodation');
    let basePrice = 0;
    
    switch (accommodationType) {
      case 'standard':
        basePrice = 1200;
        break;
      case 'premium':
        basePrice = 1800;
        break;
      case 'luxury':
        basePrice = 2500;
        break;
      default:
        basePrice = 1200;
    }

    const taxes = basePrice * 0.21; // 21% VAT
    const total = basePrice + taxes;
    const deposit = total * 0.3; // 30% deposit
    const remaining = total - deposit;

    return {
      basePrice,
      taxes,
      total,
      deposit,
      remaining
    };
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>{t('booking.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('booking.form.firstName')}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('booking.form.lastName')}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('booking.form.email')}</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('booking.form.phone')}</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('booking.form.destination')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('booking.form.destination')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bali">Bali</SelectItem>
                          <SelectItem value="thailand">Thailand</SelectItem>
                          {/* Vietnam oculto temporalmente */}
                          {/* <SelectItem value="vietnam">Vietnam</SelectItem> */}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('booking.form.startDate')}</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('booking.form.endDate')}</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="accommodation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('booking.form.accommodation')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('booking.form.accommodation')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="standard">{t('booking.form.accommodationTypes.standard')}</SelectItem>
                            <SelectItem value="premium">{t('booking.form.accommodationTypes.premium')}</SelectItem>
                            <SelectItem value="luxury">{t('booking.form.accommodationTypes.luxury')}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="trainingLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('booking.form.trainingLevel')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('booking.form.trainingLevel')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="beginner">{t('booking.form.trainingLevels.beginner')}</SelectItem>
                            <SelectItem value="intermediate">{t('booking.form.trainingLevels.intermediate')}</SelectItem>
                            <SelectItem value="advanced">{t('booking.form.trainingLevels.advanced')}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="specialRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('booking.form.specialRequirements')}</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{t('booking.form.paymentSummary.title')}</h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>{t('booking.form.paymentSummary.subtotal')}</span>
                      <span>€{calculatePrices().basePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('booking.form.paymentSummary.taxes')}</span>
                      <span>€{calculatePrices().taxes.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>{t('booking.form.paymentSummary.total')}</span>
                      <span>€{calculatePrices().total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{t('booking.form.paymentSummary.deposit')}</span>
                      <span>€{calculatePrices().deposit.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{t('booking.form.paymentSummary.remaining')}</span>
                      <span>€{calculatePrices().remaining.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm">{t('booking.form.paymentSummary.paymentNotice')}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{t('booking.form.paymentDetails')}</h3>
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('booking.form.cardNumber')}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="expiryDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('booking.form.expiryDate')}</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="MM/YY" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cvv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('booking.form.cvv')}</FormLabel>
                          <FormControl>
                            <Input {...field} type="password" maxLength={3} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="cardholderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('booking.form.cardholderName')}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            {t('booking.form.terms')}
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between">
              {currentStep > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  {t('booking.form.back')}
                </Button>
              )}
              {currentStep < 2 ? (
                <Button type="button" onClick={nextStep}>
                  {t('booking.form.next')}
                </Button>
              ) : (
                <Button type="submit">
                  {t('booking.form.submit')}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
} 