var produs=JSON.parse(localStorage.getItem("prods"));
// console.log(produs)

displayProducts(produs);  
function displayProducts(produs){
    produs.forEach(function(el){
        var div=document.createElement("div");
        var image=document.createElement("img");
        image.setAttribute("src",el.image);
        var name=document.createElement("p");
        name.innerHTML=el.name;
        var qty=document.createElement("p");
        qty.innerHTML=el.Qty;
        var prices=document.createElement("p");
        prices.innerHTML=el.price;
        div.append(image,name,qty,prices);
        document.getElementById("main").append(div);
    });
};

