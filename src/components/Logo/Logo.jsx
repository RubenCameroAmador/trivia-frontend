import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link to={'/'}> 
            <picture>
                <img src="./Logo.png" alt="trivia-logo" />
            </picture>
        </Link>
    )
}

export default Logo