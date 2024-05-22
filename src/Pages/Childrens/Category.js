import Dashboard from '../Dashboard';
import './Category.css';

function Category(){
    return(

        <div>
            <Dashboard/>
            <div className='cate'>
                <img src='https://www.shutterstock.com/image-vector/empty-blue-studio-room-used-260nw-1432862717.jpg'/>
                <h1>Categories</h1>
                <div className='catbox'>
                    <div className='catcard'>
                        <img src='https://clipground.com/images/gold-jewellery-png-images-8.jpg'/>
                        <h2>Gold Jewellery</h2>
                    </div>
                    <div className='catcard'>
                        <img src='https://i.pinimg.com/736x/fa/38/b5/fa38b51df70ffd9a3839477a22d13a99.jpg'/>
                        <h2>Silver Jewellery</h2>
                    </div>
                    <div className='catcard'>
                        <img src='https://www.kalyanjewellers.net/images/Jewellery/Diamond/images/akshya-diamond-bangle.jpg'/>
                        <h2>Diamond Jewellery</h2>
                    </div> 
                    <div className='catcard'>
                        <img src='https://5.imimg.com/data5/SELLER/Default/2023/2/YM/ZZ/GH/12518938/photoroom-20221227-132906-1-500x500.png'/>
                        <h2>Platinum Jewellery</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;