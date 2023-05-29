import { createContext, useReducer } from "react";
import authReducer, { defaultAuth } from "../reducers/AuthReducer";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children })=>{
    
    const [state, dispatch] = useReducer(authReducer,defaultAuth);

    // useEffect(()=>{
    //     const unsub = auth.onAuthStateChanged((user)=>{
    //         dispatch({ type:"AUTH_IS_READY", payload:user })
    //         unsub()
    //     });

    //     // if (location.search.length>1) {
    //     //     const token = location.search.split("=")[1]
    //     //     signInWithCustomToken(auth,token).then(res=>{
    //     //         dispatch({type:"LOGIN", payload: res.user})
    //     //     }).catch(err=>{
    //     //         console.log("get lost!!",err);
    //     //     })
    //     // }
    // },[])

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}