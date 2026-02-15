import { productsData, maintenancePackages } from '../data/productsData';

const Shop = () => {
  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="bg-black py-16">
        <div className="container-custom">
          <h1 className="heading-primary text-white">Shop</h1>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Quality electrical products and maintenance packages for your home and business.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-secondary mb-8">Electrical Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl p-4 card-shadow hover-lift"
              >
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-6xl">{product.image}</span>
                </div>
                
                {/* Category Badge */}
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                  {product.category}
                </span>
                
                {/* Product Info */}
                <h3 className="font-bold text-lg mt-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                <p className="text-primary font-bold text-xl mb-3">
                  Rs. {product.price.toLocaleString()}
                </p>
                
                <button className="btn-primary w-full text-sm py-2">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Packages Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-lg">Maintenance Plans</span>
            <h2 className="heading-secondary mt-2">Maintenance Packages</h2>
            <p className="text-dark-gray mt-4 max-w-2xl mx-auto">
              Choose a maintenance package that suits your needs. Regular maintenance 
              ensures safety and longevity of your electrical systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenancePackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-xl p-6 card-shadow hover-lift relative ${
                  pkg.recommended ? 'border-2 border-primary' : ''
                }`}
              >
                {/* Recommended Badge */}
                {pkg.recommended && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-bold">
                    Recommended
                  </span>
                )}

                <h3 className="heading-tertiary text-center">{pkg.name}</h3>
                
                <div className="text-center my-6">
                  <span className="text-4xl font-bold text-black">
                    Rs. {pkg.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500">/{pkg.period}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-dark-gray">
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    pkg.recommended
                      ? 'btn-primary'
                      : 'bg-dark-gray text-white hover:bg-black'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
