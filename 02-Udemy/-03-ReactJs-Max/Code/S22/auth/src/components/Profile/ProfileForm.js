import classes from './ProfileForm.module.css';
import { useRef, useContext } from 'react';
import AuthContext from '../../Context/auth-context';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const newPasswordRef = useRef()
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newPassword = newPasswordRef.current.value
    if (authCtx.isLoggedIn) {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDawYYqFVhZTlpdBR8HDgis1Eg2bzbHQc0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPassword,
          returnSecureToken: false
        })
      }).then((res) => {
        if (res.ok) {
          navigate('/', { replace: true })
          return res.json()
        } else {
          return res.json().then(() => {
            let errorMsg = 'Reseting password faild!'
            throw new Error(errorMsg)
          })
        }
      }).catch((err) => {
        alert(err.errorMsg)
      })
    }
  }
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef} minLength={6} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
