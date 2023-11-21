import React, { useState } from 'react';
import './login.scss';
import { BiX } from "react-icons/bi";




const Login = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };


  const handleForm = (e) => {
    e.preventDefault()

    console.log("it working");

    let email = document.getElementById("email").value;

    console.log(email);

    email = "";
  }



  // if(modal) {
  //   document.body.classList.add('active-modal')
  // } else {
  //   document.body.classList.remove('active-modal')
  // }


 
  return (
    <div className="container">
        <div className='login'>
       <div className="text">
        <h1>facebook</h1>
        <p>Facebook helps you connect and share with the people in your life.</p>
       </div>
       <div className="inputs__login">
         <div className="main-box__input">
          <form action="#" onSubmit={handleForm}>
          <input type="email" placeholder='Email address or phone number' id='email'/>
          <input type="password" placeholder='password'/>
          <input type="submit" value="Log in" />
          <p><a href="#">Forgotten password?</a></p>
          <div className="line"></div>
          </form>
          <bottom  onClick={toggleModal} ><a href="#">Create new account</a></bottom>
        </div>
       <p className='link-create'><a href="#">Create a Page</a> for a celebrity, brand or business. </p>
       </div>
       </div>

       {/* ///////////// */}


      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="registration">
            <div className="dis">
              <div className="text__dis">
                <h1>Sign Up</h1>
                <p>It's quick and easy.</p>
              </div>
               <span className="close-modal" onClick={toggleModal}>
              <BiX/>
            </span>
            </div>
            <div className="line-dis"></div>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
  
           
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Login
