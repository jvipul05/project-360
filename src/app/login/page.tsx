'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { demoLogins } from '@/data/auth';
import { useAuth } from '@/components/auth';
import { Card, PageHeader } from '@/components/ui';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [message, setMessage] = useState('Use any demo account below. Password is ProjectHub@123.');
  const [selected, setSelected] = useState(demoLogins[0].id);

  function submit(formData: FormData) {
    const id = String(formData.get('id'));
    const password = String(formData.get('password'));
    const result = login(id, password);
    setMessage(result.message);
    if (result.ok && result.landing) router.push(result.landing);
  }

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader title="ProjectHub Demo Login" desc="Role-based demo entry for admin, manager, lead, SPOC, developer and new joiner journeys." />
      <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <Card>
          <form action={submit} className="grid gap-3">
            <label className="text-sm font-semibold">Demo user</label>
            <select name="id" value={selected} onChange={(event) => setSelected(event.target.value)}>
              {demoLogins.map((account) => (
                <option key={account.id} value={account.id}>{account.name} — {account.role}</option>
              ))}
            </select>
            <label className="text-sm font-semibold">Password</label>
            <input className="input" name="password" type="password" defaultValue="ProjectHub@123" />
            <button className="btn" type="submit">Sign in to ProjectHub</button>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>{message}</p>
          </form>
        </Card>
        <Card>
          <h2 className="mb-3 text-lg font-bold">Demo IDs and Passwords</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>User ID</th><th>Password</th><th>Role</th><th>Landing</th></tr></thead>
              <tbody>{demoLogins.map((account) => (
                <tr key={account.id}><td>{account.id}</td><td><code>{account.password}</code></td><td>{account.role}</td><td>{account.landing}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
