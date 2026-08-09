import { NextResponse } from 'next/server';import { trainings } from '@/data/mock';export async function GET(){return NextResponse.json(trainings)}
