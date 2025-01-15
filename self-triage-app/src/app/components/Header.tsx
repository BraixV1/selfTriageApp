import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white/10 backdrop-blur-lg p-4 mb-6">
      <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold transition-all duration-300 hover:scale-105"
        >
          TerviseNõunik
        </Link>

        <div className="flex space-x-6">
          <Link
            href="/"
            className="hover:text-white transition-all duration-300"
          >
            Avaleht
          </Link>
          <Link
            href="/about"
            className="hover:text-white transition-all duration-300"
          >
            Meist
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
