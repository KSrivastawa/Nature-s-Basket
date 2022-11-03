import {footerpage} from "../Components/footer.js"
console.log(footerpage)

document.querySelector("#foot").innerHTML = footerpage();

import nav1 from "../Components/nav1.js"
console.log(nav1)
document.querySelector("#nav1").innerHTML = nav1();


let data=[
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
        name: "E-Gift Voucher",
        size: "500Rs",
        mrp: {m:"MRP: ₹",r:"500" , r1:"450"},
        add : "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5559830.jpg"
   },
   {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
        name: "E-Gift Voucher",
        size: "1000Rs",
        mrp: {m:"MRP: ₹",r:"1000" ,r1:"950"},
        add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
   },
   {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
        name: "E-Gift Voucher",
        size: "2000Rs",
        mrp: {m:"MRP: ₹",r:"2000", r1:"1950"},
        add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
   },
   {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
        name: "E-Gift Voucher",
        size: "3000Rs",
        mrp: {m:"MRP: ₹",r:"3000" ,r1:"2950"},
        add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
   },
   {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
        name: "E-Gift Voucher",
        size: "10000Rs",
        mrp: {m:"MRP: ₹",r:"10000" , r1:"19950"},
        add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
   },
   {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
        name: "E-Gift Voucher",
        size: "5000Rs",
        mrp: {m:"MRP: ₹",r:"5000" , r1:"4950"},
        add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
   },
   ]

   //displaydata(data);
   window.addEventListener("load",function(){
        displaydata(data);
   })

   document.getElementById("relevance").addEventListener("click",sorted)

   function sorted(){
        let selected=document.getElementById("relevance").value;
       console.log(selected);
       if(selected=="htl"){
            data.sort((a,b) =>{
              return Number(b.mrp.r)-Number(a.mrp.r)
            })
            console.log(data)
            displaydata(data)
       }
       if(selected=="lth"){
            data.sort((a,b) =>{
              return Number(a.mrp.r)-Number(b.mrp.r)
            })
            console.log(data)
            displaydata(data)

       }
   }
   let addtocartarr=JSON.parse(localStorage.getItem("cart")) || [];

   let displaydata=(data)=>{
        document.getElementById("append").innerHTML=null
    data.map(el=>{
       let div=document.createElement("div")
       div.setAttribute("class","append_div")
       let img=document.createElement("img");
       img.src=el.image;
       img.setAttribute("class","image");

       let name= document.createElement("p");
       name.innerText=el.name;

       let size=document.createElement("p");
       size.innerText=el.size;

       let mrp_div=document.createElement("div");
       mrp_div.setAttribute("class","mrp_div");

       let price_div=document.createElement("div");
       price_div.setAttribute("class","price");

       let mrp=document.createElement("p");
       mrp.innerText=el.mrp.m+el.mrp.r;

       price_div.append(mrp)

       let div_add_img=document.createElement("div")
       div_add_img.setAttribute("class","div_add_img")

       let add=document.createElement("img");
       add.src=el.add;
       add.setAttribute("class","add_img")
       add.addEventListener("click",function(){
            addtocart(el)
       })

       div_add_img.append(add);

       mrp_div.append(price_div,div_add_img);

       div.append(img,name,size,mrp_div);

       document.getElementById("append").append(div)

   })
   }
   function addtocart(el){

    addtocartarr.push(el);
    localStorage.setItem("cart",JSON.stringify(addtocartarr))
   }