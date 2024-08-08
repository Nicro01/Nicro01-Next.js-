import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function useAuth(redirectOnAuth = false) {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("/api/session");
        setLoggedIn(response.data ? true : false);
      } catch (error) {
        setLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  return loggedIn;
}
