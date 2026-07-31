import StatCard from "@/components/dashboard/StatCard";
import {
  Phone,
  Bot,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back 👋
        </h1>

        <p className="text-gray-500">
          Here's what's happening with your AI phone agents today.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Calls"
          value="1,248"
          description="+12% this week"
          icon={Phone}
        />

        <StatCard
          title="Active Agents"
          value="8"
          description="2 deployed today"
          icon={Bot}
        />

        <StatCard
          title="Success Rate"
          value="96%"
          description="Excellent"
          icon={CheckCircle}
        />

        <StatCard
          title="Hours Saved"
          value="184h"
          description="Automation"
          icon={Clock}
        />
      </div>
    </div>
  );
}
