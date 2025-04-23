import { NextResponse } from 'next/server';

export function handleApiError(error: unknown, message: string) {
  console.error(error);
  return NextResponse.json(
    { error: message, message: error instanceof Error ? error.message : 'Unknown error' },
    { status: error instanceof Error ? 400 : 500 }
  );
}