var products = [
    {
        id: "1",
        brand: "Gucci",
        name: "White dress",
        price: "2,499",
        discount: "400",
        size: "M",
        imgUrl: "https://res.cloudinary.com/dhtmzwisa/image/upload/v1619962246/Kiwu/saree2_jpact4.jpg"
    },
    {
        id: "2",
        brand: "Dolce & Gabbana",
        name: "Traditional Saree",
        price: "1,099",
        discount: "100",
        size: "L",
        imgUrl: "https://res.cloudinary.com/dhtmzwisa/image/upload/v1619962431/Kiwu/BAL02219_1_ryq7zk.jpg"
    },
    {
        id: "3",
        brand: "Forever'21",
        name: "Jeans",
        price: "1,999",
        discount: "200",
        size: "S",
        imgUrl: "https://res.cloudinary.com/dhtmzwisa/image/upload/v1619962246/Kiwu/saree2_jpact4.jpg"
    },
]

// Cart Total
var i = 0;
var totalPrice = 0;
var totalDiscount = 0;
var temp;
var j;

for(i=0;i<products.length;i++){
    // total price
    temp = products[i].price;
    j = temp.indexOf(',');
    var x = "";
    if (j===-1){
        x = temp;
    }
    else {
        x += temp.slice(0,j)
        x += temp.slice(j+1,temp.length)
    }
    totalPrice += parseInt(x);
}
for(i=0;i<products.length;i++){
    // total price
    temp = products[i].discount;
    j = temp.indexOf(',');
    var x = "";
    if (j===-1){
        x = temp;
    }
    else {
        x += temp.slice(0,j)
        x += temp.slice(j+1,temp.length)
    }
    totalDiscount += parseInt(x);
}
export default products;
export {totalPrice, totalDiscount};
