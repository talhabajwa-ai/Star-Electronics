import { servicesData } from '../data/servicesData';
import ServiceCalculator from '../components/ServiceCalculator';
import TroubleshootingWizard from '../components/TroubleshootingWizard';

const Services = () => {
  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="bg-black py-16">
        <div className="container-custom">
          <h1 className="heading-primary text-white">Our Services</h1>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Professional electrical services for residential and commercial properties in Lahore.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 card-shadow hover-lift border-t-4 border-primary"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="heading-tertiary mb-3">{service.title}</h3>
                <p className="text-dark-gray mb-4">{service.description}</p>
                
                <div className="border-t pt-4 mt-4">
                  <p className="text-primary font-bold text-lg mb-3">{service.price}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-dark-gray">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary w-full">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ServiceCalculator />
            <TroubleshootingWizard />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-yellow-400">
        <div className="container-custom text-center">
          <h2 className="heading-secondary text-black mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-black/80 mb-6 max-w-2xl mx-auto">
            Contact us for custom electrical solutions tailored to your specific needs.
          </p>
          <a href="tel:+9242112345678" className="btn-secondary">
            Call Us Now
          </a>
        </div>
      </section>
    </main>
  );
};

export default Services;
