import React from 'react';


const Register = ({ onRouteChange }) => {
  return (
    <article className="br3 ba white b--white-10 mv4 w-100 w-50-m w-25-1 mw6 center">    
      <main className="pa4 white">
        <div className="measure pa3 center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 white fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db white fw6 lh-copy f6" htmlFor="name">Name</label>
              <input className="pa2 white input-reset b--white-10 ba bg-transparent hover-grey w-100" type="text" name="name" id="name" />
            </div>
            <div className="mt3">
              <label className="db white fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 white input-reset ba b--white-10 bg-transparent hover-grey w-100" type="email" name="email-address" id="email-address" />
            </div>
            <div className="mv3">
              <label className="db white fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 white input-reset ba b--white-10 bg-transparent b--grey hover-grey w-100" type="password" name="password" id="password" />
            </div>
            
          </fieldset>
          <div className="">
            <input 
            onClick={() => onRouteChange('home')}
            className="ph3 br2 pv2 input-reset white ba b--grey b--white-10 bg-white-10 grow pointer f6 dib" type="submit" value="Register" 

            />
          </div>
        </div>
      </main>
    </article>
  )
}

export default Register