var CartArr=JSON.parse(localStorage.getItem("cartItems"))||[];
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
        var rbut=document.createElement("p");
       rbut.setAttribute("id","rembutton");
        rbut.textContent="Remove";
        rbut.addEventListener("click",function(){
            removeItem(index);
            // console.log(index)
            
        })
        divsecond.append(name,qty,prices,rbut);
        div.append(image,divsecond);
        document.getElementById("Cart_Container").append(div);
    });
}

var totalcount=document.getElementById("items");
totalcount.textContent=`My Cart(${CartArr.length}items)`;
// console.log(total)

function removeItem(index){
    // console.log(index);
    CartArr.splice(index,1);
    console.log(CartArr)
    localStorage.setItem("cartItems",JSON.stringify(CartArr));
    
    displayProducts(CartArr);

}
var total=CartArr.reduce(function(acc,cv){
    return acc+Number(cv.price)
},0);
// console.log(total)
var totalamount=document.getElementById("TOtal-Amt");
totalamount.textContent=`Total Amount is:${total}`

displayProducts(CartArr);
document.getElementById("chkbutton").addEventListener("click",function(){
    window.location.href="payment.html"
})



import { navbar } from "./components/navbar.js";
document.querySelector("#navbar").innerHTML= navbar()




import { footer } from "./components/footer.js";
document.querySelector("#foot").innerHTML= footer()








