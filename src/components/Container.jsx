import React from 'react'

const Container = ({children,className}) => {
  return (
    <>
    <div className={`container w-[1150px] px-2 mx-auto ${className}`}>{children}</div>
    
    </>
  )
}

export default Container
