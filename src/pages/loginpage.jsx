
import { useNavigate } from 'react-router-dom'



function LoginPage() {
    const navigate = useNavigate();

    return (
        <>
            <h1>
                Login Page
            </h1>

            <button onClick={() => navigate('/home') }>
                <h1>
                    go home
                </h1>
            </button>

        </>
 
    )
}

export default LoginPage;