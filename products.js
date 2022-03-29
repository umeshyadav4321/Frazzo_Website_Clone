var produs=JSON.parse(localStorage.getItem("prods"))||[];
// console.log(produs)
// function handlepriceSort(){
//     var selected=document.querySelector("#pricesort").value;
//     console.log(selected);
//     if(selected=="high"){
//       produs.sort(function(a,b){
//           return Number(b.price)-Number(a.price);
//       })
//       console.log(produs)

//     }
//     if(selected=="low"){
//         produs.sort(function(a,b){
//             return Number(a.price)-Number(b.price);
//         });
//         console.log(produs)

//     }
   
  
// }
// displayProducts(produs)

// displayProducts(produs);
displayProducts(produs);
function filterbycat(){
    // displayProducts.innerHTML=" ";
    var selected=document.querySelector("#category").value;
    console.log(selected);

    var filteredList=produs.filter(function(elem){
        return elem.type==selected;
    })
    displayProducts(filteredList);
    if(selected=="shopall"){
        displayProducts(produs)
    }
}
function displayProducts(produs){
    document.querySelector("#main").innerHTML="";
    produs.forEach(function(el){
        var div=document.createElement("div");
        div.setAttribute("id","MainDiv");
        var image=document.createElement("img");
        image.setAttribute("src",el.image);
        var name=document.createElement("p");
        name.innerHTML=el.name;
    //    var divone=document.createElement("div")
        var qty=document.createElement("p");
        qty.innerHTML=el.Qty;
        var prices=document.createElement("p");
        prices.innerHTML=`₹${el.price}`;
        var but=document.createElement("button");
        but.setAttribute("id","buttonP")
        but.textContent="Add";
        div.append(image,name,qty,prices,but);
        document.getElementById("main").append(div);
    });
};


