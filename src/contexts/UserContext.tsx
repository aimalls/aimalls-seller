import React, { createContext, ReactNode, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { getUserInfo } from "../requests/auth.request"
import { useHistory } from "react-router"

export type tUser = {
    _id: string
    email: string,
    isVerified: boolean,
    isAdmin: boolean,

}

export interface iUserContext {
    user: tUser
}

const defaultState = {
    user: {
        email: '',
        isVerified: false,
        isAdmin: false,
        _id: ''
    }
} as iUserContext

export const UserContext = createContext(defaultState)

type UserContextProviderProps = {
    children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const navigation = useHistory();
    
    const userQuery = useQuery({
        queryKey: ["user"],
        enabled: !!localStorage.getItem("authToken"),
        queryFn: getUserInfo
    })

    useEffect(() => {
        if (!!localStorage.getItem("authToken") == false) {
            navigation.push("/login")
        }
    }, [])

    return (
        <UserContext.Provider value={{user: userQuery.data?.data}}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;