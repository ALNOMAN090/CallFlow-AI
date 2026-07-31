"use client";

import { useEffect, useState } from "react";

type Agent = {
  id: number;
  name: string;
  task: string;
  status: string;
  calls: number;
};

export default function AgentsList() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAgents() {
      try {
        const response = await fetch("/api/agents");

        const data = await response.json();

        if (data.success) {
          setAgents(data.agents);
        }

      } catch (error) {
        console.error(error);

      } finally {
        setLoading(false);
      }
    }

    loadAgents();

  }, []);


  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          AI Agents
        </h2>

        <p className="text-sm text-gray-500">
          Manage your deployed phone agents.
        </p>
      </div>


      {loading && (
        <p className="text-gray-500">
          Loading agents...
        </p>
      )}


      {!loading && agents.length === 0 && (
        <p className="text-gray-500">
          No agents created yet.
        </p>
      )}


      <div className="space-y-4">

        {agents.map((agent) => (

          <div
            key={agent.id}
            className="flex items-center justify-between rounded-xl border p-4"
          >

            <div>
              <h3 className="font-semibold">
                {agent.name}
              </h3>

              <p className="text-sm text-gray-500">
                {agent.task}
              </p>
            </div>


            <div className="text-right">

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                {agent.status}
              </span>

              <p className="mt-2 text-sm text-gray-500">
                {agent.calls} calls
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
