// import login_navbar from "../Components/navbar.js"
// document.getElementById('main_export').innerHTML = login_navbar()

import { footerpage } from "../Components/footer.js"

document.querySelector("footer").innerHTML = footerpage();

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
         mrp: {m:"MRP: ₹",r:"1000" , r1:"950"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
         name: "E-Gift Voucher",
         size: "2000Rs",
         mrp: {m:"MRP: ₹",r:"2000" , r1:"1950"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
         name: "E-Gift Voucher",
         size: "3000Rs",
         mrp: {m:"MRP: ₹",r:"3000" , r1:"2950"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
         name: "E-Gift Voucher",
         size: "10000Rs",
         mrp: {m:"MRP: ₹",r:"10000" , r1:"9950"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
         name: "E-Gift Voucher",
         size: "5000Rs",
         mrp: {m:"MRP: ₹",r:"5000" , r1:"4950"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/cde53b0f-40be-40c4-b027-e432d8b75677_425x425.jpg",
         name: "Nutty Way",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"3149" , r1:"3100"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ba9c5d44-39d5-484b-8ea3-8c0a49ba4100_425x425.jpg",
         name: "The Caffeine Addict",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"6999" , r1:"6949"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/74e42070-5371-4ce9-a75a-b7d6cc3f2715_425x425.jpg",
         name: "The Holy Guacamole Box",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"2899" , r1:"2799"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/74e42070-5371-4ce9-a75a-b7d6cc3f2715_425x425.jpg",
         name: "The Holy Guacamole Box",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"4049" , r1:"4000"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/95d25014-24a6-47b3-942a-c8c6cd24f22e_425x425.jpg",
         name: "Hola Mexico",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"2999", r1:"2949"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9a4c7e02-3abc-4335-934c-7b3f235a4a55_425x425.jpg",
         name: "Holy Guacamole Trunk",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"4899", r1:"4849"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a0130256-262d-47bb-9ead-14b774f4e488_425x425.jpg",
         name: "Breakfast Buddy",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"2149" , r1:"2100"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/97e7631e-a04b-402a-a4ec-397f83091458_425x425.jpg",
         name: "The Exotic Tea Trunk",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"3399",r1:"3349"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d4d37b94-94cb-4d20-9985-1435be816b16_425x425.jpg",
         name: "The Luxury Tea Trove By Anamika Kha..",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"11499" , r1:"1100"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7c9276d4-5e27-4153-974d-44d0e59d4ef8_425x425.jpg",
         name: "Lazy AF",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"1099" , r1:"1049"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c7235da5-d8bc-47d9-a05c-77fc713e3a76_425x425.jpg",
         name: "The Endless Love Affair",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"5699", r1:"5649"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/444c0687-5b46-4df5-8666-1d1173769c79_425x425.jpg",
         name: "The Positivitea Trunk",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"5449" , r1:"5400"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/233ab49a-4fe2-40c3-a8be-f3947e6fdda8_425x425.jpg",
         name: "The Anamika Khanna Vegan Goodie Box",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"7699" , r1:"7649"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fabee1c2-7801-4f13-a21f-841daef4503d_425x425.jpg",
         name: "Cheers And Beers",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"2299" , r1:"2249"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e130cf1b-78e4-4eff-acc7-6375e6038794_425x425.jpg",
         name: "Baking Saturday",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"2849",r1:"2800"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ee254f97-3b02-45cb-996b-db9a36c7e620_425x425.jpg",
         name: "The Non GMO Hamper",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"3499" ,r1:"3449"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b0532a6c-81a6-4e84-bbac-1d2d9d16ecf3_425x425.jpg",
         name: "Obsessive Coffee Disorder",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"2999" , r1:"2949"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7e020b90-58dd-4f35-a235-f019bae24e33_425x425.jpg",
         name: "A Large Dose Of Vitamin C Hamper",
         size: "1 Pc",
         mrp:{m:"MRP: ₹",r:"1199" , r1:"1149"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/22b9de68-adfa-4288-8053-3ae0f7eaa440_425x425.jpg",
         name: "The Guilt Free Hamper",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"5899", r1:"5849"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/034e5fee-1148-4668-9e5c-7e82e4f1b175_425x425.jpg",
         name: "The Zero Guilt Gluten Free Box Hand..",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"4899",r1:"4449"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/edd1f640-a354-4225-98cc-a3c69ec07682_425x425.jpg",
         name: "Daily Dose Of Caffeine Box",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"1899",r1:"1849"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ec5a37e9-3cd9-41e7-9961-12ec515d2e3d_425x425.jpg",
         name: "Love For Food Hamper",
         size: "1 Pc",
         mrp:{m:"MRP: ₹",r:"2499",r1:"2449"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bd5b3741-c9be-4ea4-b342-69708106d4cc_425x425.jpg",
         name: "Food For Every Mood Hamper (Jain)",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"2599",r1:"2549"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9e4d686b-c600-4695-82c3-f6301c57eb03_425x425.jpg",
         name: "Nuts About Nuts Hamper",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"5899",r1:"5849"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4ba7b06b-b138-4ee2-b255-b89f628b7839_425x425.jpg",
         name: "Food Lover's Trunk",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"6849",r1:"6800"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/22f36c6a-a913-4876-8fa2-89b520c5647d_425x425.jpg",
         name: "The Binge Hamper",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"4049",r1:"4000"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/884e9fd9-e1a8-4b10-a86d-04ed14467eb1_425x425.jpg",
         name: "Classic 90's",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"1799" ,r1:"1749"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/742e6c6c-a4a2-41d9-a606-f60661a47181_425x425.jpg",
         name: "Binge With Beer",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"4399", r1:"4349"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e7d75eee-bf4e-4d11-a37a-4b07fa27a802_425x425.jpg",
         name: "Love For Wine",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"10849" , r1:"10800"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/cd583e34-3f1c-4962-97cd-0c12c70d1af4_425x425.jpg",
         name: "De France Avec Amour",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"32549",r1:"32500"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    {
         image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7d575df6-56c1-4a9a-99b0-57d367649eed_425x425.jpg",
         name: "The Forbidden Fruit Hamper",
         size: "1 Pc",
         mrp: {m:"MRP: ₹",r:"849",r1:"800"},
         add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
    },
    
    ]

//displaydata(data);
window.addEventListener("load", function () {
     displaydata(data);
})

document.getElementById("relevance").addEventListener("click", sorted)

function sorted() {
     let selected = document.getElementById("relevance").value;
     console.log(selected);
     if (selected == "htl") {
          data.sort((a, b) => {
               return Number(b.mrp.r) - Number(a.mrp.r)
          })
          console.log(data)
          displaydata(data)
     }
     if (selected == "lth") {
          data.sort((a, b) => {
               return Number(a.mrp.r) - Number(b.mrp.r)
          })
          console.log(data)
          displaydata(data)

     }
}

let addtocartarr = JSON.parse(localStorage.getItem("cart")) || [];

let displaydata = (data) => {
     document.getElementById("append").innerHTML = null
     data.map(el => {
          let div = document.createElement("div")
          div.setAttribute("class", "append_div")
          let img = document.createElement("img");
          img.src = el.image;
          img.setAttribute("class", "image");

          let name = document.createElement("p");
          name.innerText = el.name;

          let size = document.createElement("p");
          size.innerText = el.size;

          let mrp_div = document.createElement("div");
          mrp_div.setAttribute("class", "mrp_div");

          let price_div = document.createElement("div");
          price_div.setAttribute("class", "price");

          let mrp = document.createElement("p");
          mrp.innerText = el.mrp.m + el.mrp.r;

          price_div.append(mrp)

          let div_add_img = document.createElement("div")
          div_add_img.setAttribute("class", "div_add_img")

          let add = document.createElement("img");
          add.src = el.add;
          add.setAttribute("class", "add_img")
          add.addEventListener("click", function () {
               addtocart(el)
          })

          div_add_img.append(add);

          mrp_div.append(price_div, div_add_img);

          div.append(img, name, size, mrp_div);

          document.getElementById("append").append(div)

     })
}
function addtocart(el) {

     addtocartarr.push(el);
     localStorage.setItem("cart", JSON.stringify(addtocartarr))
}



//////////////////






function enter_mobile() {
     //console.log('click')
     // data.style.display = block

     let main_otp = document.getElementById('main_otp_login')
     main_otp.style.display = "block"

     let login_form_ok = document.querySelector(".login_form")
     login_form_ok.style.display = "none"


}


let ok1 = document.getElementById('reg_reg')
ok1.addEventListener('click', function () {
     enter_mobile(ok1)
})



//continue

let arr_mob = JSON.parse(localStorage.getItem("mob")) || []

function continue_details() {
     console.log("continue")
     let main_otp = document.getElementById('main_otp_login')
     main_otp.style.display = "none"

     let details_form = document.getElementById('details')
     details_form.style.display = "block"

     let mob = document.getElementById('mob').value
     arr_mob.push(mob)
     localStorage.setItem("mob", JSON.stringify(+arr_mob))
}



let Continue = document.getElementById("continue")

Continue.addEventListener('click', function () {
     continue_details(Continue)

})


// for registeration

function to_reg() {
     // console.log("login")

     let login_form_ok = document.querySelector(".login_form")
     login_form_ok.style.display = "block"

     let main_otp = document.getElementById('main_otp_login')
     main_otp.style.display = "none"
}




let log_p = document.getElementById('log_one')
log_p.addEventListener('click', function () {
     to_reg(log_p)
})




// for exit


function exit_to_nav() {
     console.log("exit")
     document.getElementById('main_otp_login').style.display = "none";
     document.getElementById('details').style.display = "none";
     document.querySelector(".login_form").style.display = "none"



     // document.getElementById('container').style.display="block"
}


let exits = document.getElementsByClassName("exit")

for (let i = 0; i < exits.length; i++) {
     exits[i].addEventListener('click', function () {
          exit_to_nav(exits)
     })
}






//Local storage for registeration form

let form_arr = JSON.parse(localStorage.getItem("myform")) || []

function my_form() {
     event.preventDefault()

     var form_obj = {
          email: document.getElementById('email').value,

          pass: document.getElementById('pass').value
     }
     //console.log("form_obj",form_obj)
     document.getElementById("register").addEventListener("click", function () {
          alert("Registeration successful!")
     })

     form_arr.push(form_obj)
     localStorage.setItem("myform", JSON.stringify(form_arr))


}

let form_ok = document.getElementById('register').addEventListener('click', function () {
     my_form()
})


//document.getElementById("OTP").innerText= Number(form_arr)


//login_data


let login_arr = JSON.parse(localStorage.getItem("myform")) || []
function my_login() {


     event.preventDefault()

     var login_obj = {
          e_email: document.getElementById('e_email').value,
          e_pass: document.getElementById('e_pass').value
     }
     //console.log('login_obj', login_obj)

     login_arr.push(login_obj);
     console.log("login_arr", login_arr)

     for (let i = 0; i < login_arr.length; i++) {
          if (login_obj.e_email == login_arr[i].email) {

               if (login_obj.e_pass == login_arr[i].pass) {
                    //console.log('alert')
                    alert('Login Successful')
               }
               else {
                    alert('Invalid Credentials')
               }
          }

     }

}


let login_ok = document.getElementById('login').addEventListener('click', function () {
     my_login()
})











//let normal_obj=[{'x':'apple'},
// {'x':'banana'},
// {'x':'pears'},
// {'x':'grapes'}]

let normal_obj = ['Trending Searches', 'Organic', 'Fresh Artisinal Breads', 'Cold cuts & Seafood', 'Diabetic Friendly Foods', 'L Exclusif', 'Healthy Alternatives', 'Birthdat & Anniversary Gift Hampers', 'Platters & Dips', 'Smoked Cheese', 'Ice Cream & Desserts', 'Keto-Paleo']



function get_querry(normal_arr) {
     console.log("normal", normal_arr)

     document.getElementById('append').style.display = "block"

     let div = document.getElementById('append')
     div.innerHTML = null;
     //div.setAttribute("id","querry_ka")
     normal_arr.forEach(function (elem) {
          let div_dr = document.createElement('div')
          //let br= document.createElement('br')


          // let p= document.createElement('p')
          let titles = document.createElement('h3')
          titles.innerText = "*" + elem;

          div_dr.append(titles)
          //let title2= titles.split('/n')



          div.append(div_dr)


     })

}

let querry = document.getElementById('querry')
querry.addEventListener('click', function () {
     get_querry(normal_obj)
})








