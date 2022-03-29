
 var products=JSON.parse(localStorage.getItem("Prods"))||[];

 console.log(displayProducts(products));

//  console.log(1)
 

//  display(products)
//  function pricesort(){
//    var select=document.querySelector("#sort").value;
//    if(select=="low"){
//      products.sort(function(a,b){
//        return Number(a.price)-Number(b.price);
       
//      })
//      console.log(products);
//    }
//   if(select=="high"){
//      products.sort(function(a,b){
//        return Number(b.price)-Number(a.price);
       
//      })
//      console.log(products);
//    }

//    display(products);
//  }

// //  CODE FOR THE FILTER
// function filter(){
// selected=document.querySelector("#category").value;
// filterList=products.filter(function(elem){
//        if (elem.type==selected){
//          return elem.type
//        }

// }) 

// display(filterList);
// if(selected=="shopall"){
//    display(products);
// }

// }

function displayProducts(products){
    products.forEach(function(el){
        var div=document.createElement("div");
        var image=document.createElement("img");
        image.setAttribute("src","el.image");
        var name=document.createElement("p");
        name.innerHTML=el.name;
        var qty=document.createElement("p");
        qty.innerHTML=el.Qty;
        var price=document.createElement("p");
        price.innerHTML=el.price;
        div.append(image,name,qty,price);
        document.getElementById(main).append(div);
    });
};

