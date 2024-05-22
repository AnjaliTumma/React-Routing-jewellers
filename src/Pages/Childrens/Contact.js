import { useState } from 'react';
import './Contact.css';
import Dashboard from '../Dashboard';

function Contact(){
    const[name , formName]=useState('')
    const[email, formEmail]=useState('')
    const[mobile, formMobile]=useState('')
    const[address, formAddress]=useState('')
    const[city, formCity]=useState('')
    const[pincode, formPincode]=useState('')
    const[message, formMessage]=useState('')
    const onLogin = (e) => {
        e.preventDefault();
        alert("Are You Sure Yo Want to submit the Form");
        console.log(name, email, mobile,address,city,pincode, message)
      }

    return(
        <div> 
            <Dashboard/>
        <div className='contact'>
            <img src='https://media.istockphoto.com/id/1323545403/vector/abstract-blue-light-defocused-gradient-vector-background.jpg?s=612x612&w=0&k=20&c=O9Wfys2IJm654iIhLuwixw89IZHlVHn5U2zftwLYST8='/>
            <h1>Contact Us</h1>
            <div className='cobox'>
                <div className='conicon'>
                    <div className='cic'>
                        <div className='icon'>
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className='content'>
                            <strong>Our Office Address</strong>
                            <p>Palm Court Bldg M, 501/B, 5th Floor,  Beside Goregaon Sports Complex,  Mumbai, Maharashtra 400064</p>
                        </div>  
                    </div>
                    <div className='cic'>
                        <div className='icon'>
                        <i class="fa-solid fa-message"></i>
                        </div>
                        <div className='content'>
                            <strong>General Enquiries</strong>
                            <p>angnajewellers@gmail.com</p>
                        </div>  
                    </div>
                    <div className='cic'>
                        <div className='icon'>
                        <i class="fa-solid fa-phone-volume"></i>
                        </div>
                        <div className='content'>
                            <strong>Call Us</strong>
                            <p>+91-7528517551</p>
                        </div>  
                    </div>
                    <div className='cic'>
                        <div className='icon'>
                        <i class="fa-solid fa-business-time"></i>
                        </div>
                        <div className='content'>
                            <strong>Our Timing </strong>
                            <p>Mon-Sun: 10:00 AM - 07:00 P.M</p>
                        </div>  
                    </div>
                    
                </div>

                <div className='form'>
                    <h2>Drop Us Message</h2>
                    <p>We have a great team for supporting our customers. <br/>Fill the form to get great support</p>
                    <form onSubmit={onLogin}> 
                            <div className='inpbox'>
                                <div className='inpu'>
                                    <input type='text' placeholder='Name' onChange={(e)=>formName(e.target.value)} value={name}/>
                                </div>
                                <div className='inpu'>
                                    <input type='email' placeholder='Email' onChange={(e)=>formEmail(e.target.value)} value={email}/>
                                </div>
                            </div>
                            <div className='inpbox'>
                                <div className='inpu'>
                                    <input type='number' placeholder='Mobile' onChange={(e)=>formMobile(e.target.value)} value={mobile}/>
                                </div>
                                <div className='inpu'>
                                    <input type='text' placeholder='Address' onChange={(e)=>formAddress(e.target.value)} value={address}/>
                                </div>
                            </div>
                            <div className='inpbox'>
                                <div className='inpu'>
                                    <input type='text' placeholder='City' onChange={(e)=>formCity(e.target.value)} value={city}/>
                                </div>
                                <div className='inpu'>
                                    <input type='number' placeholder='Pincode' onChange={(e)=>formPincode(e.target.value)} value={pincode}/>
                                </div>
                            </div>
                            <div className='inpbox'>
                                <div className='inpu'>
                                    <input type='text' placeholder='Message' onChange={(e)=>formMessage(e.target.value)} value={message}/>
                                </div>
                            </div>
                            <input type='submit' value="Submit Now"/>
                        </form>
                    </div>
                
            </div>
        </div>
    </div>
    );
}
export default Contact;