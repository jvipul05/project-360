import { NextResponse } from 'next/server';import { articles, issues } from '@/data/mock';export async function GET(){return NextResponse.json({articles,issues})}
