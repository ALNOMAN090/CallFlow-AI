export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="mb-6 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          🚀 AI Phone Agents powered by CALL-E
        </span>

        <h1 className="max-w-5xl text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
          Let AI Make Real Phone Calls
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-gray-600">
          Create intelligent AI agents that can call customers,
          schedule appointments, qualify leads,
          automate workflows, and complete real-world tasks.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border border-gray-300 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
            Watch Demo
          </button>

        </div>

      </div>
    </section>
  );
}
