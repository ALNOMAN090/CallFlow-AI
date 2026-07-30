import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          CallFlow AI
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-gray-600 hover:text-blue-600">
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="text-gray-600 hover:text-blue-600"
          >
            How It Works
          </Link>

          <Link href="#pricing" className="text-gray-600 hover:text-blue-600">
            Pricing
          </Link>
        </nav>

        <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </header>
  );
}
