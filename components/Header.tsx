import { Smartphone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section>
      <header className="max-w-7xl mx-auto px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <Smartphone className="h-8 w-8 text-primary" />
          <span className="ml-2 text-xl font-bold">scaleDule</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#screenshots"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Screenshots
          </Link>
          <Link
            href="#download"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Download
          </Link>
        </nav>
      </header>
    </section>
  );
};

export default Header;
