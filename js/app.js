import { navbar, apendnavbar } from "../component/navbar/navbar.js";
import { footer, appendfooter } from "../component/footer/footer.js";
import {
  modalSapContent,
  appendModalSap,
} from "../component/modal-sop/modal-sap.js";
// لودر سایت
const loaderElem = document.querySelector(".loader");
let nav = document.querySelector("nav");
window.addEventListener("load", function () {
  loaderElem.className += " hidden";
  nav.style.display = "block";
});
// ارسال تگ محصول برای نمایش  آن در فروشگاه
let allTakA = document.querySelectorAll(".dropdown-content a");
let allTakB = document.querySelectorAll(".sop-mod a");
let allTak_slider_gerd = document.querySelectorAll(
  ".carousel-sliderAllproduct img"
);
let getTakAB = [allTakA, allTakB, allTak_slider_gerd];
getTakAB.forEach(function (tak) {
  tak.forEach(function (a) {
    a.addEventListener("click", () => {
      let takAislocolstoreg = a.name;
      localStorage.setItem("takA", JSON.stringify(takAislocolstoreg));
    });
  });
});

//   نمایش تعداد محصولات موجود در سبد خرید در نوبار
export function NumberOfProduct() {
  let displayTheNumberOfProducts = document.querySelector(
    "#namberIsContTheProduct"
  );
  let displayTheNumberOfProducts2 = document.querySelector(
    "#namberIsContTheProduct2"
  );
  let NumberOfProduct = [
    displayTheNumberOfProducts,
    displayTheNumberOfProducts2,
  ];

  let getTheProductInTheShoppingCart =
    JSON.parse(localStorage.getItem("cart")) || 0;
  let numberOfEachProduct;
  let getnumberproducttocartArrey = [];
  let theTotalNumberOfProductsInTheShoppingCart;

  for (let i = 0; i < getTheProductInTheShoppingCart.length; i++) {
    numberOfEachProduct =
      JSON.parse(localStorage.getItem(getTheProductInTheShoppingCart[i].id)) ||
      1;
    getnumberproducttocartArrey.push(Number(numberOfEachProduct));
    theTotalNumberOfProductsInTheShoppingCart =
      getnumberproducttocartArrey.reduce((sum1, sum2) => sum1 + sum2, 0);
    NumberOfProduct.forEach(function (number) {
      number.innerHTML = theTotalNumberOfProductsInTheShoppingCart;
    });
  }
}
NumberOfProduct();

// در صورت لاگین کاربر آیکون تغیر کند  وپیغامی نمایش دهد
let login = JSON.parse(localStorage.getItem("login"));
let icons1 = document.querySelector("#icons1");
let icons2 = document.querySelector("#icons1");
let login_Manegement = JSON.parse(localStorage.getItem("login_Manegement"));
let icon_sm_nav4 = document.querySelector("#icon-sm-nav4");
if (login) {
  icons1.setAttribute("src", "icon/person-check.svg");
  icon_sm_nav4.setAttribute("src", "icon/person-check.svg");
} else if (login_Manegement) {
  icons2.setAttribute("src", "icon/person-check.svg");
  icon_sm_nav4.setAttribute("src", "icon/person-check.svg");
} else {
  icons1.setAttribute("src", "icon/person.svg");
  icon_sm_nav4.setAttribute("src", "icon/person.svg");
}
let modalLogin = document.querySelector(".modal-login");
let modalNo = JSON.parse(localStorage.getItem("modal-no"));
if (modalNo) {
  modalLogin.style.display = "block";
  modalLogin.style.display = "flex";
  localStorage.removeItem("modal-no");
}
setInterval(() => {
  try {
    modalLogin.style.display = "none";
  } catch {
    false;
  }
}, 4500);
// در صورت وررود به پنل مدیریت آیکون تغیر کند

// در صورت ورود کاربر
let modalLogin2 = document.querySelector(".modal-login2");
let modalNo2 = JSON.parse(localStorage.getItem("modal-no2"));

if (modalNo2) {
  modalLogin2.style.display = "block";
  modalLogin2.style.display = "flex";
  localStorage.removeItem("modal-no2");
}
setInterval(() => {
  try {
    modalLogin2.style.display = "none";
  } catch {
    false;
  }
}, 4500);
// در صورت اضافه شدن محصول جدید
let modalLogin3 = document.querySelector(".modal-login3");
let modalNo3 = JSON.parse(localStorage.getItem("newP"));
try {
  if (modalNo3) {
    modalLogin3.style.display = "block";
    modalLogin3.style.display = "flex";
    localStorage.removeItem("newP");
  }
  setInterval(() => {
    try {
      modalLogin3.style.display = "none";
    } catch {
      false;
    }
  }, 4500);
} catch {
  false;
}

//  در صورت کلیک روی سه باکس معرفی محصولات
let box = document.querySelectorAll(".card-list .card-item");

try {
  box[0].addEventListener("click", function () {
    localStorage.setItem("takA", JSON.stringify("B"));
    window.location.href = "store.html";
  });
  box[1].addEventListener("click", function () {
    localStorage.setItem("takA", JSON.stringify("E"));
    window.location.href = "store.html";
  });
  box[2].addEventListener("click", function () {
    localStorage.setItem("takA", JSON.stringify("G"));
    window.location.href = "store.html";
  });
} catch {
  false;
}
///////////// هاور روی عکس خم جل شه
window.onload = function () {
  const imageElement = document.querySelectorAll(".hiverme");
  imageElement.forEach(function (img) {
    if (img) {
      const handleMouseMove = (e) => {
        let rect = img.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let dx = (x - rect.width / 2) / (rect.width / 2);
        let dy = (y - rect.height / 2) / (rect.height / 2);

        img.style.transform = `perspective(500px) rotateY(${
          dx * 5
        }deg) rotateX(${-dy * 5}deg)`;
      };

      const handleMouseLeave = () => {
        img.style.transform = "";
      };

      img.addEventListener("mousemove", handleMouseMove);
      img.addEventListener("mouseleave", handleMouseLeave);
    }
  });
};
