import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = saved === 'dark' || (!saved && prefersDark);

      document.documentElement.classList.toggle('dark', shouldBeDark);
      setDark(shouldBeDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-900 shadow mb-8">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xl font-semibold text-gray-800 dark:text-white">SaaS Media</Link>
        <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:underline">Dashboard</Link>
        <Link href="/users" className="text-gray-700 dark:text-gray-300 hover:underline">Users</Link>
        <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:underline">About</Link>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {dark ? '🌙' : '☀️'}
        </button>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
