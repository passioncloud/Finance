import { getAuth } from 'firebase/auth'
import { useEffect, useMemo, useState } from 'react'

export const useAuth = () => {
    const email = localStorage.getItem('email')
    const [user, setUser] = useState({email });
  
    const isLoggedIn = !!user?.email 
    const [isCheckingAuthState, setIsCheckingAuthState] = useState(false)


    return useMemo(() => ({ user, isLoggedIn, isCheckingAuthState }), [user, isCheckingAuthState])
}
