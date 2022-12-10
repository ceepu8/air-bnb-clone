import { useRouter } from "next/router"

const Register = () => {
  // TODO:
  const router = useRouter()

  return (
    <div className="flex h-screen items-center justify-center">
      <form>
        <h1>Register</h1>
        <button type="button" onClick={() => router.push("/login")}>
          To Login
        </button>
      </form>
    </div>
  )
}

export default Register
