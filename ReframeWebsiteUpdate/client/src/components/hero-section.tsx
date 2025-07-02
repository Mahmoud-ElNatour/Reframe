import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"}}></div>
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Unlocking the Innate Potential and Resilience Within Each Person and Group
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100">
            Professional mental health services and training programs designed for the Middle East, delivered in Arabic with cultural relevance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.querySelector('.mental-health-lab')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Explore Mental Health Lab
            </button>
            <button 
              onClick={() => document.querySelector('.services-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors text-center"
            >
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
