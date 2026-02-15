import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"%3E%3Crect fill="%23333" width="1200" height="800"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="48" fill="%23FFC107" text-anchor="middle"%3E⚡%3C/text%3E%3C/svg%3E')`,
        }}
      ></div>

      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="max-w-3xl">
          <span className="inline-block bg-primary text-black px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            24/7 Emergency Services Available
          </span>
          
          <h1 className="heading-primary text-white mb-6 leading-tight">
            Professional & Reliable
            <span className="text-primary block mt-2">Electrician in Lahore</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Expert electrical solutions for your home and business. 
            Certified professionals | Transparent Pricing | 100% Satisfaction
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Book Service
            </Link>
            <Link to="/shop" className="btn-secondary">
              Shop Products
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-600">
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-gray-400">Services Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <span className="text-white text-2xl">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
