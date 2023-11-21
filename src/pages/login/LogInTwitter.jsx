import './log-in-twitter.scss';
import  { useRef, useState } from 'react';
import { BiX } from "react-icons/bi";
import logo from "../../images/new-2023-twitter-logo-x-icon-design_1017-45418.png";
import {dataMonth} from './Date'
import {Days} from './Date'
import { years } from './Date';
import axios from 'axios';










function LogInTwitter() {


    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
      setModal(!modal);
    };




    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const [name, setName] = useState();
    const [createEmail, setCreateEmail] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();

  
        const handleFormLogin = (e) => {
        e.preventDefault()
        console.log(email);
        console.log(password);
        
        axios.post('url', {email,password})
            .then(res => console.log(res))
            .catch(e => console.log(e))
        
        }


        const handleFormCreate = (e) => {
            e.preventDefault()
            console.log(name);
            console.log(createEmail);
            console.log(month);
            console.log(day);
            console.log(year);
            
            axios.post('url', {name,createEmail,month,day,year})
                .then(res => console.log(res))
                .catch(e => console.log(e))
            
            }
        

   
  


  return (
        <div className='login'>
          <div className="container">
        <div className="logo">
                <img src={logo} alt="" /> 
        </div> 
         <div className="inputs__login">
            <div className="main-box__input">
            <form action="#" onSubmit={handleFormLogin}>
            <input type="email number"  placeholder='Email address or phone number' onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
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
            <form action='#' onSubmit={handleFormCreate}>
            <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="registration">
                <div className="dis">
                <span className="close-modal" onClick={toggleModal}>
                <BiX/>
                </span>
                <div className="text__dis">
                    <p>step 1 of 5</p>
                </div>
                </div>
                <div className="input__registration">
                    <div className="box">
                    <h3>Create your account</h3>
                        <input type="text" placeholder='name' onChange={e => setName(e.target.value)}/>
                        <input type="email" placeholder='Email' onChange={e => setCreateEmail(e.target.value)}/>
                    <p className='title'>Date of birth</p>
                    <p className="dis2">
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                    </p>
                    <div className="inputs-select">
                        <select id='month' onChange={e => setMonth(e.target.value)}>
                            {dataMonth.map(option => (
                                <option value={option.value} key={option.id}>  {option.label} </option>
                            ))}
                        </select>
                        <select id='day' name='day' onChange={e => setDay(e.target.value)}>
                            <option value="day">Day</option>
                            {Days.map(day => (
                                
                                <option value={day.value} key={day.value}> {day.value} </option>
                            ))}
                        </select>
                        <select id='year' onChange={e => setYear(e.target.value)}>
                            <option value="Year"> Year</option>
                            {
                                years.map(year => (
                                    <option value={year} key={year}>{year}</option>
                                ))
                            }
                        </select>
                    </div>
                    </div>
                </div>
                    <input className='bottom' type="submit" value = "Next" />
    
            
            </div>
            </div>
            </form>
        )}
        
    </div>
  )
}

export default LogInTwitter
