import { NextResponse } from "next/server";
import DB from "@/app/controller/DB";

import { login } from "@/libs";

const db = new DB();

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const userExists = await db.getUserByEmail(email);

    if (!userExists) {
      return NextResponse.json({ error: "User not exists" }, { status: 400 });
    }

    if (!(password !== userExists.password)) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    const response = NextResponse.json({
      message: "Logged in",
    });

    await login({ email, password });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
