import login_navbar from "../Components/navbar.js"
document.getElementById('main_export').innerHTML = login_navbar()

import {footerpage} from "../Components/footer.js"

document.querySelector("footer").innerHTML = footerpage();

import nav1 from "../Components/nav1.js"
console.log(nav1)
document.querySelector("#nav1").innerHTML = nav1();
let offersData = [
  {
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/659eee9d-4247-437b-9397-b0aedea3dd7e_425x425.jpg",
    delivery: "delivery in 90 minutes",
    name: "DAE CHUN GIM YAKI SUSHI NORI 10PC 22G - 1 Pc",
    qty: "1 Pc",
    offer: "buy @ Rs.152.00/-",
    stPrice: " MRP ₹ 1030",
    price: " ₹152",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1350957_1_425x425.jpg",
    name: " MUNCHILICIOUS GRANOLA DARK CHOCO 500g - 1 Pc",
    qty: "1 Pc",
    offer: " buy @ Rs.270.00/-",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/92bb1790-9b86-4df6-86fb-22d5bcb0ba52_425x425.jpg",
    name: " DAE CHUN GIM YAKI SUSHI NORI 10PC 22G - 1 Pc",
    qty: "1 Pc",
    offer: "buy @ Rs.270.00/-",
    stPrice: " MRP ₹ 1030",
    price: " Rs.270.00/-",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      " https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1350956_1_425x425.jpg",
    name: " DAE CHUN GIM YAKI SUSHI NORI 10PC 22G - 1 Pc",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹779",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      " https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/69edb21e-db04-4d56-9a85-f96acecb40a0_425x425.jpg",
    name: " DAE CHUN GIM YAKI SUSHI NORI 10PC 22G - 1 Pc",
    qty: "1 Pc",
    offer: "buy @ Rs.270.00/-",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      " https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6c65026c-526f-459c-a8d1-b85cfa9672d1_425x425.JPG",
    name: " MUTTON CURRY CUT",
    qty: "1 Pc1 | kg500 | g250",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹1030",
    price: " ₹158",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      " https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eaca4d66-bde9-49c9-93a4-0fac1e7634d3_425x425.jpg",
    name: " MUTTON CURRY CUT",
    qty: "1 Pc",
    offer: " buy @ Rs.270",
    stPrice: " MRP ₹ 1030",
    price: " Rs.270",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ff17e15e-5c6e-46ec-8746-ea69ae3606ef_425x425.JPG",
    name: " MUNCHILICIOUS GRANOLA DRIED FRUITS ..",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " Rs.270",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3b487483-23f2-4954-9a71-32f816c13bed_425x425.jpg",
    name: " MUNCHILICIOUS GRANOLA DRIED FRUITS ..",
    qty: "1 Pc",
    offer: "",
    stPrice: " MRP ₹ 975",
    price: " MRP ₹ 779",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/baccfde7-2e5f-4d87-b167-18a1068fb59a_425x425.JPG",
    name: "MUNCHILICIOUS GRANOLA DARK CHOCO 500g - 1 Pc",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹ 110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1350955_1_425x425.jpg",
    name: " MUNCHILICIOUS GRANOLA DARK CHOCO 500g - 1 Pc",
    qty: "1 Pc",
    offer: " buy @ Rs.270.00/-",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹ 110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      " https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eaca4d66-bde9-49c9-93a4-0fac1e7634d3_425x425.jpg",
    name: " O'SMART NATURAL MX TONIC WATER 250ML PET - 1 Pc",
    qty: "1 Pc",
    offer: " buy @ Rs.270.00/-",
    stPrice: " MRP ₹ 1030",
    price: " Rs.270",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c390252e-4bdb-4292-95fe-9e6ffdca0813_425x425.jpg",
    name: " MUNCHILICIOUS GRANOLA DRIED FRUITS ..",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/baccfde7-2e5f-4d87-b167-18a1068fb59a_425x425.JPG",
    name: " O'SMART NATURAL MX TONIC WATER 250ML PET - 1 Pc",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 75",
    price: " MRP ₹ 779",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ff17e15e-5c6e-46ec-8746-ea69ae3606ef_425x425.JPG",
    name: " O'SMART NATURAL MX TONIC WATER 250ML PET - 1 Pc",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " Rs.270",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c390252e-4bdb-4292-95fe-9e6ffdca0813_425x425.jpg",
    name: " MUNCHILICIOUS GRANOLA DARK CHOCO 500g - 1 Pc",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " MRP  ₹110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/dce4c1e4-f4f0-4dfb-8cd3-0d1075f1ba18_425x425.jpg",
    name: " MUNCHILICIOUS GRANOLA DRIED FRUITS ..",
    qty: "1 Pc",
    offer: " buy @ Rs.270.00/-",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹ 110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eaca4d66-bde9-49c9-93a4-0fac1e7634d3_425x425.jpg",
    name: " O'SMART NATURAL MX TONIC WATER 250ML PET - 1 Pc",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " Rs.270",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/68270d85-f8b3-46e1-aa08-3f9a10d46aee_425x425.jpg",
    name: " O'SMART NATURAL MX TONIC WATER 250ML PET - 1 Pc",
    qty: "1 Pc",
    offer: "${}",
    stPrice: " MRP ₹ 75",
    price: " MRP ₹ 110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c390252e-4bdb-4292-95fe-9e6ffdca0813_425x425.jpg",
    name: " MUNCHILICIOUS GRANOLA DRIED FRUITS ..",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹ 779",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ff17e15e-5c6e-46ec-8746-ea69ae3606ef_425x425.JPG",
    name: " O'SMART NATURAL MX TONIC WATER 250ML PET - 1 Pc",
    qty: "1 Pc",
    offer: " buy @ Rs.270.00/-",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹ 110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/16fc0d9d-858a-4de1-8319-d27923237a28_425x425.jpg",
    name: " MUNCHILICIOUS GRANOLA DARK CHOCO 500g - 1 Pc",
    qty: "1 Pc",
    offer: " buy @ Rs.270.00/-",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹ 110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3b487483-23f2-4954-9a71-32f816c13bed_425x425.jpg",
    name: " MUNCHILICIOUS GRANOLA DRIED FRUITS ..",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹779",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/dce4c1e4-f4f0-4dfb-8cd3-0d1075f1ba18_425x425.jpg",
    name: "",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " Rs.270",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/68270d85-f8b3-46e1-aa08-3f9a10d46aee_425x425.jpg",
    name: " MUNCHILICIOUS GRANOLA DRIED FRUITS ..",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹ 110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ff17e15e-5c6e-46ec-8746-ea69ae3606ef_425x425.JPG",
    name: " O'SMART NATURAL MX TONIC WATER 250ML PET - 1 Pc",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹779",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eaca4d66-bde9-49c9-93a4-0fac1e7634d3_425x425.jpg",
    name: " O'SMART NATURAL MX TONIC WATER 250ML PET - 1 Pc",
    qty: "1 Pc",
    offer: " buy @ Rs.270.00/-",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/16fc0d9d-858a-4de1-8319-d27923237a28_425x425.jpg",
    name: " O'SMART NATURAL MX TONIC WATER 250ML PET - 1 Pc",
    qty: "1 Pc",
    offer: "buy",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ff17e15e-5c6e-46ec-8746-ea69ae3606ef_425x425.JPG",
    name: " MUNCHILICIOUS GRANOLA DARK CHOCO 500g - 1 Pc",
    qty: "1 Pc",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eaca4d66-bde9-49c9-93a4-0fac1e7634d3_425x425.jpg",
    name: " MUNCHILICIOUS GRANOLA DRIED FRUITS ..",
    qty: "1 Pc",
    offer: " buy @ Rs.270.00/-",
    stPrice: " MRP ₹ 1030",
    price: " Rs.270",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eaca4d66-bde9-49c9-93a4-0fac1e7634d3_425x425.jpg",
    name: " MUNCHILICIOUS GRANOLA DARK CHOCO 500g - 1 Pc",
    qty: "1 Pc",
    offer: "buy ",
    stPrice: " MRP ₹ 1030",
    price: " MRP ₹110",
  },
  {
    delivery: " delivery in 90 minutes",
    imgUrl:
      " https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6c65026c-526f-459c-a8d1-b85cfa9672d1_425x425.JPG",
    name: " MUTTON CURRY CUT",
    qty: "1 Pc1 | kg500 | g250",
    offer: "buy @ ${price}",
    stPrice: " MRP ₹ 1030",
    price: " ₹158",
  },
];

