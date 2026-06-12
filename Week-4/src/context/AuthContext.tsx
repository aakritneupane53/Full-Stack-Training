import {createContext} from 'react'


type User = {
    email:string,
    name:string,
}

type AuthContext = {
    user:User|null,
    login:(credentials:{email:string, password:string})=>Promise<void>, // just sets the access token to the localStorage
    logout: ()=>Promise<void>,
    isAuthenticated:boolean,
    isLoading:boolean
}

export const AuthContext = createContext<AuthContext|null>(null)