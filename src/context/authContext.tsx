import { createContext, useContext, useEffect, useState } from "react"
import { IAuthContext } from "../interfaces/auth-contecxt-interface"
import { IUser } from "../interfaces/user-interface"
import $axios from "../http"

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({children} : {children: React.ReactNode}) => {
    const [user, setUser] = useState<IUser>({} as IUser)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
       $axios.get('/refresh')
       .then((res) => {
        setUser(res.data.user)
        setLoading(false)
       })
       .catch(err => {
         console.log(err)
         setLoading(false)
      })
    }, [])
    return (
       <AuthContext.Provider value={{user, loading}}>
             {children}
       </AuthContext.Provider>
   )
}

export const useAuthcontext = () => useContext(AuthContext)