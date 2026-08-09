import { NextResponse } from 'next/server';
import { databases, handoverRunbook, servers } from '@/data/infrastructure';
export async function GET() { return NextResponse.json({ servers, databases, handoverRunbook }); }
