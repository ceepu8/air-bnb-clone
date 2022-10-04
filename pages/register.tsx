import AuthLayout from "@/layouts/auth";
import { useRouter } from "next/router";
import React from "react";

const Register = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen">
      <form>
        <h1>Register</h1>
        <button type="button" onClick={() => router.push("/login")}>
          To Login
        </button>
      </form>
    </div>
  );
};

Register.Layout = AuthLayout;

export default Register;
