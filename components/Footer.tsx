import { Smartphone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="flex items-center space-x-2">
        <Smartphone className="h-5 w-5 text-primary" />
        <span className="font-semibold">scaleDule</span>
      </div>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/privacy"
          className="text-xs hover:underline underline-offset-4"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="text-xs hover:underline underline-offset-4"
        >
          Terms of Service
        </Link>
        <Link
          href="/contact"
          className="text-xs hover:underline underline-offset-4"
        >
          Contact Us
        </Link>
      </nav>
      <p className="text-xs text-muted-foreground">
        © 2025 scaleDule. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
