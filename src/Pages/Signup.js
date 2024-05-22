import './Signup.css';
import { Link } from 'react-router-dom';


function Signup(){
    return(
        <div className='sign'>
            <img src='https://media.istockphoto.com/id/1323545403/vector/abstract-blue-light-defocused-gradient-vector-background.jpg?s=612x612&w=0&k=20&c=O9Wfys2IJm654iIhLuwixw89IZHlVHn5U2zftwLYST8=' />
            <div className='sig'>
                <div className="shea">
                    <h1>Signup Form</h1>
                </div>
                <div className='butt'>
                    <Link to='/Login'  className='button2'>Login</Link>
                    <Link to='/Signup' className='button2'>SignUp</Link>    
                </div>
                <form>
                    <input type='email' placeholder='Email Address'/>
                    <input type='password' placeholder='Password'/>
                    <input type='password' placeholder='Confirm Password'/>
                    <input type='submit' value="Signup"/>
                </form>
            </div>
        </div>
    );
}
export default Signup;