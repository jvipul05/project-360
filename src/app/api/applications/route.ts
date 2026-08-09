import { NextResponse } from 'next/server';import { applications } from '@/data/mock';export async function GET(){return NextResponse.json(applications)}
