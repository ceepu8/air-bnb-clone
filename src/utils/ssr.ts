export const isServer = typeof window === "undefined"

export const canUseDOM = !!(!isServer && window.document && window.document.createElement)
