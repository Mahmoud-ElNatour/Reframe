export default function ServicesOverview() {
  const services = [
    {
      icon: "fas fa-briefcase",
      title: "Technical Consultation & Support",
      description: "Professional guidance for corporations and NGOs implementing mental health programs and policies.",
      gradient: "from-primary to-secondary",
      available: true
    },
    {
      icon: "fas fa-users", 
      title: "Empowerment Hub & Training",
      description: "Comprehensive training programs including short-term workshops and long-term certification courses.",
      gradient: "from-secondary to-accent",
      available: true
    },
    {
      icon: "fas fa-flask",
      title: "Mental Health Lab", 
      description: "Innovative research initiatives and collaborative projects advancing mental health assessment and treatment.",
      gradient: "from-accent to-primary",
      available: true
    },
    {
      icon: "fas fa-language",
      title: "Professional Translation",
      description: "Specialized translation of mental health materials and resources into Arabic with cultural adaptation.",
      gradient: "from-primary to-accent",
      available: false
    }
  ];

  return (
    <section className="services-section py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health solutions designed for professionals and organizations across the Middle East
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all hover:border-secondary card-hover">
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-neutral mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.available ? (
                <button className="text-secondary font-semibold hover:text-primary transition-colors">
                  Learn More <i className="fas fa-arrow-right ml-1"></i>
                </button>
              ) : (
                <div className="flex items-center text-amber-600 font-semibold">
                  <i className="fas fa-construction mr-2"></i>
                  Under Construction
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
