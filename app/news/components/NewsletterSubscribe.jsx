'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const NewsletterSubscribe = () => {
    const { locale } = useLanguage();
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubscribed(true);
            setIsLoading(false);
            setEmail('');
        }, 1000);
    };

    const strings = {
        en: {
            title: 'Subscribe to our newsletter',
            description: 'Get the latest weleba updates, hospitality insights, and industry news delivered straight to your inbox.',
            placeholder: 'Enter your email',
            buttonLabel: 'Subscribe',
            subscribing: 'Subscribing...',
            privacy: 'We respect your privacy. Unsubscribe at any time.',
            thankYou: 'Thank you for subscribing!',
            successMessage: "You'll receive our latest updates in your inbox soon."
        },
        am: {
            title: 'ለዜና መጽሔታችን ይመዝገቡ',
            description: 'የቅርብ ጊዜ የweleba ማሻሻያዎችን፣ የመስተንግዶ ግንዛቤዎችን እና የኢንዱስትሪ ዜናዎችን በኢሜልዎ ያግኙ።',
            placeholder: 'ኢሜልዎን ያስገቡ',
            buttonLabel: 'ይመዝገቡ',
            subscribing: 'በመመዝገብ ላይ...',
            privacy: 'የእርስዎን ግላዊነት እናከብራለን። በማንኛውም ጊዜ ከምዝገባ መውጣት ይችላሉ።',
            thankYou: 'ስለተመዘገቡ እናመሰግናለን!',
            successMessage: 'የቅርብ ጊዜ መረጃዎቻችንን በቅርቡ በኢሜልዎ ይደርሰዎታል።'
        }
    }[locale];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="max-w-4xl mx-auto text-center">
                {!isSubscribed ? (
                    <>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-8 h-8 text-white" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                            {strings.title}
                        </h2>

                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            {strings.description}
                        </p>

                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={strings.placeholder}
                                    required
                                    className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                >
                                    {isLoading ? strings.subscribing : strings.buttonLabel}
                                </button>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">
                                {strings.privacy}
                            </p>
                        </form>
                    </>
                ) : (
                    <div className="py-8">
                        <div className="w-20 h-20 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-green-400" />
                        </div>
                        <h2 className="text-4xl font-serif font-bold text-white mb-4">
                            {strings.thankYou}
                        </h2>
                        <p className="text-xl text-gray-300">
                            {strings.successMessage}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsletterSubscribe;
