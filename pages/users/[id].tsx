import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from "../../interfaces";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";

export default function UserDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`/api/users`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data: User[]) => {
        const found = data.find((u) => u.id === Number(id));
        if (!found) throw new Error("User not found");
        setUser(found);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <Layout title={user ? `${user.name} | User Detail` : "User Detail | SaaS Media App"}>
      <div className="max-w-xl mx-auto py-8">
        {loading && <div className="flex justify-center items-center h-24"><span className="loading loading-spinner loading-lg text-primary"></span></div>}
        {error && <div className="alert alert-error mb-4">{error}</div>}
        {!loading && !error && user && <ListDetail item={user} />}
      </div>
    </Layout>
  );
}
