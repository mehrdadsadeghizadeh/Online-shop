let localStoragcart = JSON.parse(localStorage.getItem("cart")) || [];
let cartlg = document.querySelector("#hoverme");
localStoragcart.map(function (product) {
  cartlg.insertAdjacentHTML(
    "afterbegin",
    `<div id="storeme" class="shop-items d-lg-none d-sm-block" id="hoverme">
    <p class="diply">کدکالا: ${product.id}</p>
   
    <img
      class="shop-items-image mt-5"
      src="${product.img}"
    />
    <div class="shop-items-details d-grid gap-0">
      <div class="mt-4 mb-3"><span class="shop-items-titli h6">${product.title}</span>
      <br>
      <span class="shop-items-price h6" id="productpricesm"> ${product.price} تومان</span>
    </div>
    
    <div class="btncantener2 d-flex">
        <button class="btnrpoct" id="add">+</button>
    <input type="text" id="qtyBox" readonly="" value="1" />
<button class="btnrpoct" id="subs"><img class="deletproductincartsm" src="icon/trash3.svg"/></button>
       </div>       
      <div class="d-felex mt-4">
      <a ><button id="clicktoinfor" class="btn btn-outline-danger  mb-3 mx-3 px-4">حذف</button></a>
      <a ><button id="clicktoinfor3" class="btn btn-outline-success  mb-3 mx-3 px-3">پرداخت</button></a>
       </div>
      </div>
  </div> `
  );
  //محاسبه اینپوت تعداد محصولات در سبد خرید
  let addBtns = document.querySelector("#add");
  let subBtns = document.querySelector("#subs");
  let qtys = document.querySelector("#qtyBox");
  let arryproductcart2 = [product];
  addBtns.addEventListener("click", () => {
    qtys.value = parseInt(qtys.value) + 1;
    for (let i = 0; i < arryproductcart2.length; i++) {
      localStorage.setItem(product.id, JSON.stringify(qtys.value));
      window.location.reload();
    }
  });

  subBtns.addEventListener("click", () => {
    if (qtys.value <= 1) {
      qtys.value = 1;
    } else {
      qtys.value = parseInt(qtys.value) - 1;
      window.location.reload();
    }
  });

  let getNamberproductincart = JSON.parse(localStorage.getItem(product.id));
  qtys.value = getNamberproductincart || "1";

  let btnClose = document.querySelector("#clicktoinfor");
  btnClose.addEventListener("click", function () {
    localStorage.removeItem(product.id)
    localStoragcart = localStoragcart.filter(function (item) {
      return item.id !== product.id;
    });
    localStorage.setItem("cart", JSON.stringify(localStoragcart));
    window.location.reload();
  });

  let deletproductincartsm = document.querySelector(".deletproductincartsm");
  let trueinfalse = true;
  if (qtys.value > "1") {
    deletproductincartsm.style.display = "none";
    subBtns.insertAdjacentHTML("afterbegin", `<p class="maner2">-</p>`);
    trueinfalse = false;
    let maner2 = document.querySelector(".maner2");
    maner2.addEventListener("click", function () {
      for (let i = 0; i < arryproductcart2.length; i++) {
        localStorage.setItem(product.id, JSON.stringify(qtys.value - "1"));
        window.location.reload();
      }
    });
  } else if (qtys.value == "1") {
    deletproductincartsm.style.display = "block";
    trueinfalse = true;
  }
  if (trueinfalse == true) {
    deletproductincartsm.addEventListener("click", function () {
      localStoragcart = localStoragcart.filter(function (item) {
        return item.id !== product.id;
      });
      localStorage.setItem("cart", JSON.stringify(localStoragcart));
      localStorage.removeItem(product.id) || false;
      window.location.reload();
    });
  }
  // price sm * input number
  let deletIsComma = product.price;
  deletIsComma = deletIsComma.replace(",", "");
  let deletIsCommants = deletIsComma.replace(",", "");
  let productprice = document.querySelector("#productpricesm");
  productprice.innerHTML = "";
  let pricetoproductlg = deletIsCommants * qtys.value;

  pricetoproductlg = pricetoproductlg.toLocaleString();
  productprice.innerHTML = pricetoproductlg + " تومان ";
});
//
let getTheProductInTheShoppingCart  = JSON.parse(localStorage.getItem("cart")) || 0;
let numberOfEachProduct;
let getnumberproducttocartArrey = []
let theTotalNumberOfProductsInTheShoppingCart;
for (let i = 0; i < getTheProductInTheShoppingCart.length; i++) {
    numberOfEachProduct = JSON.parse(localStorage.getItem(getTheProductInTheShoppingCart[i].id)) || 1
    getnumberproducttocartArrey.push(Number(numberOfEachProduct))
    theTotalNumberOfProductsInTheShoppingCart = getnumberproducttocartArrey.reduce((sum1 , sum2) => sum1 + sum2 , 0)
}    
let apendallinformationproductlg = document.querySelector(
  ".apendallinformationproductlg"
);
apendallinformationproductlg.insertAdjacentHTML(
  "afterbegin",
  ` <div class="d-flex">
<p class="idproduct2 mt-3">تعداد کالاها (${theTotalNumberOfProductsInTheShoppingCart})</p>
<button class="btn btn-outline-danger" id="btnremocart2">حذف همه</button>
</div>
<div class="d-flex mt-4">
<p class="priseplas2">جمع سبد خرید</p>
<p class="priseplas3 ">540,000 تومان</p>
</div>
<button class="clicktoallproductincart2 btn d-flex mx-auto">تایید همه سفارش ها</button>`
);
let btnremocart2 = document.querySelector("#btnremocart2");
btnremocart2.addEventListener("click", function () {
  for (let i  = 0; i < localStoragcart.length; i++) {
    localStorage.removeItem(localStoragcart[i].id)
} 
  localStoragcart = [];
  localStorage.setItem("cart", JSON.stringify(localStoragcart));
  window.location.reload();
});

