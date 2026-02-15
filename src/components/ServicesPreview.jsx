import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-lg">Our Services</span>
          <h2 className="heading-secondary mt-2">Comprehensive Electrical Solutions</h2>
          <p className="text-dark-gray mt-4 max-w-2xl mx-auto">
            From simple repairs to complex installations, we provide a full range of 
            electrical services to meet all your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 card-shadow hover-lift border-t-4 border-primary"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="heading-tertiary mb-3">{service.title}</h3>
              <p className="text-dark-gray mb-4">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
