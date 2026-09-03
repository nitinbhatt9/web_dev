import React from "react";

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-yellow-300 to-yellow-400 overflow-y-auto p-4 py-8">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto my-auto">
        {/* 404 Image - Max width handles smaller screens smoothly */}
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
          className="w-full max-w-[16rem] sm:max-w-xs md:max-w-sm lg:max-w-md h-auto mb-6 object-contain"
        />

        {/* Heading - Fluid text sizes */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black tracking-wide uppercase">
          404 Page
        </h1>

        {/* Description - Constrained max-width with padding */}
        <div className="mt-4 sm:mt-6 px-2">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-md md:max-w-lg balance">
            The page you were looking for could not be found.
          </p>
          <p className="mt-2 text-sm sm:text-base text-gray-700">
            Please go back to the previous page.
          </p>
        </div>

        {/* Button - Accessible tap size and responsive margin */}
        <button
          onClick={() => window.history.back()}
          className="mt-8 sm:mt-10 rounded-full bg-white px-8 py-3.5 sm:px-10 sm:py-4 text-lg sm:text-xl font-bold text-black shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.3)] active:scale-95 cursor-pointer select-none"
        >
          ← Back to Previous Page
        </button>
      </div>
    </div>
  );
}
