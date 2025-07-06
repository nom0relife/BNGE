import { FC } from 'react';
import { Session } from 'next-auth';

export const  UserDetails:FC<{user?:Session['user']}> = ({ user }) => {

  return <div>Welcome {user?.email}</div>;
};

