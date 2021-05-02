import React from "react";


function Cart(props) {
    return (
        <div className="cart">
            <div className="cart-left">
                <img className="cart-img" src={props.imgUrl}></img>
            </div>
            <div className="cart-middle">
                <div>
                    <div className="cart-top">   
                        <h2 style={{marginBottom: "0"}}>{props.brand}</h2>
                        <p style={{marginTop: "0"}}>{props.name}</p>
                    </div>
                    <div className="cart-middle-bottom">
                        <select name="size" id="cart-size">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="cart-right">
                <div>
                    <div className="cart-top-right">   
                        <h3>{props.price}</h3>
                    </div>
                    <div className="cart-right-bottom">
                        <input type="image" src="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619966849/Kiwu/cancel_awffx0.png" alt="reset" height="10px" width="10px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
