var data=[
    {
        "image":"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN14.png",
        "name":"Banana Robusta",
        "Qty":"1kg",
        "price":"₹39"

    },
    {
        "image":"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN24.png",
        "name":"Banana Elaichi/Yellaki",
        "Qty":"500g",
        "price":"₹59"

    },
    {
        "image":"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/247/original/data?1612371028",
        "name":"Banana Nendran",
        "Qty":"500g",
        "price":"₹66"

    },
    {
        "image":"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/260/original/data?1612450264",
        "name":"Banana Raw",
        "Qty":"500g",
        "price":"₹21"

    },
    {
        "image":"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VBRI12.png",
        "name":"Brinjal Bharta",
        "Qty":"500g",
        "price":"₹19"

    },
    {
        "image":"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VLAD12.png",
        "name":"Ladies Finger",
        "Qty":"250g",
        "price":"₹9"

    },
    {
        "image":"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCAP12.png",
        "name":"Capsium",
        "Qty":"250g",
        "price":"₹20"

    },
    {
        "image":"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCAU12.png",
        "name":"Cauliflower",
        "Qty":"1pc",
        "price":"₹20"

    },
]

var products=localStorage.setItem("prods",JSON.stringify(data));
// console.log(5);
// var prods=JSON.parse(localStorage.getItem("Prod"))||[];
// data.map(function(elem){
// var object={
//     image:elem.image,
//     name:elem.name,
//     category:elem.category,
//     reveiews:elem.reviews,
//     price:elem.price,
//     type:elem.type
// }
// prods.push(object)
// localStorage.setItem("Prod",JSON.stringify(data));
// })
// 