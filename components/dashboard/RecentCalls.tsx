"use client";

import { useEffect, useState } from "react";

type Call = {
  id: number;
  customer: string;
  status: string;
  duration: string;
  createdAt: string;
};


export default function RecentCalls() {

  const [calls, setCalls] = useState<Call[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function loadCalls() {

      try {

        const response = await fetch("/api/calls");

        const data = await response.json();


        if (data.success) {

          setCalls(data.calls);

        }


      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }


    loadCalls();

  }, []);



  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm">


      <div className="mb-6">

        <h2 className="text-xl font-semibold">
          Recent Calls
        </h2>


        <p className="text-sm text-gray-500">
          Latest conversations handled by AI agents.
        </p>

      </div>



      {loading && (

        <p className="text-gray-500">
          Loading calls...
        </p>

      )}




      {!loading && calls.length === 0 && (

        <p className="text-gray-500">
          No calls yet.
        </p>

      )}




      <div className="space-y-4">


        {calls.map((call) => (

          <div
            key={call.id}
            className="flex items-center justify-between rounded-xl border p-4"
          >


            <div>

              <h3 className="font-semibold">
                {call.customer}
              </h3>


              <p className="text-sm text-gray-500">
                AI Agent Call
              </p>

            </div>




            <div className="text-right">


              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                {call.status}
              </span>


              <p className="mt-2 text-sm text-gray-500">
                {call.duration}
              </p>


            </div>


          </div>

        ))}


      </div>


    </div>

  );

}
