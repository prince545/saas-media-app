import React, { useState } from 'react';

export default function VideoUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    setError(null);
    setResult(null);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await fetch('/api/upload/video', {
        method: 'POST',
        body: formData,
      });
      const contentType = res.headers.get('content-type');
      const isJson = contentType?.includes('application/json');
      if (!res.ok) {
        const errorText = isJson ? (await res.json()).error : await res.text();
        throw new Error(errorText || `Upload failed: ${res.status}`);
      }
      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Upload Video (MP4)
      </h2>
      <input
        type="file"
        accept="video/mp4"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-700 dark:text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-4"
      />
      <button
        type="submit"
        disabled={uploading || !file}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition disabled:opacity-50"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {error && (
        <div className="mt-4 p-2 bg-red-100 text-red-700 rounded text-sm">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-4 p-2 bg-green-100 text-green-800 rounded text-sm">
          <span>Upload successful!</span>
          <a
            href={result.secure_url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 underline text-blue-600"
          >
            View Video
          </a>
        </div>
      )}
    </form>
  );
}