let cartData = JSON.parse(localStorage.getItem("cart")) || [];

offersData.map(function (el) {
  let box = document.createElement("div");
  box.setAttribute("class", "innerBox");

  let delivery = document.createElement("p");
  delivery.innerText = el.delivery;
  delivery.setAttribute("class", "del1");

  let img1 = document.createElement("img");
  img1.src = el.imgUrl;
  img1.setAttribute("class", "im1");

  let name1 = document.createElement("h6");
  name1.innerText = el.name;

  let quantity = document.createElement("p");
  quantity.innerText = el.qty;

  let iner = document.createElement("div");
  iner.setAttribute("id", "inpr");

  let offer = document.createElement("p");
  offer.inerText = el.offer;

  let strickedoffprice = document.createElement("p");
  strickedoffprice.innerText = el.stPrice;
  strickedoffprice.setAttribute("class", "stpr");

  let price = document.createElement("p");
  price.innerText = el.price;
  price.setAttribute("class", "pric");

  let img2 = document.createElement("img");
  img2.src =
    " https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp";
  img2.addEventListener("click", function () {
    addToCart(el);
  });
  img2.setAttribute("class", "logo");

  iner.append(strickedoffprice, price, img2);

  box.append(img1, delivery, name1, offer, quantity);

  box.append(iner);

  document.querySelector("#shivContainer").append(box);
});

