const calls = [
  {
    name: "Ahmed Hassan",
    agent: "Sales Agent",
    status: "Completed",
    duration: "04:32",
    date: "Today, 10:30 AM",
  },
  {
    name: "Sara Mohamed",
    agent: "Support Agent",
    status: "Completed",
    duration: "08:15",
    date: "Today, 09:20 AM",
  },
  {
    name: "Mohamed Ali",
    agent: "Appointment Agent",
    status: "Missed",
    duration: "00:00",
    date: "Yesterday, 04:45 PM",
  },
  {
    name: "John Smith",
    agent: "Sales Agent",
    status: "Completed",
    duration: "06:10",
    date: "Yesterday, 02:15 PM",
  },
];

export default function RecentCalls() {
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


      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>
            <tr className="border-b text-sm text-gray-500">

              <th className="pb-3">
                Customer
              </th>

              <th className="pb-3">
                Agent
              </th>

              <th className="pb-3">
                Status
              </th>

              <th className="pb-3">
                Duration
              </th>

              <th className="pb-3">
                Date
              </th>

            </tr>
          </thead>


          <tbody>

            {calls.map((call, index) => (
              <tr
                key={index}
                className="border-b last:border-0"
              >

                <td className="py-4 font-medium">
                  {call.name}
                </td>

                <td className="py-4">
                  {call.agent}
                </td>

                <td className="py-4">

                  <span
                    className={
                      call.status === "Completed"
                        ? "rounded-full bg-green-100 px-3 py-1 text-xs text-green-700"
                        : "rounded-full bg-red-100 px-3 py-1 text-xs text-red-700"
                    }
                  >
                    {call.status}
                  </span>

                </td>

                <td className="py-4">
                  {call.duration}
                </td>

                <td className="py-4 text-gray-500">
                  {call.date}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
