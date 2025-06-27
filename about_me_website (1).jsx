import React from "react";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-6 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 text-center">
        <img
          src="https://yt3.googleusercontent.com/bMaXV8LoTENI24VbHcG5K__G68ozWSHD_y7a-DsyEOtgIkl3T1k1ZWe7ENmQ5MPk1jrhqb6ofNo=s900-c-k-c0x00ffffff-no-rj" 
          alt="LuTuTu"
          className="rounded-full w-28 h-28 mx-auto border-4 border-white mb-4"
        />
        <h1 className="text-3xl font-bold">LuTuTu productions</h1>
        <p className="text-sm text-purple-200 mt-2">Roblox Brookhaven YouTuber • Movies • Roleplays</p>

        <p className="mt-4 text-white/90">
          Us here at LuTuTu productions we try to make kids happy. Thanks to our CEO Carlos Acosta or known as the maker of LuTuTu
        </p>

        <a
          href="https://www.youtube.com/@LuTuTu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-xl shadow-md"
        >
          🎥 Watch My Channel
        </a>

        <div className="mt-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Fun Facts:</h2>
          <ul className="list-disc list-inside space-y-1 text-white/80">
            <li>Started YouTube in 2020</li>
            <li>Over 359 Brookhaven videos</li>
            <li>Movies RP</li>
            <li>Dream collab: Scream team</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
