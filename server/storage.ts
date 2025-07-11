import { users, events, jobs, faqs, type User, type InsertUser, type Event, type InsertEvent, type Job, type InsertJob, type FAQ, type InsertFAQ } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getEvents(): Promise<Event[]>;
  getActiveEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  getJobs(): Promise<Job[]>;
  getActiveJobs(): Promise<Job[]>;
  createJob(job: InsertJob): Promise<Job>;
  
  getFAQs(): Promise<FAQ[]>;
  getActiveFAQs(): Promise<FAQ[]>;
  createFAQ(faq: InsertFAQ): Promise<FAQ>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private events: Map<number, Event>;
  private jobs: Map<number, Job>;
  private faqs: Map<number, FAQ>;
  private currentUserId: number;
  private currentEventId: number;
  private currentJobId: number;
  private currentFaqId: number;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.jobs = new Map();
    this.faqs = new Map();
    this.currentUserId = 1;
    this.currentEventId = 1;
    this.currentJobId = 1;
    this.currentFaqId = 1;

    // Initialize with some sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample events
    const sampleEvents: Event[] = [
      {
        id: 1,
        title: "Customer Success Metrics Workshop",
        description: "Learn how to measure and improve your customer success metrics with industry experts.",
        date: "Mar 28",
        time: "6:00 PM PST",
        location: "San Francisco, CA",
        type: "in-person",
        isActive: true
      },
      {
        id: 2,
        title: "Virtual Networking Lunch",
        description: "Connect with fellow professionals in a casual virtual setting. Bring your lunch!",
        date: "Apr 5",
        time: "12:00 PM EDT",
        location: "Online",
        type: "virtual",
        isActive: true
      },
      {
        id: 3,
        title: "Technical Support Best Practices",
        description: "Deep dive into advanced technical support methodologies and troubleshooting techniques.",
        date: "Apr 12",
        time: "7:00 PM GMT",
        location: "London, UK",
        type: "in-person",
        isActive: true
      }
    ];

    // Sample jobs
    const sampleJobs: Job[] = [
      {
        id: 1,
        title: "Senior Customer Success Manager",
        company: "TechCorp Inc.",
        description: "Lead customer success initiatives for enterprise clients.",
        location: "Remote",
        type: "full-time",
        salary: "$120k - $150k",
        posted: "Posted 2 days ago",
        isActive: true
      },
      {
        id: 2,
        title: "Technical Support Engineer",
        company: "SaaS Solutions Ltd.",
        description: "Provide technical support for cloud-based solutions.",
        location: "New York, NY",
        type: "full-time",
        salary: "$90k - $110k",
        posted: "Posted 1 week ago",
        isActive: true
      }
    ];

    // Sample FAQs
    const sampleFAQs: FAQ[] = [
      {
        id: 1,
        question: "What is CXSpace and who can join?",
        answer: "CXSpace is a professional community for customer success engineers, technical support professionals, solutions engineers, and anyone in client-facing B2B SaaS roles. We welcome professionals at all career levels who are passionate about customer success and want to grow their skills and network.",
        order: 1,
        isActive: true
      },
      {
        id: 2,
        question: "How do I join the community?",
        answer: "You can join our community through Discord or WhatsApp using the links provided in the \"Join Our Community\" section. Simply click on your preferred platform and follow the instructions to get started.",
        order: 2,
        isActive: true
      },
      {
        id: 3,
        question: "Is there a cost to join CXSpace?",
        answer: "No, CXSpace is completely free to join! We believe in making professional development and networking accessible to everyone in the customer success field.",
        order: 3,
        isActive: true
      }
    ];

    sampleEvents.forEach(event => this.events.set(event.id, event));
    sampleJobs.forEach(job => this.jobs.set(job.id, job));
    sampleFAQs.forEach(faq => this.faqs.set(faq.id, faq));

    this.currentEventId = Math.max(...sampleEvents.map(e => e.id)) + 1;
    this.currentJobId = Math.max(...sampleJobs.map(j => j.id)) + 1;
    this.currentFaqId = Math.max(...sampleFAQs.map(f => f.id)) + 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getActiveEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).filter(event => event.isActive);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = { ...insertEvent, id, isActive: insertEvent.isActive ?? true };
    this.events.set(id, event);
    return event;
  }

  async getJobs(): Promise<Job[]> {
    return Array.from(this.jobs.values());
  }

  async getActiveJobs(): Promise<Job[]> {
    return Array.from(this.jobs.values()).filter(job => job.isActive);
  }

  async createJob(insertJob: InsertJob): Promise<Job> {
    const id = this.currentJobId++;
    const job: Job = { ...insertJob, id, isActive: insertJob.isActive ?? true, salary: insertJob.salary ?? null };
    this.jobs.set(id, job);
    return job;
  }

  async getFAQs(): Promise<FAQ[]> {
    return Array.from(this.faqs.values()).sort((a, b) => a.order - b.order);
  }

  async getActiveFAQs(): Promise<FAQ[]> {
    return Array.from(this.faqs.values())
      .filter(faq => faq.isActive)
      .sort((a, b) => a.order - b.order);
  }

  async createFAQ(insertFAQ: InsertFAQ): Promise<FAQ> {
    const id = this.currentFaqId++;
    const faq: FAQ = { ...insertFAQ, id, isActive: insertFAQ.isActive ?? true, order: insertFAQ.order ?? 0 };
    this.faqs.set(id, faq);
    return faq;
  }
}

export const storage = new MemStorage();
