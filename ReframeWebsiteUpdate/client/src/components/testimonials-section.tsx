export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Chafica Abdou Kahale",
      role: "Mental Health Professional",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      testimonial: "Participating in 'The Impossible Grief' training with Marie-Adele was truly a great experience. The insights gained and the tools learned have helped me navigate through challenging emotions and find strength in vulnerability. The trainer's guidance was not only informative but also deeply inspiring.",
      rating: 5
    },
    {
      name: "Raneem Koshoury", 
      role: "Creative Arts Therapist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      testimonial: "I've always been passionate about puppetry, but I never realized how deeply it involves self-discovery. This training introduced me to creative and modern approaches that delve into children's mindsets and imagination in powerful new ways. A heartfelt thank you to Reframe MHS and Karim Dakroub.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-4">What Our Participants Say</h2>
          <p className="text-lg text-gray-600">Real feedback from professionals who have experienced our programs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`rounded-2xl p-8 border ${
              index % 2 === 0 ? 'bg-gradient-to-br from-blue-50 to-teal-50 border-blue-100' : 'bg-gradient-to-br from-teal-50 to-blue-50 border-teal-100'
            } card-hover`}>
              <div className="flex items-start mb-4">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-neutral">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "{testimonial.testimonial}"
              </blockquote>
              <div className="flex text-yellow-400">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
