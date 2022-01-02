import './App.css';
import {useEffect, useRef} from "react";
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import Login from './components/Login';
import LightBox from './components/LightBox';
import MiddleSection from './components/MiddleSection';
import RightSideBar from './components/RightSideBar';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {auth, onAuthStateChanged} from './firebase'
import {useDispatch, useSelector} from 'react-redux'
import {profile} from './slices/profileSlice'
import {makeProfile} from './slices/profileSlice'
import Messages from './components/Messages';

function App() {
  const userProfile = useSelector(profile)
  const dispatch = useDispatch()
  const leftSide = useRef()
  const rightSide = useRef()

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        dispatch(makeProfile(user))
        // console.log(user)
    })
    return unsubscribe;    
  },[dispatch])

  return (
    <Router>
      <Messages/>
      <Routes>
        {!userProfile.info?
        <>
          <Route path="signUp" element={<SignUp/>}/>
          <Route path="signIn" element={<Login/>}/>
          <Route path="*" element={<Navigate replace to="/signIn" />}/>
        </>
        :
        <>
          <Route path="/" element={
            <>
              <Header leftSide={leftSide} rightSide={rightSide}/>
              <LeftSideBar leftSide={leftSide}/>
              <RightSideBar rightSide={rightSide}/>
              <MiddleSection/>
              <LightBox/>
            </>
          }>
          </Route>
          <Route path="*" element={<Navigate replace to="/" />}/>
        </>
        }
      </Routes>
    </Router>
  );
}

export default App;
