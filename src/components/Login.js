import React,{useRef, useState} from 'react'
import { Link } from "react-router-dom";
import {auth, signInWithEmailAndPassword, googleProvider, signInWithPopup} from '../firebase'
import {useDispatch} from 'react-redux'
import {setMessage} from '../slices/profileSlice'

export default function Login() {
    const checkRef = useRef()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const dispatch = useDispatch()

    function signInUser(e){
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            // const user = userCredential.user;
            setEmail('')
            setPass('')
            dispatch(setMessage({color1: 'bg-green-500', color2: 'bg-green-300', notice: 'successfully logged in', icon: 'fas fa-check', show:true}))
        })
        .catch((error) => {
            const errorMessage = error.message;
            dispatch(setMessage({color1: 'bg-red-500', color2: 'bg-red-300', notice: errorMessage, icon: 'fas fa-shield-virus', show:true}))
            
        })
    }

    function google(){
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user
          console.log(user)
          dispatch(setMessage({color1: 'bg-green-500', color2: 'bg-green-300', notice: 'successfully logged in', icon: 'fas fa-check', show:true}))
        }).catch((error) => {
            const errorMessage = error.message;
            dispatch(setMessage({color1: 'bg-red-500', color2: 'bg-red-300', notice: errorMessage, icon: 'fas fa-shield-virus', show:true}))
        });
    }

    return (
        <section className="login flex">
            <i className="fab fa-phoenix-framework text-7xl text-blue-500 absolute top-8 left-10 lg:text-8xl"></i>
            <div className="image lg:w-2/3 h-screen lg:block items-center justify-center relative hidden">
                <img src="images/login.svg" alt="sign_up" className="w-full h-full object-contain border-0"/>
            </div>
            
            <div className="login__form lg:w-1/3 h-screen bg-white flex items-center justify-center w-full">
                <form className="w-100 max-w-80%">
                    <h3 className="text-3xl font-medium text-gray-500 mb-6">Welcome to Flame!</h3>
                    <p className="text-xl font-normal text-gray-700 mb-8">Please sign-in to your account and start the adventure</p>

                    <div className="inputBox mb-6">
                        <label htmlFor="email" className="label__style">Email</label>
                        <input type="email" placeholder="Email" id="email" className="input__style" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div className="inputBox mb-6">
                        <label htmlFor="password" className="label__style">Password</label>
                        <input type="password" placeholder="Password" id="password" className="input__style" required value={pass} onChange={(e)=>setPass(e.target.value)}/>
                    </div>

                    <div className="policy flex items-center gap-4 mt-4">
                        <input type="checkbox" id="check" className="checkbox hidden" ref={checkRef}/>
                        <span className="custom__checkbox w-7 h-7 rounded-lg border border-solid border-gray-400 flex items-center justify-center focus:shadow-lg" onClick={()=>checkRef.current.click()}>
                            <i className="fas fa-check text-white text-xl"></i>
                        </span>
                        <label htmlFor="check" className="label__style">Remember Me</label>
                    </div>

                    <input onClick={signInUser} type="submit" value="Sign In" className="w-full py-4 bg-indigo-500 text-white text-2xl text-center rounded-lg mt-6 cursor-pointer hover:shadow-xl"/>

                    <p className="label__style text-center mt-8">New on our platform? <Link to="/signUp"><span className="text-indigo-500">Create an account</span></Link></p>

                    <div className="divide text-center label__style mt-9 mb-8 normal-case relative text-2xl orDivider">or</div>

                    <div className="login__icons flex gap-4 justify-center">
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
