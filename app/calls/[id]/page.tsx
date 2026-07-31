"use client";

import { useEffect, useState } from "react";
import { Phone, Mic, User, Bot } from "lucide-react";


export default function LiveCallPage() {

  const [seconds, setSeconds] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setSeconds((prev) => prev + 1);

    }, 1000);


    return () => clearInterval(timer);

  }, []);



  const time = `${String(
    Math.floor(seconds / 60)
  ).padStart(2, "0")}:${String(
    seconds % 60
  ).padStart(2, "0")}`;



  return (

    <div className="space-y-8">


      <div>

        <h1 className="text-3xl font-bold">
          Live AI Call 🎙️
        </h1>

        <p className="mt-2 text-gray-500">
          Real-time conversation with your AI agent.
        </p>

      </div>




      <div className="rounded-2xl border bg-white p-8 shadow-sm">


        <div className="text-center">


          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

            <Phone className="text-green-600" />

          </div>



          <h2 className="mt-5 text-2xl font-bold">
            Sales Agent 🤖
          </h2>



          <p className="mt-2 text-green-600">
            🟢 Connected
          </p>



          <p className="mt-4 text-4xl font-bold">
            {time}
          </p>


        </div>



      </div>





      <div className="rounded-2xl border bg-white p-6">


        <h2 className="mb-5 text-xl font-semibold">
          Conversation
        </h2>




        <div className="space-y-4">


          <div className="flex gap-3">

            <Bot />

            <div className="rounded-xl bg-gray-100 p-3">

              Hello Ahmed, how can I help you today?

            </div>

          </div>




          <div className="flex gap-3">

            <User />

            <div className="rounded-xl bg-blue-100 p-3">

              I need information about your product.

            </div>

          </div>



          <div className="flex gap-3">

            <Bot />

            <div className="rounded-xl bg-gray-100 p-3">

              Great! I can help you with that.

            </div>

          </div>



        </div>


      </div>





      <button className="rounded-xl bg-red-600 px-8 py-3 text-white">

        End Call

      </button>



    </div>

  );

}
