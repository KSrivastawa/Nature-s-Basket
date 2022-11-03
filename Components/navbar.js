function login_navbar(){

    return `
    <div id="export_login">

    <!-- otp -->

    <div id="main_otp_login">
        <button class="exit">X</button>
        <div>
            <i class="fa-light fa-mobile-notch"></i>
            <input type="number" placeholder="Mobile No." class="mobile" id="mob">

            <button id="continue">Continue</button>
        </div>
     </div>   



      <!-- reg_form   -->

      <div id="details">
        <button class="exit">X</button>

        <div id="fill_det">

            <input type="number" placeholder="Enter OTP" id="OTP">

            <div class="adjust_icon">
                <img
                    src="https://tse1.mm.bing.net/th/id/OIP.0ljn5JgC6Yz7CSomAmAoFwHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7">
                <input type="email" placeholder="Email Address" id="email">
            </div>

            <div class="adjust_icon">
                <img
                    src="https://tse3.mm.bing.net/th/id/OIP.dPG1nayAMwuAMGz_DpKNzQHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7">
                <input type="password" placeholder="Set Password" id="pass">
            </div>

            <button id="register">Register</button>


        </div>
    </div>



  <!-- login_form -->


  <div class="login_form">
    <button class="exit">X</button>

    <div id="fill_det">

     
        <div class="adjust_icon">
            <img
                src="https://tse1.mm.bing.net/th/id/OIP.0ljn5JgC6Yz7CSomAmAoFwHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7">
            <input type="email" placeholder="Email Address"  id="e_email">
        </div>

        <div class="adjust_icon">
            <img
                src="https://tse3.mm.bing.net/th/id/OIP.dPG1nayAMwuAMGz_DpKNzQHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7">
            <input type="password" placeholder="Set Password"  id="e_pass" >
        </div>

        <button id="login">Login</button>

        
        <p id="LVO">Login Via OTP</p>

    

    </div>

    <p style="color: rgb(255, 0, 0); font-size: 20px;margin-left: 58%;position: relative; bottom: 20px;">Forgot password?</p>



</div>

   </div>





  <!-- after login  -->

  <div id="container">
    <div id="logo"><a href="index.html" ><img src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2"> </a> </div>

    <div id="contents">
        <div class="content_div">
            <div>
                <p>Online Slots Availability</p>
            </div>
            <div>
                <p>Fresh & Fast</p>
            </div>
            <div>
                <p>Store Locator</p>
            </div>
            <div>
                <p>Contact Us</p>
            </div>
            <div id="mumbai"><img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzY7QDEqCDDmwhwQBBuDRq54FZt2CI5L7lQ&usqp=CAU">
                <p>Mumbai</p>
            </div>
            <div>
                <p>Enter Pincode</p>
            </div>
        </div>


        <input type="text" placeholder="Start Shopping" id="querry">
        <img src="https://www.naturesbasket.co.in/Images/search-button.jpg">
        <div id="append"></div>

    </div>



    <div id="login_signin">
        <div>
           <a href="#" id="anc_log_one"> <p id="log_one">Login</p></a>
        </div>
        <div id="reg_reg">
           <a href="#" id="anc_reg_reg"> <p>Register</p></a>
        </div>
        <div><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgopUp7Ps14RJZAAEi0sHR5nOHSFUQZGRSqA&usqp=CAU">
        </div>
        <div>
        <a href="cart.html" ><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEGHlV4mkvg3klGY2BYnI5m0NKC8g9sUVpw&usqp=CAU">
                </a>
        </div>
    </div>


</div>



</div>



</nav>
<br> `
}


export default login_navbar