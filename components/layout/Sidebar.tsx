"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bot,
  Phone,
  BarChart3,
  Settings,
} from "lucide-react";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Agents",
    href: "/dashboard/agents",
    icon: Bot,
  },
  {
    title: "Calls",
    href: "/dashboard/calls",
    icon: Phone,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold text-blue-600">
          CallFlow AI
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          AI Phone Agents
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />
              {link.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
