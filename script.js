function productPage(prop) {
  window.open(`${prop}`, "_self");
}

// !kateqoriya linklerinin calismasi ucun

const categoryItem = document.getElementsByClassName("categoryItem");
for (let i = 0; i < categoryItem.length; i++) {
  categoryItem[i]?.addEventListener("click", () => {
    categoryItem[i].classList.add("active");
    for (let u = 0; u < categoryItem.length; u++) {
      if (categoryItem[u] !== categoryItem[i]) {
        categoryItem[u].classList.remove("active");
      }
    }
  });
}

// ! kateqoriya linklerinin tabda calismasi ucun

const mobileTabMenu = document.getElementsByClassName("tabMenu");
const mobileActive = document.getElementsByClassName("achtive");


for(let i = 0; i < mobileActive.length; i++){
  mobileActive[i].addEventListener("click", () => {
    mobileActive[i].classList.add("active");
    for(let u = 0; u < mobileActive.length; u++){
      if(mobileActive[u] !== mobileActive[i]){
        mobileActive[u].classList.remove("active");

      }
    }
  })
}

// ? PUL VAHIDININ DEYISMESI UCUN

// ?const currencyMenu = document.getElementsByClassName("currencyMenu");

//! sebetin acilib baglanmasi ucun
const shoppingMenu = document.getElementsByClassName("shoppingMenu");
const cartOverlayContainer = document.getElementsByClassName(
  "cartOverlay-container"
);
const OverlayContainer = document.getElementsByClassName("overlay");

