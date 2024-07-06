import { login_regex } from "../../services/validation/auth.validation"

const LoginForm = () => {

    const handleSubmit = async event => {
        event.preventDefault()

        const {  nickname,  password} = event.target

        const credentials = {
            nickname: nickname.value,
            password: password.value
        }

        const { error } = login_regex.validate(credentials)
        if (error) return alert(error.details[0].message)
        //console.log(user)

        try {
            const login = await fetch('http://localhost:9000/api/auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(credentials)
            })

            if (!login.ok) return alert("Error en la petición")
            const response = await login.json()

            if(!response.process) return alert('Error al iniciar sesion')
            alert('Usuario loggeado')
            console.log(response)

            localStorage.setItem('user', response.data)
            //navigate('/')


        } catch (error) {
            alert("Error en la petición del servidor")
        }

    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" name="nickname" placeholder="nickname" required/>
            <input type="password" name="password" placeholder="******"  required/>
            <input type="submit" value={"Ingresar"} />
        </form>
    )
}
export default LoginForm