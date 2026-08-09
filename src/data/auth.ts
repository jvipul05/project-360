export interface DemoLogin {
  id: string;
  password: string;
  name: string;
  role: string;
  landing: string;
}

export const demoLogins: DemoLogin[] = [
  { id: 'super.admin', password: 'ProjectHub@123', name: 'Meera Singh', role: 'Super Admin', landing: '/admin' },
  { id: 'project.admin', password: 'ProjectHub@123', name: 'Rahul Sharma', role: 'Project Admin', landing: '/projects/tom-001' },
  { id: 'manager', password: 'ProjectHub@123', name: 'Rahul Sharma', role: 'Manager', landing: '/dashboard' },
  { id: 'tech.lead', password: 'ProjectHub@123', name: 'Amit Kumar', role: 'Technical Lead', landing: '/applications/oms-001' },
  { id: 'spoc', password: 'ProjectHub@123', name: 'Vipul Jain', role: 'Application Owner / SPOC', landing: '/applications/oms-001' },
  { id: 'developer', password: 'ProjectHub@123', name: 'Priya Patel', role: 'Developer', landing: '/knowledge' },
  { id: 'new.joiner', password: 'ProjectHub@123', name: 'Rohit Verma', role: 'New Joiner', landing: '/onboarding/onb-1' },
];
