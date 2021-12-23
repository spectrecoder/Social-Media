import './App.css';
import {useState} from "react";
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import Login from './components/Login';
// import LightBox from './components/LightBox';
import MiddleSection from './components/MiddleSection';
import RightSideBar from './components/RightSideBar';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [profile, setProfile] = useState('sunny')

  return (
    <>
    {!profile?
    <Router>
      <Routes>
        <Route path="signUp" element={<SignUp/>}/>
        <Route path="signIn" element={<Login/>}/>
        <Route path="*" element={<Navigate replace to="/signIn" />}/>
      </Routes>
    </Router>
    :
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <LeftSideBar/>
            <RightSideBar/>
            <MiddleSection/>
            {/* <LightBox/> */}
          </>
        }>
        </Route>
        <Route path="*" element={<Navigate replace to="/" />}/>
      </Routes>
    </Router>
    }
    </>
  );
}

export default App;
