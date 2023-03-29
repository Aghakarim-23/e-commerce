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
      propertiesColor[i]?.remove();
      
    } else  {
      threeCounter_[i].innerHTML = Number(threeCounter_[i].innerHTML) - 1;
    } 
  });
}

//divi silmek ucun

