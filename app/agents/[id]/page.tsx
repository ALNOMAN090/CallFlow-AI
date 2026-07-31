"use client";

import { useState } from "react";

import {
  Phone,
  Bot,
  Activity,
  Clock,
} from "lucide-react";


export default function AgentDetailsPage() {

  const [calling, setCalling] = useState(false);


  const agent = {
    name: "Sales Agent",
    task: "Sales Calls",
    status: "Active",
    calls: 342,
    duration: "28h 15m",
  };


  async function startCall() {

    setCalling(true);

    try {

      const response = await fetch("/api/calls", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          agentId: 1,
          customer: "Ahmed Hassan",
        }),

      });


      const data = await response.json();


      if (data.success) {

        window.location.href = `/calls/${data.call.id}`;

      }


    } catch (error) {

      console.error(error);

      alert("Failed to start call");


    } finally {

      setCalling(false);

    }

  }



  return (

    <div className="space-y-8">


      <div>

        <h1 className="text-3xl font-bold">
          {agent.name} 🤖
        </h1>

        <p className="mt-2 text-gray-500">
          Manage and monitor your AI phone agent.
        </p>

      </div>




      <div className="grid gap-6 md:grid-cols-4">


        <div className="rounded-2xl border bg-white p-6">

          <Bot />

          <p className="mt-3 text-sm text-gray-500">
            Type
          </p>

          <h3 className="font-semibold">
            {agent.task}
          </h3>

        </div>




        <div className="rounded-2xl border bg-white p-6">

          <Activity />

          <p className="mt-3 text-sm text-gray-500">
            Status
          </p>

          <h3 className="font-semibold text-green-600">
            {agent.status}
          </h3>

        </div>




        <div className="rounded-2xl border bg-white p-6">

          <Phone />

          <p className="mt-3 text-sm text-gray-500">
            Total Calls
          </p>

          <h3 className="font-semibold">
            {agent.calls}
          </h3>

        </div>




        <div className="rounded-2xl border bg-white p-6">

          <Clock />

          <p className="mt-3 text-sm text-gray-500">
            Talk Time
          </p>

          <h3 className="font-semibold">
            {agent.duration}
          </h3>

        </div>


      </div>





      <div className="rounded-2xl border bg-white p-6">


        <h2 className="text-xl font-semibold">
          Start AI Call
        </h2>


        <p className="mt-2 text-gray-500">
          Connect this agent and start a real phone conversation.
        </p>



        <button

          onClick={startCall}

          disabled={calling}

          className="mt-5 rounded-xl bg-black px-6 py-3 text-white"

        >

          {calling ? "Calling..." : "📞 Start Call"}

        </button>



      </div>


    </div>

  );

}
