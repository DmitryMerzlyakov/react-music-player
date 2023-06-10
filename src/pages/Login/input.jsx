import s from './login.module.css'

const Input = ({ type, placeholder, value, onChange }) => {
    
    return (
        <>
            <input
                onChange={onChange}
                value={value}
                className={s.input}
                type={type}
                placeholder={placeholder}
            />
        </>
    );
}

export default Input