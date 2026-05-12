"use client";

import { useRouter } from "next/navigation";

export default function DashboardNavbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/login");
    router.refresh();
  };

  return (
    <div className="h-16 border-b border-zinc-800 bg-zinc-900 flex items-center justify-between px-6">
      <h1 className="text-white text-xl font-semibold">
        Dashboard
      </h1>

      <button
        onClick={handleLogout}
        className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
      >
        Logout
      </button>
    </div>
  );
}