import { useState } from 'react';
import './Product.css';
import Dashboard from '../Dashboard';

function Product(props){
    const  [count1, setCount1]= useState(0);
    const button1=()=>{
        alert("Are You Sure... You want add to Gold Bangle")
        setCount1(count1+1);    
    }
    const  [count2, setCount2]= useState(0);
    const button2=()=>{
        alert("Are You Sure... You want add to Diamond Chain")
        setCount2(count2+1);
    }
    const  [count3, setCount3]= useState(0);
    const button3=()=>{
        alert("Are You Sure... You want add to Gold Earring")
        setCount3(count3+1);
    }
    const  [count4, setCount4]= useState(0);
    const button4=()=>{
        alert("Are You Sure... You want add to  Platinum Chain ")
        setCount4(count4+1);
    }
    const  [count5, setCount5]= useState(0);
    const button5=()=>{
        alert("Are You Sure... You want add to Silver Ring ")
        setCount5(count5+1);
    }
    const  [count6, setCount6]= useState(0);
    const button6=()=>{
        alert("Are You Sure... You want add to Platinum Wire ")
        setCount6(count6+1);
    }
    const  [count7, setCount7]= useState(0);
    const button7=()=>{
        alert("Are You Sure... You want add to Silver Bangle ")
        setCount7(count7+1);
    }
    const  [count8, setCount8]= useState(0);
    const button8=()=>{
        alert("Are You Sure... You want add to Gold Diamond Ring ")
        setCount8(count8+1);
    }
    return(
       <div>
         <Dashboard/>
         <div className='prod'>
            <img src='https://e1.pxfuel.com/desktop-wallpaper/134/969/desktop-wallpaper-blue-iphone-on-dog-solid-navy-blue-iphone-thumbnail.jpg' />
            <h1>Products</h1>
            <div className='prbox'>
                <div className='procard'>
                    <img src='https://media.istockphoto.com/id/147250575/photo/three-yellow-studded-bangles-on-a-black-background.jpg?s=612x612&w=0&k=20&c=MjU2waBbnCkywENHTgoXteNT31r5vZ_H2q--4Pvn3Hc=' />
                    <h3>Gold Bangle</h3>
                    <p>Rs. 56,000</p>
                    <button onClick={button1}>Add</button>
                    {/* <p className='cnt'>{count1}</p> */}
                </div>
                
                <div className='procard'>
                <img src='https://media.istockphoto.com/id/459298305/photo/diamond-necklace.webp?b=1&s=170667a&w=0&k=20&c=KUAT4Q-b2Ssr0_ec92x6eb_lAWWj2vnmxIDuxGA6DzE=' />
                    <h3>Diamond Chain</h3>
                    <p>Rs. 60,000</p>
                    <button onClick={button2}>Add</button>
                    {/* <p className='cnt'>{count2}</p> */}
                </div>
                <div className='procard'>
                <img src='https://img.freepik.com/premium-photo/textured-gold-earrings-taken-separately-black-background_579873-483.jpg' />
                    <h3>Gold Earring</h3>
                    <p>Rs. 25,000</p>
                    <button onClick={button3}>Add</button>
                    {/* <p className='cnt'>{count3}</p> */}
                </div>
                <div className='procard'>
                <img src='https://img.freepik.com/premium-photo/photograph-shot-white-neck-wearing-luxury-diamond-necklace_950002-56877.jpg' />
                    <h3>Platinum Chain </h3>
                    <p>Rs. 80,000</p>
                    <button onClick={button4}>Add</button>
                    {/* <p className='cnt'>{count4}</p> */}
                </div>
               
            </div>
            <div className='prbox1'>
                <div className='procard1'>
                    <img src='https://www.flawlessmoissanite.com/cdn/shop/products/f345gge_600x.jpg?v=1612909387' />
                    <h3>Silver Ring </h3>
                    <p>Rs. 30,000</p>
                    <button onClick={button5}>Add</button>
                    {/* <p className='cnt'>{count5}</p> */}
                </div>
                
                <div className='procard1'>
                <img src='https://i.pinimg.com/736x/9c/08/a1/9c08a10ad593c1221d62c7632145d724.jpg' />
                    <h3>Platinum Earrings</h3>
                    <p>Rs. 47,000</p>
                    <button onClick={button6}>Add</button>
                    {/* <p className='cnt'>{count6}</p> */}
                </div>
                <div className='procard1'>
                <img src='https://silverlinings.in/cdn/shop/products/BG003b_105_1445x.jpg?v=1550653612' />
                    <h3>Silver Bangle</h3>
                    <p>Rs. 23,650</p>
                    <button onClick={button7}>Add</button>
                    {/* <p className='cnt'>{count7}</p> */}
                </div>
                <div className='procard1'>
                <img src='https://t4.ftcdn.net/jpg/06/11/02/45/360_F_611024561_Zt0ZBcK7MWNwMPYUTuVVf9eLbT92gtYt.jpg' />
                    <h3>Gold Ring</h3>
                    <p>Rs. 56,000</p>
                    <button onClick={button8}>Add</button>
                    {/* <p className='cnt'>{count8}</p> */}
                </div>
               
            </div>
          
        </div>
       </div>
    );
}
export default Product;