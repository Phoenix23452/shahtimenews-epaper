import { db } from "@/db";
import { newspaperCategories, pageCategories } from "@/db/schema";
import { handleApiError } from "@/lib/api-utils";
import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { z } from "zod";

// Validation schema for both category types
const categorySchema = z.object({
  title: z.string().optional(),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Invalid slug format'),
  order: z.number().int().min(0, 'Order must be a non-negative integer').default(0),
});

// Type definitions
type CategoryType = 'page-categories' | 'newspaper-categories';

// Helper to determine table based on category type
const getTable = (type: CategoryType) => {
  return type === 'page-categories' ? pageCategories : newspaperCategories;
};
export async function GET(request: Request, { params }: { params: { type?: string[] } }) {
  try {
    const type = params.type?.[0] as CategoryType | undefined;

    if (!type || !['page-categories', 'newspaper-categories'].includes(type)) {
      return NextResponse.json({ error: 'Invalid category type' }, { status: 400 });
    }

    const table = getTable(type);
    const categories = await db
      .select()
      .from(table)
      .orderBy(table.order); // Sort by order

    return NextResponse.json(
      { data: categories, message: 'Success' },
      { headers: { 'Cache-Control': 'public, s-maxage=3600' } } // Cache for 1 hour
    );
  } catch (error) {
    return handleApiError(error, 'Failed to fetch categories');
  }
}

export async function POST(request: Request, { params }: { params: { type?: string[] } }) {
  try {
    const session = await getServerSession();
    // if (!session || session.user.role !== 'admin') {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const type = params.type?.[0] as CategoryType | undefined;
    if (!type || !['page-categories', 'newspaper-categories'].includes(type)) {
      return NextResponse.json({ error: 'Invalid category type' }, { status: 400 });
    }

    const body = await request.json();
    const validated = categorySchema.parse(body);

    const table = getTable(type);
    const existingSlug = await db.select().from(table).where(eq(table.slug, validated.slug));
    if (existingSlug.length > 0) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
    }

    const newCategory = await db
      .insert(table)
      .values(validated)
      .returning();

    return NextResponse.json({ data: newCategory[0], message: `${type} created` });
  } catch (error) {    
    return handleApiError(error, 'Failed to create category');
  }
}