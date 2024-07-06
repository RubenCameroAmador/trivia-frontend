import LoginForm from "../../components/LoginForm"
import Logo from "../../components/Logo"
import style from './login.module.css'


const Login = () => {
    const { card, logo } = style
    return (
        <div className={card}>
            <div className={logo}>
                <Logo />
            </div>
            <div>
                <LoginForm />
            </div>
        </div>
    )
}
export default Login