import { appendTobody, appendtobody_2 } from "./fetch.js";

let rated_shop = [
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/93c009fd-e44d-444c-acd4-ed385412bb1b_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "ZORABIAN CHICKEN HALF PRE CUT WT SKIN 500G",
    quality: "1Pc",
    value: "175",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/645fe7af-213e-49d1-b6cd-47c0e897184f_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "BIG SAMS FROZEN PRAWNS SMALL 250G",
    quality: "1Pc",
    value: "275",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/92a45fb4-6f15-4bda-871c-6400c9593c60_425x425.JPG",
    time: "DELIVERY IN 90 MINUTES",
    name: "CAMBAY TIGER BASA FILLET 1kg",
    quality: "1Pc",
    value: "649",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ba106ae5-2c75-4db5-85e4-093eee083edd_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "Cambay Tiger Deveined & Cleaned Medium Prawns 600g",
    quality: "1Pc",
    value: "650",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/006bd1f0-6adb-4019-b406-f46bd9ec7db1_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "EPIGAMIA STRAWBERRY YOGHURT 90g",
    quality: "1Pc",
    value: "50",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8929a5dc-34f7-4b5a-8334-6ba43e695d1a_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "Cambay Tiger Norwegian Salmon Double Chunk skin off - 250gms",
    quality: "1Pc",
    value: "1165",
    prev_mrp: "1265",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ddd979a3-7393-42e1-b9e0-60c4ee237fb4_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "CAMBAY TIGER PRE LEMON PEPPER BASA 200G",
    quality: "1Pc",
    value: "235",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/aa0bef7c-e6b8-41ee-9459-979e2411c063_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "KAWAN FZN FLAKEY PARATHA 325g",
    quality: "1Pc",
    value: "110",
    prev_mrp: "125",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5443c200-79a2-4645-bf13-6b64eeb3daa5_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "SUMERU PORK BACK BACON 500g",
    quality: "1Pc",
    value: "621",
    prev_mrp: "",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1335857_1_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "EPIGAMIA MISHTI DOI 85GM",
    quality: "1Pc",
    value: "22.50",
    prev_mrp: "",
  },
];

// let Q_rate = document.querySelector("#curted_for");
// function curated_foru() {
//   appendtobody_2(rated_shop, Q_rate);
// }

// //curated_foru();

let slideShow = [
  {
    slide:
      "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg",
  },
  {
    slide:
      "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg",
  },
  {
    slide:
      "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg",
  },
];

let slide_bar_container_2 = document.getElementById(
  "Slide_bar_container_second"
);

slideShow.map(function (e) {
  let div = document.createElement("div");
  div.setAttribute("class", "slider_wrapnew xFADE");

  let img = document.createElement("img");
  img.setAttribute("class", "Slide_img");

  img.src = e.slide;
  div.append(img);
  slide_bar_container_2.append(div);
});

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider_wrapnew");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000);
}

let trend = document.querySelector("#whats_trending");

let treand = [
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "HA TAPIOCA FLOUR 400g ",
    quantity: "1Pc",
    value: "MRP 210",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/dbffcc93-9bce-442f-837f-d5d5f073c0c0_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "HAAGEN DAZS MANGO RASPBERRY 473Ml",
    quantity: "1Pc",
    value: "MRP 702",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "HA TAPIOCA FLOUR 400g ",
    quantity: "1Pc",
    value: "MRP 210",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/dbffcc93-9bce-442f-837f-d5d5f073c0c0_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "HAAGEN DAZS MANGO RASPBERRY 473Ml",
    quantity: "1Pc",
    value: "MRP 702",
  },
];

treand.map(function (e) {
  let div = document.createElement("div");
  div.setAttribute("class", "whatTren_cat");

  let img = document.createElement("img");
  img.setAttribute("id", "trend_img");
  img.src = e.url;

  let p = document.createElement("p");
  p.setAttribute("class", "time_tren");
  p.innerHTML = e.time;

  let p1 = document.createElement("p");
  p1.innerHTML = e.name;
  p1.setAttribute("class", "name_tren");

  let p2 = document.createElement("p");
  p2.innerHTML = e.quantity;

  let mrp = document.createElement("div");
  mrp.setAttribute("class", "mrpvalues");

  let Mrp = document.createElement("p");
  Mrp.innerHTML = "₹" + e.value;
  let img_cart = document.createElement("img");
  img_cart.setAttribute("id", "cart_img");
  img_cart.src = "https://www.naturesbasket.co.in/Images/CartAddBtn.PNG";

  mrp.append(Mrp, img_cart);

  div.append(img, p, p1, p2, mrp);

  trend.append(div);
});

//discover
let container = document.querySelector("#discover_more_container");

let offer = [
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0cd9b895-a680-4248-baf6-15b1bd70aaf9_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "KEGGS ORGANIC EGGS PACK OF6TH",
    quality: "1Pc",
    value: "115",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e54db6d1-a329-430c-86ff-20cdc2dd6436_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "BOBS RED MILL ORGNC COCONUT FLOUR 453G",
    quality: "1Pc",
    value: "693",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/37b77ff1-ff4e-4385-870e-4e4d4a563e13_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "FAZLANI FOODS DAL TADKA 250 GMS",
    quality: "1Pc",
    value: "96",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/acb7c92a-bc7c-4f7c-924b-0db4ca51e1de_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "IFB ROYAL PRAWNS MEDIUM 200G",
    quality: "1Pc",
    value: "105",
  },
];

