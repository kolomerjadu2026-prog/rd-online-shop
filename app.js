const countdown=document.getElementById("countdown");

let time=86400;

setInterval(()=>{

let hours=Math.floor(time/3600);
let minutes=Math.floor((time%3600)/60);
let seconds=time%60;

countdown.innerHTML=
hours.toString().padStart(2,"0")+":"+
minutes.toString().padStart(2,"0")+":"+
seconds.toString().padStart(2,"0");

if(time>0){
time--;
}

},1000);
let cart=[];

function addToCart(name,price){

cart.push({
name:name,
price:price
});

document.getElementById("cart-count").innerText=
cart.length;

alert(name+" added to cart!");

localStorage.setItem(
"rdcart",
JSON.stringify(cart)
);

}
const searchInput =
document.querySelector(".search-box input");

searchInput.addEventListener("keyup",function(){

let value =
this.value.toLowerCase();

let cards =
document.querySelectorAll(".product-card");

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});
/* AUTO SLIDER */

let slideIndex=0;

showSlides();

function showSlides(){

let slides=
document.getElementsByClassName("slides");

for(let i=0;i<slides.length;i++){
slides[i].style.display="none";
}

slideIndex++;

if(slideIndex>slides.length){
slideIndex=1;
}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,3000);

}

/* DARK MODE */

document
.getElementById("darkBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

/* TOP BUTTON */

const topBtn=
document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 ||
document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};
/* CATEGORY FILTER */

function filterProducts(category){

let products=
document.querySelectorAll(".product-card");

products.forEach(product=>{

if(category==="all"){

product.style.display="block";

}else if(product.classList.contains(category)){

product.style.display="block";

}else{

product.style.display="none";

}

});

}

/* FLOATING CART UPDATE */

function updateCartUI(){

document.getElementById(
"cart-count-float"
).innerText=cart.length;

}

const oldAddToCart=addToCart;

addToCart=function(name,price){

oldAddToCart(name,price);

updateCartUI();

};
/* LOADER */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById(
"loader"
).style.display="none";

},1500);

});

/* QUICK VIEW */

document
.querySelectorAll(".quick-view")
.forEach(btn=>{

btn.addEventListener("click",()=>{

alert(
"Product Details Page will be added in next version."
);

});

});

/* MOBILE MENU */

document
.getElementById("menuBtn")
.addEventListener("click",()=>{

const menu=
document.querySelector(".header-links");

if(menu.style.display==="flex"){

menu.style.display="none";

}else{

menu.style.display="flex";

}

});
/* ORDER POPUP */

setInterval(()=>{

const popup=
document.getElementById("order-popup");

popup.style.display="block";

setTimeout(()=>{

popup.style.display="none";

},4000);

},12000);