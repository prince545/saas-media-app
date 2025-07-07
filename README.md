# SaaS Media Platform

A modern SaaS application for uploading, managing, and sharing images and videos in the cloud. Built with Next.js, TypeScript, Tailwind CSS, and Clerk authentication, this project demonstrates a full-stack, production-ready SaaS platform suitable for your resume or portfolio.

## Features
- Cloud-based image and video uploads (Cloudinary integration)
- Responsive public gallery and personal dashboard
- Modern authentication with Clerk
- Social sharing and download options
- Beautiful UI with Tailwind CSS and DaisyUI
- Dark mode support
- API-driven user management

## Tech Stack
- **Next.js** (React, SSR, API routes)
- **TypeScript**
- **Tailwind CSS** & **DaisyUI**
- **Cloudinary** (media storage)
- **Clerk** (authentication)

## Getting Started

### Prerequisites
- Node.js 18+
- Cloudinary account (for media uploads)
- Clerk account (for authentication)

### Setup
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd saas-media-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Configure environment variables:**
   - Create a `.env.local` file in the root of `saas-media-app/` with the following:
     ```env
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
     CLERK_SECRET_KEY=your_clerk_secret_key
     ```
4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Usage
- **Landing Page:** Overview and call to action.
- **Dashboard:** Upload images/videos, view your media gallery.
- **Gallery:** Browse all uploaded media.
- **Users:** View all users and user details.
- **Authentication:** Sign in/out with Clerk.

## Screenshots
> Add screenshots here for extra polish!

## License
MIT

---

**Created for portfolio and resume use.**
