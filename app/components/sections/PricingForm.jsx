'use client';

import { useState } from 'react';
import { Button, Input } from '../ui';
import { Send } from 'lucide-react';
import { pricingFormContent as enPricingForm } from '../../lib/pricingData';
import { pricingFormContent as amPricingForm } from '../../lib/pricingData.am';
import { useLanguage } from '../../context/LanguageContext';

const PricingForm = () => {
    const { locale } = useLanguage();
    const pricingFormContent = locale === 'am' ? amPricingForm : enPricingForm;
    const { success, fields, submitButton, privacyNote } = pricingFormContent;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{success.title}</h3>
                <p className="text-gray-600">
                    {success.message}
                </p>
                <Button
                    variant="ghost"
                    className="mt-8"
                    onClick={() => setIsSubmitted(false)}
                >
                    {success.buttonText}
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
                <Input
                    label={fields.firstName.label}
                    placeholder={fields.firstName.placeholder}
                    required
                />
                <Input
                    label={fields.lastName.label}
                    placeholder={fields.lastName.placeholder}
                    required
                />
            </div>
            <Input
                type="email"
                label={fields.email.label}
                placeholder={fields.email.placeholder}
                required
            />
            <Input
                label={fields.property.label}
                placeholder={fields.property.placeholder}
                required
            />

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {fields.rooms.label}
                </label>
                <select
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                    required
                >
                    <option value="">{fields.rooms.placeholder}</option>
                    {fields.rooms.options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {fields.message.label}
                </label>
                <textarea
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all min-h-[120px]"
                    placeholder={fields.message.placeholder}
                ></textarea>
            </div>

            <Button
                type="submit"
                fullWidth
                isLoading={isSubmitting}
                size="lg"
            >
                {submitButton}
            </Button>

            <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed">
                {privacyNote}
            </p>
        </form>
    );
};

export default PricingForm;
