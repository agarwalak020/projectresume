import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
      <div>

        <div className=' min-h-screen py-9 px-5 md:px-9 ' id='contactbg'>
            
            <div className=' border-2 md:w-[50%] bg-white rounded-xl shadow-xl shadow-slate-600 px-10 py-10 md:py-16 '>
                <h1 className=' text-3xl text-slate-900 font-extrabold py-5'>Share Your Thoughts with Us....</h1>
                <form className=' flex flex-col gap-4 '>
                    <label className=' font-bold text-xl'>Name:</label>
                    <input type='text' placeholder='enter your name'className=' shadow-lg px-3 py-2'/>
                    <label className=' font-bold text-xl'>Email id:</label>
                    <input type='email' placeholder='enter your email' className=' shadow-lg px-3 py-2'/>
                    <label className=' font-bold text-xl'>Type your Message Here</label>
                    <input type='textarea' placeholder='Message' className=' shadow-lg px-3 py-2'/>
                    <button className=' px-3 py-3 text-xl font-semibold shadow-lg shadow-slate-400'>Submit</button>
                </form>
            </div>
        </div>
      </div>

    </>
  )
}

export default Contact