for (let i = 0; i < shoppingMenu.length; i++) {
  shoppingMenu[i].addEventListener("click", (e) => {
    e.stopPropagation();
    OverlayContainer[i]?.classList.toggle("active");
    cartOverlayContainer[i]?.classList.toggle("active");

    currency[i].classList.remove("active");

    // console.log("okay");
  });

  // ! ERROR verir bu
  // sual isaresi yazmamisdim  ona gore error verirmis
  cartOverlayContainer[i]?.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

const changeColor = document.getElementsByClassName("sizes");
for (let i = 0; i < changeColor.length; i++) {
  changeColor[i].addEventListener("click", () => {
    changeColor[i]?.classList.add("active");
    for (let u = 0; u < changeColor.length; u++) {
      if (changeColor[u] !== changeColor[i]) {
        changeColor[u].classList.remove("active");
      }
    }
    // console.log("isleyir");
  });
}

// renglerin deyismesi ucun
const changeSizes = document.getElementsByClassName("kholor");

for (let i = 0; i < changeSizes.length; i++) {
  changeSizes[i].addEventListener("click", () => {
    console.log("opba");
    changeSizes[i].classList.add("active");
    for (let u = 0; u < changeSizes.length; u++) {
      if (changeSizes[u] !== changeSizes[i]) {
        changeSizes[u].classList.remove("active");
      }
    }
  });
}

// pul bolmesinin acilmasi
const currencyMenu = document.getElementsByClassName("currencyMenu");
const currency = document.getElementsByClassName("currency");

for (let i = 0; i < currencyMenu.length; i++) {
  currencyMenu[i].addEventListener("click", (e) => {
    e.stopPropagation();
    currency[i].classList.toggle("active");
    OverlayContainer[i]?.classList.remove("active");
    cartOverlayContainer[i]?.classList.remove("active");
    // console.log("isledi");
  });
}

// pula vuranda slice olub evroya kecmesi ucun

const money = document.getElementsByClassName("money");
for (let i = 0; i < money.length; i++) {
  money[i]?.addEventListener("click", () => {
    currencyMenu[0].innerHTML =
      money[i].innerText.slice(0, 1) +
      " " +
      '<i class="fa-solid fa-angle-down"></i>';
  });
}

//? sual for elave etmesen clickde gostermir clik olundugunu

window.addEventListener("click", () => {
  OverlayContainer[0]?.classList.remove("active");
  cartOverlayContainer[0]?.classList.remove("active");
  currency[0]?.classList.remove("active");
});

// artitma islemi
const threeCounter_ = document.getElementsByClassName("threeCounter_");

const threeCounterPlus = document.getElementsByClassName("threeCounterPlus");
const threeCounterMinus = document.getElementsByClassName("threeCounterMinus");
const propertiesColor = document.getElementsByClassName("propertiesColor");

for (let i = 0; i < threeCounterPlus.length; i++) {
  threeCounterPlus[i]?.addEventListener("click", () => {
    threeCounter_[i].innerHTML = Number(threeCounter_[i].innerHTML) + 1;
  });
}

for (let i = 0; i < threeCounterMinus.length; i++) {
  threeCounterMinus[i]?.addEventListener("click", () => {
    if (threeCounter_[i]?.innerHTML === "1") {
      propertiesColor[i].style.display = "none";
      
    } else  {
      threeCounter_[i].innerHTML = Number(threeCounter_[i].innerHTML) - 1;
    } 
  });
}

//divi silmek ucun



//planset modunda ikona vuranda acilib yigilmasi ucun
const bars = document.getElementsByClassName("fa-solid fa-bars");
const menuTab = document.getElementsByClassName("tabMenu");

bars[0].addEventListener("click", () => {
  menuTab[0].classList.toggle("active")
});

const data = `[
  {
      "_id": "6420768a2a731f7c8945285a",
      "title": "Nike Air Huarache Le",
      "brand": "Nike",
      "desc": "Great sneakers for everyday use!",
      "images": [
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087"
      ],
      "category": "clothes",
      "sizes": [
          "36",
          "38",
          "40",
          "42"
      ],
      "colors": [
          "beige"
      ],
      "price": 120,
      "createdAt": "2023-03-26T16:44:58.210Z",
      "updatedAt": "2023-03-26T16:44:58.210Z",
      "__v": 0,
      "inStock": true
  },
  {
      "_id": "642078502a731f7c8945285d",
      "title": "Canada Goose Jacket",
      "brand": "Canada Goose",
      "desc": "Awesome winter jacket!",
      "images": [
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
          "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
          "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png"
      ],
      "category": "clothes",
      "sizes": [
          "S",
          "M",
          "L",
          "XL"
      ],
      "colors": [
          "Navy",
          "Khaki",
          "Mustard"
      ],
      "price": 430,
      "createdAt": "2023-03-26T16:52:32.148Z",
      "updatedAt": "2023-03-26T16:52:32.148Z",
      "__v": 0,
      "inStock": true
  },
  {
      "_id": "642079812a731f7c89452860",
      "title": "PlayStation 5 512GB",
      "brand": "Sony",
      "desc": "A good gaming console",
      "images": [
          "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg"
      ],
      "category": "tech",
      "sizes": [],
      "colors": [],
      "price": 700,
      "createdAt": "2023-03-26T16:57:37.913Z",
      "updatedAt": "2023-03-26T16:57:37.913Z",
      "__v": 0,
      "inStock": false
  },
  {
      "_id": "64207abb2a731f7c89452863",
      "title": "Xbox Series S 512GB",
      "brand": "Microsoft",
      "desc": "A good gaming console",
      "images": [
          "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg"
      ],
      "category": "tech",
      "sizes": [],
      "colors": [],
      "price": 270,
      "createdAt": "2023-03-26T17:02:51.831Z",
      "updatedAt": "2023-03-26T17:02:51.831Z",
      "__v": 0,
      "inStock": true
  },
  {
      "_id": "64207d3062db63daebce78d7",
      "title": "iMac 2021 256GB",
      "brand": "Apple",
      "desc": "A great PC for your office or home",
      "images": [
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000"
      ],
      "category": "tech",
      "sizes": [],
      "colors": [],
      "price": 1400,
      "inStock": true,
      "createdAt": "2023-03-26T17:13:20.396Z",
      "updatedAt": "2023-03-26T17:13:20.396Z",
      "__v": 0
  },
  {
      "_id": "64207d9862db63daebce78da",
      "title": "iPhone 12 Pro 256GB",
      "brand": "Apple",
      "desc": "Still a great smartphone",
      "images": [
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000"
      ],
      "category": "tech",
      "sizes": [],
      "colors": [],
      "price": 600,
      "inStock": true,
      "createdAt": "2023-03-26T17:15:04.011Z",
      "updatedAt": "2023-03-26T17:15:04.011Z",
      "__v": 0
  },
  {
      "_id": "64207e1162db63daebce78dd",
      "title": "AirPods Pro",
      "brand": "Apple",
      "desc": "Great way to listen to music",
      "images": [
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000"
      ],
      "category": "tech",
      "sizes": [],
      "colors": [],
      "price": 150,
      "inStock": false,
      "createdAt": "2023-03-26T17:17:05.484Z",
      "updatedAt": "2023-03-26T17:17:05.484Z",
      "__v": 0
  },
  {
      "_id": "64207e5262db63daebce78e0",
      "title": "AirTag",
      "brand": "Apple",
      "desc": "Never lose your stuff again!",
      "images": [
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000"
      ],
      "category": "tech",
      "sizes": [],
      "colors": [],
      "price": 50,
      "inStock": true,
      "createdAt": "2023-03-26T17:18:10.992Z",
      "updatedAt": "2023-03-26T17:18:10.992Z",
      "__v": 0
  },
  {
      "_id": "6421764d73e987d7d72143e5",
      "title": "BMW X6",
      "brand": "BMW",
      "desc": "Cool car!",
      "images": [
          "https://hips.hearstapps.com/hmg-prod/images/p90495559-1677001917.jpg"
      ],
      "category": "car",
      "sizes": [],
      "colors": [],
      "price": 50000,
      "inStock": true,
      "createdAt": "2023-03-27T10:56:13.141Z",
      "updatedAt": "2023-03-27T10:56:13.141Z",
      "__v": 0
  },
  {
      "_id": "6421827b73e987d7d72143f1",
      "title": "BMW X5",
      "brand": "BMW",
      "desc": "Cool car!",
      "images": [
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcarleaseoffers-clo.com%2Fwp-content%2Fuploads%2F2018%2F02%2FCar-Lease-Offers-CLO-BMW-X6-2015-1280-22.jpg&f=1&nofb=1&ipt=4f5343ed36e5364fc45f9b233fd74c10c01b40f09469b4d348b7af1daf6cc0ab&ipo=images"
      ],
      "category": "car",
      "sizes": [],
      "colors": [],
      "price": 50000,
      "inStock": true,
      "createdAt": "2023-03-27T11:48:11.971Z",
      "updatedAt": "2023-03-27T11:48:11.971Z",
      "__v": 0
  },
  {
      "_id": "6421c44e95a6d4e1e38c30d6",
      "title": "Model X",
      "brand": "Tesla",
      "desc": "Cool car!",
      "images": [
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.marinoperformancemotors.com%2Fimagetag%2F13352%2F6%2Fl%2FUsed-2019-Tesla-Model-X-Performance.jpg&f=1&nofb=1&ipt=f3716013760118bf631053f2b65b09a44bd3b3b55254bf11a222c95b933204dc&ipo=images"
      ],
      "category": "car",
      "sizes": [],
      "colors": [],
      "price": 100000,
      "inStock": true,
      "createdAt": "2023-03-27T16:29:02.861Z",
      "updatedAt": "2023-03-27T16:29:02.861Z",
      "__v": 0
  },
  {
      "_id": "6422e3560f5f5aeeaecb3ede",
      "title": "Model Y",
      "brand": "Tesla",
      "desc": "Cool car!",
      "images": [
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.marinoperformancemotors.com%2Fimagetag%2F13352%2F6%2Fl%2FUsed-2019-Tesla-Model-X-Performance.jpg&f=1&nofb=1&ipt=f3716013760118bf631053f2b65b09a44bd3b3b55254bf11a222c95b933204dc&ipo=images"
      ],
      "category": "car",
      "sizes": [],
      "colors": [],
      "price": 100000,
      "inStock": true,
      "createdAt": "2023-03-28T12:53:42.951Z",
      "updatedAt": "2023-03-28T12:53:42.951Z",
      "__v": 0
  }
]`

const productsContainer = document.getElementsByClassName("productsContainer")

const dataObj = JSON.parse(data)

dataObj.map((obj) =>{
  const templateProduct = `
  <div class="productBoxes" onclick="productPage('fifthProductPage.html')">
          <img src=${obj.images[0]} alt="ilkPhoto" />
          <a href="#" class="shopping"
            ><i class="fa-solid fa-cart-shopping"></i
          ></a>
          <p>${obj.title}</p>
          <p class="bold">$${obj.price}</p>
        </div>`
  productsContainer[0].innerHTML = [...productsContainer[0].innerHTML, templateProduct]
  console.log(templateProduct)
})


