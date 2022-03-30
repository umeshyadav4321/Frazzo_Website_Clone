var CartArr=JSON.parse(localStorage.getItem("cartItems"));
function displayProducts(CartArr){
    document.querySelector("#Cart_Container").innerHTML="";
    CartArr.forEach(function(el,index){
        var div=document.createElement("div");
         div.setAttribute("id","MAINDIV");
        var image=document.createElement("img");
        image.setAttribute("id","cimage");
        image.setAttribute("src",el.image);
        var divsecond=document.createElement("div");
        divsecond.setAttribute("id","secondDiv")
        var name=document.createElement("p");
        name.innerHTML=el.name;
        var qty=document.createElement("p");
        qty.innerHTML=el.Qty;
        var prices=document.createElement("p");
        prices.innerHTML=`₹${el.price}`;
        var but=document.createElement("button");
        but.textContent="Remove";
        but.addEventListener("click",function(){
            removeItem(index);
            // console.log(index)
            
        })
        divsecond.append(name,qty,prices,but);
        div.append(image,divsecond);
        document.getElementById("Cart_Container").append(div);
    });
}
displayProducts(CartArr);
var total=document.getElementById("items").textContent=CartArr.length;
// console.log(total)

function removeItem(index){
    // console.log(index);
    CartArr.splice(index,1);
    console.log(CartArr)
    localStorage.setItem("cartItems",JSON.stringify(CartArr));
    
    displayProducts(CartArr);

}

import { navbar } from "./components/navbar.js";
document.querySelector("#navbar").innerHTML= navbar()




import { footer } from "./components/footer.js";
document.querySelector("#foot").innerHTML= footer()








