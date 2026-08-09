export const servers = [
  { hostname: 'dev-oms-01', environment: 'DEV', os: 'RHEL 9', application: 'Order Management', cpu: '4 vCPU', memory: '16 GB', status: 'UP', owner: 'Vipul Jain' },
  { hostname: 'qa-oms-01', environment: 'QA', os: 'RHEL 9', application: 'Order Management', cpu: '4 vCPU', memory: '16 GB', status: 'UP', owner: 'Vipul Jain' },
  { hostname: 'uat-oms-01', environment: 'UAT', os: 'RHEL 9', application: 'Order Management', cpu: '8 vCPU', memory: '32 GB', status: 'UP', owner: 'Amit Kumar' },
  { hostname: 'prod-oms-01', environment: 'PROD', os: 'RHEL 9', application: 'Order Management', cpu: '16 vCPU', memory: '64 GB', status: 'UP', owner: 'Rahul Sharma' },
  { hostname: 'prod-oms-02', environment: 'PROD', os: 'RHEL 9', application: 'Order Management', cpu: '16 vCPU', memory: '64 GB', status: 'UP', owner: 'Rahul Sharma' },
];

export const databases = [
  { name: 'OMS_DEV', type: 'PostgreSQL 15', environment: 'DEV', host: 'dev-pg-01.company.internal', port: 5432, schema: 'oms_core', owner: 'Vipul Jain', status: 'ONLINE', backup: 'Daily 01:00 UTC', retention: '14 days' },
  { name: 'OMS_QA', type: 'PostgreSQL 15', environment: 'QA', host: 'qa-pg-01.company.internal', port: 5432, schema: 'oms_core', owner: 'Vipul Jain', status: 'ONLINE', backup: 'Daily 01:30 UTC', retention: '14 days' },
  { name: 'OMS_UAT', type: 'PostgreSQL 15', environment: 'UAT', host: 'uat-pg-01.company.internal', port: 5432, schema: 'oms_core', owner: 'Amit Kumar', status: 'ONLINE', backup: 'Daily 02:00 UTC', retention: '30 days' },
  { name: 'OMS_PROD', type: 'PostgreSQL 15 HA', environment: 'PROD', host: 'prod-pg-vip.company.internal', port: 5432, schema: 'oms_core', owner: 'Rahul Sharma', status: 'ONLINE', backup: 'Hourly WAL + Daily full', retention: '90 days' },
];

export const handoverRunbook = [
  'Application purpose and order lifecycle walkthrough',
  'Architecture diagram and upstream/downstream dependencies',
  'Repository access, branch strategy and coding standards',
  'Build, deployment, rollback and release approval process',
  'Database schema, key tables, scheduled jobs and data retention',
  'API contracts, Swagger references, authentication and consumers',
  'Environment URLs, servers, monitoring dashboards and alert routing',
  'Known production issues, workarounds and escalation contacts',
  'Access requirements for VPN, Git, Jenkins, server, DB and monitoring',
  'Incoming employee sign-off and manager approval evidence',
];
