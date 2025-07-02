import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isSameMonth } from "date-fns";
import type { Event } from "@shared/schema";

export default function CalendarSection() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCollaborationModal, setShowCollaborationModal] = useState(false);
  
  const { data: events = [] } = useQuery<Event[]>({
    queryKey: ['/api/events/upcoming'],
  });

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getEventsForDay = (day: Date) => {
    return events.filter(event => isSameDay(new Date(event.date), day));
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Calendar Section */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-neutral mb-6 flex items-center">
              <i className="fas fa-calendar-alt text-secondary mr-3"></i>
              Upcoming Events
            </h2>
            
            {/* Calendar Widget */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-neutral">
                  {format(currentDate, 'MMMM yyyy')}
                </h3>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => navigateMonth('prev')}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <i className="fas fa-chevron-left text-neutral"></i>
                  </button>
                  <button 
                    onClick={() => navigateMonth('next')}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <i className="fas fa-chevron-right text-neutral"></i>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-2 text-sm font-medium text-gray-500">{day}</div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center">
                {calendarDays.map(day => {
                  const dayEvents = getEventsForDay(day);
                  const hasEvents = dayEvents.length > 0;
                  const isCurrentMonth = isSameMonth(day, currentDate);
                  
                  return (
                    <div 
                      key={day.toISOString()}
                      className={`p-2 text-sm cursor-pointer rounded relative ${
                        !isCurrentMonth 
                          ? 'text-gray-400' 
                          : hasEvents 
                            ? 'bg-secondary text-white font-medium'
                            : 'hover:bg-secondary hover:text-white'
                      }`}
                    >
                      {format(day, 'd')}
                      {hasEvents && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 space-y-3">
                {events.slice(0, 2).map(event => (
                  <div key={event.id} className="flex items-center p-3 bg-secondary/10 rounded-lg">
                    <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
                    <div>
                      <div className="font-medium text-sm">{event.title}</div>
                      <div className="text-xs text-gray-500">
                        {format(new Date(event.date), 'MMM d, yyyy')} - {event.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mental Health Lab Announcement */}
          <div className="mental-health-lab bg-gradient-secondary text-white rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-flask text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Mental Health Lab</h2>
                  <p className="text-blue-100">Research & Innovation Hub</p>
                </div>
              </div>
              
              <p className="text-lg mb-6 text-blue-50">
                We're pioneering new approaches to mental health research and assessment tools. Join our collaborative community of researchers, practitioners, and organizations.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3">Current Project</h3>
                <p className="text-blue-100 mb-4">Assessment Tool for Panic Attacks - A comprehensive research initiative developing culturally-adapted diagnostic tools.</p>
                <div className="flex items-center text-sm text-blue-200">
                  <i className="fas fa-users mr-2"></i>
                  <span>12 Active Collaborators</span>
                  <span className="mx-3">•</span>
                  <i className="fas fa-globe mr-2"></i>
                  <span>5 Countries</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xl font-semibold mb-4">Would you like to collaborate with us?</p>
                <div className="flex gap-4 justify-center">
                  <button 
                    onClick={() => setShowCollaborationModal(true)}
                    className="bg-white text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Yes, Let's Collaborate
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pass modal state to global context or handle it here */}
      {showCollaborationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-neutral">Mental Health Lab Collaboration</h2>
                <button 
                  onClick={() => setShowCollaborationModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              
              <p className="text-gray-600 mb-8">
                We're excited about the possibility of collaborating with you! Please fill out the form below and let us know how we can work together.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral mb-2">Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral mb-2">Email *</label>
                    <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral mb-2">How can we collaborate together? *</label>
                  <textarea 
                    required 
                    rows={5} 
                    placeholder="Please let us know how we can collaborate together..." 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                  ></textarea>
                </div>
                
                <div className="flex gap-4">
                  <button type="submit" className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors flex-1">
                    Submit Collaboration Request
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setShowCollaborationModal(false)}
                    className="border border-gray-300 text-neutral px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
