import React,{useRef} from 'react'

export default function SignUp() {
    const checkRef = useRef()

    return (
        <section className="signup flex">
            <div className="image w-2/3 h-screen flex items-center justify-center relative">
                <img src="images/signup.svg" alt="sign_up" className="w-full h-full object-contain border-0"/>
                <i className="fab fa-phoenix-framework text-8xl text-blue-500 absolute top-8 left-10"></i>
            </div>
            <div className="signup__form w-1/3 h-screen bg-white flex items-center justify-center">
                <form className="w-100">
                    <h3 className="text-3xl font-medium text-gray-500 mb-6">Adventure starts here 🚀</h3>
                    <p className="text-xl font-normal text-gray-700 mb-8">Make your account management easy and fun!</p>

                    <div className="inputBox mb-6">
                        <label htmlFor="username" className="label__style">Username</label>
                        <input autocomplete="off" type="text" placeholder="Username" id="username" className="input__style" required/>
                    </div>

                    <div className="inputBox mb-6">
                        <label htmlFor="email" className="label__style">Email</label>
                        <input type="email" placeholder="Email" id="email" className="input__style" required/>
                    </div>

                    <div className="inputBox mb-6">
                        <label htmlFor="password" className="label__style">Password</label>
                        <input type="password" placeholder="Password" id="password" className="input__style" required/>
                    </div>

                    <div className="policy flex items-center gap-4 mt-4">
                        <input type="checkbox" id="check" className="checkbox hidden" ref={checkRef}/>
                        <span className="custom__checkbox w-7 h-7 rounded-lg border border-solid border-gray-400 flex items-center justify-center focus:shadow-lg" onClick={()=>checkRef.current.click()}>
                            <i className="fas fa-check text-white text-xl"></i>
                        </span>
                        <label htmlFor="check" className="label__style">I agree to <span className="text-indigo-500">privacy policy & terms</span></label>
                    </div>

                    <input type="submit" value="Sign Up" className="w-full py-4 bg-indigo-500 text-white text-2xl text-center rounded-lg mt-6 cursor-pointer hover:shadow-xl"/>

                    <p className="label__style text-center mt-8">Already have an account? <span className="text-indigo-500">Sign in instead</span></p>

                    <div className="divide text-center label__style mt-9 mb-8 normal-case relative text-2xl orDivider">or</div>

                    <div className="signUp__icons flex gap-4 justify-center">
                        <i className="fab fa-google bg-red-500 smIcon__style"></i>
                        <i className="fab fa-facebook-f smIcon__style bg-blue-600"></i>
                        <i className="fab fa-twitter smIcon__style bg-blue-500"></i>
                        <i className="fab fa-github-alt smIcon__style bg-black"></i>
                    </div>
                </form>
            </div>
        </section>
    )
}
