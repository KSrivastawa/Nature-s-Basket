import login_navbar from "../Components/navbar.js"
document.getElementById('main_export').innerHTML = login_navbar()

import {footerpage} from "../Components/footer.js"

document.querySelector("footer").innerHTML = footerpage();


import nav1 from "../Components/nav1.js"
console.log(nav1)
document.querySelector("#nav1").innerHTML = nav1();
// console.log(footerpage)

const showdiv1 = () => {

    let box = document.querySelector("#box2")
    box.innerHTML = null;
    let h1 = document.createElement("h");
    h1.setAttribute("class", "type03")

    let span = document.createElement("span");
    span.setAttribute("class", "h1");
    let H1 = document.createElement("h2");
    H1.setAttribute("class", "active");
    let H2 = document.createElement("h2");
    H2.setAttribute("class", "active");
    let H3 = document.createElement("h2");
    H3.setAttribute("class", "active");
    let H4 = document.createElement("h2");
    H4.setAttribute("class", "active");
    let H5 = document.createElement("h2");
    H5.setAttribute("class", "active")



    span.innerText = "PROGRAM";
    h1.innerHTML = "REWARDS";
    H1.innerText = "Your Gateway To World Food";
    H2.innerText = "Earning points is easy";
    H3.innerText = "REWARDS IS MORE THAN JUST POINTS";
    H4.innerText = "Redeeming Points Is Irresistible";
    H5.innerText = " KNOW YOUR NATURES BASKET REWARDS PROGRAM";

    let h2 = document.createElement("h2");
    h2.innerText = "BENEFITS OF REWARDS PROGRAM";

    let imgdiv = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = "https://d1z88p83zuviay.cloudfront.net/Images/REWARD_1%20-%20Copy.jpg";

    imgdiv.append(img1);
    h1.append(span);
    box.append(h1, H1, H2, H3, H4, H5, h2, imgdiv);

}


function showdiv4() {
    let box = document.querySelector("#box2")
    box.innerHTML = null;

    let h2_1 = document.createElement("h1");
    h2_1.setAttribute("class", "type03")
    h2_1.innerText = "Benefits & Privileges";
    let img2 = document.createElement("img");
    img2.src = "image/New_Benefits_Privileges.jpg"

    box.append(h2_1, img2)
}


