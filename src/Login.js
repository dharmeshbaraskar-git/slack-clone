import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { actionType } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.
            signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user
                })

            })
            .catch(error => {
                alert(error.message);
            })
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />
                <h1>Dharmesh Baraskar Programer</h1>
                <p>Will start working on  google.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    );
}

export default Login;