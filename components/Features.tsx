import { PhoneCall, Bot, BarChart3 } from "lucide-react";

const features = [
  {
    icon: PhoneCall,
    title: "Real Phone Calls",
    description:
      "AI agents that can make and receive real phone calls using CALL-E.",
  },
  {
    icon: Bot,
    title: "Smart AI Agents",
    description:
      "Create specialized AI agents for sales, support, recruiting, and more.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Track conversations, outcomes, and performance with powerful analytics.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Everything you need to automate phone work
          </h2>

          <p className="mt-4 text-gray-600">
            Build AI employees that talk, listen, and complete real tasks.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border p-8 shadow-sm transition hover:shadow-lg"
            >
              <feature.icon className="mb-6 h-10 w-10 text-blue-600" />

              <h3 className="mb-3 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
