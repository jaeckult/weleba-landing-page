import Link from 'next/link';
import { Button } from '../components/ui';
import { Store, ArrowLeft, Rocket } from 'lucide-react';

export default function MarketplaceComingSoon() {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                    <Store className="w-10 h-10 text-[#0066FF]" />
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-[#0a1628] mb-6 leading-tight">
                    Marketplace Coming Soon
                </h1>

                <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg mx-auto">
                    We are building a comprehensive ecosystem of integrations to help you connect your favorite tools with weleba.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/">
                        <Button variant="outline" className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Button>
                    </Link>
                 
                </div>
            </div>
        </div>
    );
}
