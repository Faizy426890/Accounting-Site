import React from 'react';
import Image from 'next/image';

export default function AccountingHero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1823680/pexels-photo-1823680.jpeg?cs=srgb&dl=pexels-chaitaastic-1823680.jpg&fm=jpg"
          alt="Modern city buildings"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Blue overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          {/* Main Quote */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12">
            <span className="block">"Good accounting is more</span>
            <span className="block">than numbers it's the</span>
            <span className="block">foundation of confident</span>
            <span className="block">business decisions."</span>
          </h1>

          {/* Trust Badge with Avatars */}
          <div className="flex items-center gap-4">
            {/* Avatar Group */}
           <div className="flex -space-x-3">
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
    <Image
      src="https://cdn.prod.website-files.com/643daec2fb5ac84cd15a924a/686be0a8377bab1163f2348e_Greg%20Blue%20-%20PR%201200%20x%20628%20Graphic.png"
      alt="Client testimonial"
      width={56}
      height={56}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
    <Image
      src="https://rhrinternational.com/wp-content/uploads/2021/07/Client-Perspective_Pres-and-CEO-John-Doyle-of-Marsh.jpg"
      alt="Client testimonial"
      width={56}
      height={56}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
    <Image
      src="https://media.istockphoto.com/id/1552851641/photo/happy-mature-business-man-executive-wearing-suit-in-office-using-tablet.jpg?s=612x612&w=0&k=20&c=AEkI0XZRWfUWCfTaHlmFf9EL8Kf27-1N2RpyrkhadZ8="
      alt="Client testimonial"
      width={56}
      height={56}
      className="object-cover w-full h-full"
    />
  </div>
</div>

            {/* Trust Text */}
            <div className="text-white">
              <p className="text-lg sm:text-xl font-semibold">Trusted by 250+</p>
              <p className="text-lg sm:text-xl font-semibold">Business</p>
            </div>
          </div>
        </div>
      </div>

      {/* Play Video Button - Bottom Right */}
    

      {/* Decorative Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent z-[5]"></div>
    </section>
  );
}