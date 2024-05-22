import Dashboard from '../Dashboard';
import './About.css';

function About(){
    return(
        <div>
            <Dashboard/>
            <div className='about'>
                <img src='https://wallpapercave.com/wp/wp2611576.jpg'/>
                <div className='abo'>
                    <div className='abimg'>
                        <img src='https://www.indiatrendshop.com/cdn/shop/products/BDE1120a_07604f97-118d-4674-90b0-1b7bfac9722f.jpg?v=1677586353'/>
                    </div>
                    <div className='abimg'>
                        <h2>About Us</h2>
                        <p>We, Elegant Jewellers, situated at Malad West, Mumbai, Maharashtra, are one of the leading exclusively designed jewellery showroom, focusing on giving you an awesome jewellery buying experience. We strive to provide you possibly the largest collection 
                            of curated designs for every occasion. We are grateful to be trusted by number of happy customers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;