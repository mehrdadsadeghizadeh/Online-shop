let err = document.querySelector(".err");
let butoon = document.querySelector("button");
butoon.addEventListener("click", function () {
  let input_name = document.querySelector("#input_name");
  let err_name = document.querySelector(".err_name");
  let input_tlefon = document.querySelector("#input_tlefon");
  let err_tlefon = document.querySelector(".err_tlefon");
  let email = document.querySelector("#email");
  let textarea = document.querySelector("textarea");
  let textarea_value = textarea.value;
  let input_tlefon_value = input_tlefon.value;
  let err_textarea = document.querySelector(".err_textarea");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const digits_only = (string) =>
    [...string].every((c) => "0123456789".includes(c));

  if (input_name.value == "" || input_name.value == " ") {
    err_name.innerHTML = "لطفا نام خود را خالی نگذارید";
    input_name.style.borderColor = "red";
  } else if (
    input_tlefon.value == "" ||
    !digits_only(input_tlefon.value) ||
    input_tlefon_value.length < 11 ||
    input_tlefon_value.length > 11
  ) {
    input_name.style.borderColor = "rgb(228, 228, 228)";
    err_name.innerHTML = "";
    input_tlefon.value != ""
      ? (err_tlefon.innerHTML = " شماره تلفن وارد شده صحیح نیست")
      : (err_tlefon.innerHTML = "لطفا شماره تلفن خود را وارد کنید");

    input_tlefon.style.borderColor = "red";
  } else if (!email.value.match(pattern)) {
    err_tlefon.innerHTML = "";
    input_tlefon.style.borderColor = "rgb(228, 228, 228)";
    email.style.borderColor = "red";
    err.innerHTML = "لطفا یک ایمیل معتبر وارد کنید";
  } else if (textarea_value.length < 20) {
    email.style.borderColor = "rgb(228, 228, 228)";
    err.innerHTML = "";
    err_textarea.innerHTML = "توضیحات نباید کمتر از 20 کارکتر باشد";
    textarea.style.borderColor = "red";
  } else {
    err.innerHTML = "";
    window.location.href = "contactUs.html";
  }
});
// در صورت زدن روی اینتر
let input_Description = document.querySelector("#w3review");
let email = document.querySelector("#email");
let input_tlefon = document.querySelector("#input_tlefon");
let input_name = document.querySelector("#input_name");
let arry = [input_name, input_tlefon, email, input_Description];
arry.forEach(function (arrow) {
  arrow.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
      // butoon.onclick
      butoon.click()
    }
  });
});
