import { useQuery } from "@tanstack/react-query";
import type { Partner } from "@shared/schema";

export default function PartnersCarousel() {
  const { data: partners = [], isLoading } = useQuery<Partner[]>({
    queryKey: ['/api/partners'],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-4">Partners & Collaborations</h2>
            <p className="text-lg text-gray-600">Working together to advance mental health across the region</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="animate-pulse bg-gray-200 h-20 w-full rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  const getPartnerIcon = (type: string) => {
    switch (type) {
      case 'university': return 'fas fa-university';
      case 'hospital': return 'fas fa-hospital';
      case 'ngo': return 'fas fa-handshake';
      case 'corporate': return 'fas fa-building';
      default: return 'fas fa-globe';
    }
  };

  const getPartnerColor = (index: number) => {
    const colors = ['bg-primary', 'bg-secondary', 'bg-accent'];
    return colors[index % colors.length];
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-4">Partners & Collaborations</h2>
          <p className="text-lg text-gray-600">Working together to advance mental health across the region</p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden bg-white rounded-2xl shadow-sm p-8">
          <div className="flex animate-slide space-x-12">
            {/* Duplicate partners for continuous loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="flex-shrink-0 flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                <div className={`w-16 h-16 ${getPartnerColor(index)} rounded-lg flex items-center justify-center`}>
                  <i className={`${getPartnerIcon(partner.type)} text-white text-2xl`}></i>
                </div>
                <div>
                  <div className="font-semibold text-neutral">{partner.name}</div>
                  <div className="text-sm text-gray-500">{partner.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
