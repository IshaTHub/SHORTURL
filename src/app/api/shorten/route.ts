import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateSlug } from '@/lib/generateSlug';



export async function POST(req: NextRequest) {
  const { url } = await req.json();

  if (!url || typeof url !== 'string') {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  let slug = generateSlug();
  while (await prisma.url.findUnique({ where: { slug } })) {
    slug = generateSlug(); // ensure uniqueness
  }

  await prisma.url.create({
    data: { slug, originalUrl: url },
  });

  const shortUrl = `${req.nextUrl.origin}/${slug}`;
  return NextResponse.json({ shortUrl });
}
