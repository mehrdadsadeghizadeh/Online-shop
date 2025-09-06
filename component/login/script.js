const form = document.querySelector("form");
(eField = form.querySelector(".email")),
  (eInput = eField.querySelector("input")),
  (pField = form.querySelector(".password")),
  (pInput = pField.querySelector("input"));
form.onsubmit = (e) => {
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  eInput.value == "" ? eField.classList.add("shake", "error") : checkEmail();
  pInput.value == "" ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(() => {
    //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = () => {
    checkEmail();
  }; //calling checkEmail function on email input keyup
  pInput.onkeyup = () => {
    checkPass();
  }; //calling checkPassword function on pass input keyup

  function checkEmail() {
    //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    let email = JSON.parse(localStorage.getItem("email"));
    if (!eInput.value.match(pattern)) {
      //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      eInput.value != ""
        ? (errorTxt.innerText = "لطفا یک آدرس ایمیل معتبر وارد کنید")
        : (errorTxt.innerText = "این قسمت را نمیتوانید خالی بگذارید");
    } else if (eInput.value !== email) {
      // در صورت وجود ایمیل از قبل لاگین شود
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      errorTxt.innerText = "ایمیل یافت نشد";
    } else {
      //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass() {
    //checkPass function
    let lensinpasword = pInput.value;
    let errorTxt2 = document.querySelector("#password-error");
    let pasword = JSON.parse(localStorage.getItem("pasword"));
    if (pInput.value == "") {
      //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    } else if (lensinpasword.length < 8) {
      errorTxt2.innerText = "پسورد نمیتواند کمتر از 8 کراکتر باشد";
      pField.classList.add("error");
      pField.classList.remove("valid");
    } else if (pInput.value !== pasword) {
      pField.classList.add("error");
      pField.classList.remove("valid");
      errorTxt2.innerText = "پسورد نادرست است";
    } else {
      //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if (
    !eField.classList.contains("error") &&
    !pField.classList.contains("error")
  ) {
    window.location.href = "index.html"; //redirecting user to the specified url which is inside action attribute of form tag
    localStorage.setItem("email", JSON.stringify(eInput.value));
    localStorage.setItem("pasword", JSON.stringify(pInput.value));
    localStorage.setItem("login", JSON.stringify("login"));
    localStorage.setItem("modal-no2", JSON.stringify("modal-no2"));
  }
};
// بازگشت به خانه
let bakToHome = document.querySelector("#bakToHome");
bakToHome.addEventListener("click", function () {
  window.location.href = "index.html";
});
// // لودر سایت
const loaderElem = document.querySelector(".loader");
let nav = document.querySelector("nav");
window.addEventListener("load", function () {
  loaderElem.className += " hidden";
});
// در صورت کلیک روی یجاد حساب ...
let newacant = document.querySelector("#newacant");
let wrapper = document.querySelector(".wrapper");
let wrapperNewacant = document.querySelector("#wrapper-newacant");
newacant.addEventListener("click", function () {
  wrapper.style.display = "none";
  wrapperNewacant.style.display = "block";
});
// در صورت کلیک روی ایجاد حساب
let accantme = document.querySelector("#accantme");
accantme.addEventListener("click", function () {
  wrapper.style.display = "block";
  wrapperNewacant.style.display = "none";
});
// در صورت لاگین کاربر
let login = JSON.parse(localStorage.getItem("login"));
let contener__login = document.querySelector(".contener__login");
if (login) {
  wrapper.style.display = "none";
  wrapperNewacant.style.display = "none";
  contener__login.style.display = "block";
}
// در صورت کلیک روی من ادمین یا مدیر هستم
let Login_to_management = document.querySelector("#Login_to_management");
let wrapper_Management = document.querySelector("#wrapper_Management");
Login_to_management.addEventListener("click", function () {
  wrapper.style.display = "none";
  wrapper_Management.style.display = "block";
});
// بازگشت به حساب کاربری در صورت مدیر نبودن
let comback_to_login = document.querySelector("#comback_to_login");
comback_to_login.addEventListener("click", function () {
  wrapper.style.display = "block";
  wrapper_Management.style.display = "none";
});

// فرم وروود به مدیریت
const form_Management = document.querySelector(".form_Management");
(Field_Management = form_Management.querySelector("#email_Management")),
  (eInput_Management = Field_Management.querySelector("input")),
  (pField_Management = form_Management.querySelector(".password")),
  (pInput_Management = pField_Management.querySelector("input"));
form_Management.onsubmit = (e) => {
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  eInput_Management.value == ""
    ? Field_Management.classList.add("shake", "error")
    : checkEmail();
  pInput_Management.value == ""
    ? pField_Management.classList.add("shake", "error")
    : checkPass();

  setTimeout(() => {
    //remove shake class after 500ms
    Field_Management.classList.remove("shake");
    pField_Management.classList.remove("shake");
  }, 500);

  eInput_Management.onkeyup = () => {
    checkEmail();
  }; //calling checkEmail function on email input keyup
  pInput_Management.onkeyup = () => {
    checkPass();
  }; //calling checkPassword function on pass input keyup

  function checkEmail() {
    let valueIsname = eInput_Management.value;
    if (valueIsname.length < 10) {
      Field_Management.classList.add("error");
      Field_Management.classList.remove("valid");
    } else {
      Field_Management.classList.remove("error");
      Field_Management.classList.add("valid");
    }
  }

  function checkPass() {
    //checkPass function
    let lensinpasword = pInput_Management.value;
    let errorTxt2 = document.querySelector("#password-error");
    if (pInput_Management.value == "") {
      //if pass is empty then add error and remove valid class
      pField_Management.classList.add("error");
      pField_Management.classList.remove("valid");
    } else if (lensinpasword.length < 8) {
      errorTxt2.innerText = "پسورد نمیتواند کمتر از 8 کراکتر باشد";
      pField_Management.classList.add("error");
      pField_Management.classList.remove("valid");
    } else {
      //if pass is empty then remove error and add valid class
      pField_Management.classList.remove("error");
      pField_Management.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if (
    !Field_Management.classList.contains("error") &&
    !pField_Management.classList.contains("error")
  ) {
    let control_panel = document.querySelector(".control_panel");
    localStorage.setItem(
      "login_Manegement",
      JSON.stringify("login_Manegement")
    );
    wrapper_Management.style.display = "none";
    control_panel.style.display = "block";
  }
};
// در صورت وروود به پنل مدیریت
let control_panel = document.querySelector(".control_panel");
if (localStorage.getItem("login_Manegement")) {
  wrapper.style.display = "none";
  control_panel.style.display = "block";
}
let icon_Exit = document.querySelector(".icon_Exit");
icon_Exit.addEventListener("click", function () {
  localStorage.removeItem("login_Manegement");
  window.location.reload();
});
// دریافت عکس
var loadFile = function (event) {
  var image = document.getElementById("output");
  let img_loding = document.querySelector(".img_loding");
  image.src = URL.createObjectURL(event.target.files[0]);
  if (image.src) {
    img_loding.style.color = "rgb(0, 0, 0)";
  }
  let cartProduct = [];
  cartProduct.push(image.src);
  const prevProducts = localStorage.getItem("img");
  let cartArray = [];
  if (prevProducts) {
    cartArray = JSON.parse(prevProducts);
  }
  cartArray.push(...cartProduct);
  localStorage.setItem("img", JSON.stringify(cartArray));
};
// فرم اضافه کردن محصول جدید
let input_price = document.querySelector(".input_price");
let input_product = document.querySelector(".input_product");
let error_input_price = document.querySelector(".error_input_price");
let error_input_product = document.querySelector(".error_input_product");
// اینپوت قیمت
input_price.addEventListener("keyup", function () {
  if (
    (Number(input_price.value) < 1000 && input_price.value.length >= 1) ||
    Number(input_price.value) > 9999999
  ) {
    input_price.style.borderColor = "red";
    error_input_price.innerHTML = "لطفا قیمت صحیح را وارد کنید";
  } else if (Number(input_price.value) > 1000) {
    input_price.style.borderColor = "#03b01a";
    error_input_price.innerHTML = "";
  } else if (input_price.value.length < 1) {
    input_price.style.borderColor = "#b7b5b5";
    error_input_price.innerHTML = "";
  } else {
    input_price.style.borderColor = "#b7b5b5";
    error_input_price.innerHTML = "";
  }
});
// اینپوت انتخاب محصول
let option = document.querySelectorAll("option");
input_product.addEventListener("keyup", function () {
  for (let i = 0; i < option.length; i++) {
    if (input_product.value == option[i].value) {
      return (
        (input_product.style.borderColor = "#03b01a"),
        (error_input_product.innerHTML = "")
      );
    } else if (input_product.value.length < 1) {
      input_product.style.borderColor = "#b7b5b5";
      error_input_product.innerHTML = "";
    } else {
      input_product.style.borderColor = "red";
      error_input_product.innerHTML = "لطفا یک محصول صحیح را انتخاب کنید";
    }
  }
});
// در صورت کلیک روی ذخیره اطلاعت
let btn_save_product = document.querySelector(".btn_save_product");
var imageintrue = document.getElementById("output");
let img_loding = document.querySelector(".img_loding");
btn_save_product.addEventListener("click", function (e) {
  e.preventDefault();
  if (input_price.style.borderColor == "red" || input_price.value == "") {
    input_price.style.borderColor = "red";
    error_input_price.innerHTML = "لطفا قیمت را وارد کنید";
  }
  if (input_product.style.borderColor == "red" || input_product.value == "") {
    input_product.style.borderColor = "red";
    error_input_product.innerHTML = "لطفا یک محصول را انتخاب کنید";
  }
  if (!imageintrue.src) {
    img_loding.style.color = "red";
  }
  if (
    input_price.style.borderColor != "red" &&
    input_price.value != "" &&
    input_product.style.borderColor != "red" &&
    input_product.value != "" &&
    imageintrue.src
  ) {
    // در صورتی کخ همه این شرط های این شرط درست بود اطاعات را به لوکال ارسال کرد
    localStorage.setItem("newP", JSON.stringify("newP"));
    let areey1 = [];
    areey1.push(input_price.value);
    const prevProducts_1 = localStorage.getItem("price_new_product");
    let areey2 = [];
    if (prevProducts_1) {
      areey2 = JSON.parse(prevProducts_1);
    }
    areey2.push(...areey1);
    localStorage.setItem("price_new_product", JSON.stringify(areey2));

    let areey_1 = [];
    areey_1.push(input_product.value);
    const prevProducts_2 = localStorage.getItem("namr_new_product");
    let areey_2 = [];
    if (prevProducts_2) {
      areey_2 = JSON.parse(prevProducts_2);
    }
    areey_2.push(...areey_1);
    localStorage.setItem("namr_new_product", JSON.stringify(areey_2));
    window.location.href = "index.html";
  }
});

//  فرم حذف محصول
let input_id_product = document.querySelector(".input_id_product");
let error_input_id = document.querySelector(".error_input_id");
input_id_product.addEventListener("keyup", function () {
  if (
    (input_id_product.value.length < 3 && input_id_product.value.length >= 1) ||
    input_id_product.value.length > 4
  ) {
    input_id_product.style.borderColor = "red";
    error_input_id.style.color = "red";
    error_input_id.innerHTML = "لطفا آیدی صحیح را وارد کنید";
  } else if (input_id_product.value.length < 1) {
    error_input_id.innerHTML = "";
    input_id_product.style.borderColor = "#b7b5b5";
  } else {
    input_id_product.style.borderColor = "#f96604";
    error_input_id.style.color = "#f96604";
    error_input_id.innerHTML =
      "لطفا توجه داشته باشید که آیدی درست  را وارد کرده باشید(در صورت اشتباه بودن آیدی محصولی حذف نخواهد شد)";
  }
});
// در صورت کلیک روی باتن حذف محصول
let btn_delet_ptoduct = document.querySelector(".btn_delet_ptoduct");
btn_delet_ptoduct.addEventListener("click", function (e) {
  e.preventDefault();
  if (input_id_product.value.length < 3 || input_id_product.value.length > 4) {
    input_id_product.style.borderColor = "red";
    error_input_id.style.color = "red";
    error_input_id.innerHTML = "لطفا آیدی محصول را وارد کنید";
  } else {
    let areey_1_id = [];
    areey_1_id.push(input_id_product.value);
    const prevProducts_2_id = localStorage.getItem("delet_product_id");
    let idinapush = [];
    if (prevProducts_2_id) {
      idinapush = JSON.parse(prevProducts_2_id);
    }
    idinapush.push(...areey_1_id);
    localStorage.setItem("delet_product_id", JSON.stringify(idinapush));
    window.location.href = "index.html";
  }
});
//  در صورت کلیک روی بازگشت به خانه
let icon_BacktoHome = document.querySelector(".icon_BacktoHome");
icon_BacktoHome.addEventListener("click", function () {
  window.location.href = "index.html";
});

// فرم ثبت نام
let name_form = document.querySelector("#name_form"),
  input_name = name_form.querySelector("input");
const form2 = document.querySelector("#forms");
(eField2 = form2.querySelector("#emails")),
  (eInput2 = eField2.querySelector("input")),
  (pField2 = form2.querySelector("#passwords")),
  (pInput2 = pField2.querySelector("input"));
let pasword = document.querySelector("#password-new"),
  Ipasword = pasword.querySelector("input");
form2.onsubmit = (e) => {
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  eInput2.value == "" ? eField2.classList.add("shake", "error") : checkEmail();
  pInput2.value == "" ? pField2.classList.add("shake", "error") : checkPass();
  Ipasword.value == "" ? pasword.classList.add("shake", "error") : checkPass2();
  input_name.value == ""
    ? name_form.classList.add("shake", "error")
    : checkname();

  setTimeout(() => {
    //remove shake class after 500ms
    name_form.classList.remove("shake");
    eField2.classList.remove("shake");
    pField2.classList.remove("shake");
    pasword.classList.remove("shake");
  }, 500);

  eInput2.onkeyup = () => {
    checkEmail();
  }; //calling checkEmail function on email input keyup
  pInput2.onkeyup = () => {
    checkPass();
  }; //calling checkPassword function on pass input keyup
  Ipasword.onkeyup = () => {
    checkPass2();
  }; //calling checkPassword function on pass input keyup
  input_name.onkeyup = () => {
    checkname();
  };

  function checkname() {
    let nameLenght = input_name.value;
    let error_txt3 = document.querySelector("#error-txt3");
    let icon_error_name = document.querySelector("#icon_error_name");
    if (nameLenght.length < 3 || /^\s+$/.test(input_name.value)) {
      name_form.classList.add("error");
      name_form.classList.remove("valid");
      error_txt3.innerText = "لطفا نام و یا نام خانوادگی خود را وارد کنید";
      icon_error_name.style.display = "block";
      input_name.style.borderColor = "red";
    } else {
      name_form.classList.remove("error");
      name_form.classList.add("valid");
      error_txt3.innerText = "";
      icon_error_name.style.display = "none";
      input_name.style.borderColor = "rgb(246, 97, 169)";
    }
  }

  function checkEmail() {
    //checkEmail function
    let pattern2 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    let email = JSON.parse(localStorage.getItem("email"));
    if (!eInput2.value.match(pattern2)) {
      //if pattern not matched then add error and remove valid class
      eField2.classList.add("error");
      eField2.classList.remove("valid");
      let errorTxt2 = eField2.querySelector("#error-txt2");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      eInput2.value != ""
        ? (errorTxt2.innerText = "لطفا یک آدرس ایمیل معتبر وارد کنید")
        : (errorTxt2.innerText = "این قسمت را نمیتوانید خالی بگذارید");
    } else if (eInput2.value == email) {
      // در صورت وجود ایمیل از قبل ارور دهد
      eField2.classList.add("error");
      eField2.classList.remove("valid");
      let errorTxt2 = eField2.querySelector("#error-txt2");
      errorTxt2.innerText = "این ایمیل ثبت نام شده است";
    } else {
      //if pattern matched then remove error and add valid class
      eField2.classList.remove("error");
      eField2.classList.add("valid");
    }
  }

  function checkPass() {
    //checkPass function
    let lensinpasword2 = pInput2.value;
    let errorTxt2 = document.querySelector("#password-error2");
    if (pInput2.value == "") {
      //if pass is empty then add error and remove valid class
      pField2.classList.add("error");
      pField2.classList.remove("valid");
    } else if (lensinpasword2.length < 8) {
      errorTxt2.innerText = "پسورد نمیتواند کمتر از 8 کراکتر باشد";
      pField2.classList.add("error");
      pField2.classList.remove("valid");
    } else {
      //if pass is empty then remove error and add valid class
      pField2.classList.remove("error");
      pField2.classList.add("valid");
    }
  }

  function checkPass2() {
    //checkPass function
    let lensinpasword3 = Ipasword.value;
    let errorTxt3 = document.querySelector("#password-error3");
    let iconError = document.querySelector("#icon-error");
    if (Ipasword.value == "") {
      //if pass is empty then add error and remove valid class
      pasword.classList.add("error");
      pasword.classList.remove("valid");
      iconError.style.display = "block";
      // errorTxt3.style.display = "block"
    } else if (lensinpasword3.length < 8) {
      errorTxt3.innerText = "پسورد نمیتواند کمتر از 8 کراکتر باشد";
      pasword.classList.add("error");
      pasword.classList.remove("valid");
      iconError.style.display = "block";
      Ipasword.style.borderColor = "red";
    } else if (pInput2.value !== Ipasword.value) {
      // اگر پسورد ها برابر بودند ارور دهد
      pasword.classList.add("error");
      pasword.classList.remove("valid");
      errorTxt3.innerText = "پسورد ها با هم برابر نیستند";
    } else {
      //if pass is empty then remove error and add valid class
      pasword.classList.remove("error");
      pasword.classList.add("valid");
      errorTxt3.innerText = "";
      iconError.style.display = "none";
      Ipasword.style.borderColor = "rgb(246, 97, 169)";
    }
  }
  //if eField and pField doesn't contains error class that mean user filled details properly
  if (
    !name_form.classList.contains("error") &&
    !eField2.classList.contains("error") &&
    !pField2.classList.contains("error") &&
    !pasword.classList.contains("error")
  ) {
    window.location.href = "index.html"; //redirecting user to the specified url which is inside action attribute of form tag
    localStorage.setItem("email", JSON.stringify(eInput2.value));
    localStorage.setItem("pasword", JSON.stringify(pInput2.value));
    localStorage.setItem("name_famile", JSON.stringify(input_name.value));
    localStorage.setItem("login", JSON.stringify("login"));
    localStorage.setItem("modal-no", JSON.stringify("modal-no"));
    localStorage.removeItem("name");
    localStorage.removeItem("famile");
    localStorage.removeItem("codMele");
    localStorage.removeItem("janseyt");
    localStorage.removeItem("sher");
    localStorage.removeItem("telefon");
    localStorage.removeItem("tareghTvalod");
  }
};

// گرفتن اطلاعات از حساب کاربر
let save__name__famile = document.querySelector(".save__name__famile");
save__name__famile.addEventListener("click", function () {
  let Name = document.querySelector(".name");
  let famile = document.querySelector(".famile");
  let name_erroe = document.querySelector("#name_erroe");
  let NameLenght = Name.value;
  if (NameLenght.length < 3 || /^\s+$/.test(Name.value)) {
    name_erroe.innerHTML = "لطفا نام خود را وارد کنید";
  } else {
    localStorage.setItem(
      "name_famile",
      JSON.stringify(Name.value + " " + famile.value)
    );
    window.location.reload();
  }
});
let save__codmle = document.querySelector(".save__codmle");
save__codmle.addEventListener("click", function () {
  let codMele = document.querySelector(".codMele");
  localStorage.setItem("codMele", JSON.stringify(codMele.value));
  window.location.reload();
});
let save__telefon = document.querySelector(".save__telefon");
save__telefon.addEventListener("click", function () {
  let telefon = document.querySelector(".telefon");
  localStorage.setItem("telefon", JSON.stringify(telefon.value));
  window.location.reload();
});
let save__email = document.querySelector(".save__email");
save__email.addEventListener("click", function () {
  let email__getValue = document.querySelector(".email__getValue");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let error_newEmail = document.querySelector(".error_newEmail");
  if (!email__getValue.value.match(pattern)) {
    error_newEmail.innerHTML = "لطفا یک ایمیل معتبر وارد کنید";
  } else {
    localStorage.setItem("email", JSON.stringify(email__getValue.value));
    window.location.reload();
  }
});
let save__password = document.querySelector(".save__password");
save__password.addEventListener("click", function () {
  let passwordPrevious = document.querySelector(".password-previous");
  let password = JSON.parse(localStorage.getItem("pasword"));
  let error_pasword_previous = document.querySelector(
    ".error_pasword_previous"
  );
  let new__pasword = document.querySelector(".new__pasword");
  let error__new__pasword = document.querySelector(".error__new__pasword");
  let new__pasword_value = new__pasword.value;
  if (passwordPrevious.value !== password) {
    error_pasword_previous.innerHTML = "پسورد نادرست است";
  } else if (new__pasword_value.length < 8) {
    error__new__pasword.innerHTML = "پسورد نمیتواند کمتر از 8 کراکتر باشد";
  } else {
    localStorage.setItem("pasword", JSON.stringify(new__pasword.value));
    window.location.reload();
  }
});
let save__janseyt = document.querySelector(".save__janseyt");
save__janseyt.addEventListener("click", function () {
  let janseyt__value = document.querySelector(".janseyt__value");
  localStorage.setItem("janseyt", JSON.stringify(janseyt__value.value));
  window.location.reload();
});
let save__sher = document.querySelector(".save__sher");
save__sher.addEventListener("click", function () {
  let sher__value = document.querySelector(".sher__value");
  localStorage.setItem("sher", JSON.stringify(sher__value.value));
  window.location.reload();
});
let save__taregh__tvalod = document.querySelector(".save__taregh__tvalod");
save__taregh__tvalod.addEventListener("click", function () {
  let taregh__tvalod__value = document.querySelector(".taregh__tvalod__value");
  localStorage.setItem(
    "tareghTvalod",
    JSON.stringify(taregh__tvalod__value.value)
  );
  window.location.reload();
});

// نمایش اطلاعات کاربر
let name_profile = JSON.parse(localStorage.getItem("name_famile"));
let famile_profile = JSON.parse(localStorage.getItem("famile"));
let email = JSON.parse(localStorage.getItem("email"));
let paswordProfile = JSON.parse(localStorage.getItem("pasword"));
let codMele = JSON.parse(localStorage.getItem("codMele"));
let telefon = JSON.parse(localStorage.getItem("telefon"));
let janseyt = JSON.parse(localStorage.getItem("janseyt"));
let sher = JSON.parse(localStorage.getItem("sher"));
let tareghTvalod = JSON.parse(localStorage.getItem("tareghTvalod"));

let nameValue = document.querySelector(".name-value");
if (name_profile && famile_profile) {
  nameValue.innerHTML = name_profile;
} else if (name_profile) {
  nameValue.innerHTML = name_profile;
} else if (famile_profile) {
  nameValue.innerHTML = famile_profile;
} else {
  nameValue.innerHTML = "-";
}
let codMele__value = document.querySelector("#codMele__value");
codMele__value.innerHTML = codMele || "-";
let telefon__value = document.querySelector("#telefon__value");
telefon__value.innerHTML = telefon || "-";
let emailValue = document.querySelector("#email-value");
emailValue.innerHTML = email;
let pasword__value = document.querySelector("#pasword__value");
try {
  pasword__value.innerHTML = Array(paswordProfile.length + 1).join(".");
} catch {
  false;
}
let janseyt_value = document.querySelector("#janseyt_value");
janseyt_value.innerHTML = janseyt || "-";
let sher_value = document.querySelector("#sher_value");
sher_value.innerHTML = sher || "-";
let tareghTvalod_value = document.querySelector("#tareghTvalod_value");
tareghTvalod_value.innerHTML = tareghTvalod || "-";
// خروج از حساب کاربری
let ExitIsAccant = document.querySelector(".ExitIsAccant");
ExitIsAccant.addEventListener("click", function () {
  wrapper.style.display = "block";
  wrapperNewacant.style.display = "none";
  contener__login.style.display = "none";
  localStorage.removeItem("login");
  window.location.href = "index.html";
});
