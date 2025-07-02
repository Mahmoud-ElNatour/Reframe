export default function TimelineSection() {
  const timelineData = [
    {
      year: "2022",
      title: "Foundation & Vision",
      description: "Reframe MHS was established with a clear mission to provide culturally-relevant mental health services in Arabic for the Middle East region. We began with a small team of dedicated professionals.",
      color: "secondary"
    },
    {
      year: "2023", 
      title: "Growth & Partnerships",
      description: "Expanded our service offerings and established key partnerships with organizations across the region. Launched our first comprehensive training programs and began developing assessment tools.",
      color: "accent"
    },
    {
      year: "2024",
      title: "Innovation & Research", 
      description: "Launched the Mental Health Lab and began our first major research project on panic attack assessment tools. Established our Scientific Committee and expanded our professional network.",
      color: "primary"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Launching our four-year systemic therapy training program and expanding our international collaborations. Planning to establish regional training centers and develop new digital mental health solutions.",
      color: "gradient",
      isGradient: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Reframe, we are dedicated to empowering professionals across the Middle East by providing services and resources in Arabic, with cultural relevance at the heart of everything we do.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary"></div>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={item.year} className="relative pl-20 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="timeline-item">
                  <div className={`bg-white rounded-lg shadow-sm p-6 border-l-4 ${
                    item.isGradient ? 'bg-gradient-secondary text-white border-l-0' : 
                    item.color === 'secondary' ? 'border-secondary' :
                    item.color === 'accent' ? 'border-accent' :
                    'border-primary'
                  }`}>
                    <div className="flex items-center mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold mr-3 ${
                        item.isGradient ? 'bg-white text-secondary' :
                        item.color === 'secondary' ? 'bg-secondary text-white' :
                        item.color === 'accent' ? 'bg-accent text-white' :
                        'bg-primary text-white'
                      }`}>
                        {item.year}
                      </span>
                      <h3 className={`text-xl font-bold ${item.isGradient ? 'text-white' : 'text-neutral'}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className={item.isGradient ? 'text-blue-100' : 'text-gray-600'}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
