import { NextResponse } from "next/server";


const agents = [
  {
    id: 1,
    name: "Sales Agent",
    task: "Sales Calls",
    status: "Active",
    calls: 342,
  },
  {
    id: 2,
    name: "Support Agent",
    task: "Customer Support",
    status: "Active",
    calls: 518,
  },
];


export async function GET() {
  return NextResponse.json({
    success: true,
    agents,
  });
}



export async function POST(request: Request) {

  const body = await request.json();


  const newAgent = {
    id: Date.now(),
    name: body.name,
    task: body.task,
    status: "Active",
    calls: 0,
  };


  agents.push(newAgent);


  return NextResponse.json({
    success: true,
    agent: newAgent,
  });

}
