import './Home.css';
import Dashboard from '../Dashboard';
function Home(){
    return(
      <div>
        <Dashboard/>
        <div className='back'>
            <img src='https://i.pinimg.com/originals/2a/a7/8a/2aa78a2c8fbe91b37bfed0fbb32fae82.jpg'/>
            <div className='box'>
                <div className='img1'>
                      <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/27329842/2024/2/1/54b5563c-cbee-45d4-8a85-a85d394d72741706791212032Ring1.jpg'/> 
                </div>
                <div className='img1'>
                    <h1>Trendy And Dainty Jewellery...</h1>
                    <h3>For Every Occasion</h3>
                    <button>Book Now</button>
                </div>
               
            </div>
        </div>
     </div>
    );
}
export default Home;