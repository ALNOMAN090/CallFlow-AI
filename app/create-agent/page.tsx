"use client";

import { useState } from "react";
import {
  Bot,
  Phone,
  Sparkles,
} from "lucide-react";

export default function CreateAgentPage() {

  const [agentName, setAgentName] = useState("");
  const [task, setTask] = useState("Sales Calls");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);


  async function createAgent() {

    setLoading(true);

    try {

      const response = await fetch("/api/agents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: agentName,
          task,
          description,
          phone,
        }),
      });


      const data = await response.json();


      if (data.success) {
        alert(
          `Agent Created Successfully!\n\n${data.agent.name}`
        );

        setAgentName("");
        setDescription("");
        setPhone("");
      }


    } catch (error) {

      console.error(error);

      alert("Failed to create agent");

    } finally {

      setLoading(false);

    }

  }


  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Create AI Agent 🤖
        </h1>


        <p className="mt-2 text-slate-500">
          Build an AI phone agent that can handle real conversations.
        </p>

      </div>



      <div className="max-w-3xl rounded-2xl border bg-white p-8 shadow-sm">


        <div className="space-y-6">


          <div>

            <label className="mb-2 block text-sm font-medium">
              Agent Name
            </label>


            <input
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              placeholder="Example: Sales Assistant"
              className="w-full rounded-xl border p-3"
            />

          </div>




          <div>

            <label className="mb-2 block text-sm font-medium">
              Agent Purpose
            </label>


            <select
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-full rounded-xl border p-3"
            >

              <option>Sales Calls</option>
              <option>Customer Support</option>
              <option>Appointment Booking</option>
              <option>Lead Qualification</option>

            </select>

          </div>




          <div>

            <label className="mb-2 block text-sm font-medium">
              Description
            </label>


            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What should your AI agent do?"
              className="h-32 w-full rounded-xl border p-3"
            />

          </div>




          <div>

            <label className="mb-2 block text-sm font-medium">
              Phone Number
            </label>


            <div className="flex items-center gap-2">

              <Phone size={18}/>

              <input
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                placeholder="+1 555 000 000"
                className="w-full rounded-xl border p-3"
              />

            </div>

          </div>




          <button
            onClick={createAgent}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-white"
          >

            <Sparkles size={18}/>

            {loading
              ? "Creating..."
              : "Create AI Agent"
            }

            <Bot size={18}/>

          </button>


        </div>


      </div>


    </div>
  );
}
