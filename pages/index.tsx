import Link from 'next/link';

export default function Home() {
  console.log("Tailwind debug: Home component loaded");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <header className="w-full max-w-4xl mx-auto py-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-700 dark:text-white">SaaS Media Platform</h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
          Upload, manage, and share your images and videos securely in the cloud.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-2 px-6 rounded transition"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/users"
            className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg font-medium py-2 px-6 rounded transition"
          >
            Browse Users
          </Link>
          <Link
            href="#features"
            className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-white text-lg font-medium py-2 px-6 transition"
          >
            Learn More
          </Link>
        </div>
      </header>

      <section
        id="features"
        className="w-full max-w-4xl mx-auto py-12 grid md:grid-cols-3 gap-8"
      >
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
          <h2 className="font-bold text-xl mb-2">Cloud Storage</h2>
          <p className="text-gray-700 dark:text-gray-300">
            All your media is stored securely and reliably in the cloud with instant access.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
          <h2 className="font-bold text-xl mb-2">Easy Uploads</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Upload images and videos with a simple drag-and-drop interface and instant previews.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
          <h2 className="font-bold text-xl mb-2">Share & Collaborate</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Share media with public links or on social media, and manage your content easily.
          </p>
        </div>
      </section>

      <footer className="mt-auto py-8 text-center text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} SaaS Media Platform. All rights reserved.
      </footer>

      
    </div>
  );
}
