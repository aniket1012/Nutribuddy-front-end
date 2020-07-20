import React, { Component } from 'react';

class Login extends Component {

    state = {
        userEmail: "",
        userPassword: "",

    }



    render() {
        return (
            <div style={{ width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input name='userName' placeholder='User Name'/>
                <input/>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        );
    }
}

export default Login;