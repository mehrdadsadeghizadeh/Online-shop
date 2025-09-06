let arrayProductNewManto = [ 
  {
 id: "C155",
 name: "C",
 title: "مانتو زنانه مدل آرا",
 propertyOne: "پارچه نخی",
 propertyTwo: "قابل شستشو با ماشین لباسشویی",
 propertyThree: "اتو کشی در دمای 30 درجه سانتی گراد",
 price: "735,000",
 img: "img/manto woman/17d64ea3627f570f0bff4d175ee0ee154c7ca1d7_1678261075.webp",
},
{
 id: "C156",
 name: "C",
 title: "مانتو زنانه مدلا پرگل",
 propertyOne: "پارچه نخی",
 propertyTwo: "قابل شستشو با ماشین لباسشویی",
 propertyThree: "اتو کشی در دمای 30 درجه سانتی گراد",
 price: "945,000",
 img: "img/manto woman/54b4f3fa2ff51550085b9d1c7985f725d7fd4745_1707920168.webp",
},
{
 id: "C152",
 name: "C",
 title: "مانتو زنانه مدل ویشکا",
 propertyOne: "پارچه نخی",
 propertyTwo: "قابل شستشو با ماشین لباسشویی",
 propertyThree: "اتو کشی در دمای 30 درجه سانتی گراد",
 price: "940,000",
 img: "img/manto woman/ae1fe24621d98b6849e55f4aba23ae4c8b76ef52_1653995039.jpg",
},
{
 id: "C153",
 name: "C",
 title: "مانتو مدل زنانه تولیکا",
 propertyOne: "پارچه نخی",
 propertyTwo: "قابل شستشو با ماشین لباسشویی",
 propertyThree: "اتو کشی در دمای 30 درجه سانتی گراد",
 price: "960,000",
 img: "img/manto woman/d2ed6d2e98733fbee30fd019f54fd99e0195f164_1659004080.jpg",
},
{
 id: "C154",
 name: "C",
 title: "مانتو زنانه مدل آلما",
 propertyOne: "پارچه نخی",
 propertyTwo: "قابل شستشو با ماشین لباسشویی",
 propertyThree: "اتو کشی در دمای 30 درجه سانتی گراد",
 price: "620,000",
 img: "img/manto woman/edced7a1cbaecc46c9a2957c118746979aff8fd0_1676977326.jpg",
},
]

let productnew = document.querySelector(".card-wrapper")
arrayProductNewManto.forEach(function(product){
 productnew.insertAdjacentHTML("afterbegin" , ` <div class="card swiper-slide">
 <div class="image-box">
   <img src="${product.img}" />
 </div>
 <div class="profile-details">
   <div class="name-job">
     <h3 class="name">${product.title}</h3>
     <h4 class="job">${product.price} تومان</h4>
   </div>
 </div>
</div>`)
})

let clicktheicon = document.querySelector('.swiper-button-next')
setInterval(() => {
   clicktheicon.click()
  }, 4500);

  let newmanto = document.querySelector(".newmanto")
  newmanto.addEventListener('click' , () => {
    localStorage.setItem("takA" , JSON.stringify("C"))
  })

// کد های اسلایدر
var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
