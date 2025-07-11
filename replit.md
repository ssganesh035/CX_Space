# CXSpace Community Platform

## Overview

CXSpace is a full-stack web application designed to be a premier community platform for customer success professionals, technical support engineers, and B2B SaaS experts. The platform provides a comprehensive community experience with event management, career resources, FAQ management, and community engagement features.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Cool and quirky design with blue, white, and black color scheme.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives with custom styling via shadcn/ui

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **Session Management**: Express sessions with PostgreSQL store

### Database Design
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Shared schema definitions between client and server
- **Tables**: Users, Events, Jobs, FAQs with appropriate relationships
- **Migrations**: Drizzle Kit for schema migrations

## Key Components

### Core Pages
- **Home**: Hero section with community stats and testimonials
- **About**: Community mission, story, and values
- **Supportathon**: Flagship hackathon-style event promotion
- **Meetups**: Event listings and registration
- **Careers**: Job board and career resources
- **FAQ**: Community frequently asked questions
- **Join**: Community platform links (Discord, WhatsApp)

### Data Models
- **Users**: Authentication and profile management
- **Events**: Community meetups and workshops
- **Jobs**: Career opportunities and job postings
- **FAQs**: Community knowledge base

### UI Components
- **Layout**: Responsive header with navigation and footer
- **Forms**: React Hook Form with Zod validation
- **Data Display**: Cards, badges, and tables for content presentation
- **Interactive Elements**: Modals, dropdowns, and accordions

## Data Flow

### Client-Server Communication
1. Frontend makes API requests to `/api/*` endpoints
2. Express server handles routing and business logic
3. Drizzle ORM manages database operations
4. JSON responses sent back to client
5. TanStack Query manages caching and state synchronization

### Storage Strategy
- **Development**: In-memory storage implementation for rapid prototyping
- **Production**: PostgreSQL database with Drizzle ORM
- **Session Storage**: PostgreSQL-backed session store for user authentication

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI
- **Radix UI**: Low-level UI primitives for accessibility
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool with HMR support
- **TypeScript**: Type safety across the entire stack
- **ESLint/Prettier**: Code formatting and linting
- **Drizzle Kit**: Database schema management

### Runtime Dependencies
- **React Query**: Server state management
- **React Hook Form**: Form handling with validation
- **Zod**: Runtime type validation
- **Date-fns**: Date manipulation utilities

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations run via `db:push` command

### Environment Configuration
- **Development**: Hot reload with Vite dev server
- **Production**: Static file serving with Express
- **Database**: Environment-based connection strings

### Hosting Requirements
- **Node.js**: Runtime environment
- **PostgreSQL**: Database server (Neon recommended)
- **Static Assets**: CDN-ready build output
- **Environment Variables**: Database URL and session secrets

### Development Workflow
1. Run `npm run dev` for development server
2. Database schema changes via Drizzle migrations
3. TypeScript compilation for type checking
4. Vite provides hot reload for rapid development

## Technical Decisions

### Framework Choices
- **React over Vue/Angular**: Large ecosystem and team familiarity
- **Vite over Webpack**: Faster development builds and simpler configuration
- **Express over Fastify**: Mature ecosystem and middleware support
- **Drizzle over Prisma**: Better TypeScript integration and SQL-like queries

### Database Strategy
- **PostgreSQL over MongoDB**: ACID compliance and relational data requirements
- **Neon over self-hosted**: Serverless scaling and reduced operational overhead
- **Drizzle ORM**: Type-safe queries with minimal runtime overhead

### Authentication Approach
- **Session-based over JWT**: Simpler implementation and better security for web apps
- **PostgreSQL session store**: Centralized session management with database persistence

## Recent Changes

**January 11, 2025**
- Updated hero section with cool blue, black, and white color scheme
- Added modern grid pattern overlay and animated background elements
- Implemented quirky animations throughout the site (bounce, wiggle, float, blob morphing)
- Added gradient text effects and neon borders for interactive elements
- Enhanced all sections with emojis and playful copy
- Updated color variables to use blue-based palette (primary: blue-500, secondary: cyan-500)