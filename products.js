
 var products=JSON.parse(localStorage.getItem("Prod"))||[];

 console.log("products")
 

 display(products)
 function pricesort(){
   var select=document.querySelector("#sort").value;
   if(select=="low"){
     products.sort(function(a,b){
       return Number(a.price)-Number(b.price);
       
     })
     console.log(products);
   }
  if(select=="high"){
     products.sort(function(a,b){
       return Number(b.price)-Number(a.price);
       
     })
     console.log(products);
   }

   display(products);
 }

//  CODE FOR THE FILTER
function filter(){
selected=document.querySelector("#category").value;
filterList=products.filter(function(elem){
       if (elem.type==selected){
         return elem.type
       }

}) 

display(filterList);
if(selected=="shopall"){
   display(products);
}

}