let apendpruducttocart = document.querySelector("#apendpruducttocart");
localStoragcart.map(function (product) {
  apendpruducttocart.insertAdjacentHTML(
    "afterbegin",
    ` <div class="row" id="borderproductcart">
  <div class="col-4 text-start" id="imgybtn">
    <img
      id="imgcart"
      class="ms-3"
      src="${product.img}"
    />
    <div class="btncantener3 d-flex">
    <button class="btnrpoct" id="btnadd">+</button>
    <input type="text" id="boxqty" readonly="" value="1"/>
    <button class="btnrpoct" id="hubes"><img class="deletproductincart2 mb-1" src="icon/trash3.svg"/></button>
     
    </div>
  </div>
  <div class="col-4" id="informisn">
    <p class="productName">${product.title}</p>
    <p></p>
    <p class="idproduct">کدکالا: ${product.id}</p>
    <p class="idproduct">
      <img src="icon/check-circle.svg" /> گارانتی اصالت و سلامت
      فیزیکی کالا
    </p>
    <p class="idproduct mt-4">
      <img src="/icon/truck.svg" /> ارسال دیجی آنلاین از 3 روز کاری
      دیگر
    </p>
    <p class="productprice mt-4">${product.price} تومان</p>
  </div>
  <div class="col-4 text-end">
    <button
      id="btnClose"
      type="button"
      class="btn-close mt-2"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
    <br />
    <button id="clicktoinfor2" class="btn d-flex">
      تایید و ادامه سفارش
    </button>
  </div>
</div>`
  );
  // input namber // delet productincart
  let addBtn2 = document.querySelector("#btnadd");
  let subBtn2 = document.querySelector("#hubes");
  let qty2 = document.querySelector("#boxqty");
  let arryproductcart = [product];
  addBtn2.addEventListener("click", () => {
    qty2.value = parseInt(qty2.value) + 1;
    for (let i = 0; i < arryproductcart.length; i++) {
      localStorage.setItem(product.id, JSON.stringify(qty2.value));
    }
  });

  subBtn2.addEventListener("click", () => {
    if (qty2.value <= 1) {
      qty2.value = 1;
    } else {
      qty2.value = parseInt(qty2.value) - 1;
    }
  });

  let deletproductincart2 = document.querySelector(".deletproductincart2");
  deletproductincart2.addEventListener("click", function () {
    localStoragcart = localStoragcart.filter(function (item) {
      return item.id !== product.id;
    });
    localStorage.setItem("cart", JSON.stringify(localStoragcart));
    window.location.reload();
  });

  let getNamberproductincart = JSON.parse(localStorage.getItem(product.id));
  qty2.value = getNamberproductincart || "1";
  if (getNamberproductincart > "1") {
    subBtn2.innerHTML = "";
    subBtn2.insertAdjacentHTML("afterbegin", `<p class="mayner mt-1">-</p>`);
    let mayner = document.querySelector(".mayner");
    mayner.addEventListener("click", function () {
      for (let i = 0; i < arryproductcart.length; i++) {
        localStorage.setItem(product.id, JSON.stringify(qty2.value - "1"));
        window.location.reload();
      }
    });
  }

  addBtn2.addEventListener("click", function () {
    window.location.reload();
  });
  let falseintrue = false;
  subBtn2.addEventListener("click", function () {
    if (qty2.value == "1") {
      subBtn2.innerHTML = "";
      subBtn2.insertAdjacentHTML(
        "afterbegin",
        `<img class="deletproductincart mb-1" src="icon/trash3.svg"/>`
      );
      localStorage.removeItem(product.id);
      falseintrue = true;
    }

    if (falseintrue === true) {
      let deletproductincart2 = document.querySelector(".deletproductincart");
      deletproductincart2.addEventListener("click", function () {
        deletproductincartisimgdelet();
      });
    }
  });
  let btnClose = document.querySelector("#btnClose");
  btnClose.addEventListener("click", function () {
    deletproductincartisimgdelet();
  });
  function deletproductincartisimgdelet() {
    localStorage.removeItem(product.id) || false;
    localStoragcart = localStoragcart.filter(function (item) {
      return item.id !== product.id;
    });
    localStorage.setItem("cart", JSON.stringify(localStoragcart));
    window.location.reload();
  }
  // price lg * input number
  let deletIsComma = product.price;
  deletIsComma = deletIsComma.replace(",", "");
  let deletIsCommants = deletIsComma.replace(",", "");

  let productprice = document.querySelector(".productprice");
  productprice.innerHTML = "";
  let pricetoproductlg = deletIsCommants * qty2.value;

  pricetoproductlg = pricetoproductlg.toLocaleString();
  productprice.innerHTML = pricetoproductlg + " تومان ";
});

