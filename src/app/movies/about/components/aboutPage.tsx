'use client';

import React, { FC } from 'react';

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#18122B] via-[#232038] to-[#393053] flex items-center
     justify-center px-4">
      <div className="max-w-2xl w-full
        bg-white/10 border border-[#A084DC]/30 backdrop-blur-lg
        shadow-[0_8px_48px_0_rgba(160,132,220,0.15)]
        rounded-2xl p-8 md:p-12 animate-fade-in
        ring-1 ring-[#A084DC]/10
        ">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-300 mb-6 tracking-tight
         drop-shadow-[0_4px_12px_rgba(160,132,220,0.2)]">
                    About <span className="text-[#A084DC]">Binger</span>
        </h1>
        <p className="text-lg md:text-xl text-purple-100 mb-8 font-light leading-relaxed">
          <b>Binger</b> is your all-in-one platform for discovering and tracking your favorite entertainment — movies,
                    TV shows, music, books, and games.
            We’re on a mission to make it effortless for everyone to explore, save,
                    and revisit the stories and experiences they love.
        </p>

        <div className="space-y-5 mb-10">
          <Feature
            title="Comprehensive Search"
            description="Find movies, music, books, and games from all over the world, all in one place."
          />
          <Feature
            title="Personal Library"
            description="Save your favorites and create your own personal watchlist, reading list, or playlist."
          />
          <Feature
            title="Up-to-Date Info"
            description="Access the latest details, ratings, and recommendations for every title."
          />
          <Feature
            title="User-Friendly Experience"
            description="Enjoy a clean, intuitive interface built for geeks, binge-watchers, and casual fans alike."
          />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#A084DC] mb-2">Our Vision</h2>
          <p className="text-purple-100 font-light">
                        We believe entertainment is more than just a pastime — it’s a passion.
                        Binger aims to bring together a community of like-minded people
                        who love to discover, discuss, and share what inspires them.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#A084DC] mb-2">Get Involved</h2>
          <p className="text-purple-100 font-light mb-2">
                        Have feedback or feature requests? We’d love to hear from you!
          </p>
          <a
            href="/contact"
            className="inline-block mt-2 px-6 py-2 bg-[#A084DC] text-white rounded-xl font-semibold
              shadow-lg shadow-[#A084DC]/30 hover:bg-[#8B70BF] transition-all duration-200"
          >
                        Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
    title: string;
    description: string;
}

const Feature: FC<FeatureProps> = ({ title, description }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 w-3 h-3 rounded-full bg-[#A084DC] shadow-lg shadow-[#A084DC]/30 animate-pulse"></div>
    <div>
      <div className="font-semibold text-purple-200">{title}</div>
      <div className="text-purple-100 font-light text-sm">{description}</div>
    </div>
  </div>
);

export default AboutPage;
