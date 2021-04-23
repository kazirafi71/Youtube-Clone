import { Button, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import "./Login.css";
import firebase from 'firebase'
import firebaseConfig from "../../firebase";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";


firebase.initializeApp(firebaseConfig)

const Login = () => {
  const dispatch=useDispatch()
    const history=useHistory()
    const {auth}=useSelector(state=>state)
  var provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
  const signInHandler = () => {
    firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
    //    console.log(user)
       localStorage.setItem("user", JSON.stringify({name: user.displayName, email: user.email, url: user.photoURL}))
      dispatch({type:"SET__USER",payload:{name: user.displayName, email: user.email, url: user.photoURL}})
    })
    .catch((error) => {
      console.log(error)
    });
  };

  const user=JSON.parse(localStorage.getItem("user"))
  useEffect(()=>{
    console.log(auth)



    if(auth && auth.user.name || user){
        history.push('/')
    }
  },[auth])
  return (
    <div className="login">
      <div className="login__info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
          alt=""
        />
        <Typography className='mb-4' color='textPrimary' variant='h6'>Login Your Youtube</Typography>
        <Button color='secondary' variant='contained' onClick={signInHandler}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
