import teaLogoSm from './../images/teaLogoSmall.png'
import sms from './../images/sms.svg'
import phone from './../images/phone.svg'
import facebook from './../images/facebook.svg'
import youtube from './../images/youtube.svg'
import inst from './../images/inst.svg'
import twitter from './../images/twitter.svg'
import mastercard from './../images/mastercard.png'
import visa from './../images/visa.png'
import googleplay from './../images/googleplay.png'
import paypal from './../images/paypal.png'




function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_inner">
                    <div className="footer_item">
                        <div className="footer_title">Products</div>
                        <div className="footer_nav">
                            <div className="footer_link">Black tea</div>
                            <div className="footer_link">Green tea</div>
                            <div className="footer_link">White tea</div>
                            <div className="footer_link">Oolong tea</div>
                            <div className="footer_link">Pu-erh tea</div>
                        </div>
                       
                    </div>

                    <div className="footer_item">
                    <div className="footer_title">Company</div>
                        <div className="footer_nav">
                            <div className="footer_link">About Us</div>
                            <div className="footer_link">Contact Us</div>
                            <div className="footer_link">Our Blog</div>
                            <div className="footer_link">FAQ</div>
                            <div className="footer_link">Shipping & Delivery</div>
                            <div className="footer_link">Refund policy</div>
                            <div className="footer_link">Terms of Service</div>
                        </div>
                        
                    </div>

                    <div className="footer_item">
                        <div className="footer_quote">“Tea is a journey. It can take you to new places and open your mind to new experiences. Let every sip transport you to a world of wonder and possibility”</div>
                        <div className="footer_name">Dragomir Teodorescu, Tealuxe owner</div>
                    </div>

                    <div className="footer_item">
                        <div className="footer_title">Stay In Touch</div>
                        <div className="footer_text">Please feel free to contact us via the email of phone. We would be happy to hear from you!</div>
                        <div className="footer_info">
                            <div className="footer_left">
                                <img src={teaLogoSm} alt=""></img>
                            </div>
                            <div className="footer_right">
                                <div className="footer_sms">
                                    <img src={sms} alt=""></img>
                                    <div className="footer_number">+370 680 123456</div>
                                </div>
                                <div className="footer_phone">
                                    <img src={phone} alt=""></img>
                                    <div className="footer_email">info@tealuxe.com</div>
                                </div>
                                <div className='footer_social'>
                                    <img className='footer_socialImg' src={facebook} alt=''></img>
                                    <img className='footer_socialImg' src={youtube} alt=''></img>
                                    <img className='footer_socialImg' src={inst} alt=''></img>
                                    <img className='footer_socialImg' src={twitter} alt=''></img>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>
                <div className='footer_last'>
                        <div className='footer_place'>© Tealuxe, 2023</div>

                        <div className='footer_card'>
                                <img src={mastercard} alt=''></img>
                                <img src={visa} alt=''></img>
                                <img src={googleplay} alt=''></img>
                                <img src={paypal} alt=''></img>
                            </div>
                    </div>
            </div>
        </footer>
    )

}


export default Footer