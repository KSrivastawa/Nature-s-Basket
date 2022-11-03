import { footerpage } from "../Components/footer.js";

document.querySelector("footer").innerHTML = footerpage();

import login_navbar from "../Components/navbar.js"
document.getElementById('main_export').innerHTML = login_navbar()

import nav1 from "../Components/nav1.js"
console.log(nav1)
document.querySelector("#nav1").innerHTML = nav1();

let slide_bar = [
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg",
  },

  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/29e5f6d0-7087-49d0-bd5a-dab151d860de_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/e16332f1-b2da-4ab5-b9fa-e3933eed9b5b_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/e16332f1-b2da-4ab5-b9fa-e3933eed9b5b_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/5658ebaa-f296-4121-991c-c2009109e764_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/d923ad74-9f00-45a0-b19f-4af69eb07df6_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/4c720a91-f8f7-437a-bbfd-71e63580e802_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/82a1ea7f-02c2-4192-b0d7-588973fa8d14_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/bc1eefce-0553-4b16-bc75-45a4ee42a22e_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/305a62b1-b655-4366-9a9c-b1d4c92685d5_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/56d01993-4a1e-4a1a-8d84-d231bb53cc49_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/be782997-b10b-46fd-bfe3-21250ef7ba48_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/84f0e140-5920-4b28-9f69-30d35b0c194f_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/172ece1d-70d5-44d5-a5f4-0d236c1d815a_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/5000cf77-bfbc-48fa-8523-3d1add750020_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/69fbb757-9d70-45c0-9875-14c8b4f18804_1320x376.jpg",
  },
  {
    slide_:
      "https://d1z88p83zuviay.cloudfront.net/BannerImages/28b8913f-ae0e-4afe-ac72-bae62be8ffb2_1320x376.png",
  },
];

let slide_bar_container_1 = document.querySelector("#Slide_bar_container");

slide_bar.map(function (e) {
  let div = document.createElement("div");
  div.setAttribute("class", "slider_wrapper xFADE");

  let img = document.createElement("img");
  img.setAttribute("class", "Slide_img");

  img.src = e.slide_;
  div.append(img);
  slide_bar_container_1.append(div);
});

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider_wrapper");
  //  let active = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  // for (i = 0; i < active.length; i++) {
  //   active[i].className = active[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  //  dots[slideIndex-1].className += "active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

let category = [
  {
    catrgory:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/Organicweb.png",
    name: "Organic",
    cat_1: "Fruits & vegetables",
    cat_2: "Staples",
    cat_3: "Bakery & Dair Products",
  },
  {
    catrgory:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/Readytoeatweb.png",
    name: "Ready to Eat",
    cat_1: "Hors'D Oeuvres",
    cat_2: "Pastries Desserts",
    cat_3: "Soups Salads",
  },
  {
    catrgory:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/bespokeweb.png",
    name: "Bespoke Gifts",
    cat_1: "Celebrations with Nature's Basket",
    cat_2: "World Food Hampers",
    cat_3: "Bulk Enquiry",
  },
  {
    catrgory:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/fineteasweb.png",
    name: "Fine Teas",
    cat_1: "Black Teas",
    cat_2: "Green White Oolong Teas",
    cat_3: "Herbal Teas Detox Benefit Blends",
  },
  {
    catrgory:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png",
    name: "Daily Essentials",
    cat_1: "Snacks & Beverages",
    cat_2: "Breakfast, Dairy & Bakery",
    cat_3: "Staples",
  },
  {
    catrgory:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png",
    name: "Fresh Artisanal Breads",
    cat_1: "Breadsticks Crostinni Lavache",
    cat_2: "Buns Croissants Bagels",
    cat_3: "Muffins Cakes Brownies",
  },
  {
    catrgory:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png",
    name: "Meat, Poultry & Seafood",
    cat_1: "Chicken Cuts Lollipops Mince",
    cat_2: "Fish Other Seafood",
    cat_3: "Fresh Kebabs Others",
  },
  {
    catrgory:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png",
    name: "Exotic Vegetables",
    cat_1: "Asparagus Artichokes",
    cat_2: "Avocados Peppers",
    cat_3: "Broccoli Zucchini",
  },
  {
    catrgory:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/internationalcusineweb.png",
    name: "International Cuisine",
    cat_1: "Pasta",
    cat_2: "Rice Quinoa",
    cat_3: "Olive Extravirgin Olive Oils",
  },
  {
    catrgory:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/confectionaryweb.png",
    name: "Confectionary and Patisseire",
    cat_1: "Milk Dark Mint Chocolates",
    cat_2: "Cakes, Brownie, Pancake & Mixes",
    cat_3: "Ice-creams & Kulfi",
  },
  {
    catrgory:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/indiangroceryweb.png",
    name: "Indian Grocery",
    cat_1: "Salt Sugar Substitutes",
    cat_2: "Cooking Spices Powders",
    cat_3: "Oils",
  },
  {
    catrgory:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png",
    name: "Heart Healthy Foods",
    cat_1: "Amaranth Couscous Quinoa",
    cat_2: "Flours Rice Condiments",
    cat_3: "Seafood Lean Meats",
  },
];

