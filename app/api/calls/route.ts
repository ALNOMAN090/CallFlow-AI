import { NextResponse } from "next/server";


const calls: any[] = [];


export async function GET() {

  return NextResponse.json({
    success: true,
    calls,
  });

}



export async function POST(request: Request) {

  const body = await request.json();


  const newCall = {

    id: Date.now(),

    agentId: body.agentId,

    customer: body.customer || "Unknown Customer",

    status: "Calling",

    duration: "00:00",

    createdAt: new Date().toISOString(),

  };


  calls.push(newCall);



  return NextResponse.json({

    success: true,

    call: newCall,

  });

}
