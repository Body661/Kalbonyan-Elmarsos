import { useRef, useState, useContext } from 'react';
import AuthContext from '../../Context/auth-context';
import { useNavigate } from 'react-router-dom'
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const authContext = useContext(AuthContext)
  const [loading, isLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate()

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const emailRef = useRef()
  const passwordRef = useRef()

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value
    const enteredPassword = passwordRef.current.value

    isLoading(true)
    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDawYYqFVhZTlpdBR8HDgis1Eg2bzbHQc0'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDawYYqFVhZTlpdBR8HDgis1Eg2bzbHQc0'
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'Application/json'
      }
    }).then(res => {
      isLoading(false)
      if (res.ok) {
        return res.json()
      } else {
        return res.json().then((data) => {
          let errorMsg = 'Authentication faild!'
          if (data.error && data.error.message && data) {
            errorMsg = data.error.message
          }
          throw new Error(errorMsg)
        })
      }
    }).then(data => {
      const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000))
      authContext.login(data.idToken, expirationTime.toISOString())
      navigate('/', { replace: true })
    }).catch((err) => {
      alert(err.message)
    })
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          {!loading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {loading && <p>Loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
