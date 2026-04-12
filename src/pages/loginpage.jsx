
import { useNavigate } from 'react-router-dom'
import { useUser } from "../UserContext.jsx";
import '../css/login.css'



function LoginPage() {
    const navigate = useNavigate();
    const { setUser } = useUser();

    function create_global_user(email){
        fetch('https://insy-project.onrender.com/fetch_user/' + email)
        .then(response => response.json())
        .then(data => {
            if (data.Message == "Error fetching user data for global state") {
                return window.alert("An error occurred while trying to log in. Please try again later.");
            }

            console.log(data);
            setUser({ // current user data can add more when teme comes just let me know what you need 
                email: data.email,
                admin: data.admin,
                listings: data.listings,
                id: data.id
            })

        })
        .catch(error => console.error(error));
    }


    function check_login (){
        let email = document.getElementById('login_field_email').value;
        let password = document.getElementById('login_field_password').value;
        let uta = email.split('@')

        if (uta[1] != 'mavs.uta.edu'){
            window.alert("Please enter a valid UTA email address.");
            return;
        }

        // will check users
        try{
            fetch('https://insy-project.onrender.com/user_login/' + email + '/' + password)
            .then(response => response.json())
            .then(data => {
                if (data.Message == "User not found"){
                    return window.alert("No account found with that email. Please create an account to continue.");
                }
                else if (data.Message == "Email not verified"){
                    return window.alert("Please verify your email address before logging in. Check your inbox for a verification email.");
                }
                else if (data.Message == "Incorrect password"){
                    return window.alert("Incorrect password. Please try again.");
                }
                else {
                    // will create global user
                    try{
                        create_global_user(email);
         
                        navigate("/home"); // send them to homw page after makgin gloabl user 
                    }
                    catch (err){
                        window.alert("An error occurred while trying to log in. Please try again later.");
                    }
                }
   
            })
            .catch(error => console.error(error));

            



        }
        catch (err){
            window.alert("An error occurred while trying to log in. Please try again later.");
        }


        

        
    }

    function new_user(){
        navigate("/newuser");
    }

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
            <div className='login-field'>
                <input className='fields' id='login_field_email' />
                <input className='fields' id="login_field_password" type="password"/>
            </div>
            <div className='login-buttons'>

                <button className='login-button-but' style={{ backgroundColor: '#f9751e' }} onClick={() => check_login("/home")}>
                    Enter The Bazzar
                </button>

                <button className='login-button-but' style={{ backgroundColor: '#1173d4' }} onClick={() => new_user()}>
                    New User
                </button>

            </div>
        </div>

        </>
 
    )
}

export default LoginPage;