function addToCart(el) {
  console.log(el);
  cartData.push(el);

  localStorage.setItem("cart", JSON.stringify(cartData));
}


/////////////






function enter_mobile(){
  //console.log('click')
  // data.style.display = block
  
  let main_otp = document.getElementById('main_otp_login')
  main_otp.style.display = "block"

  let login_form_ok = document.querySelector(".login_form")
  login_form_ok.style.display= "none"


  }


let ok1 = document.getElementById('reg_reg')
ok1.addEventListener('click',function(){
  enter_mobile(ok1)
})



//continue

let arr_mob = JSON.parse(localStorage.getItem("mob")) || []

function continue_details(){
  console.log("continue")
  let main_otp = document.getElementById('main_otp_login')
  main_otp.style.display = "none"

  let details_form = document.getElementById('details')
  details_form.style.display = "block"

  let mob = document.getElementById('mob').value
   arr_mob.push(mob)
  localStorage.setItem("mob",JSON.stringify(+arr_mob))
}



let Continue = document.getElementById("continue")

  Continue.addEventListener('click',function(){
       continue_details(Continue)
  
  })


// for registeration

function to_reg(){
 // console.log("login")

  let login_form_ok = document.querySelector(".login_form")
  login_form_ok.style.display= "block"

  let main_otp = document.getElementById('main_otp_login')
  main_otp.style.display = "none"
}




let log_p = document.getElementById('log_one')
log_p.addEventListener('click', function(){
      to_reg(log_p)
})




// for exit


function exit_to_nav(){
  console.log("exit")
   document.getElementById('main_otp_login').style.display="none";
   document.getElementById('details').style.display="none";
   document.querySelector(".login_form").style.display="none"

   

 // document.getElementById('container').style.display="block"
}


let exits = document.getElementsByClassName("exit")

for(let i=0;i<exits.length;i++){
  exits[i].addEventListener('click',function(){
      exit_to_nav(exits)
  })
}






//Local storage for registeration form

let form_arr = JSON.parse(localStorage.getItem("myform")) || []

function my_form(){
  event.preventDefault()

 var form_obj ={ 
  email : document.getElementById('email').value,

  pass : document.getElementById('pass').value
 }
 //console.log("form_obj",form_obj)
 document.getElementById("register").addEventListener("click",function(){
     alert("Registeration successful!")
 })

 form_arr.push(form_obj)
 localStorage.setItem("myform",JSON.stringify(form_arr))


}

let form_ok = document.getElementById('register').addEventListener('click',function(){
  my_form()
})


//document.getElementById("OTP").innerText= Number(form_arr)


//login_data


let login_arr = JSON.parse(localStorage.getItem("myform")) || []
function my_login(){

  
  event.preventDefault()

  var login_obj= {
       e_email : document.getElementById('e_email').value,
       e_pass : document.getElementById('e_pass').value
  }
//console.log('login_obj', login_obj)

login_arr.push(login_obj); 
console.log("login_arr",login_arr)

for(let i=0;i<login_arr.length;i++){
  if(login_obj.e_email == login_arr[i].email ){

      if(login_obj.e_pass== login_arr[i].pass){
          //console.log('alert')
          alert('Login Successful')
      }
      else{
          alert('Invalid Credentials')
      }
  }

}

}


let login_ok = document.getElementById('login').addEventListener('click', function(){
  my_login()
})











//let normal_obj=[{'x':'apple'},
// {'x':'banana'},
// {'x':'pears'},
// {'x':'grapes'}]

let normal_obj= ['Trending Searches','Organic','Fresh Artisinal Breads','Cold cuts & Seafood', 'Diabetic Friendly Foods', 'L Exclusif','Healthy Alternatives', 'Birthdat & Anniversary Gift Hampers', 'Platters & Dips','Smoked Cheese', 'Ice Cream & Desserts', 'Keto-Paleo']



function get_querry(normal_arr){
  console.log("normal",normal_arr)

  document.getElementById('append').style.display="block"
 
  let div= document.getElementById('append')
  div.innerHTML=null;
  //div.setAttribute("id","querry_ka")
  normal_arr.forEach(function(elem){
      let div_dr= document.createElement('div')
      //let br= document.createElement('br')
      
      
      // let p= document.createElement('p')
      let titles = document.createElement('h3')
      titles.innerText= "*"+elem ;

      div_dr.append(titles)
      //let title2= titles.split('/n')
      
      
      
      div.append(div_dr)
      
  
  })

}

let querry = document.getElementById('querry')
querry.addEventListener('click',function(){
  get_querry(normal_obj)
})








