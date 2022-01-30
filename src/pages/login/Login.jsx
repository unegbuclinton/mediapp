import './Login.css'

function Login() {
    return (
        <div className='login'>
            <div className="login__wrapper">
                <div className="login__left">
                    <h3 className='login__logo'>Klinton Social</h3>
                    <span className="login__description">
                        Connect with Friends and the world around you.
                    </span>
                </div>

                <div className="login__right">
                    <div className="login__box">
                        <input type="Email" placeholder='Email' className="login__input" />
                        <input type="password" placeholder='Password' className="login__input" />
                        <button className="login__button">Log In</button> 
                        <span className="login__forget">Forget Password?</span>
                        <button className="login__register">Create a New Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login
