export default function ReframeHubSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-6">Reframe Hub</h2>
            <p className="text-lg text-gray-600 mb-6">
              A professional space designed for meetings, conferences, and workshops. Our modern facilities provide the perfect environment for learning, collaboration, and professional development.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-secondary mr-3"></i>
                <span className="text-gray-700">Modern conference facilities</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-secondary mr-3"></i>
                <span className="text-gray-700">Professional audio-visual equipment</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-secondary mr-3"></i>
                <span className="text-gray-700">Flexible seating arrangements</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-secondary mr-3"></i>
                <span className="text-gray-700">Convenient location</span>
              </div>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" alt="Modern conference room" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
