import { NextResponse } from 'next/server';
import { demoLogins } from '@/data/auth';

export async function POST(request: Request) {
  const { id, password } = await request.json();
  const user = demoLogins.find((account) => account.id === id && account.password === password);
  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  return NextResponse.json({ user: { id: user.id, name: user.name, role: user.role, landing: user.landing } });
}
