# Mental Health & Wellness Platform

## Overview
A personal companion application for emotional wellness and mental health support. Built with React, TypeScript, Express, and PostgreSQL.

**Current State**: Fully configured and running in Replit environment
**Last Updated**: October 28, 2025

## Project Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL (via Drizzle ORM)
- **UI Components**: Radix UI + Tailwind CSS
- **State Management**: TanStack Query
- **Routing**: Wouter

### Project Structure
```
.
├── client/               # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── contexts/    # React contexts
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utilities
│   │   └── pages/       # Route pages
│   └── index.html
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Data access layer
│   └── vite.ts          # Vite integration
├── shared/              # Shared types and schemas
│   └── schema.ts        # Database schema (Drizzle)
└── attached_assets/     # Static assets
```

## Configuration

### Development
- **Server Port**: 5000 (both API and frontend)
- **Host**: 0.0.0.0 (configured for Replit proxy)
- **HMR Port**: 443 (for Replit's HTTPS proxy)
- **Database**: PostgreSQL (DATABASE_URL environment variable)

### Key Files
- `vite.config.ts`: Vite configuration with Replit-specific settings
- `drizzle.config.ts`: Database configuration
- `package.json`: Dependencies and scripts
- `tsconfig.json`: TypeScript configuration

## Setup and Running

### Initial Setup
1. Dependencies are already installed (`npm install`)
2. Database schema has been pushed to PostgreSQL
3. Workflow "Server" is configured to run `npm run dev` on port 5000

### Available Scripts
- `npm run dev`: Start development server (frontend + backend)
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run check`: Type check with TypeScript
- `npm run db:push`: Push schema changes to database

### Database Schema
The application uses a PostgreSQL database with the following schema:
- **users** table: id (uuid), username (unique), password, createdAt

## Deployment
Configured for Replit Autoscale deployment:
- Build command: `npm run build`
- Run command: `npm start`
- Target: Autoscale (stateless web application)

## Features
Based on the components structure, the app includes:
- Landing page with journey start
- Authentication system
- Dual plan options (Free/Pro)
- Mood tracking
- Journal entries
- Calendar view
- Crisis support
- AI-powered vent room
- Healing circles
- Therapist matching and booking
- EQ assessments
- Daily tips
- Profile dashboard

## Recent Changes
**October 28, 2025**
- GitHub import completed and configured for Replit
- Created missing `shared/schema.ts` for database types
- Configured Vite to allow all hosts (required for Replit proxy)
- Set up PostgreSQL database and pushed schema
- Configured workflow to run development server on port 5000
- Set up deployment configuration for production
