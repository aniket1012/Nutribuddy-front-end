import React, { Component } from 'react';

class Login extends Component {

    state = {
        userName: "",
        password: "",

    }

     handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch("http://localhost:300/api/v1/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_name: this.state.userName,
                password: this.state.password
            }) 
        })
        .then(res => res.json())
        .then(console.log())
    }

    render() {
        console.log(this.state)
        return (
            <div style={{ width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input name='userName' placeholder='User Name' onChange={this.handleChange}/>
                <input name='password' type='password' placeholder='Upassword'onChange={this.handleChange}/>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        );
    }
}

export default Login;