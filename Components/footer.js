
function footerpage(){
    return `
   <div class="row">

    <div class="download-app">
        <h4 style="
                padding-left: 14px;
            ">Download The App </h4>

        <p style="margin:10px">
            <a href="https://play.google.com/store/apps/details?id=com.godrej.naturesbasketltd" target="_blank">
                <img id="ctl00_img_android" src="https://cdn.worldvectorlogo.com/logos/get-it-on-google-play.svg"
                    style="width:170px;border-width:0px;">
            </a>
        </p>
        <p style="margin:10px">
            <a href="https://apps.apple.com/in/app/natures-basket/id1013402486" target="_blank">
                <img id="ctl00_img_apple" src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg"
                    style="width:170px;border-width:0px;">
            </a>
        </p>
    </div>

    <div class="col-5-1">
        <nav class="row footernav1">
            <ul class="col-4">
                <li>
                    <h4> <a href="/HTML/AboutUsDetail.aspx">ABOUT US </a></h4>
                </li>
                <li><a href="/HTML/AboutUs.aspx">About Us</a></li>
                <li><a href="/HTML/OurVision.aspx">Our Vision &amp; Purpose</a></li>
                <li><a href="/HTML/QualityStandards.aspx">Quality standards</a></li>
                <li><a href="/HTML/Awards.aspx">Awards</a></li>
                <li><a href="/HTML/FAQ.aspx">FAQs</a></li>

                <li class="dropdown">
                    <div id="ctl00_headerTimeSlotdiv">
                        <div id="headerTimeSlot">
                            <span id="timeSlot" class="timeSlot headerspantext">Available Delivery Slot</span>
                            <ul id="timeSlotList">
                                <div class="location">
                                    Location:
                                    <span id="ctl00_locCity">Mumbai</span>
                                </div>
                                <div id="ctl00_chkSlots">
                                    <li id="1">08.00 AM - 10.00 AM</li>
                                    <li id="4">10.00 AM - 12.00 PM</li>
                                    <li id="5">12.00 PM - 02.00 PM</li>
                                    <li id="3">02.00 PM - 04.00 PM</li>
                                    <li id="6">04.00 PM - 06.00 PM</li>
                                    <li id="7">06.00 PM - 08.00 PM</li>
                                    <li id="9">08.00 PM - 10.00 PM</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><a href="/VendorConnect.aspx"
                        style="padding: -40px;padding: 0px 20px;margin: -19px;padding-right: -109px;padding-bottom: 36px;">Vendor
                        Connect</a></li>
                <li>
                    <h4>CAREERS</h4>
                </li>
                <li><a href="/HTML/Careers.aspx"> Work with us</a></li>
            </ul>
            <ul class="col-4">
                <li>
                    <h4>NEWS &amp; MEDIA</h4>
                </li>
                <li><a href="/HTML/PressRelease.aspx">Press releases</a> </li>
                <li> <a href="/Newsletter-September2016/Home">Newsletters</a></li>
                <li><a href="/HTML/Events.aspx"> Events</a></li>
                <li> <a href="/HTML/PhotoGallery.aspx?v=5">Photo gallery</a> </li>
                <li> <a href="/Recipes.aspx">Recipes</a> </li>
                <li> <a href="/NBTV">NBTV </a> </li>
                <li> <a onclick="CheckVirtualStore();">Our Virtual Store </a> </li>
            </ul>
            <ul class="col-4">
                <li>
                    <h4>OUR POLICIES</h4>
                </li>
                <li><a href="/HTML/PrivacyPolicy.aspx">Privacy policy</a></li>
                <li><a href="/HTML/PaymentPolicy.aspx"> Payment policy</a></li>
                <li><a href="/HTML/Disclaimer.aspx"> Disclaimer</a></li>
                <li><a href="/HTML/StatutoryCompliance.aspx"> Statutory Compliance</a></li>
                <li><a href="/HTML/Data_Protection_Policy.pdf">Data Protection Policy</a></li>
                <li><a href="/HTML/Grievance_Officer.pdf">Grievance Officer</a></li>
                <li><a href="/HTML/Information_Security_Policy.pdf">Information Security Policy</a></li>
            </ul>
        </nav>
    </div>
    <div class="col-3-5 newsletter" style="text-transform:none;"> <span>SIGN UP TO STAY UPDATED</span> <input
            name="ctl00$txtNewletter" type="text" id="ctl00_txtNewletter" placeholder="ENTER YOUR EMAIL ADDRESS">
        <div style="height:1px;margin-left:1px;margin-top:1px;">
            <span id="ctl00_rfvNewletter" class="ErrorTextMsg"
                style="color:Red;color:hsl(0, 100%, 50%);display:none;font-size:11px;height:1px;width:100%;">Please
                enter email ID</span>
            <span id="ctl00_rgvNewsletter" class="ErrorTextMsg"
                style="color:Red;color:hsl(0, 100%, 50%);display:none;font-size:11px;height:1px;width:100%;">Enter
                valid email address.</span>
        </div>

        <input
            onclick="if (typeof(Page_ClientValidate) == 'function') Page_ClientValidate('ContinueNewsLetter'); __doPostBack('ctl00$btnNewletter','')"
            name="ctl00$btnNewletter" type="button" id="ctl00_btnNewletter" value="SUBSCRIBE"
            validationgroup="ContinueNewsLetter">
    </div>

</div>


<div class="row btmfootersocialicons">


    <div class="col-4-2 paymentmode">
        <div class="paymentmethodbg">Payment Method <img
                src="https://www.naturesbasket.co.in/Images/icons-card-payments-mode.png"></div>
    </div>

    <div class="col-3-9 socialiconbtm">
        <ul>
            <li>Keep in Touch</li>
            <li class="fbbtm"><a style="text-decoration: none" target="_blank"
                    href="https://www.facebook.com/NaturesBasket">
                    <i class="fa-brands fa-facebook-f"></i>
                </a></li>
            <li class="tweeterbtm"><a style="text-decoration: none" target="_blank"
                    href="https://twitter.com/NaturesBasket">
                    <i class="fa-brands fa-twitter"></i>
                </a></li>


            <li class="youtubebtm">
                <a style="text-decoration: none" target="_blank"
                    href="https://www.youtube.com/user/GodrejNaturesBasket">
                    <i class="fa-brands fa-youtube"></i>
                </a>
            </li>
            <li class="instagranbtm">
                <a style="text-decoration: none" target="_blank" href="https://instagram.com/NaturesBasket/">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </li>
            <li class="pintbtm">
                <a style="text-decoration: none" target="_blank" href="https://in.pinterest.com/naturesbasket">
                    <i class="fa-brands fa-pinterest"></i>
                </a>
            </li>

        </ul>
    </div>
</div>



<div id="ctl00_divOwnLeftFrame" class="category-footer" style="display: block;">
    <section class="container">
        <div class="col">
            <ul>
                <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Express-Delivery/17_0_0"> Fresh
                        &amp; Fast </a></li>
            </ul>
            <ul>
                <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Gift-Hampers/1_0_0"> Gift
                        Hampers</a>
                    <ul>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Gift-Hampers/Birthday-Anniversary-Gift-Hampers/1_0_0">
                                Birthday &amp; Anniversary Gift Hampers</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Gift-Hampers/World-Cuisine-Gift-Hampers/2_0_0">
                                World Cuisine Gift Hampers</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Gift-Hampers/Organic-Health-Gift-Hampers/4_0_0">
                                Organic &amp; Health Gift Hampers</a> </li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Gift-Hampers/Coffee-Tea-Gift-Hampers/5_0_0">
                                Coffee &amp; Tea Gift Hampers</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Gift-Hampers/Get-Well-Soon-Gift-Hampers/6_0_0">
                                Get Well Soon Gift Hampers</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Gift-Hampers/Cheese-Meat-Platters/7_0_0">
                                Cheese &amp; Meat Platters</a></li>
                    </ul>
                </li>
            </ul>
            <!--Gift Hamper end-->
            <ul>
                <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Fruits---Vegetables/5_0_0">
                        Fruits &amp; Vegetables</a>
                    <ul>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Fruits-Vegetables/Vegetables/34_0_0">
                                Vegetables</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Fruits-Vegetables/Exotic-Vegetables/35_0_0">
                                Exotic Vegetables</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Fruits-Vegetables/Fruits/32_0_0">
                                Fruits</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Fruits-Vegetables/Organic-Fruits-Vegetables/37_0_0">
                                Organic Fruits &amp; Vegetables</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Fruits-Vegetables/Exotic-Fruits/33_0_0">
                                Exotic Fruits</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Fruits-Vegetables/Canned-Frozen/38_0_0">
                                Canned &amp; Frozen</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Fruits-Vegetables/Cold-Pressed-Fresh-Juices/39_0_0">
                                Cold - Pressed Fresh Juices</a></li>
                    </ul>
                </li>
            </ul>
            <!--Fruits Vegetables end-->
            <ul>
                <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Delicatessen-Cheese/2_0_0">
                        Delicatessen &amp; Cheese</a>
                    <ul>
                        <li><a class=""
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Delicatessen/Fresh-Snacks-Party-Food/11_0_0">
                                Fresh Snacks &amp; Party Food</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Delicatessen/Antipasti/13_0_0">
                                Antipasti</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Delicatessen/Gourmet-Cheese-Shop/12_0_0">
                                Gourmet Cheese Shop</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Delicatessen/Cold-Cuts-Sausages/14_0_0">
                                Cold Cuts &amp; Sausages</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Cheese-Dairy/Cheese-Spread-Slices-Others/48_0_0">
                                Cheese Spread, Slices &amp; Others</a></li>
                    </ul>
                </li>
            </ul>
            <!--Delicatessenend-->
        </div>
        <div class="col">
            <ul>
                <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/-International-Cuisine/4_0_0">
                        International Cuisine</a>
                    <ul>
                        <li><a class=""
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/-International-Cuisine/Italian-Continental-/20_0_0">
                                Italian &amp; Continental</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/-International-Cuisine/Middle-Eastern/23_0_0">
                                Middle-Eastern</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/-International-Cuisine/Condiments-/25_0_0">
                                Condiments</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/-International-Cuisine/Flours-Grains-More-/29_0_0">
                                Flours, Grains &amp; More</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/-International-Cuisine/Mexican-/21_0_0">
                                Mexican</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/-International-Cuisine/Salad-Dressing-/24_0_0">
                                Salad Dressing</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/-International-Cuisine/Vinegars-Mustards-/27_0_0">
                                Vinegars &amp; Mustards</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/-International-Cuisine/Salt-Sugar-Substitutes-/30_0_0">
                                Salt, Sugar &amp; Substitutes</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/-International-Cuisine/Pan-Asian/22_0_0">
                                Pan-Asian</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/-International-Cuisine/Baking-Ingredients-/28_0_0">
                                Baking Ingredients</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/-International-Cuisine;/Oils-/26_0_0">
                                Oils</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/-International-Cuisine/Soups-/31_0_0">
                                Soups</a></li>
                    </ul>
                </li>
            </ul>
            <!--InternationalCuisineend-->
            <ul>
                <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Health/3_0_0">Health</a>
                    <ul>
                        <li><a class=""
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Health/Weight-Management-Foods/15_0_0">
                                Weight Management Foods</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Health/Heart-Healthy-Foods/17_0_0">
                                Heart - Healthy Foods</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Health/Wellness-Immunity-Boosters/19_0_0">
                                Wellness &amp; Immunity Boosters</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Health/Diabetic-Friendly-Foods/16_0_0">
                                Diabetic - Friendly Foods</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Health/Problem-Solution-Foods/18_0_0">
                                Problem Solution Foods</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Health/Organic/100_0_0">Organic</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <!--Healthend-->
        </div>
        <div class="col">
            <!--IndianGroceryend-->
            <ul>
                <li><a
                        href="https://www.naturesbasket.co.in/Online-grocery-shopping/Confectionary-Patisserie/6_0_0">
                        Confectionary &amp; Patisserie</a>
                    <ul>
                        <li><a class=""
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Confectionary-Desserts/Chocolates-/42_0_0">
                                Chocolates</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Confectionary-Desserts/Dessert-Mixes-Sauces-Toppings/44_0_0">
                                Dessert Mixes, Sauces &amp; Toppings</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Confectionary-Desserts/Ice-Creams-Desserts-/46_0_0">
                                Ice Creams &amp; Desserts</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Confectionary-Desserts/Confectionery-/43_0_0">
                                Confectionery</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Confectionary-Desserts/Baking-Ingredients/45_0_0">
                                Baking Ingredients</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Bakery-Patisserie/Patisserie/63_0_0">
                                Patisserie</a></li>
                    </ul>
                </li>
            </ul>
            <!--Cheese&amp;Dairyend-->
            <ul>
                <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Meats-Seafood-and-Eggs/8_0_0">
                        Meats, Seafood and Eggs</a>
                    <ul>
                        <li><a class=""
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Eggs-Meats/Fresh-Meats-Seafood/51_0_0">
                                Fresh Meats &amp; Seafood</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Eggs-Meats/Cold-Cuts-Sausages/53_0_0">
                                Cold Cuts &amp; Sausages</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Eggs-Meats/-Packaged-Seafood-Meats/55_0_0">
                                Packaged Sea food &amp; Meats</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Eggs-Meats/Eggs/52_0_0">
                                Eggs</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Eggs-Meats/Frozen/54_0_0">
                                Frozen</a></li>
                    </ul>
                </li>
            </ul>
            <!--Meats, Seafood and Eggs end-->
        </div>
        <div class="col">
            <!--Bakery&amp;Patisserieend-->
            <ul>
                <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Breakfast-Dairy/11_0_0">
                        Breakfast &amp; Dairy</a>
                    <ul>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Breakfast-/Cereals-Bars-Others/64_0_0">
                                Cereals, Bars &amp; Others</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Breakfast-/Jams-Preserves-Conserves/66_0_0">
                                Jams, Preserves &amp; Conserves</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Breakfast-/Honey/67_0_0">
                                Honey</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Breakfast-/Indian-Breakfast-Favourites/65_0_0">
                                Indian Breakfast Favourites</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Breakfast-/Spreads/68_0_0">
                                Spreads</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Cheese-Dairy/Milk-Yogurt-Other-Dairy-Drinks/49_0_0">
                                Milk, Yogurt &amp; Other Dairy Drinks</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Cheese-Dairy/Butters-Margarines/50_0_0">
                                Butters &amp; Margarines</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Bakery-Patisserie/Bakery/62_0_0">
                                Bakery</a></li>
                    </ul>
                </li>
            </ul>
            <!--Beveragesend-->
            <ul>
                <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Instant-Meal-Aids/14_0_0">
                        Instant Meal &amp; Aids</a>
                    <ul>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Ready-To-Eat-Cook/Ready-to-Cook/82_0_0">
                                Ready to Cook</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Ready-To-Eat-Cook/Ready-to-Eat/83_0_0">
                                Ready to Eat</a></li>
                        <li><a class=""
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Cooking-Aids-Books/Accessories/84_0_0">
                                Accessories</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Cooking-Aids-Books/Books/85_0_0">
                                Books</a></li>
                    </ul>
                </li>
            </ul>
            <!--ReadyToEat &amp; Cookend-->
        </div>
        <div class="col">
            <!--Bakery&amp;Patisserieend-->
            <ul>
                <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Snacks-Beverages/9_0_0"> Snacks
                        &amp; Beverages</a>
                    <ul>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Snacks-Appetisers/Cookies-Crackers/56_0_0">
                                Cookies &amp; Crackers</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Snacks-Appetisers/Frozen-Snacks/58_0_0">
                                Frozen Snacks</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Snacks-Appetisers/Antipasti/60_0_0">
                                Antipasti</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Snacks-Appetisers/Dry-Snacks/57_0_0">
                                Dry Snacks</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Snacks-Appetisers/Fresh-Snacks-Party-Food/59_0_0">
                                Fresh Snacks &amp; Party Food</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Snacks-Appetisers/Relishes-Pickles/61_0_0">
                                Relishes &amp; Pickles</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Beverages/Carbonated-Drinks/74_0_0">
                                Carbonated Drinks</a></li>
                        <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Beverages/Teas/77_0_0">
                                Teas</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Beverages/Concentrate/80_0_0">
                                Concentrate</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Beverages/Energy-Drinks-Milk-Additives/81_0_0">
                                Energy Drinks &amp; Milk Additives</a></li>
                        <li><a class=""
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Beverages/Juice/75_0_0">
                                Juice</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Beverages/Coffee/78_0_0">
                                Coffee</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Beverages/Dairy-Drinks/76_0_0">
                                Dairy Drinks</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Beverages/Water/79_0_0">
                                Water</a></li>
                    </ul>
                </li>
            </ul>
            <!--Beveragesend-->
            <ul>
                <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Indian-Grocery/12_0_0"> Indian
                        Grocery</a>
                    <ul>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Indian-Grocery/Flours-Grains-More-/69_0_0">
                                Flours, Grains &amp; More</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Indian-Grocery/-Cooking-Pastes-Sauces/72_0_0">
                                Cooking Pastes &amp; Sauces</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Indian-Grocery/Cooking-Spices-Powders-/70_0_0">
                                Cooking Spices &amp; Powders</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Indian-Grocery/Salt-Sugar-Substitutes-/73_0_0">
                                Salt, Sugar &amp; Substitutes</a></li>
                        <li><a
                                href="https://www.naturesbasket.co.in/Online-grocery-shopping/Indian-Grocery/Oils-/71_0_0">
                                Oils</a></li>
                    </ul>
                </li>
            </ul>
            <!--ReadyToEat &amp; Cookend-->
        </div>
    </section>
</div>



<section class="fluidcontainer footerbottom">
    <div class="container">
        <ul>
            <li> <span class="coprightsymbol">©</span> 2020 Natures Basket Limited. &nbsp;All rights reserved. </li>
            <li>|</li>
            <li><a href="/HTML/PrivacyPolicy.aspx"> Privacy Policy </a></li>
            <li>|</li>
            <li><a href="/HTML/TermOfUse.aspx">Terms of Use</a></li>
            <li>|</li>
            <li>Home Delivery Number - 8880077745</li>
            <li>|</li>
            <li><a target="_blank" href="/HTML/SiteMap.aspx">Site Map</a></li>
            <li>|</li>
            <li><a id="ctl00_ancMobilesite" target="_blank"
                    href="javascript:__doPostBack('ctl00$ancMobilesite','')">Mobile Site</a></li>
            <li>|</li>
            <li>FSSAI License Number - 11519002000496</li>
        </ul>
    </div>

</section>`;
}


export {footerpage}

