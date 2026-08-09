# ProjectHub

ProjectHub is an enterprise Project Knowledge, Handover, Onboarding & Access Management Portal. This repository contains a full frontend demo plus mock Next.js API routes so a manager/client can click through login, access, onboarding, training, handover, application 360, infrastructure, knowledge and admin flows without a real backend.

## Demo logins

All demo accounts use the password `ProjectHub@123`.

| User ID | Role | Demo journey |
| --- | --- | --- |
| `super.admin` | Super Admin | Administration, users, roles and audit logs |
| `project.admin` | Project Admin | Project dashboard and settings |
| `manager` | Manager | Dashboard, approvals, handovers and reports |
| `tech.lead` | Technical Lead | Application 360, infrastructure, deployment and database details |
| `spoc` | Application Owner / SPOC | Application ownership, knowledge and access requests |
| `developer` | Developer | Knowledge, APIs, environments and onboarding references |
| `new.joiner` | New Joiner | Personal onboarding plan, training and handover checklist |

## How to install

```bash
npm install
```

> The hosted coding container returned `403 Forbidden` from npm registry access. On a normal workstation or CI runner with npm access, install dependencies first and then run the commands below.

## How to run

```bash
npm run dev
npm run build
npm run lint
```

Open `http://localhost:3000/login`, sign in with one of the demo IDs above, and navigate through the sidebar.

## Project structure

- `src/app` — Next.js App Router pages and mock API routes.
- `src/app/api` — backend-style JSON endpoints for auth, projects, applications, people, access, onboarding, training, handover, knowledge and infrastructure.
- `src/components` — reusable app shell, UI primitives, auth context and in-memory state context.
- `src/data` — centralized domain data, demo logins, infrastructure inventory and handover runbook.
- `src/lib` — TypeScript interfaces and mock service helpers.

## Technology stack

Next.js App Router, TypeScript, Tailwind CSS, shadcn-inspired UI primitives, Lucide React icons, Recharts, React Hook Form/Zod-ready dependencies and date-fns-ready dependencies.

## Available routes

`/`, `/login`, `/dashboard`, `/projects`, `/projects/tom-001`, `/applications`, `/applications/oms-001`, `/people`, `/people/u1`, `/people/knowledge-matrix`, `/access`, `/access/approvals`, `/onboarding`, `/onboarding/onb-1`, `/training`, `/training/tr-1`, `/handover`, `/handover/ho-1`, `/knowledge`, `/knowledge/how-order-creation-works`, `/knowledge/issues`, `/reports`, `/admin`, `/admin/users`, `/admin/roles`, `/admin/audit`.

## Mock backend/API routes

- `POST /api/auth/login`
- `GET /api/projects`
- `GET /api/applications`
- `GET /api/users`
- `GET|POST /api/access`
- `POST /api/access/[id]/approve`
- `POST /api/access/[id]/reject`
- `GET|POST /api/onboarding`
- `POST /api/onboarding/[id]/complete`
- `GET|POST /api/handover`
- `POST /api/handover/[id]/complete`
- `POST /api/handover/[id]/approve`
- `GET /api/training`
- `POST /api/training/[id]/complete`
- `GET /api/knowledge`
- `GET /api/infrastructure`

## Future backend architecture

For production, replace the mock contexts and route handlers with a real database-backed service layer. Recommended architecture: PostgreSQL for project/application/access/workflow data, object storage for documents, a search index for knowledge/articles/issues, RBAC enforced by an identity provider, workflow services for approvals/handover/onboarding, and a secrets vault for credentials. Passwords and database secrets must never be returned to the browser; ProjectHub should only show metadata and vault-managed access workflows.
