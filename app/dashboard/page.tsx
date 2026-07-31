import StatCard from "@/components/dashboard/StatCard";
import ActivityChart from "@/components/dashboard/ActivityChart";
import RecentCalls from "@/components/dashboard/RecentCalls";
import AgentsList from "@/components/dashboard/AgentsList";

import {
  Phone,
  Bot,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* Dashboard Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your AI phone agents and monitor your calls.
        </p>
      </div>


      {/* Statistics Cards */}
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
          description="Excellent performance"
          icon={CheckCircle}
        />

        <StatCard
          title="Hours Saved"
          value="184h"
          description="Automation impact"
          icon={Clock}
        />

      </div>


      {/* Weekly Activity Chart */}
      <ActivityChart />


      {/* Recent Calls */}
      <RecentCalls />


      {/* AI Agents */}
      <AgentsList />

    </div>
  );
}
