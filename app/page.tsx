"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  // REMEMBER TO REMOVE
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/goals");
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
