import React from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";
import Cart from "./Cart";
import Footer from "./Footer";
import Promise from "./Promise";
import products, {totalPrice, totalDiscount} from "../products";

const sum = 0;

function productCart(product) {
    return (
        <Cart 
            imgUrl={product.imgUrl}
            brand={product.brand}
            name={product.name} 
            size={product.size}
            price={product.price}
        />
    )
}

function App() {
    return (
        <div>
            <Navbar />
            <Categories />
            <div className="cartDiv">
                <div className="cartCardDiv">
                    <h2 style={{marginLeft: "30px"}}>Your Cart</h2>
                    {products.map(productCart)}
                </div>
                {/* <h2 style={{marginLeft: "30px"}}>Cart Total</h2> */}
                <div className="cartTotalDiv">
                    <div className="cartDiv">
                        <div className="cartCardDiv">
                            <h2 style={{textAlign: "left"}}>Cart Total</h2>
                            <h4 style={{textAlign: "left"}}>Total Discount</h4>
                        </div>
                        <div className="cartTotalDiv" style={{borderStyle: "unset"}}>
                            <h2 style={{textAlign: "right"}}>{totalPrice}</h2>
                            <h4 style={{textAlign: "right"}}>(-{totalDiscount})</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Promise />
            <Footer />
        </div>
    )
}

export default App; 


{/* <Cart 
    imgUrl="https://res.cloudinary.com/dhtmzwisa/image/upload/v1619962246/Kiwu/saree2_jpact4.jpg" 
    brand="Gucci" 
    name="White dress" 
    size="M" 
    price="$2,999"
/> */}