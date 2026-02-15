import { whyChooseUsData } from '../data/servicesData';

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-lg">Why Choose Us</span>
          <h2 className="heading-secondary text-white mt-2">
            Experience the Difference
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We're committed to providing the best electrical services in Lahore 
            with unmatched quality and customer satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyChooseUsData.map((item) => (
            <div
              key={item.id}
              className="bg-dark-gray rounded-xl p-6 text-center hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl">✓</span>
            <span className="text-white font-medium">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl">✓</span>
            <span className="text-white font-medium">Expert Technicians</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl">✓</span>
            <span className="text-white font-medium">Quality Parts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
