let navbar = document.querySelector("#navbar");
function apendnavbar() {
  navbar.insertAdjacentHTML(
    "beforeend",
    `
    <nav id="navinerhtml" class="navbar navbar-expand-lg  fixed-top navbar" id="nav">
    <div class="no_sm">
<div class="d-flex" id="navbartop">
<div id="brandsm">
<a href="index.html"><p class="brand">digeonline</p></a>
</div>
 <a  class="navbar-brand ps-5 fs-6 d-none d-lg-block" href="/index.html" id="tmas-abut">صفحه اصلی</a>
 <div class="dropdown ps-5  d-flex d-none d-lg-block">
        <a class="dropbtn navbar-brand fs-6 d-flex" >محصولات <p><i class="arrow down"></i></p></a>
     
        <div class="dropdown-content" id="dropdown-content_hover">
          
            <a href="./store.html" name="D">پیراهن مردانه</a>
            <a href="./store.html" name="H">تیشرت</a>
          <a href="./store.html" name="E">ساعت مردانه</a>
          <a href="./store.html" name="G">شلوار مردانه</a>
          <a href="./store.html" name="A">نیم بوت مردانه</a>
          <a id="manto" href="./store.html" name="C">مانتو</a>
          <a href="./store.html" name="F">شال و روسری</a>
          <a href="./store.html" name="B">نیم بوت زنانه</a>
          <a>ساعت زنانه <span class="atmam">اتمام موجودی</span></a>
      
        </div>
      </div>
 <a class="navbar-brand ps-5 fs-6 d-none d-xl-block" id="tmas-abuts" href="contactUs.html" >تماس با ما</a>
 <a class="navbar-brand ps-5 fs-6 d-none d-xl-block" id="tmas-abuts" href="about.html" >درباره ما</a>
  </div>
 <div id="iconisleft">
     <ul class="navbar-nav justify-content-end flex-grow-1 pe-3  ">
     <li class="nav-item mx-3" id="liInSearch">
     <div id="serhnav" class="d-flex">
     <form dir="rtl" class="search-forms"><div class="input-groups"><div class="input-group2"><label><input type="" class="search-fields" placeholder="نام و یا کد محصول ..." value=""></label><input type="submit" id="input_sarch_submitNo"  class="rstore-domain-search-button search-submits btn btn-primary" value="جستجو"></div></div><p class="search_product"></p></form>
    
     </div>
    </li>
        <li class="nav-item mx-3 d-none d-lg-block">
        <div id="iconInNavbar">
        <a href="./login.html"><img id="icons1" class="icons_mongment" src="icon/person.svg" title="حساب کاربری"></a>
         </div>
        </li>
        <li  class="nav-item text-light mx-3 d-none d-lg-block">
        <div id="iconInNavbar">
          <a href="./cart.html" title="سبد خرید"><img id="icons2" src="icon/cart2.svg"></a>
          </div><span id="namberIsContTheProduct"></span>
        </li> 
       </ul>
</div>
</div>
     
<div class="nav_sm">
<form class="form_serch">
<a href="index.html"><p class="brand_sm">digeonline</p></a>

  <input class="input_saerch" type="text" name="search" placeholder="نام و یا کد محصول ...">
<div class="icon_name">
<i class="fa fa-search" aria-hidden="true"></i>
  </div>
    </form>  <p class="search_product"></p>

</div>

 </div>
  
 <div id="contener-nav-sm">
 <div class="navbar navbar-expand-lg  fixed-bottom navbar" id="nav-bottom-sm">
   <div class="d-flex">
     <div id="icon-name-nav-sm">
       <a href="/index.html"><img id="icon-sm-nav" src="icon/house.svg"></a>
       <p id="name-icon-nav-sm" >خانه</p>
     </div>
     <div id="icon-name-nav-sm">
       <img id="icon-sm-nav2" src="icon/columns-gap.svg" data-bs-toggle="modal" data-bs-target="#modal-sop">
       <p id="name-icon-nav-sm" >دسته بندی</p>
     </div>
     <div id="icon-name-nav-sm">
       <a href="./cart.html"><img id="icon-sm-nav3" src="icon/cart2.svg"></a>
       <span id="namberIsContTheProduct2"></span>
       <p id="name-icon-nav-sm" >سبد خرید</p>
     
     </div>
     <div id="icon-name-nav-sm">
       <a href="login.html"><img id="icon-sm-nav4" src="icon/person.svg"></a>
       <p id="name-icon-nav-sm" >حساب کاربری</p>
     </div>
   </div>
  </div>
</div>
      
     </div>
   </div>

</nav>`
  );
}

