"use client";

import { useQuery } from "react-query";
import { useRouter } from "next/navigation";

import { authService } from "~/services/services";

const Admin = () => {
  const router = useRouter();

  const { data: isAdmin, isLoading } = useQuery(
    "checkAuth",
    authService.checkAuth
  );

  if (isLoading) {
    return <main>Loading...</main>;
  }

  if (!isAdmin) {
    router.push("/login");
  }

  return <main>Admin Page</main>;
};

export default Admin;
