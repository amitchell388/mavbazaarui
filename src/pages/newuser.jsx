import '../css/newuser.css';

function NewUser() {
    return(
        <>
        <div className="main_div_body">
            <div className='main_section_bod'>
                <h1 className='main_words'>
                    Create a New Account
                </h1>


                <div className='main_input_bod'>

                    <input className='input_main' type="text" placeholder="Username"></input>
                    <input className='input_main' type="email" placeholder="Email"></input>
                    <input className='input_main' type="password" placeholder="Password"></input>
                    <input className='input_main' type="password" placeholder="Confirm Password"></input>
                </div>




                <button className='main_button'>
                    Create Account
                </button>
     

            </div>

        </div>
      
        </>
    )
}


export default NewUser;
