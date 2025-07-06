import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { Fragment, ReactNode } from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function ProtectedLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) {redirect('/authentication/login');}

  return <Fragment>{children}</Fragment>;
}
