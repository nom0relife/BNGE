'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/app/core/SearchBar';
import { SITE_TITLE } from '@/app/common/constants';

const Header: FC<HeaderProps> = ( ) => {
  return (
    <header
      className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/siteLogo.png"
          alt="Binger"
          width={50}
          height={50}
          className="mr-2"
        />
        <h1 className="text-2xl font-bold">{SITE_TITLE}</h1>
      </div>
      <SearchBar />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
          <li>
            <Link href="/movies/about">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

type HeaderProps = {
    onSearch?: (query: string) => void;
};

export default Header;
