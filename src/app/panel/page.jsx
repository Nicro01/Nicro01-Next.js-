"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import useAuth from "../controller/useAuth";

export default function Page() {
  const router = useRouter();

  const loggedIn = useAuth();

  return <>Choose a Menu</>;
}
