import './Notfound.css';
import { BrowserRouter,Link,Route,Router } from 'react-router-dom';


function Notfound(){
    return(
        <div className='not'>
             <img src='https://i.pinimg.com/originals/2a/a7/8a/2aa78a2c8fbe91b37bfed0fbb32fae82.jpg'/>
             <div className='found'>
                <h1>OOps!</h1>
                <h2>404 - Page Not Found </h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
               <Link to="/Login"> <button>Go To Login Page</button></Link>
             </div>
        </div>
    );
}
export default Notfound;