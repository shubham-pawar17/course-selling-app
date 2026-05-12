"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "My Courses",
    href: "/dashboard/courses",
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 min-h-screen p-5">
      <h2 className="text-2xl font-bold text-white mb-10">
        CourseApp
      </h2>

      <nav className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-3 rounded-lg transition ${
              pathname === link.href
                ? "bg-white text-black"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}