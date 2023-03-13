import React, {useState} from 'react';
import './Login.css';
import { auth, provider } from '../../firebase';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });
    console.log(auth);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => alert(e.message));
      setEmail("");
      setPassword("");
  };

  const registerSignIn = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
        }
      })
      .catch((e) => alert(e.message));

      setEmail("");
      setPassword("");
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvsIZB2CNcp8KHzWBzn6c7RL6hgCWzOjxzBw&usqp=CAU'/>
        </div>
        <div className="login__desc">
          <p>Ask Doc and Med Bot: Expert Opinions and Expert Diagnosis</p>
          <p style={{ color: "royalblue", fontSize: "25px" }}>
          {" "}
          </p>
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signIn}>Continue With Google</p>
            </div>
          </div>
          <div className="login__emailPass">
            <div className="login__label">
              <h4>Login</h4>
            </div>
            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="login__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login__forgButt">
              <small>Forgot Password?</small>
              <button type='submit' onClick={handleSignIn}>Login</button>
            </div>
            <button onClick={registerSignIn}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;