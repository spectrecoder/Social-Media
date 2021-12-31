import React,{useRef, useState} from 'react'
import { Link } from "react-router-dom";
import {auth, createUserWithEmailAndPassword, updateProfile, googleProvider, signInWithPopup} from '../firebase'
import {useDispatch} from 'react-redux'
import {display, setMessage} from '../slices/profileSlice'

export default function SignUp() {
    const checkRef = useRef()
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const dispatch = useDispatch()

    function createUser(e){
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, pass)
        .then(async (userCredential) => {
            const user = userCredential.user;
            await updateProfile(auth.currentUser, {
                displayName:userName
            })
            dispatch(display({name:user.displayName}))
            setUserName('')
            setEmail('')
            setPass('')
            dispatch(setMessage({color: 'green', notice: 'successfully signed up', icon: 'fas fa-check', show:true}))
        })
        .catch((error) => {
            const errorMessage = error.message;
            dispatch(setMessage({color: 'red', notice: errorMessage, icon: 'fas fa-shield-virus', show:true}))
        })
    }

    function google(){
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user
          console.log(user)
          dispatch(setMessage({color: 'green', notice: 'successfully signed up', icon: 'fas fa-check', show:true}))
        }).catch((error) => {
          const errorMessage = error.message;
          dispatch(setMessage({color: 'red', notice: errorMessage, icon: 'fas fa-shield-virus', show:true}))
        });
    }

    return (
        <section className="signup flex">
            <i className="fab fa-phoenix-framework text-7xl text-blue-500 absolute top-6 left-10 lg:text-8xl"></i>
            <div className="image lg:w-2/3 h-screen lg:block items-center justify-center relative hidden">
                <img src="images/signup.svg" alt="sign_up" className="w-full h-full object-contain border-0"/>
            </div>
            
            <div className="signup__form lg:w-1/3 h-screen bg-white flex items-center justify-center w-full">
                <form className="w-100 max-w-80%">
                    <h3 className="text-2xl sm:text-3xl font-medium text-gray-500 sm:mb-6 mb-3">Adventure starts here 🚀</h3>
                    <p className="text-xl font-normal text-gray-700 mb-8">Make your account management easy and fun!</p>

                    <div className="inputBox sm:mb-6 mb-3">
                        <label htmlFor="username" className="label__style">Username</label>
                        <input autoComplete="off" type="text" placeholder="Username" id="username" className="input__style" required value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                    </div>

                    <div className="inputBox sm:mb-6 mb-3">
                        <label htmlFor="email" className="label__style">Email</label>
                        <input type="email" placeholder="Email" id="email" className="input__style" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div className="inputBox sm:mb-6 mb-3">
                        <label htmlFor="password" className="label__style">Password</label>
                        <input type="password" placeholder="Password" id="password" className="input__style" required value={pass} onChange={(e)=>setPass(e.target.value)}/>
                    </div>

                    <div className="policy flex items-center gap-4 sm:mt-4 mt-2">
                        <input type="checkbox" id="check" className="checkbox hidden" ref={checkRef}/>
                        <span className="custom__checkbox w-7 h-7 rounded-lg border border-solid border-gray-400 flex items-center justify-center focus:shadow-lg" onClick={()=>checkRef.current.click()}>
                            <i className="fas fa-check text-white text-xl"></i>
                        </span>
                        <label htmlFor="check" className="label__style">I agree to <span className="text-indigo-500">privacy policy & terms</span></label>
                    </div>

                    <input onClick={createUser} type="submit" value="Sign Up" className="w-full py-4 bg-indigo-500 text-white text-2xl text-center rounded-lg sm:mt-6 mt-3 cursor-pointer hover:shadow-xl"/>

                    <p className="label__style text-center sm:mt-8 mt-4">Already have an account? <Link to="/signIn"><span className="text-indigo-500">Sign in instead</span></Link></p>

                    <div className="divide text-center label__style sm:mt-9 sm:mb-8 mt-5 mb-4 normal-case relative text-2xl orDivider">or</div>

                    <div className="signUp__icons flex gap-4 justify-center">
                        <i className="fab fa-google bg-red-500 smIcon__style" onClick={google}></i>
                        <i className="fab fa-facebook-f smIcon__style bg-blue-600"></i>
                        <i className="fab fa-twitter smIcon__style bg-blue-500"></i>
                        <i className="fab fa-github-alt smIcon__style bg-black"></i>
                    </div>
                </form>
            </div>
        </section>
    )
}
