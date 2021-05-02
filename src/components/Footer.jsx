import React from "react";

function Footer() {
    return (
        <div>
            <div className="footer">
                {/* Footer component to be used*/}
                {/* Contact Details */}
                <div id="footer-left">
                    <div className="footer-top-left">
                        <img className="footer-top-img" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619937875/Kiwu/phone-call_uhkkkb.png" alt="Contact Us"></img>
                    </div>
                    <div className="footer-top-right">  
                        <h3>Talk to Us</h3>
                        <p>+91-1234567890</p>
                    </div>
                </div>
                <div id="footer-middle">
                    <div className="footer-top-left">
                        <img className="footer-top-img" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619937875/Kiwu/question_ilgcv5.png" alt="Check our Website"></img>
                    </div>
                    <div className="footer-top-right">  
                        <h3>Help Center</h3>
                        <p>help.kiwufashion.com</p>
                    </div>
                </div>
                <div id="footer-right">
                    <div className="footer-top-left">
                        <img className="footer-top-img" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619937875/Kiwu/envelope_clxihc.png" alt="Email Us"></img>
                    </div>
                    <div className="footer-top-right">  
                        <h3>Write to Us</h3>
                        <p>help.in@kiwufashion.com</p>
                    </div>
                </div>
            </div>
                {/* Payment Details, Social Media*/}
            <div className="footer">
                <div id="footer-bottom-left">
                    <div>
                        <h2 style={{fontFamily: "Kiwu", fontSize: "40px", textAlign: "center"}}>KIWU</h2>
                    </div>
                </div>
                <div id="footer-bottom-middle">
                    <div>
                        <img className="footer-botton-middle-img" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619945713/Kiwu/visa_aw10xy.png" alt="Visa"></img>
                        <img className="footer-botton-middle-img" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619945708/Kiwu/mastercard_hvxiq5.png" alt="Mastercard"></img>
                        <img className="footer-botton-middle-img" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619945706/Kiwu/phone-pe_gkxipe.png" alt="Phone Pe"></img>
                        <img className="footer-botton-middle-img" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619945705/Kiwu/gpay_n4tfj5.png" alt="Google Pay"></img>
                    </div>
                </div>
                <div id="footer-bottom-right">
                    <div>
                        <img className="footer-botton-right-img" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619945708/Kiwu/instagram_xw2sxk.png" alt="Instagram"></img>
                        <img className="footer-botton-right-img" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619945706/Kiwu/facebook_mbmxlw.png" alt="Facebook"></img>
                        <img className="footer-botton-right-img" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619947777/Kiwu/whatsapp_bvyp9l.png" alt="Whatsapp"></img>
                    </div>
                </div>        
            </div>
        </div>
    )
    
}

export default Footer;