let catrgory_container = document.querySelector("#category_container");

category.map(function (e) {
  let div = document.createElement("div");
  div.setAttribute("id", "category_div");
  div.setAttribute("class", "xFADE product");

  let div_i = document.createElement("div");
  div_i.setAttribute("class", "product_img");

  let img = document.createElement("img");
  img.setAttribute("class", "category_img");
  img.src = e.catrgory;

  div_i.append(img)
  let p = document.createElement("p");
  p.setAttribute("id", "cat_name");
  p.innerHTML = e.name;

  let ul = document.createElement("ul");
  ul.setAttribute("class", "category_info");

  let li2 = document.createElement("li");
  li2.innerHTML = e.cat_1;
  let hr = document.createElement("hr");

  let li3 = document.createElement("li");
  li3.innerHTML = e.cat_2;
  let hr1 = document.createElement("hr");

  let li4 = document.createElement("li");
  li4.innerHTML = e.cat_3;
  let hr2 = document.createElement("hr");

  let li5 = document.createElement("li");
  li5.innerHTML = "View All";
  let hr3 = document.createElement("hr");

  ul.append(li2, li3, li4, li5);
  div.append(div_i, p, ul);

  catrgory_container.append(div);
});

let trendng = [
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/43f2f694-ab16-4087-859e-5dd0dc67ecbe_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "CAMBAY TIGER SURMAI MEDIUM 500 G",
    quality: "1Pc",
    value: "720.0",
    perv_mrp: "MRP 760",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4da49c10-9608-4e3d-97c4-70bd862c1995_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "KAPIVA WILD HONEY 250ml",
    quality: "1Pc",
    value: "314.1",
    perv_mrp: "MRP 349",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1284727_1_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "SPRIG SALTED CARAMEL 290 G",
    quality: "1Pc",
    value: "339",
    perv_mrp: "MRP 399",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/23599f35-4d09-495b-a698-65813adfe990_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "BOBS RED MILL GLTN FRE EGG REPLACER",
    quality: "1Pc",
    value: "585",
    perv_mrp: "MRP",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300503_1_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "Namhya Heart Tea 150gm",
    quality: "1Pc",
    value: "195",
    perv_mrp: "203",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c9b5c814-00e7-4017-9121-b52d9ab96a75_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "CONCISOUS FOOD GOLDEN SUGAR 500g",
    quality: "1Pc",
    value: "125.1",
    perv_mrp: "MRP 139",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/54e219d9-47aa-4821-a360-378e3d716edf_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "YUMMIEZ JUICY CHCKN NUGGETS 500g",
    quality: "1Pc",
    value: "305",
    perv_mrp: "MRP 325.0",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/77f6b7ac-f792-4b15-ac07-d2a91b9d0aaf_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "SPRIG SPREAD COFE OF BLI MOC N CACAO290G",
    quality: "1Pc",
    value: "389",
    perv_mrp: "449",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/54e219d9-47aa-4821-a360-378e3d716edf_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "YUMMIEZ JUICY CHCKN NUGGETS 500g",
    quality: "1Pc",
    value: "305",
    perv_mrp: "325",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/77f6b7ac-f792-4b15-ac07-d2a91b9d0aaf_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "SPRIG SPREAD COFE OF BLI MOC N CACAO290G",
    quality: "1Pc",
    value: "389",
    perv_mrp: "449",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c5e781cb-8b3f-4964-bb52-4f845b9ef05c_425x425.jpg",

    time: "DELIVERY IN 90 MINUTES",
    name: "MIX DAL - Organic Tattva",
    quality: "1Pc",
    value: "129",
    perv_mrp: "134",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/35b40a67-3a78-400c-a525-1f4f993ae6f4_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "Cambay Tiger Deveined & Cleaned Jumbo Prawns 300G",
    quality: "1Pc",
    value: "469",
    perv_mrp: "499",
  },
];







//paras






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








