# Reframe MHS - Mental Health Services Platform

## Overview

Reframe MHS is a comprehensive mental health services platform designed specifically for the Middle East, offering professional mental health services and training programs delivered in Arabic with cultural relevance. The application is built as a full-stack web platform featuring a React frontend, Express.js backend, and PostgreSQL database with Drizzle ORM.

## System Architecture

The application follows a monorepo structure with separate client and server directories:

- **Frontend**: React with TypeScript, Vite build system, and shadcn/ui component library
- **Backend**: Express.js with TypeScript serving both API endpoints and static files
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with custom design system and dark mode support
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **React Router**: Using Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component system with Radix UI primitives
- **Styling**: Tailwind CSS with custom color scheme and design tokens
- **State Management**: TanStack Query for API state, React hooks for local state
- **Form Handling**: React Hook Form with Zod validation
- **Build System**: Vite with TypeScript and hot module replacement

### Backend Architecture
- **Express.js**: RESTful API server with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Development Setup**: Vite integration for development mode with HMR support

### Database Schema
The application uses the following main entities:
- **Users**: Authentication and user management
- **Events**: Workshop and training event management
- **Milestones**: Company achievement tracking
- **Partners**: Partnership and collaboration management
- **Collaboration Requests**: Professional collaboration inquiries
- **Newsletter Subscriptions**: Email subscription management

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express.js routes handle HTTP requests and validate data
3. **Business Logic**: Storage interface abstracts database operations
4. **Database Operations**: Drizzle ORM performs type-safe database queries
5. **Response Handling**: Data flows back through the same layers with error handling

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router via Wouter)
- UI Libraries (Radix UI components, shadcn/ui, Tailwind CSS)
- State Management (TanStack Query)
- Form Handling (React Hook Form, Hookform Resolvers)
- Validation (Zod)
- Utilities (date-fns, clsx, class-variance-authority)

### Backend Dependencies
- Express.js with TypeScript support
- Database (Drizzle ORM, @neondatabase/serverless)
- Session Management (connect-pg-simple)
- Development Tools (tsx, esbuild)

### Development Tools
- Vite for build system and development server
- TypeScript for type safety
- Drizzle Kit for database migrations
- PostCSS and Autoprefixer for CSS processing

## Deployment Strategy

The application is configured for deployment with the following approach:

1. **Build Process**: 
   - Frontend built using Vite to `dist/public`
   - Backend compiled using esbuild to `dist/index.js`
   
2. **Database**: 
   - PostgreSQL database hosted on Neon (serverless PostgreSQL)
   - Migrations managed through Drizzle Kit
   
3. **Environment Configuration**:
   - Development: Node.js with tsx for TypeScript execution
   - Production: Compiled JavaScript bundle execution
   
4. **Static Assets**: Express serves built frontend files in production mode

## Changelog
- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.