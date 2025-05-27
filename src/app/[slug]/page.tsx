import { redirect, notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';

type PageProps = {
  params: { slug: string };
};

export default async function RedirectPage({ params }: PageProps) {
  const slug = params.slug;

  const url = await prisma.url.findUnique({
    where: { slug },
  });

  if (!url || !url.originalUrl) {
    notFound();
  }

  redirect(url.originalUrl);
}
