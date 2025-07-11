import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Events routes
  app.get('/api/events', async (req, res) => {
    try {
      const events = await storage.getActiveEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  });

  // Jobs routes
  app.get('/api/jobs', async (req, res) => {
    try {
      const jobs = await storage.getActiveJobs();
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch jobs' });
    }
  });

  // FAQs routes
  app.get('/api/faqs', async (req, res) => {
    try {
      const faqs = await storage.getActiveFAQs();
      res.json(faqs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch FAQs' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
