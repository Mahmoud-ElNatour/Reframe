import { useQuery } from "@tanstack/react-query";
import type { Milestone } from "@shared/schema";

export default function MilestonesSection() {
  const { data: milestones = [], isLoading } = useQuery<Milestone[]>({
    queryKey: ['/api/milestones'],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-4">Milestones to Date</h2>
            <p className="text-lg text-gray-600">Tracking our impact and growth across the region</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="text-center">
                <div className="bg-gray-200 animate-pulse rounded-2xl p-6 mb-4 h-32"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const gradients = [
    'bg-gradient-to-br from-secondary to-accent',
    'bg-gradient-to-br from-primary to-secondary', 
    'bg-gradient-to-br from-accent to-primary',
    'bg-gradient-to-br from-secondary to-primary'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-4">Milestones to Date</h2>
          <p className="text-lg text-gray-600">Tracking our impact and growth across the region</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={milestone.id} className="text-center group">
              <div className={`${gradients[index % gradients.length]} text-white rounded-2xl p-6 mb-4 transform group-hover:scale-105 transition-transform card-hover`}>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{milestone.value}</div>
                <div className="text-sm text-blue-100">{milestone.title}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Admin Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            <i className="fas fa-cog mr-1"></i>
            Administrative access available for real-time updates
          </p>
        </div>
      </div>
    </section>
  );
}
