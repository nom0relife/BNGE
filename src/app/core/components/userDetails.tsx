'use client';
import { FC } from 'react';
import { signOut } from 'next-auth/react';

export const UserDetails: FC<{ user?: { name?: string | null } }> = ({ user }) => (
  <div className="flex items-center gap-4">
    <span className="text-gray-700">Welcome <span className="font-semibold">{user?.name}</span></span>
    <button
      onClick={() => signOut()}
      className="rounded-xl bg-gray-900 text-white px-4 py-2
      transition hover:bg-gray-700 active:bg-gray-800 text-sm shadow"
      title="Log out"
    >
        Log out
    </button>
  </div>
);
