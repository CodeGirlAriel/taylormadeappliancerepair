# Taylor Made Appliance Repair

## Overview

This is a professional appliance repair business website for Taylor Made Appliance Repair, featuring their signature tagline "We Repair What Your Husband Fixed!" The application is a full-stack web solution built with React frontend and Express backend, designed to showcase services and handle customer contact form submissions for appliance repair requests.

The website presents a complete business presence with sections for services (refrigerator, microwave, oven, stove, and range repair), company information, customer testimonials, and a contact form for service requests. The application is designed to be responsive and professional, targeting customers in the Virginia Beach area who need reliable appliance repair services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React SPA**: Single-page application built with React 18 and TypeScript
- **Component-based**: Modular component structure with reusable UI components
- **Styling**: Tailwind CSS for utility-first styling with custom design system variables
- **UI Framework**: shadcn/ui components for consistent, accessible design patterns
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Express Server**: Node.js REST API with TypeScript
- **Middleware Stack**: JSON parsing, URL encoding, request logging, and error handling
- **Development Integration**: Vite middleware integration for hot module replacement in development
- **API Design**: RESTful endpoints with proper HTTP status codes and JSON responses

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions with automatic TypeScript type inference
- **Development Storage**: In-memory storage implementation for development/testing
- **Migration Support**: Drizzle Kit for database schema migrations

### Authentication and Authorization
- **Session Management**: Basic session handling infrastructure (currently minimal implementation)
- **Security**: Input validation using Zod schemas for all user inputs
- **Error Handling**: Comprehensive error boundaries and validation error responses

### External Dependencies
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Email Services**: Infrastructure ready for email notification integration
- **Image Hosting**: Unsplash for professional stock images
- **Fonts**: Google Fonts integration (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)
- **Development Tools**: Replit-specific tooling for development environment integration

The architecture follows a clean separation of concerns with shared schema definitions between frontend and backend, ensuring type safety across the entire application stack. The system is designed to be easily extensible for additional features like admin dashboards, email notifications, and advanced customer management.