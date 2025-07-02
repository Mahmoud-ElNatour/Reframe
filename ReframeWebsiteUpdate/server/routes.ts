import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertEventSchema, insertMilestoneSchema, insertPartnerSchema,
  insertCollaborationRequestSchema, insertNewsletterSubscriptionSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Events
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getAllEvents();
      res.json(events);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching events: " + error.message });
    }
  });

  app.get("/api/events/upcoming", async (req, res) => {
    try {
      const events = await storage.getUpcomingEvents();
      res.json(events);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching upcoming events: " + error.message });
    }
  });

  app.post("/api/events", async (req, res) => {
    try {
      const eventData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent(eventData);
      res.json(event);
    } catch (error: any) {
      res.status(400).json({ message: "Error creating event: " + error.message });
    }
  });

  // Milestones
  app.get("/api/milestones", async (req, res) => {
    try {
      const milestones = await storage.getActiveMilestones();
      res.json(milestones);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching milestones: " + error.message });
    }
  });

  app.post("/api/milestones", async (req, res) => {
    try {
      const milestoneData = insertMilestoneSchema.parse(req.body);
      const milestone = await storage.createMilestone(milestoneData);
      res.json(milestone);
    } catch (error: any) {
      res.status(400).json({ message: "Error creating milestone: " + error.message });
    }
  });

  app.put("/api/milestones/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updateData = req.body;
      const milestone = await storage.updateMilestone(id, updateData);
      if (!milestone) {
        return res.status(404).json({ message: "Milestone not found" });
      }
      res.json(milestone);
    } catch (error: any) {
      res.status(400).json({ message: "Error updating milestone: " + error.message });
    }
  });

  // Partners
  app.get("/api/partners", async (req, res) => {
    try {
      const partners = await storage.getActivePartners();
      res.json(partners);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching partners: " + error.message });
    }
  });

  app.post("/api/partners", async (req, res) => {
    try {
      const partnerData = insertPartnerSchema.parse(req.body);
      const partner = await storage.createPartner(partnerData);
      res.json(partner);
    } catch (error: any) {
      res.status(400).json({ message: "Error creating partner: " + error.message });
    }
  });

  // Collaboration Requests
  app.post("/api/collaboration-requests", async (req, res) => {
    try {
      const requestData = insertCollaborationRequestSchema.parse(req.body);
      const request = await storage.createCollaborationRequest(requestData);
      res.json(request);
    } catch (error: any) {
      res.status(400).json({ message: "Error creating collaboration request: " + error.message });
    }
  });

  app.get("/api/collaboration-requests", async (req, res) => {
    try {
      const requests = await storage.getAllCollaborationRequests();
      res.json(requests);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching collaboration requests: " + error.message });
    }
  });

  // Newsletter Subscriptions
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const subscriptionData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(subscriptionData);
      res.json(subscription);
    } catch (error: any) {
      res.status(400).json({ message: "Error subscribing to newsletter: " + error.message });
    }
  });

  app.post("/api/newsletter/unsubscribe", async (req, res) => {
    try {
      const { email } = req.body;
      const success = await storage.unsubscribeNewsletter(email);
      if (success) {
        res.json({ message: "Successfully unsubscribed" });
      } else {
        res.status(404).json({ message: "Email not found" });
      }
    } catch (error: any) {
      res.status(400).json({ message: "Error unsubscribing: " + error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
