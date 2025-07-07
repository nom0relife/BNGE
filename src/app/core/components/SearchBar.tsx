'use client';
import '@/app/(protected)/movies/styles/searchBar.css';
import React, { ChangeEvent, useMemo, useEffect, FC } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import { setQuery } from '@/app/redux/slices/uiState';
import debounce from 'lodash/debounce';
import { MediaType } from '@/app/common/constants';



const SearchBar: FC<{
  selectedType: string,
  setSelectedType: React.Dispatch<React.SetStateAction<MediaType>>
}> = ({
  selectedType,
  setSelectedType
}) => {
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
    if(selectedType === 'movies'){
      debouncedNavigate(value);  // Navigation happens after 400ms pause
    }
  };

  // For immediate search on Enter or button
  const handleImmediateSearch = () => {
    if(selectedType === 'movies') {
      router.push(`/?search=${encodeURIComponent(query)}`);
    }
    if(selectedType === 'games') {
      router.push(`/?search=${encodeURIComponent(query)}`);
    }
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
              onClick={() => setSelectedType('movies')}
              className={`rounded-full border-2 border-purple-600
              shadow w-9 h-9 flex items-center justify-center text-xl transition
              ${selectedType === 'movies'
      ? 'bg-purple-600 text-white'
      : 'bg-[#22273a] text-purple-300 hover:text-white hover:bg-purple-700'}`}
            >
                🎬
            </button>
            <button
              type="button"
              aria-label="Music"
              onClick={() => setSelectedType('music')}
              className={`rounded-full border-2 border-pink-600
              shadow w-9 h-9 flex items-center justify-center text-xl transition
              ${selectedType === 'music'
      ? 'bg-pink-600 text-white'
      : 'bg-[#22273a] text-pink-300 hover:text-white hover:bg-pink-600'}`}
            >
                🎵
            </button>
            <button
              type="button"
              aria-label="Games"
              onClick={() => setSelectedType('games')}
              className={`rounded-full border-2 border-blue-500
              shadow w-9 h-9 flex items-center justify-center text-xl transition
              ${selectedType === 'games'
      ? 'bg-blue-600 text-white'
      : 'bg-[#22273a] text-blue-300 hover:text-white hover:bg-blue-600'}`}
            >
                🎮
            </button>
            <button
              type="button"
              aria-label="Books"
              onClick={() => setSelectedType('books')}
              className={`rounded-full border-2 border-green-600
              shadow w-9 h-9 flex items-center justify-center text-xl transition
              ${selectedType === 'books'
      ? 'bg-green-600 text-white'
      : 'bg-[#22273a] text-green-300 hover:text-white hover:bg-green-700'}`}
            >
                📚
            </button>
          </div>

          {/* Input */}
          <input
            value={query}
            onChange={handleQueryChange}
            placeholder="Search..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') { handleImmediateSearch(); }
            }}
            className="flex-1 min-w-0 bg-transparent text-gray-200 px-3 py-2 focus:outline-none placeholder-gray-400 mx-3"
            type="text"
          />

          {/* Search Button */}
          <button
            onClick={handleImmediateSearch}
            className="rounded-full bg-purple-700 hover:bg-purple-800 p-2 ml-1 transition"
            style={{ lineHeight: 0 }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
              <circle cx="11" cy="11" r="8" stroke="currentColor" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
