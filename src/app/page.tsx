import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Home from '@/app/core/components/home';
import { routePaths } from '@/app/common/constants';

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect(routePaths.LOGIN);
  }
  const user = session?.user;

  // Pass session info if you want (optional)
  return <Home user={user} />;
}
