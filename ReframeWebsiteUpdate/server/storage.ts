import { 
  users, events, milestones, partners, collaborationRequests, newsletterSubscriptions,
  type User, type InsertUser, type Event, type InsertEvent, type Milestone, type InsertMilestone,
  type Partner, type InsertPartner, type CollaborationRequest, type InsertCollaborationRequest,
  type NewsletterSubscription, type InsertNewsletterSubscription
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Events
  getAllEvents(): Promise<Event[]>;
  getUpcomingEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: number, event: Partial<InsertEvent>): Promise<Event | undefined>;
  deleteEvent(id: number): Promise<boolean>;

  // Milestones
  getAllMilestones(): Promise<Milestone[]>;
  getActiveMilestones(): Promise<Milestone[]>;
  createMilestone(milestone: InsertMilestone): Promise<Milestone>;
  updateMilestone(id: number, milestone: Partial<InsertMilestone>): Promise<Milestone | undefined>;

  // Partners
  getAllPartners(): Promise<Partner[]>;
  getActivePartners(): Promise<Partner[]>;
  createPartner(partner: InsertPartner): Promise<Partner>;
  updatePartner(id: number, partner: Partial<InsertPartner>): Promise<Partner | undefined>;

  // Collaboration Requests
  getAllCollaborationRequests(): Promise<CollaborationRequest[]>;
  createCollaborationRequest(request: InsertCollaborationRequest): Promise<CollaborationRequest>;
  updateCollaborationRequestStatus(id: number, status: string): Promise<CollaborationRequest | undefined>;

  // Newsletter Subscriptions
  getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  unsubscribeNewsletter(email: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private events: Map<number, Event>;
  private milestones: Map<number, Milestone>;
  private partners: Map<number, Partner>;
  private collaborationRequests: Map<number, CollaborationRequest>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.milestones = new Map();
    this.partners = new Map();
    this.collaborationRequests = new Map();
    this.newsletterSubscriptions = new Map();
    this.currentId = 1;
    this.initializeData();
  }

  private initializeData() {
    // Initialize with some sample events
    const sampleEvents: Event[] = [
      {
        id: this.currentId++,
        title: "Systemic Therapy Workshop",
        description: "Advanced systemic therapy techniques",
        date: new Date("2025-01-15T14:00:00Z"),
        time: "2:00 PM",
        type: "workshop",
        registrationUrl: "/register/systemic-therapy",
        createdAt: new Date(),
      },
      {
        id: this.currentId++,
        title: "Mental Health Lab Session",
        description: "Research collaboration session",
        date: new Date("2025-01-22T10:00:00Z"),
        time: "10:00 AM",
        type: "lab_session",
        registrationUrl: "/register/lab-session",
        createdAt: new Date(),
      }
    ];

    sampleEvents.forEach(event => this.events.set(event.id, event));

    // Initialize milestones
    const sampleMilestones: Milestone[] = [
      { id: this.currentId++, title: "Professionals Trained", value: "150+", description: "Mental health professionals trained", order: 1, isActive: true },
      { id: this.currentId++, title: "Workshop Sessions", value: "25", description: "Training sessions conducted", order: 2, isActive: true },
      { id: this.currentId++, title: "Research Projects", value: "12", description: "Active research initiatives", order: 3, isActive: true },
      { id: this.currentId++, title: "Partner Organizations", value: "8", description: "Strategic partnerships", order: 4, isActive: true },
    ];

    sampleMilestones.forEach(milestone => this.milestones.set(milestone.id, milestone));

    // Initialize partners
    const samplePartners: Partner[] = [
      { id: this.currentId++, name: "University Partner", description: "Research Collaboration", type: "university", logoUrl: null, isActive: true },
      { id: this.currentId++, name: "Healthcare Network", description: "Clinical Partnership", type: "hospital", logoUrl: null, isActive: true },
      { id: this.currentId++, name: "NGO Alliance", description: "Community Outreach", type: "ngo", logoUrl: null, isActive: true },
      { id: this.currentId++, name: "Corporate Partner", description: "Training Services", type: "corporate", logoUrl: null, isActive: true },
      { id: this.currentId++, name: "International Org", description: "Global Initiative", type: "corporate", logoUrl: null, isActive: true },
    ];

    samplePartners.forEach(partner => this.partners.set(partner.id, partner));
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Events
  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getUpcomingEvents(): Promise<Event[]> {
    const now = new Date();
    return Array.from(this.events.values())
      .filter(event => event.date > now)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentId++;
    const event: Event = { 
      ...insertEvent, 
      id, 
      createdAt: new Date(),
      date: new Date(insertEvent.date)
    };
    this.events.set(id, event);
    return event;
  }

  async updateEvent(id: number, updateData: Partial<InsertEvent>): Promise<Event | undefined> {
    const event = this.events.get(id);
    if (!event) return undefined;

    const updatedEvent = { 
      ...event, 
      ...updateData,
      date: updateData.date ? new Date(updateData.date) : event.date
    };
    this.events.set(id, updatedEvent);
    return updatedEvent;
  }

  async deleteEvent(id: number): Promise<boolean> {
    return this.events.delete(id);
  }

  // Milestones
  async getAllMilestones(): Promise<Milestone[]> {
    return Array.from(this.milestones.values()).sort((a, b) => a.order - b.order);
  }

  async getActiveMilestones(): Promise<Milestone[]> {
    return Array.from(this.milestones.values())
      .filter(milestone => milestone.isActive)
      .sort((a, b) => a.order - b.order);
  }

  async createMilestone(insertMilestone: InsertMilestone): Promise<Milestone> {
    const id = this.currentId++;
    const milestone: Milestone = { ...insertMilestone, id };
    this.milestones.set(id, milestone);
    return milestone;
  }

  async updateMilestone(id: number, updateData: Partial<InsertMilestone>): Promise<Milestone | undefined> {
    const milestone = this.milestones.get(id);
    if (!milestone) return undefined;

    const updatedMilestone = { ...milestone, ...updateData };
    this.milestones.set(id, updatedMilestone);
    return updatedMilestone;
  }

  // Partners
  async getAllPartners(): Promise<Partner[]> {
    return Array.from(this.partners.values());
  }

  async getActivePartners(): Promise<Partner[]> {
    return Array.from(this.partners.values()).filter(partner => partner.isActive);
  }

  async createPartner(insertPartner: InsertPartner): Promise<Partner> {
    const id = this.currentId++;
    const partner: Partner = { ...insertPartner, id };
    this.partners.set(id, partner);
    return partner;
  }

  async updatePartner(id: number, updateData: Partial<InsertPartner>): Promise<Partner | undefined> {
    const partner = this.partners.get(id);
    if (!partner) return undefined;

    const updatedPartner = { ...partner, ...updateData };
    this.partners.set(id, updatedPartner);
    return updatedPartner;
  }

  // Collaboration Requests
  async getAllCollaborationRequests(): Promise<CollaborationRequest[]> {
    return Array.from(this.collaborationRequests.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createCollaborationRequest(insertRequest: InsertCollaborationRequest): Promise<CollaborationRequest> {
    const id = this.currentId++;
    const request: CollaborationRequest = { 
      ...insertRequest, 
      id, 
      status: "pending",
      createdAt: new Date()
    };
    this.collaborationRequests.set(id, request);
    return request;
  }

  async updateCollaborationRequestStatus(id: number, status: string): Promise<CollaborationRequest | undefined> {
    const request = this.collaborationRequests.get(id);
    if (!request) return undefined;

    const updatedRequest = { ...request, status };
    this.collaborationRequests.set(id, updatedRequest);
    return updatedRequest;
  }

  // Newsletter Subscriptions
  async getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }

  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check if email already exists
    const existing = Array.from(this.newsletterSubscriptions.values())
      .find(sub => sub.email === insertSubscription.email);
    
    if (existing) {
      // Reactivate if exists but inactive
      if (!existing.isActive) {
        existing.isActive = true;
        this.newsletterSubscriptions.set(existing.id, existing);
      }
      return existing;
    }

    const id = this.currentId++;
    const subscription: NewsletterSubscription = { 
      ...insertSubscription, 
      id, 
      isActive: true,
      createdAt: new Date()
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async unsubscribeNewsletter(email: string): Promise<boolean> {
    const subscription = Array.from(this.newsletterSubscriptions.values())
      .find(sub => sub.email === email);
    
    if (subscription) {
      subscription.isActive = false;
      this.newsletterSubscriptions.set(subscription.id, subscription);
      return true;
    }
    return false;
  }
}

export const storage = new MemStorage();
