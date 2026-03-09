import { useNavigate } from 'react-router-dom'
import { useUser } from "../UserContext.jsx";
import '../css/homepage.css'




function Homepage(){
    const { user } = useUser(); // use this to access user data in this component


    const navigate = useNavigate();

    //example of how to call user data 
    return (
        <>
            <h1>Homepage</h1>
            <p>Welcome, {user?.email}!</p> 

            <button onClick={() => navigate("/") }>
                Go to ugly ass Login
            </button>
        </>
    )
}

export default Homepage;