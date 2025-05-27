// src/app/[slug]/page.tsx

import { redirect, notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';

// ✅ DO NOT define a custom props type. Let Next.js infer it.
export default async function RedirectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const url = await prisma.url.findUnique({
    where: { slug },
  });

  if (!url?.originalUrl) {
    notFound();
  }

  redirect(url.originalUrl);
}
