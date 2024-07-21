"use client";

import React from 'react';
import Slider from 'react-slick';

// Import testimonial images and quotes
import testimonial1 from "@/assets/image1.jpeg";
import testimonial2 from "@/assets/image2.jpeg";
import testimonial3 from "@/assets/image3.jpeg";

const testimonialData = [
  { 
    id: 1, 
    image: testimonial1, 
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
  },
  { 
    id: 2, 
    image: testimonial2, 
    quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
  },
  { id: 3, 
    image: testimonial3, 
    quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' 
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <section className="bg-blue-500 text-blue py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
        <Slider {...settings} className="max-w-4xl mx-auto">
          {testimonialData.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id} className="mx-auto max-w-md" />
          ))}
        </Slider>
      </div>
    </section>
  );
};

const TestimonialCard = ({testimonial}) => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-4">{testimonial.quote}</p>
        <div className="flex items-center">
          <div className="mr-4">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
              {testimonial.quote.charAt(0)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{testimonial.image}</h3>
            {/* <p className="text-gray-600">{testimonial.designation}</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection;
