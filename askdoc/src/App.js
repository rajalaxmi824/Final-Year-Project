import React, { useEffect } from 'react';
import './App.css';
import Askdoc from './component/Askdoc';
import Login from './component/aut/Login';
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);
  return (
    <div className="App">
      {
        user ? (<Askdoc />):(<Login/>)
      }
    
    </div>
  );
}

export default App;
