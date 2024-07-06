import Logo from "../../components/Logo"
import RegisterForm from "../../components/RegisterForm"
import style from './register.module.css'

const Register = () => {
    const { card, logo } = style
    return (
        <div className={card}>
            <div className={logo}>
                <Logo />
            </div>
            <div>
                <RegisterForm />
            </div>
        </div>

    )
}
export default Register