import '../css/newuser.css';

function NewUser() {

    async function check_login(){
        
        const email = document.getElementById("login_field_email").value;
        const password = document.getElementById("login_field_password").value;
        const confirmPassword = document.getElementById("login_field_confirm").value;
        const username = document.getElementById("login_field_username").value;


        if (!email || !password || !confirmPassword || !username) {
            window.alert("Please fill in all fields.");
            return;
        }

        if (email.split('@')[1] !== 'mavs.uta.edu') {
            window.alert("Please enter a valid UTA email address.");
            return;
        }

        if (password !== confirmPassword) {
            window.alert("Passwords do not match.");
            return;
        }

        try{
            const response = await fetch('https://insy-project.onrender.com/login/' + email + '/' + passwordgasd, );
            const data = await response.json();
            
            if ( data["Message"] == "User not verified yet"){
                window.alert("An account with that email already exists but has not been verified yet. Please check your inbox for a verification email.");
                return;
            }

            window.alert("Account created successfully! Please check your email for a verification link before logging in.");
            navigation.navigate("/");
            
            

            
            console.log(data["Message"]);

            
        }
        catch (error){
            window.alert("An error occurred while trying to create your account. Please try again later." + error.message);
            return;
        }
    }

    return(
        <>
        <div className="main_div_body">
            <div className='main_section_bod'>
                <h1 className='main_words'>
                    Create New Account
                </h1>

                <div className='main_input_bod'>
                    <input className='input_main' id="login_field_username" type="text" placeholder="Username" />
                    <input className='input_main' id="login_field_email" type="email" placeholder="Email" />
                    <input className='input_main' id="login_field_password" type="password" placeholder="Password" />
                    <input className='input_main' id="login_field_confirm" type="password" placeholder="Confirm Password" />
                </div>

                <button className='main_button' onClick={check_login}>
                    Create Account
                </button>
            </div>
        </div>
        </>
    )
}

export default NewUser;