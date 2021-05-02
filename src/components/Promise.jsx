import React from "react";

function Promise() {
    return (
        <div className="promise">
            {/* Promise component*/}
            <div id="promise-left">
                <img className="promise-img" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619937871/Kiwu/fast-delivery_d4qyjg.png" alt="Fast Delivery"></img>
                <h3>Fast Delivery</h3>
                <p>We offer contact free delivery to your doorstep</p>
            </div>
            <div className="promise-line"></div>
            <div id="promise-middle">
                <img className="promise-img" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619937870/Kiwu/high-quality_blvmmc.png" alt="Best Quality"></img>
                <h3>Best Quality</h3>
                <p>We sell products that are of top notch quality</p>
            </div>
            <div className="promise-line"></div>
            <div id="promise-right">
                <img className="promise-img" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619937872/Kiwu/credit-card_bfwiy5.png" alt="Secure Payments"></img>
                <h3>Secure Payments</h3>
                <p>We offer various modes of safe and secure payments</p>
            </div>
        </div>
    )
    
}

export default Promise;