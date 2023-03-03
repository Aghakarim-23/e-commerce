// (1) Pəncərələrin açılması üçün qısa funksiya
function productPage(prop) {
  window.open(`${prop}`, "_self");
}

// (2) Pul vahidinin üstünə vuranda ikonun dəyişməsi üçün
const valyutaKecid = document.getElementsByClassName("money");
const kommunal = document.getElementsByClassName("currencyMenu");

for (let i = 0; i < valyutaKecid.length; i++) {
  valyutaKecid[i].addEventListener("click", () => {
    kommunal[0].innerHTML =
      valyutaKecid[i].innerText.slice(0, 1) +
      '<i class="fa-solid fa-angle-down"></i>';
  });
}

// (3) Kateqoriyalara vuranda hoverinin remove - aktive olması üçün
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

// (4) Ölçülərin üstünə klik edəndə hoverinin remove-aktive olması üçün
const sizeButton = document.getElementsByClassName("sizeButtonFunc");
for (let i = 0; i < sizeButton.length; i++) {
  sizeButton[i]?.addEventListener("click", () => {
  console.log("snjbdh")
    sizeButton[i]?.classList.add("active");
    for (let u = 0; u < sizeButton.length; u++) {
      if (sizeButton[u] !== sizeButton[i]) {
        sizeButton[u]?.classList.remove("active");
      }
    }
  });
}

// (5) Rəng seçiminin üzərinə klik edəndə hoverinin remove-aktive olması üçün
const kholor = document.getElementsByClassName("kholor");
for (let i = 0; i < kholor.length; i++) {
  kholor[i]?.addEventListener("click", () => {
    kholor[i]?.classList.add("active");
    for (let u = 0; u < kholor.length; u++) {
      if (kholor[u] !== kholor[i]) {
        kholor[u]?.classList.remove("active");
      }
    }
  });
}

// (6) Şopinqə klik edəndə şopinqin və arxa fonun blur olması üçün
const cartOverlayContainer = document.getElementsByClassName(
  "cartOverlay-container"
);

for(let i = 0; i < cartOverlayContainer.length; i++){
  cartOverlayContainer[i].addEventListener("click", (e)=>{
    e.stopPropagation()
  })
}

const overlay = document.getElementsByClassName("overlay");
const shoppingMenu = document.getElementsByClassName("shoppingMenu");
for (let i = 0; i < shoppingMenu.length; i++) {
  shoppingMenu[i]?.addEventListener("click", (e) => {
    e.stopPropagation()
    currency[i].classList.remove("active");
    overlay[i]?.classList.toggle("active");
    cartOverlayContainer[i]?.classList.toggle("active");
    // console.log(1);
  });
}

// (7) Bu funksiya məncə currency menunun içindəkilərin ancaq işarəsini göstərmək üçün idi
// Sadəcə HTML - i pozdum indidə yadıma düşmür ):
const currency = document.getElementsByClassName("currency");
const currencyArrow = document.getElementsByClassName("currencyMenu");
for (let i = 0; i < currencyArrow.length; i++) {
  currencyArrow[i]?.addEventListener("click", (e) => {
    e.stopPropagation()
    overlay[i].classList.remove("active");
    cartOverlayContainer[i].classList.remove("active");
    currency[i]?.classList.toggle("active");
    for (let u = 0; u < currencyArrow.length; u++) {
      if (currency[u] !== currency[i]) {
        currency[u]?.classList.remove("active");
      }
    }
    // console.log("aga");
  });
}

window.addEventListener("click", () => {
 for(let i = 0; i < currency.length; i++){
  if (
    overlay[i].classList.contains("active") ||
    cartOverlayContainer[i].classList.contains("active") ||
    currency[i]?.classList.contains("active")
  ) {
  // console.log('ok')
    overlay[i].classList.remove("active");
    cartOverlayContainer[i].classList.remove("active");
    currency[i]?.classList.remove("active");
  }
 }
});



const products = [product1, product2, product3, product4]

// change