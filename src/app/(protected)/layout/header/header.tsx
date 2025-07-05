'use client';
import React, { FC, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { routePaths, SITE_TITLE } from '@/app/common/constants';
import { UserDetails } from '@/app/core/components/userDetails';
import { Session } from 'next-auth';

const Header:FC<{user?:Session['user']}>= ({ user }) => {
  return (
    <Fragment>
      {/* Search Bar */}
      {/* Navbar */}
      <header className="bg-gray-800 text-white px-8 py-3 flex items-center justify-between w-full shadow-md">
        {/* Left: Logo and Site Title */}
        <div className="flex items-center">
          <Image
            src="/siteLogo.png"
            alt="Binger"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="text-2xl font-bold">{SITE_TITLE}</span>
        </div>

        {/* Center: Navigation */}
        <nav className="flex-1">
          <ul className="flex justify-center space-x-8 font-semibold text-lg">
            <li>
              <Link href={routePaths.HOME} className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href={routePaths.FAVORITES} className="hover:underline">Favorites</Link>
            </li>
            <li>
              <Link href={routePaths.ABOUT} className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Right: User Details */}
        <div className="flex items-center ml-6">
          <UserDetails user={user} />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
