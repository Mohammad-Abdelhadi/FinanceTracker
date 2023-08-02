import { useAuthContext } from "./useAuthContext";
import {useWalletContext} from './useWalletContext'

export const useLogout=()=>{
    const {dispatch} = useAuthContext()
    const {dispatch: walletDispatch} = useWalletContext()

    const logout=()=>{
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
        walletDispatch({type: 'SET_WALLET', payload:null})
    }
    return {logout}
}