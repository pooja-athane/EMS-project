import React, { useState } from 'react'

const login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")



  // two way binding
  const submitHandler = (e) => {
    // preventdefault means stop the default behavior of the form submission
    e.preventDefault();
    console.log("the email is: ", email);
    console.log("the password is: ", password);
    setEmail("")
    setPassword("")
  }
  return (
    <div className='h-screen w-screen bg-black flex items-center justify-center'>
      <div className="border-2 border-emerald-600 p-20">
        <form
          onSubmit={(e) => submitHandler(e)}
          className='flex flex-col rounded-xl items-center justify-center'>
          <input
          value={email}
            onChange={(e) => {
             
              setEmail(e.target.value);
            }}
            required
            className='border-2  mb-4 bg-transparent outline-none  border-emerald-600 px-3 py-3 text-xl  text-white
            rounded-full placeholder:text-gray-400  '  type='email' placeholder='Enter your Email' />
          <input
          value={password}
          onChange={(e)=>{
setPassword(e.target.value)
          }}
            required
            className='border-2  bg-transparent outline-none  border-emerald-600 px-3 py-3 text-xl text-white
            rounded-full placeholder:text-gray-400  ' type='password' placeholder='Enter your Password' />
          <button
            className='mt-5 text-white  rounded-full border-none outline-none bg-emerald-600  px-8 py-3 text-xl ' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
export default login

