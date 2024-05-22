import './Forgot.css';


function Forgot(){
    return(
        <div className='for'>
              <img src='https://media.istockphoto.com/id/1323545403/vector/abstract-blue-light-defocused-gradient-vector-background.jpg?s=612x612&w=0&k=20&c=O9Wfys2IJm654iIhLuwixw89IZHlVHn5U2zftwLYST8=' />
              <div className='forg'>
                <h1>Forgot Password</h1>
                <form>
                    <input type='email' placeholder='Username'/>
                    <input type='submit' value="Forgot Password"/>
                </form>
              </div>
        </div>
    );
}
export default Forgot;