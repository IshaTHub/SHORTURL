import { redirect, notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';

type Props = {
  params: { slug: string };
};

export default async function RedirectPage(props: Props) {
  const { slug } = props.params; //dynamic route segments

  const url = await prisma.url.findUnique({
    where: { slug }, 
  });

  if (!url || !url.originalUrl) {
    notFound();
  }

  redirect(url.originalUrl);
}
