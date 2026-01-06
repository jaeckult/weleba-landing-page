'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { testimonialsData as enTestimonials, reviewsData as enReviews } from '../../lib/testimonialsData';
import { testimonialsData as amTestimonials, reviewsData as amReviews } from '../../lib/testimonialsData.am';
import { useLanguage } from '../../context/LanguageContext';

const Testimonials = () => {
  const { locale } = useLanguage();
  const testimonials = locale === 'am' ? amTestimonials : enTestimonials;
  const reviews = locale === 'am' ? amReviews : enReviews;
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Testimonial Card */}
        <div className="bg-[#0066FF] rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16 text-white relative overflow-hidden mb-6 sm:mb-8">
          {/* Company Logo - Top Left */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-12 lg:left-12">
            <div className="text-white font-bold text-lg sm:text-xl lg:text-2xl uppercase tracking-tighter">
              {testimonials[currentSlide].company}
            </div>
          </div>

          {/* Quote Icon - Top Right */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-12 lg:right-12">
            <Quote size={32} className="text-white/30 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </div>

          {/* Testimonial Content */}
          <div className="max-w-4xl mx-auto text-center pt-12 sm:pt-14 lg:pt-16 pb-16 sm:pb-12 lg:pb-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif leading-relaxed mb-8 sm:mb-10 lg:mb-12 px-2 sm:px-4">
              {testimonials[currentSlide].quote}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <img
                src={testimonials[currentSlide].avatar}
                alt={testimonials[currentSlide].author}
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-base sm:text-lg">{testimonials[currentSlide].author}</p>
                <p className="text-white/80 text-sm sm:text-base">{testimonials[currentSlide].position}</p>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mb-4 sm:mb-6 lg:mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all ${index === currentSlide ? 'w-8 sm:w-10 lg:w-12 bg-white' : 'w-4 sm:w-6 lg:w-8 bg-white/40'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons with Inset */}
          <div className="absolute bottom-0 right-0 bg-white rounded-tl-2xl sm:rounded-tl-[2rem] lg:rounded-tl-[3rem] p-3 sm:p-4 lg:p-6 flex gap-2 sm:gap-3">
            <button
              onClick={prevSlide}
              disabled={testimonials.length <= 1}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#0a1628] hover:bg-[#1a2638] rounded-xl sm:rounded-2xl flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={testimonials.length <= 1}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#0a1628] hover:bg-[#1a2638] rounded-xl sm:rounded-2xl flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Review Platforms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#E8E6E1] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-start justify-center"
            >
              <img
                src={review.logo}
                alt={review.name}
                className="h-6 sm:h-8 mb-3 sm:mb-4 object-contain"
              />
              <div className="flex items-center gap-2">
                {renderStars(review.rating)}
                <span className="text-base sm:text-lg font-bold text-gray-900 ml-1">
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
