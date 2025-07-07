import { useEffect, useState } from "react";
import Link from "next/link";
import { User } from "../../interfaces";
import Layout from "../../components/Layout";
import List from "../../components/List";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout title="Users List | SaaS Media App">
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Users List</h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-4">
          Browse all users of the SaaS Media Platform.
        </p>

        {loading && (
          <div className="flex justify-center items-center h-24">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {!loading && !error && users.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400">
            No users found.
          </div>
        )}

        {!loading && !error && users.length > 0 && <List items={users} />}

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm font-medium py-2 px-4 rounded transition"
          >
            Go home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
