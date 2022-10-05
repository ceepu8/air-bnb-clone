import AuthLayout from "@/layouts/auth";
import { useRouter } from "next/router";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";

import authApi from "api-client/authApi";

import { ToastContainer, toast } from "react-toastify";

import React from "react";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const result = await authApi.signin(data);
      switch (result.statusCode) {
        case 400:
          toast.error(result.message);
          break;

        case 200:
          toast.success(result.message);
          setTimeout(() => {
            router.push("/");
          }, 1500);
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <ToastContainer />
      <div className="login-container max-w-[568px] w-full p-10 boxShadow rounded">
        <Link href="/">
          <a>
            <i className="arrow alternate circle left icon text-4xl text-pink mb-5 hover:text-black transition-all"></i>
          </a>
        </Link>
        <h1 className="mb-5 text-2xl font-semibold">Welcome to Airbnb</h1>
        <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputField rounded-t-md border-b-0">
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              type="text"
              placeholder="Email"
              className="w-full"
            />
            {errors.email && errors.email.type === "required" && (
              <span className="text-[red]">This is required</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className="text-[red]">{errors.email.message}</span>
            )}
          </div>
          <div className="inputField rounded-b-md">
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="w-full"
            />
            {errors.password && errors.password.type === "required" && (
              <span className="text-[red]">This is required</span>
            )}
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
