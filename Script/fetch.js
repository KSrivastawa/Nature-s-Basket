

let appendTobody = (value, container) => {
  container.innerHTML = null;
  console.log("value to fetch", value);
  for (let i = 0; i < value.length; i++) {
   
    let div = document.createElement("div");
    div.setAttribute("class", "whatTren_cat");

    let img = document.createElement("img");
    img.setAttribute("id", "trend_img");
    img.src = value[i].url;

    let p = document.createElement("p");
    p.setAttribute("class", "time_tren");
    p.innerHTML =  value[i].time;

    let p1 = document.createElement("p");
    p1.innerHTML =  value[i].name;
    p1.setAttribute("class", "name_tren");

    let p2 = document.createElement("p");
    p2.innerHTML =  value[i].quality;

    let mrp = document.createElement("div");
    mrp.setAttribute("class", "mrpvalues");

    let Mrp = document.createElement("p");
    Mrp.innerHTML = "₹" +  value[i].value;
    let img_cart = document.createElement("img");
    img_cart.setAttribute("id", "cart_img");
    img_cart.src = "https://www.naturesbasket.co.in/Images/CartAddBtn.PNG";

    mrp.append(Mrp, img_cart);

    div.append(img, p, p1, p2, mrp);

    container.append(div);
  }
};



let appendtobody_2=()=>{

}
export { appendTobody, appendtobody_2 };
