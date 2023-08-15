import React,{useState} from 'react'
import stackoverflowclone from '../../assets/stackoverflowclone.png'
import AboutAuth from './AboutAuth'
import './Auth.css'
const Auth = () => {
  
  const [isSignup,setIsSignup] = useState(false)
  const handleSwitch=() =>{
    setIsSignup(!isSignup)
  }

  return (
    
      <section className='auth-section'>
        {isSignup && <AboutAuth/>}
        <div className='auth-container-2'>
        { !isSignup && <img src={stackoverflowclone} alt='stackoverflow' className='logo' />}
          <form>  
            {
              isSignup && <label Html htmlFor='name'>
              <h4>Display name</h4>
              <input type='text' id='name' name='name'/>
            </label>
            }
          <label Html htmlFor='email'>
            <h4 >Email</h4>
            <input type='email' id='email' name='Email'/>
          </label>
          <label htmlFor='password'>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <h4>Password</h4>
            {!isSignup && <h4 style={{color:'#007ac6',fontSize:'13px'}}>Forgot password?</h4>}
            </div>
            <input type='password' id='password' name='Password'/>
            {isSignup && 
            <p style={{color:'#666767',fontSize:'13px'}}>Password must contain at least eight<br/> characters,including at least 1 letter and 1<br/> number</p>}
            {isSignup &&
            <label Html htmlFor='check'>
            <input type='checkbox' id='check'/>
            <p style={{fontSize:'13px'}}>Opt-in to receive occasional product <br/>updates, user research invitations,company<br/> announcements, and digests.</p>

          </label> }
            <button type='submit' className='auth-btn'>{isSignup ? 'Sign up':'Log in'}</button>
          </label>
          {isSignup && 
          <p style={{color:'#666767',fontSize:'13px'}}>By clicking “Sign up”, you agree to our 
            <span style={{color:'blue'}}>terms of<br/> service </span>
              and acknowledge that you have read and<br/> understand our <span style={{color:'blue'}} >privacy policy </span>and  
             <span style={{color:'blue'}}> code of<br/> conduct.</span></p>}
          </form>
          <p>
            {isSignup ? 'Already have an account?':"Don't have an account?"}
            <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup?'Log in':'Sign up'}</button>
          </p>
        </div>
      </section>
    )
}

export default Auth
