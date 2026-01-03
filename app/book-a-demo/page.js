import DemoForm from './components/DemoForm';
import Testimonials from '../components/sections/Testimonials';
import LogoSlideshow from '../components/sections/LogoSlideshow';

export const metadata = {
    title: 'Book a Demo | weleba - See the Future of Hotel Management',
    description: 'Schedule a personalized demo of weleba property management system. See how our all-in-one platform can streamline your hotel operations.',
};

export default function BookADemoPage() {
    return (
        <main className="bg-white">
            <DemoForm />
            <div className="py-24 bg-[#f9f7f2]">
                <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0a1628] mb-6">Hear What Our Customers Have To Say</h2>
                    <p className="text-xl text-gray-600">Join thousands of hotels worldwide who rely on weleba every day.</p>
                </div>
                <Testimonials />
            </div>
            <LogoSlideshow />
        </main>
    );
}
