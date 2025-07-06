import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { Fragment, ReactNode } from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Header from '@/app/(protected)/layout/header/header';
import Footer from '@/app/(protected)/layout/footer/footer';

export default async function ProtectedLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) {redirect('/authentication/login');}
  const user = session?.user;

  return <Fragment>
    <Header user={user} />
    {children}
    <Footer />
  </Fragment>;
}