apendnavbar();
//  استیل دهی به نوبار در اسکرول
let navinerhtml = document.querySelector("#navinerhtml");
let iconInNavbar = document.querySelectorAll("#iconInNavbar");
let brand = document.querySelector(".brand");
let searchFields = document.querySelector(".search-fields"); //سرچ اینپوت
let searchSubmits = document.querySelector(".search-submits"); //سرچ باتن
let serhnav = document.querySelector("#serhnav"); // فاصله سرچ در اسکرول
document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 15) {
    navinerhtml.style.height = "61px";
    navinerhtml.style.backgroundColor = "#f3f3f6";
    brand.style.marginTop = "0px";
    iconInNavbar.forEach(function (item) {
      item.style.marginTop = "40%";
      searchFields.style.padding = "7px 15px";
      searchSubmits.style.padding = "6.9px 24px 13px";
    });
    serhnav.style.marginTop = "3%";
  } else {
    navinerhtml.style.height = "77px";
    navinerhtml.style.backgroundColor = "#f9f9fa";
    brand.style.marginTop = "-2px";
    iconInNavbar.forEach(function (item) {
      item.style.marginTop = "80%";
      serhnav.style.marginTop = "6.9%";
      searchFields.style.padding = "7px 15px";
      searchSubmits.style.padding = "6.9px 24px 13px";
    });
  }
});

