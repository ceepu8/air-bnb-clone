import { LineBreak } from "@/components"
import { USER_POLICY } from "@/constants"
import React from "react"

export const UserPolicy = () => {
  return (
    <div className="rounded-lg border-[1px] border-solid border-light-gray p-6">
      <div>
        {USER_POLICY.map(({ id, Icon, question, answer }, index) => {
          return (
            <div key={id}>
              <Icon className="h-14 w-14 fill-primary" />
              <h3 className="mt-3 text-xl font-semibold text-black-gray">{question}</h3>
              <p className="text-md mt-3 font-light text-dark-gray">{answer}</p>
              {index < USER_POLICY.length - 1 && <LineBreak className="my-8" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
