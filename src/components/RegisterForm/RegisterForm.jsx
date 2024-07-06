import { useNavigate } from "react-router-dom"
import { user_regex } from "../../services/validation/auth.validation"

const RegisterForm = () => {

    const navigate = useNavigate()

    const handleSubmit = async event => {
        event.preventDefault()

        const { name, nickname, cel, password, confirm_password } = event.target

        const user = {
            name: name.value,
            nickname: nickname.value,
            cel: cel.value,
            password: password.value,
            confirm_password: confirm_password.value
        }

        const { error } = user_regex.validate(user)
        if (error) return alert(error.details[0].message)
        //console.log(user)

        try {
            const register = await fetch('http://localhost:9000/api/auth/register', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(user)
            })

            if (!register.ok) return alert("Error en la petición")
            const response = await register.json()

            if(response.process) return alert('Error al guardar el nuevo usuario')
            alert('Usuario guardado')
            navigate('/login')


        } catch (error) {
            alert("Error en la petición del servidor")
        }

        


    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" required />
            <input type="text" name="nickname" placeholder="user" required />
            <input type="text" name="cel" placeholder="+573000000000" required />
            <input type="password" name="password" placeholder="******" required />
            <input type="password" name="confirm_password" placeholder="******" required />
            <input type="submit" value={"Registrar"} />
        </form>
    )
}

export default RegisterForm