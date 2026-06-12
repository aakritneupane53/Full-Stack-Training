import React, {useState, useEffect} from 'react'

type Children = {
    children:React.ReactNode
}

const AuthProvider = ({children}:Children) => {
  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider