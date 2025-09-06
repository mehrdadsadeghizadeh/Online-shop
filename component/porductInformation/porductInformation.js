let localStoragid = JSON.parse(localStorage.getItem("store"));
let nmaysmohsol = document.querySelector("#nmaysmohsol");
let size = document.querySelector("#nmaysmohsol2");
let cartProduct = [];
nmaysmohsol.insertAdjacentHTML(
  "afterbegin",
  `<div class="d-none d-lg-block">
  <div class="row">
   <div id="col" class="col-6">
<div>
  <img id="img-informatun" src="${localStoragid.img}">
</div>
</div>
<div id="moshsat" class="col-6 mt-3">
<p class="display-6">${localStoragid.title}</p>
<p id="cod-porduct">کدکالا: ${localStoragid.id}</p>
<p class="price">${localStoragid.price} تومان</p>
<p class="h6"><img src="./icon/clipboard-check.svg" alt=""> ویژگی ها : </i>
</p>
 <div class="ms-5">
  <li>${localStoragid.propertyOne}</li>
  <li>${localStoragid.propertyTwo}</li>
  <li>${localStoragid.propertyThree}</li>
</div>
<hr>
<p class="ehtar mt-2">لطفا در زمان انتخاب محصول و سایزبندی، دقت فرمایید، جز در مواردی که احیانا اشتباه سایز، دوخت یا مدل از طرف شرکت  باشد، امکان تعویض یا مرجوعی کالا یا مبلغ را نداریم.
  با توجه به تفاوت نور در محیط های مختلف و همینطور تفاوت کنتراست در صفحه نمایشگر گوشی، تا 10٪ تفاوت جزئی رنگ در عکس و واقعیت وجود دارد.</p>
<div id="apendnumberproduct">
<button type="button" id="apend-infor" class="btn modal_product" >افزودن به سبد خرید</button>
</div>
<div id="inputnamber"><div class="btncantener3 d-flex">
    <button class="btnrpoct" id="btnadd"  onclick="decreaseValue()" >+</button>
    <input type="text" id="boxqty" readonly="" value="1"/>
    <button class="btnrpoct" id="hubes" onclick="increaseValue()" ><img class="deletproductincart2 mb-1" src="icon/trash3.svg"/></button></div>
</div> 
</div> 
</div>
`
);
let apendproductinsm = document.querySelector("#apendproductinsm");
apendproductinsm.insertAdjacentHTML(
  "afterbegin",
  `<div id="colsm" class="d-lg-none d-sm-block">
<div class="imgproduct">
  <img
    class="image"
    src="${localStoragid.img}"
  />
</div>
<div class="productinformitan ms-3">
  <p class="display-6">${localStoragid.title}</p>
  <p id="cod-porduct">کدکالا: ${localStoragid.id}</p>
  <p class="price">${localStoragid.price} تومان</p>
  <p class="h6"><img src="./icon/clipboard-check.svg" alt=""> ویژگی ها : </i>
  </p>
  <div class="ms-5">
    <li>${localStoragid.propertyOne}</li>
    <li>${localStoragid.propertyTwo}</li>
    <li>${localStoragid.propertyThree}</li>
  </div>
  <p class="ehtar mt-2">لطفا در زمان انتخاب محصول و سایزبندی، دقت فرمایید، جز در مواردی که احیانا اشتباه سایز، دوخت یا مدل از طرف شرکت  باشد، امکان تعویض یا مرجوعی کالا یا مبلغ را نداریم.
    با توجه به تفاوت نور در محیط های مختلف و همینطور تفاوت کنتراست در صفحه نمایشگر گوشی، تا 10٪ تفاوت جزئی رنگ در عکس و واقعیت وجود دارد.
  </p>
  <div id="apendnumberproduct2">
    <button type="button" id="apend-infor2" class="btn modal_product">افزودن به سبد خرید</button>
    </div>

      <div id="inputnamber2"><div class="btncantener3 d-flex mt-2">
        <button class="btnrpoct" id="btnad3" >+</button>
        <input type="text" id="boxqty3" readonly="" value="1"/>
        <button class="btnrpoct" id="hube3"  ><img class="deletproductincart3 mb-1" src="icon/trash3.svg"/></button></div>

</div>
</div>
</div>`
);
// در صورت کلیک روی افزودن به سبد خرید
let modal_product = document.querySelectorAll(".modal_product");
modal_product.forEach(function (item) {
  item.addEventListener("click", function () {
    let modalProduct1 = document.querySelector(".modal-product");
    let modalProduct = document.querySelector(".modal-product img");
    let proininformashn = document.querySelector(".proininformashn h6");
    let idproduct_savetocart = document.querySelector(".idproduct_savetocart");
    let priceProduct_savetocart = document.querySelector(
      ".priceProduct_savetocart"
    );
    modalProduct1.style.display = "block";
    modalProduct.setAttribute("src", localStoragid.img);
    proininformashn.innerHTML = localStoragid.title;
    idproduct_savetocart.innerHTML = "کد کالا: " + localStoragid.id;
    priceProduct_savetocart.innerHTML = localStoragid.price + " تومان";
    setTimeout(() => {
      modalProduct1.style.display = "none";
    }, 4000);
  });
});
// ارسال کالا به لوکال استروج برای نمایش کالاها در سبد خرید
let clickapendtocart = document.querySelector("#apend-infor");
let clickapendtocartsm = document.querySelector("#apend-infor2");
let pushtoCart = [clickapendtocart, clickapendtocartsm];
pushtoCart.forEach(function (pushtoCart) {
  pushtoCart.addEventListener("click", getlocolstoreg);
});
function getlocolstoreg() {
  cartProduct.push(localStoragid);
  const prevProducts = localStorage.getItem("cart");
  let cartArray = [];
  if (prevProducts) {
    cartArray = JSON.parse(prevProducts);
  }
  cartArray.push(...cartProduct);
  localStorage.setItem("cart", JSON.stringify(cartArray));
}
// از بین بردن دکمه افزودن به سبد خرید در صورت وجود داشتن آن کالا در سبد خرید و نمایش اینپوت انتخاب تعداد آن کالا
let click2 = document.querySelector("#apend-infor");
click2.addEventListener("click", function () {
  deletButnAddtoCart_apendInputNumber();
});

if (window.location.reload) {
  deletButnAddtoCart_apendInputNumber();
}
function deletButnAddtoCart_apendInputNumber() {
  let inputnamber = document.querySelector("#inputnamber");
  let hesInCart = JSON.parse(localStorage.getItem("cart")) || 0;
  for (let i = 0; i < hesInCart.length; i++) {
    if (hesInCart[i].id == localStoragid.id) {
      click2.style.display = "none";
      inputnamber.style.display = "block";
    }
  }
}
// ادامه کار بالا برای حالت اس ام
let click = document.querySelector("#apend-infor2");
click.addEventListener("click", function () {
  deletButnAddtoCart_apendInputNumbersm();
});

if (window.location.reload) {
  deletButnAddtoCart_apendInputNumbersm();
}
function deletButnAddtoCart_apendInputNumbersm() {
  let inputnamber2 = document.querySelector("#inputnamber2");
  let hesInCart2 = JSON.parse(localStorage.getItem("cart")) || 0;
  for (let i = 0; i < hesInCart2.length; i++) {
    if (hesInCart2[i].id == localStoragid.id) {
      click.style.display = "none";
      inputnamber2.style.display = "block";
    }
  }
}
// محاسبه تعداد هر کالا برای افزودن به سبد خرید

let addBtn2 = document.querySelector("#btnadd");
let subBtn2 = document.querySelector("#hubes");
let qty2 = document.querySelector("#boxqty");
let arryproductcart = [localStoragid];
addBtn2.addEventListener("click", () => {
  qty2.value = parseInt(qty2.value) + 1;
  for (let i = 0; i < arryproductcart.length; i++) {
    localStorage.setItem(localStoragid.id, JSON.stringify(qty2.value));
    window.location.reload();
  }
});
subBtn2.addEventListener("click", () => {
  if (qty2.value <= 1) {
    qty2.value = 1;
  } else {
    qty2.value = parseInt(qty2.value) - 1;
  }
});

let localStoragcart = JSON.parse(localStorage.getItem("cart"));
let icondelet = document.querySelector(".deletproductincart2");
icondelet.addEventListener("click", function () {
  localStorage.removeItem(localStoragid.id);
  localStoragcart = localStoragcart.filter(function (item) {
    return item.id !== localStoragid.id;
  });
  localStorage.setItem("cart", JSON.stringify(localStoragcart));
  window.location.reload();
});

let getNamberproductincartsm = JSON.parse(
  localStorage.getItem(localStoragid.id)
);
qty2.value = getNamberproductincartsm || "1";

let deletproductincartlg = document.querySelector(".deletproductincart2");
let trueinfalse = true;
if (qty2.value > "1") {
  deletproductincartlg.style.display = "none";
  subBtn2.insertAdjacentHTML("afterbegin", `<p class="maner2">-</p>`);
  trueinfalse = false;
  let maner2 = document.querySelector(".maner2");
  maner2.addEventListener("click", function () {
    for (let i = 0; i < arryproductcart.length; i++) {
      localStorage.setItem(localStoragid.id, JSON.stringify(qty2.value - "1"));
      if (qty2.value == "1") {
        maner2.innerHTML = "";
        deletproductincartlg.style.display = "block";
        trueinfalse = true;
      }
      window.location.reload();
    }
  });
}
// sm
let addBtn3 = document.querySelector("#btnad3");
let subBtn3 = document.querySelector("#hube3");
let qty3 = document.querySelector("#boxqty3");
let arryproductcart3 = [localStoragid];
addBtn3.addEventListener("click", () => {
  qty3.value = parseInt(qty3.value) + 1;
  for (let i = 0; i < arryproductcart3.length; i++) {
    localStorage.setItem(localStoragid.id, JSON.stringify(qty3.value));
    window.location.reload();
  }
});
subBtn3.addEventListener("click", () => {
  if (qty3.value <= 1) {
    qty3.value = 1;
  } else {
    qty3.value = parseInt(qty3.value) - 1;
  }
});

let localStoragcart2 = JSON.parse(localStorage.getItem("cart"));
let icondelet3 = document.querySelector(".deletproductincart3");
icondelet3.addEventListener("click", function () {
  localStorage.removeItem(localStoragid.id);
  localStoragcart2 = localStoragcart2.filter(function (item) {
    return item.id !== localStoragid.id;
  });
  localStorage.setItem("cart", JSON.stringify(localStoragcart2));
  window.location.reload();
});

let getNamberproductincart = JSON.parse(localStorage.getItem(localStoragid.id));
qty3.value = getNamberproductincart || "1";

let deletproductincartsm = document.querySelector(".deletproductincart3");
let trueinfalse2 = true;
if (qty3.value > "1") {
  deletproductincartsm.style.display = "none";
  subBtn3.insertAdjacentHTML("afterbegin", `<p class="maner3">-</p>`);
  trueinfalse2 = false;
  let maner3 = document.querySelector(".maner3");
  maner3.addEventListener("click", function () {
    for (let i = 0; i < arryproductcart.length; i++) {
      localStorage.setItem(localStoragid.id, JSON.stringify(qty3.value - "1"));
      if (qty3.value == "1") {
        maner3.innerHTML = "";
        deletproductincartsm.style.display = "block";
        trueinfalse2 = true;
      }
      window.location.reload();
    }
  });
}

if (localStoragid.name === "A" || localStoragid.name === "B") {
  size.insertAdjacentHTML(
    "afterbegin",
    `<div class="d-none d-lg-block"><div class="row" >
    <div id="coltow" class="col-6 mt-5">
  <p class="h6">سایز مورد نظر خود را انتخاب کنید :</p>
  <div  class="d-flex mt-4">
    <p class="ps-4 ">"</p>
    <p class="siyze ">42</p>
    <p class="siyze ">40</p>
    <p class="siyze ">39</p>
    <p class="siyze ">38</p>
    <p class="siyze ">37</p>
    <p class="siyze ">34</p>
    <p class="siyze me-4">32</p>
    <p>"</p>
  </div>
</div>

<div id="boxshdw" class="col-6 mt-5 text-center">
      <p class="p-2">با دیجی آنلاین سریع و راحت خرید کن</p>
      <p class="h6 mt-4"><img src="./icon/rocket-takeoff.svg"> ارسال سریع و به موقع </p>
      <p class="h6 mt-4"><img src="./icon/check-circle.svg"> ضمانت اصل بودن کالا </p>
      <p class="h6 mt-4 me-2 mb-4"><img src="./icon/box-seam.svg"> امکان تحویل اکسپرس </p>
</div></div></div>




<div class="d-lg-none d-sm-block"><div>
    <div id="coltow" class="col-6 mt-5 text-center">
  <p class="h6">سایز مورد نظر خود را انتخاب کنید :</p>
  <div  class="d-flex mt-4" id="siz_steor">
    <p class="ps-4 ">"</p>
    <p class="siyze ">42</p>
    <p class="siyze ">40</p>
    <p class="siyze ">39</p>
    <p class="siyze ">38</p>
    <p class="siyze ">37</p>
    <p class="siyze ">34</p>
    <p class="siyze me-4">32</p>
    <p>"</p>

  </div>
</div>

<div id="boxshdw" class="col-6 mt-5 text-center">
      <p class="p-2">با دیجی آنلاین سریع و راحت خرید کن</p>
      <p class="h6 mt-4"><img src="./icon/rocket-takeoff.svg"> ارسال سریع و به موقع </p>
      <p class="h6 mt-4"><img src="./icon/check-circle.svg"> ضمانت اصل بودن کالا </p>
      <p class="h6 mt-4 me-2 mb-4"><img src="./icon/box-seam.svg"> امکان تحویل اکسپرس </p>
</div></div></div>
`
  );
} else if (
  localStoragid.name === "H" ||
  localStoragid.name === "G" ||
  localStoragid.name === "D"
) {
  size.insertAdjacentHTML(
    "afterbegin",
    `<div class="d-none d-lg-block"><div class="row"><div id="coltow" class="col-6 mt-5">
    <p class="h6">سایز مورد نظر خود را انتخاب کنید :</p>
    <div  class="d-flex mt-4" id="siz_steor">
      <p class="ps-4 ">"</p>
      <p class="siyze ">S</p>
      <p class="siyze ">M</p>
      <p class="siyze ">L</p>
      <p class="siyze ">XL</p>
      <p class="siyze ">XXL</p>
      <p class="siyze  me-4">3XL</p>
      <p>"</p>
  
    </div>
  </div>
  
  <div id="boxshdw" class="col-6 mt-5 text-center">
        <p class="p-2">با دیجی آنلاین سریع و راحت خرید کن</p>
        <p class="h6 mt-4"><img src="./icon/rocket-takeoff.svg"> ارسال سریع و به موقع </p>
        <p class="h6 mt-4"><img src="./icon/check-circle.svg"> ضمانت اصل بودن کالا </p>
        <p class="h6 mt-4 me-2 mb-4"><img src="./icon/box-seam.svg"> امکان تحویل اکسپرس </p>
  </div></div></div>
  
  
  
  <div class="d-lg-none d-sm-block"><div><div id="coltow" class="col-6 mt-5">
    <p class="h6">سایز مورد نظر خود را انتخاب کنید :</p>
    <div  class="d-flex mt-4" id="siz_steor">
      <p class="ps-4 ">"</p>
      <p class="siyze ">S</p>
      <p class="siyze ">M</p>
      <p class="siyze ">L</p>
      <p class="siyze ">XL</p>
      <p class="siyze ">XXL</p>
      <p class="siyze  me-4">3XL</p>
      <p>"</p>
  
    </div>
  </div>
  
  <div id="boxshdw" class="col-6 mt-5 text-center">
        <p class="p-2">با دیجی آنلاین سریع و راحت خرید کن</p>
        <p class="h6 mt-4"><img src="./icon/rocket-takeoff.svg"> ارسال سریع و به موقع </p>
        <p class="h6 mt-4"><img src="./icon/check-circle.svg"> ضمانت اصل بودن کالا </p>
        <p class="h6 mt-4 me-2 mb-4"><img src="./icon/box-seam.svg"> امکان تحویل اکسپرس </p>
  </div></div></div>`
  );
} else if (localStoragid.name === "C") {
  size.insertAdjacentHTML(
    "afterbegin",
    `<div class="d-none d-lg-block"><div class="row"><div class="col-6 mt-5">
    <p class="h6">سایز مورد نظر خود را انتخاب کنید :</p>
    <div  class="d-flex mt-4">
      <p class="ps-4 me-5">"</p>
      <p class="siyze1 me-5">36</p>
      <p class="siyze1 me-5">38</p>
      <p class="siyze1 me-5">40</p>
      <p class="siyze1 me-5">42</p>
      <p class="siyze1 me-5">44</p>
      <p class="siyze1 me-5">52</p>
      <p>"</p>
  
    </div>
  </div>
  
  <div id="boxshdw" class="col-6 mt-5 text-center">
        <p class="p-2">با دیجی آنلاین سریع و راحت خرید کن</p>
        <p class="h6 mt-4"><img src="./icon/rocket-takeoff.svg"> ارسال سریع و به موقع </p>
        <p class="h6 mt-4"><img src="./icon/check-circle.svg"> ضمانت اصل بودن کالا </p>
        <p class="h6 mt-4 me-2 mb-4"><img src="./icon/box-seam.svg"> امکان تحویل اکسپرس </p>
  </div></div></div>
  
  <div class="d-lg-none d-sm-block" ><div><div class=" mt-5"  >
    <p class="h6 text-center">سایز مورد نظر خود را انتخاب کنید :</p>
    <div  class="d-flex mt-4" id="siz_steor">
      <p class="ps-4 me-2">"</p>
      <p class="siyze2 me-5">36</p>
      <p class="siyze2 me-5">38</p>
      <p class="siyze2 me-5">40</p>
      <p class="siyze2 me-5">42</p>
      <p class="siyze2 me-5">44</p>
      <p class="siyze2 me-5">52</p>
      <p>"</p>
  
    </div>
  </div>
  
  <div id="boxshdw" class=" mt-5 text-center">
        <p class="p-2">با دیجی آنلاین سریع و راحت خرید کن</p>
        <p class="h6 mt-4"><img src="./icon/rocket-takeoff.svg"> ارسال سریع و به موقع </p>
        <p class="h6 mt-4"><img src="./icon/check-circle.svg"> ضمانت اصل بودن کالا </p>
        <p class="h6 mt-4 me-2 mb-4"><img src="./icon/box-seam.svg"> امکان تحویل اکسپرس </p>
  </div></div></div>`
  );
} else if (localStoragid.name === "E" || localStoragid.name === "F") {
  size.insertAdjacentHTML(
    "afterbegin",
    `<div class="d-none d-lg-block"><div class="row"><div id="coltow" class="col-6 mt-5">
    <p class="h6 mb-5"> رنگ مورد نظر خود را انتخاب کنید :</p>
    <div  class="d-flex mt-4">
      <p class=" me-4">"</p>
      <div class="colors d-flex">
      <span id="color" class="denger ">.......</span>
      <span id="color" class="bulo ">.......</span>
      <span id="color" class="zard ">.......</span>
      <span id="color" class="kermas ">.......</span>
      <span id="color" class="dark ">.......</span>
      <span id="color" class="narange ">.......</span>
      </div>
      <p>"</p>
  
    </div>
  </div>
  
  <div id="boxshdw" class="col-6 mt-5 text-center">
        <p class="p-2">با دیجی آنلاین سریع و راحت خرید کن</p>
        <p class="h6 mt-4"><img src="./icon/rocket-takeoff.svg"> ارسال سریع و به موقع </p>
        <p class="h6 mt-4"><img src="./icon/check-circle.svg"> ضمانت اصل بودن کالا </p>
        <p class="h6 mt-4 me-2 mb-4"><img src="./icon/box-seam.svg"> امکان تحویل اکسپرس </p>
  </div> </div></div>
  
  
  <div class="d-lg-none d-sm-block"><div><div id="coltow" class="col-6 mt-5">
    <p class="h6 mb-5"> رنگ مورد نظر خود را انتخاب کنید :</p>
    <div  class="d-flex mt-4">
      <p class="me-1">"</p>
      <div class="colors d-flex">
      <span id="color" class="denger ">.......</span>
      <span id="color" class="bulo ">.......</span>
      <span id="color" class="zard ">.......</span>
      <span id="color" class="kermas ">.......</span>
      <span id="color" class="dark ">.......</span>
      <span id="color" class="narange ">.......</span>
      </div>
      <p id="tak_P">"</p>
  
    </div>
  </div>
  
  <div id="boxshdw" class="col-6 mt-5 text-center">
        <p class="p-2">با دیجی آنلاین سریع و راحت خرید کن</p>
        <p class="h6 mt-4"><img src="./icon/rocket-takeoff.svg"> ارسال سریع و به موقع </p>
        <p class="h6 mt-4"><img src="./icon/check-circle.svg"> ضمانت اصل بودن کالا </p>
        <p class="h6 mt-4 me-2 mb-4"><img src="./icon/box-seam.svg"> امکان تحویل اکسپرس </p>
  </div> </div></div>
  
  
 `
  );
}

// is onclick to clos modal in setTimeout
let apendInfor = document.querySelector("#apend-infor");
let modaldelet = document.querySelector("#modaldelet");
import { NumberOfProduct } from "../../js/app.js";
apendInfor.addEventListener("click", function () {
  NumberOfProduct();
});
let apendInfor2 = document.querySelector("#apend-infor2");
let modaldelet2 = document.querySelector("#modaldelet2");
apendInfor2.addEventListener("click", function () {
  NumberOfProduct();
});

// روشن شدن دکمه ارسال دیدگاه

let w3review = document.querySelector("#w3review");
let btn_didgah = document.querySelector(".btn_didgah");
w3review.addEventListener("keyup", function () {
  let w3reviewValue_nospes = w3review.value.trim();

  if (w3reviewValue_nospes.length > 12) {
    btn_didgah.style.backgroundColor = "#d51d91";
  } else if (w3reviewValue_nospes.length <= 12) {
    btn_didgah.style.backgroundColor = "#e779be";
  }
  btn_didgah.addEventListener("click", function () {
    let commentArrey = [];
    let product_id = JSON.parse(localStorage.getItem("store")).id;
    if (w3reviewValue_nospes.length > 12 && localStorage.getItem("login")) {
      commentArrey.push(w3review.value);
      const prevProducts = localStorage.getItem("submit_comment" + product_id);
      let cartArray = [];
      if (prevProducts) {
        cartArray = JSON.parse(prevProducts);
      }
      cartArray.push(...commentArrey);
      localStorage.setItem(
        "submit_comment" + product_id,
        JSON.stringify(cartArray)
      );
      window.location.reload();
    } else if (
      !localStorage.getItem("login") &&
      !localStorage.getItem("login_Manegement")
    ) {
      window.location.href = "login.html";
    } else if (localStorage.getItem("login_Manegement")) {
      alert("شما به عنوان مدیر یا ادمین سایت نمیتوانید به محصولی نظر دهید");
      return;
    }
  });
});
let product_id = JSON.parse(localStorage.getItem("store")).id;
let new_comments = JSON.parse(
  localStorage.getItem("submit_comment" + product_id)
);
var uniq = [...new Set(new_comments)]; // حذف موارد تکراری
localStorage.setItem("submit_comment" + product_id, JSON.stringify(uniq));

// تمپلیت نظرات
let name_user = JSON.parse(localStorage.getItem("name_famile"));
let product_name_id = JSON.parse(localStorage.getItem("store"));
let contener_comments = document.querySelector(".contener_comments");
let arrey_coments = JSON.parse(
  localStorage.getItem("submit_comment" + product_id)
);
arrey_coments.forEach(function (comment) {
  contener_comments.insertAdjacentHTML(
    "afterend",
    `       <div class="form_comments mt-4">
  <div class="d-flex" id="no_flex">
    <p>${name_user}</p>
    <p class="ghridar">خریدار</p>
    <p id="timer">همین حالا</p>
    <div class="icon_comments">
    <div class="icon_text">
     <h6 class="icon_text_comments"></h6>
    </div>
      <img src="icon/three-dots.svg" />
  
    </div>
  </div>
  <div>
    <div>${comment}</div>
  </div>
  <div class="mt-3 d-flex">
    <p>${product_name_id.title}</p>
  <div class="icon_like_comments d-flex">
    <div class="number_like" id="number_like">0</div>
    <img id="icon_like"  src="icon/hand-thumbs-up.svg">
    <div class="number_like" id="number_onlike">0</div>
    <img id="icon_onlike" src="icon/hand-thumbs-down.svg">
  </div>
  </div>
  </div>`
  );
});

// فرم نظر سنجی کاربر
// دکمه گزراش

let icon_comments = document.querySelectorAll(".icon_comments img");
let icon_text_comments = document.querySelectorAll(".icon_text_comments");
let body = document.querySelector("body");

for (let i = 0; i < icon_comments.length; i++) {
  icon_comments[i].addEventListener("click", function (ev) {
    for (let index = 0; index < icon_text_comments.length; index++) {
      if (index == i) {
        icon_text_comments[index].style.display = "block";
        icon_text_comments[index].innerHTML = "گزارش این دیدگاه";
      }
    }
    ev.stopPropagation(); // با این دیگه کاری به المنت های دیگه نداره
  });
}

body.addEventListener("click", function () {
  try {
    icon_text_comments.forEach((item) => (item.style.display = "none"));
  } catch {
    false;
  }
});
try {
  icon_text_comments.addEventListener("click", function () {
    if (!localStorage.getItem("login")) {
      window.location.href = "login.html";
    }
  });
} catch {
  false;
}
// آیکون ها
let icon_like = document.querySelectorAll("#icon_like");
let number_like = document.querySelectorAll("#number_like");
let icon_onlike = document.querySelectorAll("#icon_onlike");
let number_onlike = document.querySelectorAll("#number_onlike");
let true_like = false;
let true_onlike = false;
let store = JSON.parse(localStorage.getItem("store"));
let login = localStorage.getItem("login");
for (let like = icon_like.length - 1; like >= 0; like--) {
  icon_like[like].addEventListener("click", function () {
    for (let number = number_like.length - 1; number >= 0; number--) {
      // اینجا گفتم که اگر روش کلیک شد لایک اون یکی برابر صفر شه
      if (localStorage.getItem("number_onlike" + store.id + like + number)) {
        for (let i = number_onlike.length - 1; i >= 0; i--) {
          if (i == number) {
            number_onlike[i].innerHTML = 0;
          }
        }
      }
      // در صورت کلیک لایک خودش یک و اون یکی رو صفر کنه
      if (like == number && true_like == false && login) {
        localStorage.setItem("number_like" + store.id + like + number, 1);
        number_like[number].innerHTML = JSON.parse(
          localStorage.getItem("number_like" + store.id + like + number)
        );
        localStorage.removeItem("number_onlike" + store.id + like + number);
        true_like = true;
      }
      // و اینجا هم گفنم که اگر دوباره روش زد لایک خودش صفر بشه
      else if (like == number && true_like == true && login) {
        localStorage.removeItem("number_like" + store.id + like + number);
        number_like[number].innerHTML = 0;
        true_like = false;
      }
      // و در آخر اگر لاگین نکرده بره به صحفه لاگین
      else if (!login) {
        window.location.href = "login.html";
      }
    }
  });
}
// برای این که در بالا  باید کلیک شه تا لوکال اعمال بشه بیرون از کلیک دوباره اجراش میکنیم
for (let like = icon_like.length - 1; like >= 0; like--) {
  for (let number = number_like.length - 1; number >= 0; number--) {
    if (like == number) {
      number_like[number].innerHTML =
        JSON.parse(
          localStorage.getItem("number_like" + store.id + like + number)
        ) || 0;
    } else if (like == number) {
      localStorage.removeItem("number_like" + store.id + like + number);
      number_like[number].innerHTML = 0;
    }
  }
}
// آیکون بعدی هم همان روال
for (let like = icon_onlike.length - 1; like >= 0; like--) {
  icon_onlike[like].addEventListener("click", function () {
    for (let number = number_onlike.length - 1; number >= 0; number--) {
      if (localStorage.getItem("number_like" + store.id + like + number)) {
        for (let i = number_like.length - 1; i >= 0; i--) {
          if (i == number) {
            number_like[i].innerHTML = 0;
          }
        }
      }
      if (like == number && true_onlike == false && login) {
        localStorage.setItem("number_onlike" + store.id + like + number, 1);
        number_onlike[number].innerHTML = JSON.parse(
          localStorage.getItem("number_onlike" + store.id + like + number)
        );
        localStorage.removeItem("number_like" + store.id + like + number);
        true_onlike = true;
      } else if (like == number && true_onlike == true && login) {
        localStorage.removeItem("number_onlike" + store.id + like + number);
        number_onlike[number].innerHTML = 0;
        true_onlike = false;
      } else if (!login) {
        window.location.href = "login.html";
      }
    }
  });
}
for (let like = icon_onlike.length - 1; like >= 0; like--) {
  for (let number = number_onlike.length - 1; number >= 0; number--) {
    if (like == number) {
      number_onlike[number].innerHTML =
        JSON.parse(
          localStorage.getItem("number_onlike" + store.id + like + number)
        ) || 0;
    } else if (like == number) {
      localStorage.removeItem("number_onlike" + store.id + like + number);
      number_onlike[number].innerHTML = 0;
    }
  }
}

// زمان گذشت از ارایه نظر
var timeLimitInMinutes = 0;
var timeLimitInSeconds = timeLimitInMinutes * 60;
var timerElement = document.querySelectorAll("#timer");

