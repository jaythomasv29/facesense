import React from 'react';


class Register extends React.Component{
  // initialize initial state
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
    }
  }
// create onChange events to get value from input and set state
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value })
  }

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value })
  }

  onNameChange = (event) => {
    this.setState({ signInName: event.target.value })
  }

  onSubmitRegister = () => {
    
    //on submit method to fetch the post route
    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(user => {
      console.log(user)

      if (user.id){
        this.props.loadUser(user)
        this.props.onRouteChange('home')
      }
    })
  }


  render() {
    return (
      <article className="br3 ba white b--white-10 mv4 w-100 w-50-m w-25-1 mw6 center">    
        <main className="pa4 white">
          <div className="measure pa3 center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 white fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db white fw6 lh-copy f6" htmlFor="name">Name</label>
                <input 
                onChange={this.onNameChange}
                className="pa2 white input-reset b--white-10 ba bg-transparent hover-grey w-100" type="text" name="name" id="name" />
              </div>
              <div className="mt3">
                <label className="db white fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                onChange={this.onEmailChange}
                className="pa2 white input-reset ba b--white-10 bg-transparent hover-grey w-100" type="email" name="email-address" id="email-address" />
              </div>
              <div className="mv3">
                <label className="db white fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                onChange={this.onNameChange}
                className="b pa2 white input-reset ba b--white-10 bg-transparent b--grey hover-grey w-100" type="password" name="password" id="password" />
              </div>
              
            </fieldset>
            <div className="">
              <input 
              onClick={this.onSubmitRegister}
              className="ph3 br2 pv2 input-reset white ba b--grey b--white-10 bg-white-10 grow pointer f6 dib"
              type="submit"
              value="Register" 
              />
            </div>
          </div>
        </main>
      </article>
    )
  }
}

export default Register