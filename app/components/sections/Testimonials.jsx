'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      company: 'NUVO',
      logo: '/nuvo-logo.png',
      quote: "weleba makes running Nuvo Suites so much easier, everything's in one place, from bookings to housekeeping. It's extremely customisable - they customised everything according to our needs.",
      author: 'Jorge Venegas',
      position: 'General Manager',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      id: 2,
      company: 'Harrison Hall Hotel',
      logo: '/harrison-logo.png',
      quote: "We've been using weleba for 25 years and it continues to streamline our operations. The support team is exceptional and always there when we need them.",
      author: 'Stacy Dadson',
      position: 'General Manager',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 3,
      company: 'Wood River Inn',
      logo: '/wood-river-logo.png',
      quote: "weleba gave us the confidence to run our business efficiently. The system is intuitive and the training was quick. Our staff adapted within days.",
      author: 'Ryan Allison',
      position: 'Owner',
      avatar: 'https://i.pravatar.cc/150?img=8'
    }
  ];

  const reviews = [
    {
      name: 'Capterra',
      logo: 'https://via.placeholder.com/150x40/ffffff/0066FF?text=Capterra',
      rating: 4.7,
      totalRating: 5
    },
    {
      name: 'HotelTechReport',
      logo: 'https://via.placeholder.com/150x40/ffffff/666666?text=HotelTechReport',
      rating: 4.7,
      totalRating: 5
    },
    {
      name: 'Software Advice',
      logo: 'https://via.placeholder.com/150x40/ffffff/FF6B00?text=SoftwareAdvice',
      rating: 4.7,
      totalRating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Main Testimonial Card */}
        <div className="bg-[#0066FF] rounded-[3rem] p-12 lg:p-16 text-white relative overflow-hidden mb-8">
          {/* Company Logo - Top Left */}
          <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
            <div className="text-white font-bold text-2xl">
              NU<br/>VO
            </div>
          </div>

          {/* Quote Icon - Top Right */}
          <div className="absolute top-8 right-8 lg:top-12 lg:right-12">
            <Quote size={48} className="text-white/30" />
          </div>

          {/* Testimonial Content */}
          <div className="max-w-4xl mx-auto text-center pt-16 pb-8">
            <p className="text-2xl lg:text-3xl font-serif leading-relaxed mb-12">
              {testimonials[currentSlide].quote}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <img
                src={testimonials[currentSlide].avatar}
                alt={testimonials[currentSlide].author}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-lg">{testimonials[currentSlide].author}</p>
                <p className="text-white/80">{testimonials[currentSlide].position}</p>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all ${
                    index === currentSlide ? 'w-12 bg-white' : 'w-8 bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons with Inset */}
          <div className="absolute bottom-0 right-0 bg-white rounded-tl-[3rem] p-6 flex gap-3">
            <button
              onClick={prevSlide}
              disabled={testimonials.length <= 1}
              className="w-14 h-14 bg-[#0a1628] hover:bg-[#1a2638] rounded-2xl flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button
              onClick={nextSlide}
              disabled={testimonials.length <= 1}
              className="w-14 h-14 bg-[#0a1628] hover:bg-[#1a2638] rounded-2xl flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>
        </div>

        {/* Review Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#E8E6E1] rounded-3xl p-8 flex flex-col items-start justify-center"
            >
              <img
                src={review.logo}
                alt={review.name}
                className="h-8 mb-4 object-contain"
              />
              <div className="flex items-center gap-2">
                {renderStars(review.rating)}
                <span className="text-lg font-bold text-gray-900 ml-1">
                  {review.rating}/{review.totalRating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
