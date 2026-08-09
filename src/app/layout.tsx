import './globals.css';
import { Shell } from '@/components/ui';
import { AppState } from '@/components/state';
import { AuthProvider } from '@/components/auth';

export const metadata = {
  title: 'ProjectHub',
  description: 'Project Knowledge, Handover, Onboarding & Access Management Portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AppState>
            <Shell>{children}</Shell>
          </AppState>
        </AuthProvider>
      </body>
    </html>
  );
}
