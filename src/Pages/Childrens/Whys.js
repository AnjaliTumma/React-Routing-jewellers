import Dashboard from '../Dashboard';
import './Why.css';

function Why(){
    return(
        <div>
            <Dashboard/>
            <div className='why'>
            <img src='https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52393.jpg'/>
            <h1>Why US</h1>
            <div className='whybox'>
                <div className='wbox'>
                    <div className='wimg'>
                       <img src='https://www.pngitem.com/pimgs/m/136-1366359_thumbs-up-hd-png-download.png'/>
                    </div>
                    <div className='desc'>
                       <h3>Great Collection</h3>
                    </div>
                </div>
                <div className='wbox'>
                <div className='wimg'>
                       <img src='https://atlas-content-cdn.pixelsquid.com/stock-images/blue-box-GqEmZN0-600.jpg'/>
                    </div>
                    <div className='desc'>
                       <h3>Reliable Products</h3>
                    </div>
                </div>
            </div>
            <div className='whybox1'>
                <div className='wbox1'>
                    <div className='wimg1'>
                       <img src='https://media.istockphoto.com/id/2071165599/vector/%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C2%B5-rgb.jpg?s=612x612&w=0&k=20&c=GcY1zE018RDdim8VS7KrT8torYonrqfOycErRrJNq-M='/>
                    </div>
                    <div className='desc1'>
                       <h3>100% Genuine Products</h3>
                    </div>
                </div>
                <div className='wbox1'>
                <div className='wimg1'>
                       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfnvq33Za4dDcVz6Bs9e6WJDYGquG-iyAMDWYhlsfeS4KqSv13R2GjBOzGVvcSWENMs1k&usqp=CAU'/>
                    </div>
                    <div className='desc1'>
                       <h3>Free Shipping</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Why;