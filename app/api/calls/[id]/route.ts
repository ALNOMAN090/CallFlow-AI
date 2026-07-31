import { NextResponse } from "next/server";


export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {

  const body = await request.json();


  const updatedCall = {

    id: params.id,

    status: body.status || "Completed",

    duration: body.duration || "00:00",

    updatedAt: new Date().toISOString(),

  };


  return NextResponse.json({

    success: true,

    call: updatedCall,

  });

}
