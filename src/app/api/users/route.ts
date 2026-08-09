import { NextResponse } from 'next/server';import { users } from '@/data/mock';export async function GET(){return NextResponse.json(users)}
