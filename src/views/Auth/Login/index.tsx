import { useRouter } from "next/router"
import { SubmitHandler, useForm } from "react-hook-form"
import { ToastContainer } from "react-toastify"

import { Button, NavLink } from "@/components"
// import { useLogin } from "@/hooks"
import { LoginValues } from "@/interfaces"

const LoginView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    mode: "onBlur",
  })

  // const [doLogin] = useLogin()

  const onSubmit: SubmitHandler<LoginValues> = async (data) => {
    if (data) {
      // await doLogin(data)
    }
  }

  const router = useRouter()

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <ToastContainer />
      <div className="login-container boxShadow w-full max-w-[568px] rounded p-10">
        <NavLink href="/">
          <i className="arrow alternate circle left icon mb-5 !text-4xl text-primary transition-all hover:text-black"></i>
        </NavLink>
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
          <Button className="mt-5 w-full py-2 px-4 font-bold" variant="primary">
            LOGIN
          </Button>
        </form>
        <button className="w-full" type="button" onClick={() => router.push("/register")}>
          Do not have the account yet? <strong>Register</strong>
        </button>
      </div>
    </div>
  )
}

export default LoginView
