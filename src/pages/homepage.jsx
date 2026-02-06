import { useNavigate } from 'react-router-dom'
import '../css/homepage.css'




function Homepage(){
    const navigate = useNavigate();

    return (
        <>
            <h1>Homepage</h1>

            <button onClick={() => navigate("/") }>
                Go to ugly ass Login
            </button>
        </>
    )
}

export default Homepage;