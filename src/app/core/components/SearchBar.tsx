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
    <div className="search">
      <div className="search-box">
        <div className="search-field">
          <input
            value={query}
            onChange={handleQueryChange}
            placeholder="Search..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleImmediateSearch();
              }
            }}
            className="input"
            type="text"
          />
          <div className="search-box-icon">
            <button
              onClick={handleImmediateSearch}
              className="btn-icon-content"
            >
              <i className="search-icon">
                <svg version="1.1" viewBox="0 0 512 512">
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
    </div>
  );
};

export default SearchBar;
