// /middleware.js

import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/libs";

export async function middleware(req) {
  const token = getSession();

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: "/panel/:path*",
};
