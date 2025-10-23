// import Link from "next/link";
// import React from "react";

// export const Logo = () => {
//   return (
//     <Link
//       href="/"
//       className="text-3xl font-bold text-foreground transition-colors hover:text-primary"
//     >
//       Нове Життя<span className="text-primary">.</span>
//     </Link>
//   );
// };

import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-x-3">
      {/* Імітація логотипу з референсу */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#97c74e" />
            <stop offset="100%" stopColor="#2ab9a5" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="20" fill="url(#logoGradient)" />
        <path
          d="M15 20L19 24L26 17"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-3xl font-bold text-foreground">Нове Життя</span>
    </Link>
  );
};
