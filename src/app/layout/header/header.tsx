'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/app/core/SearchBar';
import { SITE_TITLE } from '@/app/common/constants';

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
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
      <SearchBar onSearch={onSearch} />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/public">Favorites</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

type HeaderProps = {
    onSearch: (q: string) => void;
};

export default Header;
