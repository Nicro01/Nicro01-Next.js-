import { NextResponse } from "next/server";

import { getSession } from "@/libs";

export async function GET(request) {
  const session = await getSession(request);

  return NextResponse.json(session);
}
