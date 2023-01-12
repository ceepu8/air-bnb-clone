import { LoginView } from "../Auth/Login"
import { RegisterView } from "../Auth/Register"
import { RoomView } from "../Room"

const HomeView = () => {
  return (
    <div>
      <RoomView />
      <LoginView />
      <RegisterView />
    </div>
  )
}

export default HomeView
