import { useState } from 'react';
import { galleryData } from '../data/testimonialsData';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-lg">Our Work</span>
          <h2 className="heading-secondary mt-2">Before & After Gallery</h2>
          <p className="text-dark-gray mt-4 max-w-2xl mx-auto">
            See the transformation we bring to every project. Quality workmanship 
            that speaks for itself.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Before Image */}
              <div className="aspect-square bg-dark-gray flex items-center justify-center">
                <span className="text-6xl">{item.beforeImage}</span>
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-primary/90 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-center p-4">
                  <span className="text-4xl mb-2 block">
                    {item.beforeImage} → {item.afterImage}
                  </span>
                  <h3 className="text-black font-bold text-lg">{item.title}</h3>
                  <p className="text-black/70 text-sm mt-2">{item.category}</p>
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-2 px-4">
                <p className="text-white text-sm font-medium text-center">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
