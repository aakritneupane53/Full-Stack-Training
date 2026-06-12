import React, {useState, useEffect} from 'react'

import {getUser, loginService, logoutService} from '../services/authServices'
import {AuthContext}from '../context/AuthContext'
import { Navigate } from 'react-router';

type Children = {
    children:React.ReactNode
}

type User = {
    email:string,
    name:string,
}

const AuthProvider = ({children}:Children) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user, setuser] = useState<User|null>(null)

    // try to fetch user and set the token

    async function login(credential:{email:string, password:string}){
        const token = await loginService({email:"random@rand.com", password:"asdfg"})
        localStorage.setItem('accessToken', token)
    }

    async function logout(){
        await logoutService()
        localStorage.removeItem('accessToken')
    }


    useEffect(()=>{
        async function fetchUser(){
            setIsLoading(true)
            let accessToken = localStorage.getItem('accessToken');
            console.log('No access token found')
            if(accessToken){
                console.log('Access Token found', accessToken)
                const userI = await getUser(accessToken)
                console.log('Fetched user', userI)
                setuser({...userI} as User)

                setIsLoading(false)
                return
            }
            console.log('No access token found')
            console.log('fetching access Token')
            accessToken = await loginService({email:"random@rand.com", password:"randomrand"})
            console.log('fetched accesstoken', accessToken)
            const userI = await getUser(accessToken)
            console.log('Fetched user', userI)
            setuser({...userI} as User)
            setIsLoading(false)
        }

        fetchUser()
    },[])
        

  
  return (
    <AuthContext.Provider value={{user, login, logout, isAuthenticated:!!user, isLoading}}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider