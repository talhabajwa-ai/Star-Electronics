const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-yellow-400">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="heading-secondary text-black mb-4">
            Need Urgent Electrical Help?
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Our expert electricians are available 24/7 for emergency services. 
            Don't wait - contact us now!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+9242112345678"
              className="bg-black text-white font-semibold px-8 py-4 rounded-lg hover:bg-dark-gray transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span>📞</span>
              Call Now
            </a>
            <a
              href="https://wa.me/9242112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span>💬</span>
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
