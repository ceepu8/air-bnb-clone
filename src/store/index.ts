import { AnyAction, configureStore, EmptyObject } from "@reduxjs/toolkit"
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore"
import { useMemo } from "react"
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import { PersistPartial } from "redux-persist/es/persistReducer"

import rootReducer from "@/store/reducers"
import storage from "./syncStorage"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const createStore = (
  preloadedState: any,
  middleware: { (getDefaultMiddleware: any): any; (getDefaultMiddleware: any): any }
) => {
  const store = configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware,
    devTools: process.env.NODE_ENV !== "production",
  })

  return store
}

let store:
  | ToolkitStore<
      EmptyObject & {
        auth: {
          user: {}
          token: null
          isLogged: boolean
          provider: string
          loading: { [x: number]: boolean }
          success: { [x: number]: boolean }
        }
      } & PersistPartial,
      AnyAction,
      any
    >
  | undefined
export const initializeStore = (preloadedState: any) => {
  const _middlewares = (
    getDefaultMiddleware: (arg0: {
      serializableCheck: {
        ignoredActions: (
          | "persist/FLUSH"
          | "persist/REHYDRATE"
          | "persist/PAUSE"
          | "persist/PERSIST"
          | "persist/PURGE"
          | "persist/REGISTER"
        )[]
      }
    }) => any
  ) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    return middlewares
  }
  let _store = store ?? createStore(preloadedState, _middlewares)
  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState }, _middlewares)
    store = undefined
  }

  if (typeof window === "undefined") return _store
  if (!store) store = _store

  return _store
}

export function useStore(initialState: unknown) {
  return useMemo(() => initializeStore(initialState), [initialState])
}

export function getStore() {
  return store
}
