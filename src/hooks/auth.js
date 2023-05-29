import { useSelector } from 'react-redux '

export function Auth() {
    const { email, token, id } = useSelector(state => state.user)
    
    return {
        isAuth: !!email,
        email,
        id,
        token
    }
}