// دراپ سرچ نوبار
function FindTheProduct() {
  let input_saerch = document.querySelector(".input_saerch");
  let allInputSaerch = [searchFields, input_saerch];
  allInputSaerch.forEach(function (item) {
    item.addEventListener("keyup", function () {
      let search_product = document.querySelectorAll(".search_product");
      search_product.forEach(function (search_product) {
        let searchFields_value = item.value.trim(); // با trim اسپیس عای بعد و قبل جمله حذف میشوند
        var numb = searchFields_value.match(/\d/g); // فقط اعداد را در نظر بگیرد
        try {
          numb = numb.join("");
        } catch {
          false;
        }

        if (
          searchFields_value == "A" ||
          searchFields_value == "نیم بوت مردانه" ||
          searchFields_value == "کفش" ||
          searchFields_value == "نیم بوت" ||
          (Number(numb) >= 50 && Number(numb) < 100)
        ) {
          localStorage.setItem("takA", JSON.stringify("A"));
          search_product.innerHTML = "نیم بوت مردانه";
          search_product.style.padding = "5px";
          search_product.style.boxShadow = "1px 1px 2px 1px #000 ";
        } else if (
          searchFields_value == "B" ||
          searchFields_value == "نیم بوت زنانه" ||
          (Number(numb) >= 100 && Number(numb) < 150)
        ) {
          localStorage.setItem("takA", JSON.stringify("B"));
          search_product.innerHTML = "نیم بوت زنانه";
          search_product.style.boxShadow = "1px 1px 2px 1px #000 ";

          search_product.style.padding = "5px";
        } else if (
          searchFields_value == "C" ||
          searchFields_value == "مانتو" ||
          (Number(numb) >= 150 && Number(numb) < 200)
        ) {
          localStorage.setItem("takA", JSON.stringify("C"));
          search_product.innerHTML = "مانتو";
          search_product.style.boxShadow = "1px 1px 2px 1px #000 ";

          search_product.style.padding = "5px";
        } else if (
          searchFields_value == "D" ||
          searchFields_value == "پیراهن مردانه" ||
          (Number(numb) >= 200 && Number(numb) < 250)
        ) {
          localStorage.setItem("takA", JSON.stringify("D"));
          search_product.innerHTML = "پیراهن مردانه";
          search_product.style.boxShadow = "1px 1px 2px 1px #000 ";

          search_product.style.padding = "5px";
        } else if (
          searchFields_value == "E" ||
          searchFields_value == "ساعت" ||
          (Number(numb) >= 250 && Number(numb) < 300)
        ) {
          localStorage.setItem("takA", JSON.stringify("E"));
          search_product.innerHTML = "ساعت مردانه";
          search_product.style.boxShadow = "1px 1px 2px 1px #000 ";

          search_product.style.padding = "5px";
        } else if (
          searchFields_value == "F" ||
          searchFields_value == "شال" ||
          (Number(numb) >= 300 && Number(numb) < 350)
        ) {
          localStorage.setItem("takA", JSON.stringify("F"));
          search_product.innerHTML = "شال و روسری";
          search_product.style.boxShadow = "1px 1px 2px 1px #000 ";

          search_product.style.padding = "5px";
        } else if (
          searchFields_value == "G" ||
          searchFields_value == "شلوار" ||
          (Number(numb) >= 350 && Number(numb) < 400)
        ) {
          localStorage.setItem("takA", JSON.stringify("G"));
          search_product.innerHTML = "شلوار مردانه";
          search_product.style.boxShadow = "1px 1px 2px 1px #000 ";

          search_product.style.padding = "5px";
        } else if (
          searchFields_value == "H" ||
          searchFields_value == "تیشرت" ||
          (Number(numb) >= 400 && Number(numb) < 450)
        ) {
          localStorage.setItem("takA", JSON.stringify("H"));
          search_product.innerHTML = "تیشرت";
          search_product.style.boxShadow = "1px 1px 2px 1px #000 ";
          search_product.style.padding = "5px";
        } else if (/^\s+$/.test(item.value)) {
          // در نظر نگرفتن اسپیش های خالی
          search_product.innerHTML = "";
          search_product.style.boxShadow = "none";
        } else if (item.value == "") {
          search_product.innerHTML = "";
          search_product.style.boxShadow = "none";

          search_product.style.padding = "0px";
        } else {
          search_product.innerHTML = "محصول یافت نشد";
          search_product.style.padding = "5px";
        }
      });
    });
  });
}
FindTheProduct();
let input_sarch_submitNo = document
  .querySelector("#input_sarch_submitNo")
  .addEventListener("click", function (e) {
    e.preventDefault(); // جلو گیری از پریونت دیفالت سابمیت سرچ
  });
let input_saerch = document
  .querySelector(".input_saerch")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });
// در صورت کلیک  روی دراپ سرچ
let search_product = document
  .querySelector(".search_product")
  .addEventListener("click", function () {
    let search_product = document.querySelector(".search_product");
    if (search_product.innerHTML == "محصول یافت نشد") {
      false;
    } else {
      window.location.href = "store.html";
    }
  });
let input_saerch2 = document.querySelector(".input_saerch");
let search_productr = document.querySelectorAll(".search_product");
search_productr[1].addEventListener("click", function () {
  if (search_productr[1].innerHTML == "محصول یافت نشد") {
    false;
  } else {
    window.location.href = "store.html";
  }
});

let arrowSaerch = [searchFields, input_saerch2];
arrowSaerch.forEach(function (item) {
  item.addEventListener("keyup", function (e) {
    let search_product = document.querySelector(".search_product");
    if (e.keyCode == 8) {
      FindTheProduct(); // در صورت زدن دکمه پاک دوباره اجرا بشه
    } else if (e.keyCode == 13) {
      if (arrowSaerch.value == "") {
        false;
      } else if (search_product.innerHTML == "محصول یافت نشد") {
        false;
      } else {
        window.location.href = "store.html";
      }
    }
  });
});

export { navbar, apendnavbar };
