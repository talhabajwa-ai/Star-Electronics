import { useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-lg">Testimonials</span>
          <h2 className="heading-secondary mt-2">What Our Clients Say</h2>
          <p className="text-dark-gray mt-4 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
                    {/* Quote Icon */}
                    <div className="text-6xl text-primary mb-6">"</div>
                    
                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-primary text-xl">★</span>
                      ))}
                    </div>
                    
                    {/* Comment */}
                    <p className="text-dark-gray text-lg mb-6 italic">
                      {testimonial.comment}
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-4xl">{testimonial.image}</span>
                      <div className="text-left">
                        <p className="font-bold text-black">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-dark-gray transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-dark-gray transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
