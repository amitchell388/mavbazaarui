
import { useNavigate } from 'react-router-dom'
import '../css/login.css'



function LoginPage() {
    const navigate = useNavigate();

    return (
        <>
        <div id='main_div'>
            <div>
                <span className='big-words'>
                    <span style={{ color: '#1173d4' }} >
                        MAV
                    </span>
                    <span style={{ color: '#f97a1f' }} >
                        BAZZAR
                    </span>
                </span>
            </div>
            <div>
                <h3 style={{ color: 'black' }} >A student marketplace, built for Mavericks.</h3>
            </div>
            <div className='login-buttons'>

                <button className='login-button-but'  style={{ backgroundColor: '#147be4' }} onClick={() => navigate("/home")}>
                    Sign in with UTA Email
                </button>
                <button className='login-button-but' style={{ backgroundColor: '#f9751e' }} onClick={() => navigate("/home")}>
                    Enter The Bazzar
                </button>

            </div>
        </div>

        </>
 
    )
}

export default LoginPage;