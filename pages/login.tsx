import AuthLayout from "@/layouts/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

const Login = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="login-container max-w-[568px] w-full p-10 boxShadow rounded">
        <Link href="/">
          <a>
            <i className="arrow alternate circle left icon text-4xl text-pink mb-5 hover:text-black transition-all"></i>
          </a>
        </Link>
        <h1 className="mb-5 text-2xl font-semibold">Welcome to Airbnb</h1>
        <form className="mb-5">
          <div className="input-field">
            <input
              type="text"
              placeholder="Email"
              className="inputField rounded-t-md border-b-0 "
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              className="inputField rounded-b-md "
            />
          </div>
          <button className="pinkButton mt-5 w-full">LOGIN</button>
        </form>
        <button
          className="w-full"
          type="button"
          onClick={() => router.push("/register")}
        >
          Do not have the account yet? <strong>Register</strong>
        </button>
      </div>
    </div>
  );
};

Login.Layout = AuthLayout;

export default Login;
