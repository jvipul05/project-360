'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { demoLogins, type DemoLogin } from '@/data/auth';

type AuthContextValue = {
  user: DemoLogin | null;
  login: (id: string, password: string) => { ok: boolean; message: string; landing?: string };
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const STORAGE_KEY = 'projecthub.demo.user';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<DemoLogin | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    login: (id, password) => {
      const found = demoLogins.find((account) => account.id === id && account.password === password);
      if (!found) return { ok: false, message: 'Invalid demo user ID or password.' };
      setUser(found);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
      return { ok: true, message: `Welcome ${found.name}`, landing: found.landing };
    },
    logout: () => {
      setUser(null);
      window.localStorage.removeItem(STORAGE_KEY);
    },
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
