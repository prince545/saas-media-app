import React, { useState } from 'react';

export default function ImageUploadForm() {
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
      const res = await fetch('/api/upload/image', {
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
      className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Upload Image (JPG, PNG)</h2>

      <input
        type="file"
        accept="image/jpeg,image/png"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-700 dark:text-gray-200 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
      />

      <button
        type="submit"
        disabled={uploading || !file}
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {error && <div className="text-red-600">{error}</div>}

      {result && (
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded">
          Upload successful!
          <a
            href={result.secure_url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 underline text-blue-600 hover:text-blue-800"
          >
            View Image
          </a>
        </div>
      )}
    </form>
  );
}
