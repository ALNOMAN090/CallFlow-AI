"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div>
        <h1 className="text-xl font-bold text-gray-900">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 hover:bg-gray-100">
          <Search size={20} />
        </button>

        <button className="rounded-lg p-2 hover:bg-gray-100">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-2 rounded-full border px-3 py-2">
          <UserCircle2 size={22} />
          <span className="text-sm font-medium">
            ALNUMAN
          </span>
        </div>
      </div>
    </header>
  );
}
