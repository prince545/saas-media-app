import dynamic from 'next/dynamic';
import MediaGallery from '../components/MediaGallery';

const VideoUploadForm = dynamic(() => import('../components/VideoUploadForm'), { ssr: false });
const ImageUploadForm = dynamic(() => import('../components/ImageUploadForm'), { ssr: false });

export default function Dashboard() {
  return (
    <div className="container mx-auto py-8 flex flex-col items-center min-h-screen">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-2 text-center">Dashboard</h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Upload your images and videos to your personal cloud gallery.</p>
        <div className="grid grid-cols-1 gap-8">
          <VideoUploadForm />
          <ImageUploadForm />
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <MediaGallery showTitle={false} />
      </div>
    </div>
  );
} 