let apendallinformationproduct = document.querySelector(
  ".apendallinformationproduct"
);
apendallinformationproduct.insertAdjacentHTML(
  "afterbegin",
  `<div class="d-flex parent-numberpro">
<p class="idproduct mt-3">تعداد کالاها (${theTotalNumberOfProductsInTheShoppingCart})</p>
<button class="btn btn-outline-danger" id="btnremocart">حذف همه</button>
</div>
<div class="d-flex mt-4">
<p class="priseplas">جمع سبد خرید</p>
<p class="priseplas2" id="sum">540,000 تومان</p>
</div>
<button class="clicktoallproductincart btn d-flex mx-auto">تایید همه سفارش ها</button>
`
);
let clicktoallproductincart = document.querySelector(".clicktoallproductincart")
let btnremocartd = document.querySelector("#btnremocart")
if(theTotalNumberOfProductsInTheShoppingCart >= 10){
  btnremocartd.style.height = "50px";
  clicktoallproductincart.style.marginTop = "80px"
}

//حذف تمامی محصولات موجود در سبد خرید
let btnremocart = document.querySelector("#btnremocart");
btnremocart.addEventListener("click", function () {
  for (let i  = 0; i < localStoragcart.length; i++) {
      localStorage.removeItem(localStoragcart[i].id)
  } 
  localStoragcart = [];  
  localStorage.setItem("cart", JSON.stringify(localStoragcart));
  window.location.reload();
});

// نمایش جمع کل قیمت های موجود در فروشگاه
let sum = 0;
let idvalue;
localStoragcart.forEach(function (product) {
  idvalue = JSON.parse(localStorage.getItem(product.id)) || 1;
  product.price = product.price.replace(",", "");
  let proinprice = product.price.replace(",", "");
  sum += idvalue * proinprice;
});
sum = sum.toLocaleString();

let sumElem = document.querySelector("#sum");
let priseplas3 = document.querySelector(".priseplas3");
sumElem.innerHTML = "";
priseplas3.innerHTML = "";
sumElem.innerHTML = sum;
priseplas3.innerHTML = sum;

// نمایش دادن عکس سبد خرید خالی در صورت خالی بودن سبد خرید
let borderproductcart2 = document.querySelector("#borderproductcart2")
let apendallinformationproductlgmpt = document.querySelector(".apendallinformationproductlg")
let textcenter = document.querySelector(".text-center")
let imgCartMPT = document.querySelector("#imgCartMPT")
if(localStoragcart.length == 0){
  borderproductcart2.style.display = "none"
  apendallinformationproductlgmpt.style.display = "none"  
  textcenter.style.display = "none"
  imgCartMPT.style.display = "block"
}
// رفع مشکلات نوبار در اسکرول
let brand = document.querySelector(".brand")
let tmasAbut = document.querySelector("#tmas-abut")
let dropdown = document.querySelector(".dropdown")
let tmasAbuts = document.querySelectorAll("#tmas-abuts")

document.addEventListener("scroll" , function(){
  if(document.documentElement.scrollTop > 15){
    brand.style.marginTop = "-11.5px"
    tmasAbut.style.marginTop = "-9px"
    dropdown.style.marginTop = "-9px"
    tmasAbuts.forEach(function(item){
      item.style.marginTop = "-9px"
    })
  }else{
    brand.style.marginTop = "0px"
    tmasAbut.style.marginTop = "0px"
    dropdown.style.marginTop = "0px"
    tmasAbuts.forEach(function(item){
      item.style.marginTop = "0px"
    })
  }
}) 