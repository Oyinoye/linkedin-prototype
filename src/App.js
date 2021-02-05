import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { auth } from './firebase';
import Feed from './Feed';
import Login from './Login';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Widgets from './Widgets';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }
      else {
        dispatch(logout());
      }
    })
  }, {})
 
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App body */}
      {!user ? <Login /> : (
      <div className="app__body">
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgets */}
        <Widgets />
      </div>
      )}
        
    </div>
  );
}

export default App;
