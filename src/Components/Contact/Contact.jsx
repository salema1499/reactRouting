import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className='contact pt-5 container text-center'>
    <h2>CONATCT SECTION</h2>
      <div className="d-flex  info2 text-center">
        <span className=""></span>
        <i className="fas fa-star "></i>
        <span className=""></span>
      </div>
      <form className='m-auto w-50'>
      <div>
       <input type='text' name='username'    placeholder='userName' className='form-control p-2 my-4'/>
       </div>
       <div>
       <input type='number' name='userage'   placeholder='userAge' className='form-control  p-2 my-4'/>
       </div>
       <div>
       <input type='email' name='useremail'   placeholder='userEmail' className='form-control  p-2 my-4'/>
       </div>
       <div>
       <input type='password' name='userpassword'  placeholder='userPassword' className='form-control  p-2 my-4'/>
       </div>
      
      </form>
    
    
    
    </div>
  )
}
