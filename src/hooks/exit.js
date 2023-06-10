import { useSelector } from "react-redux";

export function Auth() {
    const { isLogin, id, email, userName, token } = useSelector(state => state.user)
    
    return {
        isLogin: false,
        id: null,
        email: null,
        userName: null,
        token: null
    }
}