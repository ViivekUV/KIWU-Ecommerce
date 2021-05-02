import React from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";
import Cart from "./Cart";
import Footer from "./Footer";
import Promise from "./Promise";
import products from "../products";

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
            <h2 style={{marginLeft: "30px"}}>Your Cart</h2>
            {products.map(productCart)}
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