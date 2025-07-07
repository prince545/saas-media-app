import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About | SaaS Media Platform">
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">About SaaS Media Platform</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-200">
        <b>SaaS Media Platform</b> is a modern, full-stack SaaS application for uploading, managing, and sharing images and videos in the cloud. Built with Next.js, TypeScript, Tailwind CSS, and Clerk authentication, it provides a seamless and secure experience for users and teams.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Key Features</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700 dark:text-gray-200">
        <li>Cloud-based image and video uploads (Cloudinary integration)</li>
        <li>Responsive public gallery and personal dashboard</li>
        <li>Modern authentication with Clerk</li>
        <li>Social sharing and download options</li>
        <li>Beautiful UI with Tailwind CSS</li>
        <li>Dark mode support</li>
        <li>API-driven user management</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Tech Stack</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700 dark:text-gray-200">
        <li>Next.js (React, SSR, API routes)</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Cloudinary (media storage)</li>
        <li>Clerk (authentication)</li>
      </ul>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