function showdiv3() {
    let box = document.querySelector("#box2");
    box.innerHTML = null;

    let h3_1 = document.createElement("h2")
    h3_1.setAttribute("class" , "head1")
    h3_1.innerText = "TERMS & CONDITIONS OF THE NATURE’S BASKET REWARDS PROGRAM (NBRP)";

    let ul = document.createElement("ul");
    let a = document.createElement("li");
    let b = document.createElement("li");
    let c = document.createElement("li");
    let d = document.createElement("li");
    let e = document.createElement("li");
    let f = document.createElement("li");
    let g = document.createElement("li");
    let h = document.createElement("li");
    let i = document.createElement("li");
    let j = document.createElement("li");
    let k = document.createElement("li");
    let l = document.createElement("li");
    let m = document.createElement("li");
    let n = document.createElement("li");
    let o = document.createElement("li");
    let p = document.createElement("li");
    let q = document.createElement("li");
    let r = document.createElement("li");
    let s = document.createElement("li");
    let t = document.createElement("li");
    let u = document.createElement("li");
    let v = document.createElement("li");
    let w = document.createElement("li");
    let x = document.createElement("li");
    let y = document.createElement("li");
    let z = document.createElement("li");
    let a1 = document.createElement("li");
    let a2 = document.createElement("li");
    let a3 = document.createElement("li");
    let a4 = document.createElement("li");
    let a5 = document.createElement("li")




    a.innerText = "Open to individuals aged 21 or above.";
    b.innerText = "This is a card-less program. Member’s mobile phone number would be his/her unique identification number for the membership."
    c.innerText = "Complete name (first name and last name), mobile number and email id are mandatory for registration in the program."
    d.innerText = "Upon successful registration to the Nature’s Basket Rewards Program (NBRP), members accept that the membership is governed by these terms & conditions and may be amended from time to time."
    e.innerText = "There is no membership fee for registration to NBRP."
    f.innerText = "If the information shared by the customer is found to be inappropriate or invalid, Natures Basket Limited (NBL) reserves the right to terminate the membership without any prior intimation.";
    g.innerText = "Current point redemption value being offered is Re. 0.25."
    h.innerText = "Members can earn or redeem their points at any Nature’s Basket outlets across India and also on www.naturesbasket.co.in"
    i.innerText = "Members can view current, purchase history & edit their profile information under the “My Rewards” tab in the Rewards Program section on www.naturesbasket.co.in. Access to member account online, will be validated through a simple OTP verification on mobile."
    j.innerText = "The validity of points accumulated is for 12 months from the date of earning the points (e.g. Points earned in 1 Jan-2019 will expire on 30thDec 2020. The points accumulated in one cycle cannot be carried forward to the next cycle"
    k.innerText = "Eligible members will be upgraded as per their spends in a 12 month period as defined for each tier in the “About the Rewards Program” ection2015 solely at the discretion of the management.    "
    l.innerText = "By becoming a member of the Rewards Program, members are, by default, subscribing to receive promotional communication on events & offers at Nature’s Basket. In order to unsubscribe, members will have to intimate any of the Nature’s Basket stores and place a request."
    m.innerText = "Failing to meet spends criterion to remain in a particular tier, member will be downgraded to the next lower tier."
    n.innerText = "The membership points, benefits & privileges are non-transferable & may only be used by the member."
    o.innerText = "The member shall present his NBRP membership acceptance message for all transactions & activities including but not limited to points accumulation, redemptions & discounts .    "
    p.innerText = "NBL will not be held responsible for any transactions made on a lost or stolen membership"
    q.innerText = "All points accumulated will be credited to the member’s NBRP a/c at the time of billing unless the system is down, in which case updating will be done when the system is available in working condition."
    r.innerText = "NBL shall not be liable for points which were accumulated inaccurately as a result of technical malfunction, operator fault, member misconduct or any reason beyond the control of NBL."
    s.innerText = "The use of the privileges and associated benefits are deemed to be an acceptance of NBRP terms and conditions.";
    t.innerText = "NBL management reserves the right to cancel the membership or to cancel or amend any provision offered as part of the NBRP anytime without prior notice."
    u.innerText = "NBL reserves the right to amend benefits and privileges, terms and conditions of this agreement and NBRP benefits from time to time without prior notice. The decision of NBL management shall be final and conclusive in the event of any dispute."
    v.innerText = "Points cannot be earned against purchase of Gift Vouchers and any alcoholic beverages.    "
    w.innerText = "Members can check for their points balance at the store cash counter."
    x.innerText = "Membership constitutes permission for NBL to use the customer’s name and comments for promotional purposes in any media without any compensation whatsoever."
    y.innerText = "NBL does not make any representation or warranty as to quality or suitability of the rewards in any manner.    "
    z.innerText = "NBL shall not be liable for any loss or damage whatsoever that may be suffered or any personal injury that may be caused as a result of participation in the program or using the points/gift/rewards."
    a1.innerText = "The points cannot be redeemed or exchanged for cash. No cash claim can be made in lieu of points.    "
    a2.innerText = "Purchases in the name of firms or any third parties will not be entitled for membership or points.    "
    a3.innerText = "Points of different members cannot be clubbed.    "
    a4.innerText = "NBL store employees and their immediate relatives are not eligible to participate in the NBRP loyalty program."
    a5.innerText = "NBRP assures complete privacy of your personal data and your mobile number. It will not be shared with anyone without permission."
    

    ul.append(a,b,c,d,e,g,f,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,a1,a2,a3,a4,a5)
    box.append(h3_1 , ul)
}

function showdiv2(){
    let box = document.querySelector("#box2");
    box.innerHTML = null;

    let h4_1 = document.createElement("h2");
    h4_1.innerText ="MY PROFILE";
    h4_1.setAttribute("class", "type03")

    let div1_1 = document.createElement("div");
    div1_1.setAttribute("id" ,"divmain")


    let divinput = document.createElement("div");
    divinput.style.display = "flex";
    let h4_2 = document.createElement("h4");
    h4_2.innerText="Mobile No"
    let input = document.createElement("input");
    input.type = "Number";
    input.setAttribute("class" , "input1")

    let divsub = document.createElement("div");

    let submit = document.createElement("input");
    submit.type = "submit"
    submit.setAttribute("id" , "submit")

    divsub.append(submit)
    divinput.append(h4_2 , input)
    div1_1.append(divinput , divsub)

    box.append(h4_1 , div1_1)


}

function showdiv21(){
    let box = document.querySelector("#box2");
    box.innerHTML = null;

    let h4_1 = document.createElement("h2");
    h4_1.innerText ="MY PROFILE";
    h4_1.setAttribute("class", "type03")

    let div1_1 = document.createElement("div");
    div1_1.setAttribute("id" ,"divmain")


    let divinput = document.createElement("div");
    divinput.style.display = "flex";
    let h4_2 = document.createElement("h4");
    h4_2.innerText="Mobile No"
    let input = document.createElement("input");
    input.type = "Number";
    input.setAttribute("class" , "input1")

    let divsub = document.createElement("div");

    let submit = document.createElement("input");
    submit.type = "submit"
    submit.setAttribute("id" , "submit")

    divsub.append(submit)
    divinput.append(h4_2 , input)
    div1_1.append(divinput , divsub)

    box.append(h4_1 , div1_1)


}

document.querySelector("#divAboutRewards").addEventListener("click",showdiv1)
document.querySelector("#divBenefitsPrivileges").addEventListener("click" , showdiv4)
document.querySelector("#divMyRewards").addEventListener("click",showdiv21)
document.querySelector("#divmyAboutDetails").addEventListener("click" , showdiv3)






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