function startTimer() {
  timeLimitInSeconds++;
  var minutes = Math.floor(timeLimitInSeconds / 60);
  var seconds = timeLimitInSeconds % 60;

  if (timeLimitInSeconds < 0) {
    // timerElement.textContent = '00:00';
    clearInterval(timerInterval);
    return;
  }
  let commentArrey = [];
  let product_id = JSON.parse(localStorage.getItem("store")).id;
  let lengthIscomments = JSON.parse(
    localStorage.getItem("submit_comment" + product_id)
  );
  let timer;
  // در هر 59 ثانیه به بعد یک دقیقه به زمان اضافه گردد
  if (seconds == 59) {
    for (let i = 0; i < lengthIscomments.length; i++) {
      commentArrey = [];
      commentArrey.push(1);
      const prevProducts = localStorage.getItem(
        "timer_comment" + product_id + "_" + i
      );
      let cartArray = [];
      if (prevProducts) {
        cartArray = JSON.parse(prevProducts);
      }
      cartArray = Number(cartArray) + Number(commentArrey);
      localStorage.setItem(
        "timer_comment" + product_id + "_" + i,
        JSON.stringify(cartArray)
      );
    }
  }
  // برای گرفتن زمان و اضافه کردن به آرایه خالی
  let commentTime = [];
  for (let i = lengthIscomments.length - 1; i >= 0; i--) {
    timer = JSON.parse(
      localStorage.getItem("timer_comment" + product_id + "_" + i)
    );
    commentTime.push(timer);
  }
  // گرفتن آرایه commentTime و خالی کردن زمان ها از بزرگ به کوچک
  for (let index = commentTime.length - 1; index >= 0; index--) {
    if (commentTime[index]) {
      timerElement[index].innerHTML = commentTime[index] + " دقیقه پیش";
    } else {
      timerElement[index].innerHTML = "همین حالا";
    }
    let TakingMinutesOfTheText = timerElement[index].innerHTML.split(" ")[0]; // برای گرفتن فقط دقیقه از متن
    var minute_to_hour = Math.floor(
      timerElement[index].innerHTML.split(" ")[0] / 60
    ); // برای تقسیم دقیقه به ساعت
    let MinutesRemaining = TakingMinutesOfTheText - minute_to_hour * 60; // برای گرفتن دقایق باقیمانده
    // برای نمایش ساعت و دقیقه با هم
    if (Math.floor(timerElement[index].innerHTML.split(" ")[0] / 60) > 0) {
      if (MinutesRemaining > 0) {
        timerElement[index].innerHTML =
          minute_to_hour + " ساعت" + " " + MinutesRemaining + " " + "دقیقه پیش";
      } else {
        timerElement[index].innerHTML = minute_to_hour + " ساعت پیش ";
      }
    }
    // برای نمایش روز و ساعت
    let convertHoursToDays = Math.floor(minute_to_hour / 24);
    let hoursRemaining = minute_to_hour - convertHoursToDays * 24; // برای گرفتن ساعت عای باقیمانده
    if (convertHoursToDays >= 1) {
      if (hoursRemaining > 0) {
        timerElement[index].innerHTML =
          convertHoursToDays +
          " روز " +
          " " +
          hoursRemaining +
          " " +
          "ساعت پیش";
      } else {
        timerElement[index].innerHTML = convertHoursToDays + "روز پیش";
      }
    }
    // برای نمایش ماه و روز
    let ConvertDayToMonth = Math.floor(convertHoursToDays / 30);
    let daysRemaining = convertHoursToDays - ConvertDayToMonth * 30;
    if (ConvertDayToMonth >= 1) {
      if (daysRemaining > 0) {
        timerElement[index].innerHTML =
          ConvertDayToMonth + " ماه " + " " + daysRemaining + " " + "روز پیش";
      } else {
        timerElement[index].innerHTML = ConvertDayToMonth + "ماه پیش";
      }
    }
    // برای نمایش سال و ماه
    let ConvertMonthToYear = Math.floor(ConvertDayToMonth / 12);
    let monthRemaining = ConvertDayToMonth - ConvertMonthToYear * 12;
    if (ConvertMonthToYear >= 1) {
      if (monthRemaining > 0) {
        timerElement[index].innerHTML =
          ConvertMonthToYear + " سال " + " " + monthRemaining + " " + "ماه پیش";
      } else {
        timerElement[index].innerHTML = ConvertMonthToYear + " سال پیش";
      }
    }
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // timerElement.textContent = minutes + ':' + seconds;
}

var timerInterval = setInterval(startTimer, 1000);
//  در صورت وجود دیدگاه . متن دیدگاه نیست حذف شود
let bus_comments = document.querySelector(".bus_comments");
let Q = JSON.parse(localStorage.getItem("submit_comment" + product_id));
if (Q.length >= 1) {
  bus_comments.style.display = "none";
} else if (Q == []) {
  bus_comments.style.display = "block";
}

//  تغیر تایل سایت با توجه به نام محصولات
function name_title() {
  let title = document.querySelector("title");
  title.innerHTML = " قیمت و خرید " + localStoragid.title;
}
name_title();
