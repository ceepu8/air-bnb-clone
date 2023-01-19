import { RiErrorWarningFill } from "react-icons/ri"

export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center">
      <RiErrorWarningFill className="mr-1 h-3 w-3 fill-red-500" />
      <p className="text-xs font-medium text-red-500">{message}</p>
    </div>
  )
}
