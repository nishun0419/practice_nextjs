import { createContext, useContext, useEffect, useState } from "react"
import { User } from "@firebase/auth-types"
import { auth } from "./firebase"
import { GoogleAuthProvider,signInWithRedirect,signOut } from "firebase/auth"

type AuthContextType = {
  currentUser: User | null
  login?: () => Promise<void>
  logout?: () => Promise<void>
}
const AuthContext = createContext<AuthContextType>({ currentUser: null })

export const useAuth = () => {
  return useContext(AuthContext)
}
type Props = {
  children?: JSX.Element
}
const AuthProvider = ({ children }: Props): JSX.Element =>{
  const [ currentUser, setCurrentUser] = useState<User | null>(null)
  const [ loading, setLoading] = useState(true)

  const login = () => {
    const provider = new GoogleAuthProvider()
    return signInWithRedirect(auth(),provider)
  }

  const logout = () => {
    return signOut(auth())
  }

  useEffect(() =>{
    return auth().onAuthStateChanged((user: User | null) => {
      setCurrentUser(user)
      setLoading(false)
    })
  },[])

  const value = {
    currentUser,
    login,
    logout
  }

  return (
    <>
    <AuthContext.Provider value={value}>
      {loading ? <p>loading..</p>: children}
    </AuthContext.Provider>
    </>
  )
}

export default AuthProvider