import { apiRequest } from "./queryClient";
import type { 
  Event, InsertEvent, 
  Milestone, InsertMilestone,
  Partner, InsertPartner,
  CollaborationRequest, InsertCollaborationRequest,
  NewsletterSubscription, InsertNewsletterSubscription 
} from "@shared/schema";

// Events API
export const eventsApi = {
  getAll: (): Promise<Event[]> => 
    fetch('/api/events', { credentials: 'include' }).then(res => res.json()),
  
  getUpcoming: (): Promise<Event[]> => 
    fetch('/api/events/upcoming', { credentials: 'include' }).then(res => res.json()),
  
  create: (event: InsertEvent): Promise<Event> => 
    apiRequest("POST", "/api/events", event).then(res => res.json()),
};

// Milestones API
export const milestonesApi = {
  getAll: (): Promise<Milestone[]> => 
    fetch('/api/milestones', { credentials: 'include' }).then(res => res.json()),
  
  create: (milestone: InsertMilestone): Promise<Milestone> => 
    apiRequest("POST", "/api/milestones", milestone).then(res => res.json()),
  
  update: (id: number, data: Partial<InsertMilestone>): Promise<Milestone> => 
    apiRequest("PUT", `/api/milestones/${id}`, data).then(res => res.json()),
};

// Partners API
export const partnersApi = {
  getAll: (): Promise<Partner[]> => 
    fetch('/api/partners', { credentials: 'include' }).then(res => res.json()),
  
  create: (partner: InsertPartner): Promise<Partner> => 
    apiRequest("POST", "/api/partners", partner).then(res => res.json()),
};

// Collaboration Requests API
export const collaborationApi = {
  getAll: (): Promise<CollaborationRequest[]> => 
    fetch('/api/collaboration-requests', { credentials: 'include' }).then(res => res.json()),
  
  create: (request: InsertCollaborationRequest): Promise<CollaborationRequest> => 
    apiRequest("POST", "/api/collaboration-requests", request).then(res => res.json()),
};

// Newsletter API
export const newsletterApi = {
  subscribe: (subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> => 
    apiRequest("POST", "/api/newsletter/subscribe", subscription).then(res => res.json()),
  
  unsubscribe: (email: string): Promise<{ message: string }> => 
    apiRequest("POST", "/api/newsletter/unsubscribe", { email }).then(res => res.json()),
};
