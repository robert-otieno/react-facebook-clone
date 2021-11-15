import { Button } from '@mui/material'
import './Login.css'

function Login() {
  const signIn = () => {

  }
  return (
    <div className='login'>
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
      </div>
      <Button type='submit' obnClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
