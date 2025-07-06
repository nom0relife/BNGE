'use client';
import '@/app/(protected)/movies/styles/searchBar.css';
import React, { ChangeEvent, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import { setQuery } from '@/app/redux/slices/uiState';
import debounce from 'lodash/debounce';

const SearchBar = () => {
  const query = useSelector((state: RootState) => state.uiState.query);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  // Debounce the navigation: this is the only place you need lodash!
  const debouncedNavigate = useMemo(
    () =>
      debounce((searchQuery: string) => {
        router.push(`/?search=${encodeURIComponent(searchQuery)}`);
      }, 500), // 500ms debounce
    [router]
  );

  // Cancel debounce if component unmounts (cleanup)
  useEffect(() => {
    return () => debouncedNavigate.cancel();
  }, [debouncedNavigate]);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setQuery(value));    // Input updates instantly (Redux)
    debouncedNavigate(value);     // Navigation happens after 400ms pause
  };

  // For immediate search on Enter or button
  const handleImmediateSearch = () => {
    router.push(`/?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="bg-gray-900 py-4 flex justify-center w-full shadow">
      <div className="w-full max-w-xl px-2">
        <div className="flex items-center bg-[#232435] border border-gray-700 rounded-lg shadow-md px-3 py-2 w-full">
          {/* Icons */}
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Movies"
              className="rounded-full border-2 border-purple-600 bg-[#22273a] text-purple-300 hover:text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 shadow w-9 h-9 flex items-center justify-center text-xl transition"
            >
                🎬
            </button>
            <button
              type="button"
              aria-label="Music"
              className="rounded-full border-2 border-pink-600 bg-[#22273a] text-pink-300 hover:text-white hover:bg-pink-600 focus:ring-2 focus:ring-pink-400 shadow w-9 h-9 flex items-center justify-center text-xl transition"
            >
                🎵
            </button>
            <button
              type="button"
              aria-label="Games"
              className="rounded-full border-2 border-blue-500 bg-[#22273a] text-blue-300 hover:text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 shadow w-9 h-9 flex items-center justify-center text-xl transition"
            >
                🎮
            </button>
          </div>
          {/* Input */}
          <input
            value={query}
            onChange={handleQueryChange}
            placeholder="Search..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {handleImmediateSearch();}
            }}
            className="flex-1 min-w-0 bg-transparent text-gray-200 px-3 py-2 focus:outline-none placeholder-gray-400 mx-3"
            type="text"
          />
          {/* Search Button */}
          <button
            onClick={handleImmediateSearch}
            className="btn-icon-content"
          >
            <i className="search-icon">
              <svg version="1.1" viewBox="0 0 512 512" className="w-5 h-5">
                <path
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7
                  376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416
                  208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  fill="#fff"></path>
              </svg>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
