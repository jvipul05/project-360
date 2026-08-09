# ProjectHub

ProjectHub is an enterprise Project Knowledge, Handover, Onboarding & Access Management Portal frontend prototype built with mock data only.

## How to install

```bash
npm install
```

> In this environment, npm registry access returned 403, but `package.json` is prepared for a standard install.

## How to run

```bash
npm run dev
npm run build
npm run lint
```

## Project structure

- `src/app` — Next.js App Router routes.
- `src/components` — reusable layout, UI primitives, and in-memory state context.
- `src/data/mock.ts` — centralized mock data for projects, applications, people, access, onboarding, training, handover, knowledge, issues, and notifications.
- `src/lib/types.ts` — shared TypeScript interfaces.

## Technology stack

Next.js 16.3, TypeScript, Tailwind CSS, shadcn-inspired UI primitives, Lucide React icons, Recharts, React Hook Form/Zod-ready dependency setup, and date-fns-ready dependency setup.

## Available routes

`/`, `/dashboard`, `/projects`, `/projects/tom-001`, `/applications`, `/applications/oms-001`, `/people`, `/people/u1`, `/people/knowledge-matrix`, `/access`, `/access/approvals`, `/onboarding`, `/onboarding/onb-1`, `/training`, `/training/tr-1`, `/handover`, `/handover/ho-1`, `/knowledge`, `/knowledge/how-order-creation-works`, `/knowledge/issues`, `/reports`, `/admin`, `/admin/users`, `/admin/roles`, `/admin/audit`.

## Dummy users

Vipul Jain, Rahul Sharma, Amit Kumar, Neha Sharma, Priya Patel, and Rohit Verma.

## Future backend architecture

Replace the in-memory context with API clients backed by identity-aware services: project catalog, application CMDB, access workflow, onboarding/training orchestration, handover workflow, knowledge search, audit logging, and notification delivery. Secrets should remain vault-managed and never be returned to the browser.
