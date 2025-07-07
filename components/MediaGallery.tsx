import React, { useEffect, useState } from 'react';

interface MediaItem {
  id: string;
  type: 'video' | 'image';
  url: string;
  createdAt: number;
}

type Props = {
  showTitle?: boolean;
};

export default function MediaGallery({ showTitle = true }: Props) {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<MediaItem | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('/api/media')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch media');
        return res.json();
      })
      .then((data) => setMedia(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="bg-red-100 text-red-800 p-4 rounded shadow mb-4 text-center">
        {error}
      </div>
    );

  if (media.length === 0)
    return (
      <div className="text-center text-gray-500 dark:text-gray-400">
        No media found. Upload your first image or video!
      </div>
    );

  return (
    <>
      {showTitle && (
        <h1 className="text-3xl font-bold mb-6 text-center">Public Gallery</h1>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {media.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 shadow rounded cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelected(item)}
          >
            {item.type === 'video' ? (
              <video
                src={item.url}
                controls
                className="w-full h-48 object-cover rounded-t"
              />
            ) : (
              <img
                src={item.url}
                alt="media"
                className="w-full h-48 object-cover rounded-t"
              />
            )}
            <div className="p-2 text-xs text-gray-500 dark:text-gray-400">
              {new Date(item.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-4 text-center">Preview</h3>
            {selected.type === 'video' ? (
              <video
                src={selected.url}
                controls
                className="w-full max-h-96 mx-auto rounded"
              />
            ) : (
              <img
                src={selected.url}
                alt="media"
                className="w-full max-h-96 mx-auto rounded"
              />
            )}
            <div className="mt-4 flex gap-2 justify-center flex-wrap">
              <a
                href={selected.url}
                download
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Download
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  selected.url
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Share on Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  selected.url
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Share on Facebook
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