offer.map(function (e) {
  let div = document.createElement("div");
  div.setAttribute("class", "whatTren_cat ");

  let img = document.createElement("img");
  img.setAttribute("id", "trend_img");
  img.src = e.url;

  let p = document.createElement("p");
  p.setAttribute("class", "time_tren");
  p.innerHTML = e.time;

  let p1 = document.createElement("p");
  p1.innerHTML = e.name;
  p1.setAttribute("class", "name_tren");

  let p2 = document.createElement("p");
  p2.innerHTML = e.quantity;

  let mrp = document.createElement("div");
  mrp.setAttribute("class", "mrpvalues");

  let Mrp = document.createElement("p");
  Mrp.innerHTML = "₹" + e.value;
  let img_cart = document.createElement("img");
  img_cart.setAttribute("id", "cart_img");
  img_cart.src = "https://www.naturesbasket.co.in/Images/CartAddBtn.PNG";

  mrp.append(Mrp, img_cart);

  div.append(img, p, p1, p2, mrp);

  container.append(div);
});

let organic = [
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300491_1_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "CONCISOUS FOOD RAW SUGAR 500G",
    quality: "1Pc",
    value: "96",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9bb6d11a-25de-420e-a6d8-c4d960f8fd30_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "HA ORGANIC SUGAR 500G",
    quality: "1Pc",
    value: "99",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1357171_1_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "ORGANIC MAIDA - Conscious Food",
    quality: "1Pc",
    value: "91",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b6be1126-0fba-41aa-9644-159a48b0076f_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "Organic Wheat Flour - Healthy Alternatives",
    quality: "1Pc",
    value: "75",
  },
];

let healthy = [
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9ea315fa-fcd1-4d3b-a968-17a78bfafc5b_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "HA SPROUTED QUINOA FLOUR 400G",
    quality: "1Pc",
    value: "600",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/335e1b40-3a56-4e19-9f6c-010887d4dd55_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "HA SPROUTED QUINOA FLOUR 400G",
    quality: "1Pc",
    value: "250",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1f4696d3-e753-463e-a87c-1457b2e2f242_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "Organic Flax Seeds - Healthy Alternatives",
    quality: "1Pc",
    value: "75",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9ea315fa-fcd1-4d3b-a968-17a78bfafc5b_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "HA SPROUTED QUINOA FLOUR 400G",
    quality: "1Pc",
    value: "600",
  },
];

let gift = [
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/335e1b40-3a56-4e19-9f6c-010887d4dd55_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "HA SPROUTED QUINOA FLOUR 400G",
    quality: "1Pc",
    value: "250",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1f4696d3-e753-463e-a87c-1457b2e2f242_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "Organic Flax Seeds - Healthy Alternatives",
    quality: "1Pc",
    value: "75",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9ea315fa-fcd1-4d3b-a968-17a78bfafc5b_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "HA SPROUTED QUINOA FLOUR 400G",
    quality: "1Pc",
    value: "600",
  },
  {
    url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9ea315fa-fcd1-4d3b-a968-17a78bfafc5b_425x425.jpg",
    time: "DELIVERY IN 90 MINUTES",
    name: "HA SPROUTED QUINOA FLOUR 400G",
    quality: "1Pc",
    value: "600",
  },
];

function show_discovered() {
  console.log(this.id);
  document.getElementById(this.id).className += "active";
  let element = document.querySelector("#discover_more");

  switch (this.id) {
    case "gifts":
      // document.getElementById(this.id).className += "active";

      appendTobody(gift, container);
      break;
    case "healthy":
      appendTobody(healthy, container);
      // document.getElementById(this.id).className += "active";
      break;
    case "organic":
      // document.getElementById(this.id).className += "active";
      appendTobody(organic, container);
      break;
    case "offer":
      // document.getElementById(this.id).className += "active";
      appendTobody(offer, container);
    default:
      break;
  }
}

let discover = document.querySelector("#discover_more").children;

for (let e1 of discover) {
  e1.addEventListener("click", show_discovered);
}

//shop by world brands

let brand = [
  { brand_: "https://d1z88p83zuviay.cloudfront.net/Images/ceres.jpg" },
  { brand_: "https://d1z88p83zuviay.cloudfront.net/Images/silk.jpg" },
  { brand_: "https://d1z88p83zuviay.cloudfront.net/Images/lindt.jpg" },
  { brand_: "https://d1z88p83zuviay.cloudfront.net/Images/davidoff-cafe.jpg" },
  { brand_: "https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg" },
  { brand_: "https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg" },
  { brand_: "https://d1z88p83zuviay.cloudfront.net/Images/barilla.jpg" },
  { brand_: "https://d1z88p83zuviay.cloudfront.net/Images/real-thai.jpg" },
  { brand_: "https://d1z88p83zuviay.cloudfront.net/Images/cambay-tiger.jpg" },
  { brand_: "https://d1z88p83zuviay.cloudfront.net/Images/healthy.jpg" },
];

// let world_brand = document.querySelector(".carousel-cell");

// brand.map(function (e) {
//   let img = document.createElement("img");
//   img.src = e.brand_;

//   world_brand.append(img);
// });

// let Changename=(id)=>{
//   console.log("Hello")
//   if(id==='offer'){
//     id.classList.add("active");
//   }else if(id==='organic' && id==='healthy' && id==='gifts'){
//     id.classList.remove("active");

//   }
// }
