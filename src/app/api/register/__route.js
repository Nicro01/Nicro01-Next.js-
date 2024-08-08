import { NextResponse } from "next/server";
import DB from "@/app/controller/DB";
import { SignJWT, jwtVerify } from "jose";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);
const db = new DB();

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const userExists = await db.getUserByEmail(email);

    if (userExists) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    try {
      const newUser = await db.createUser({
        id: 3,
        username: email,
        password: password,
      });

      const session = await new SignJWT({ email: newUser.email })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("10 sec from now")
        .sign(key);

      const response = NextResponse.json({
        message: "User registered successfully",
      });
      response.cookies.set("session", session, { httpOnly: true });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
