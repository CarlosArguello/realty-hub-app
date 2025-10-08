import React from "react"

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-full lg:max-w-9/12 mx-auto px-4 ">{children}</div>
}

export default Container
