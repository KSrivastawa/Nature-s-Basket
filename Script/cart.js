import login_navbar from "../Components/navbar.js"
document.getElementById('main_export').innerHTML = login_navbar()


import {footerpage} from "../Components/footer.js"

document.querySelector("footer").innerHTML = footerpage();

import nav1 from "../Components/nav1.js"
console.log(nav1)
document.querySelector("#nav1").innerHTML = nav1();

    let cartData = JSON.parse(localStorage.getItem("cart")) || [];



    var total = cartData.reduce(function(sum, elem, index, arr)
    {
        return sum + Number(elem.price)
    }, 0)

    var length = cartData.length;

    console.log(total)

    document.querySelector("#alrt").innerText = ` items in your cart ${length} total amount is ${total}`

    
    cartData.map(function(el, index)
    {
        let box = document.createElement("div")
        box.setAttribute = ("class", "innerBox");

        let delivery = document.createElement("p")
        delivery.innerText = el.delivery || "delivery in 90 minutes";
        delivery.setAttribute("class", "del1");

        let img1 = document.createElement("img")
        img1.src =  el.imgUrl || el.image;
        img1.setAttribute("class", "im1")

        let name1 = document.createElement("h6")
        name1.innerText = el.name;


        let quantity = document.createElement("p")
        quantity.innerText = el.qty || el.size;

        

        let iner = document.createElement("div");
        iner.setAttribute("id", "inpr")

        let offer = document.createElement("p")
        offer.inerText = el.offer;



        let strickedoffprice = document.createElement("p")
        strickedoffprice.innerText = el.stPrice || el.mrp.m + el.mrp.r1;
        strickedoffprice.setAttribute("class", "stpr");


        let price = document.createElement("p")
        price.innerText = el.price || el.mrp.m + el.mrp.r;
        price.setAttribute("class", "pric");

        // let strickedoffprice = document.createElement("p")
        // strickedoffprice.innerText = el.stPrice;
        // strickedoffprice.setAttribute("class", "stpr");


        // let price = document.createElement("p")
        // price.innerText = el.price;
        // price.setAttribute("class", "pric");


        var btn = document.createElement("button")
        btn.innerText = "Remove"
        btn.setAttribute("class","button")
        btn.addEventListener("click", function()
        {
            removeItem(el, index)
        })

        

        iner.append(strickedoffprice, price);

        box.append(img1,delivery, name1, quantity, offer, btn);

        box.append(iner);

        document.querySelector("#cartContainer").append(box);

    });

    function removeItem(el, index)
    {
        console.log(el, index)
        cartData.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(cartData))
        window.location.reload()
    }







    ///////////////////////
    


    



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








