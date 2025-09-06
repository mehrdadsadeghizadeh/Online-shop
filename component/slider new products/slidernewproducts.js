let products = [
  {
    id: "F301",
    name: "F",
    title: "شال زنانه مدل پلیسه",
    propertyOne: "پارچه نخی",
    propertyTwo: "قابل شستشو با ماشین لباسشویی",
    propertyThree: "اتو کشی در دمای 30 درجه سانتی گراد",
    price: "270,000",
    img: "img/sal woman/7744bd24b6fac095595d8d96e4f037f6c8b57557_1676458401.webp",
  },
  {
    id: "G350",
    name: "G",
    title: "شلوار مردانه فاستونی",
    propertyOne: "پارچه نخی",
    propertyTwo: "قابل شستشو با ماشین لباسشویی",
    propertyThree: "اتو کشی در دمای 30 درجه سانتی گراد",
    price: "720,000",
    img: "img/salvar man/6e6148415afdbf1393b320c2d5603c2e5f89a5fe_1677255569.webp",
  },
  {
    id: "D203",
    name: "D",
    title: "پیراهن آستین بلند ",
    propertyOne: "پارچه نخی",
    propertyTwo: "قابل شستشو با ماشین لباسشویی",
    propertyThree: "اتو کشی در دمای 30 درجه سانتی گراد",
    price: "393,000",
    img: "img/perahn man/121594078.webp",
  },
  {
    id: "F300",
    name: "F",
    title: "شال زنانه مدل  مجلسی",
    propertyOne: "پارچه نخی",
    propertyTwo: "قابل شستشو با ماشین لباسشویی",
    propertyThree: "اتو کشی در دمای 30 درجه سانتی گراد",
    price: "220,000",
    img: "img/sal woman/2dcf0c69a9dfefc578b3338d6bed8beb6da962e5_1699479734.webp",
  },
  {
    id: "H403",
    name: "H",
    title: "تی شرت  مارشملو",
    propertyOne: "پارچه نخی",
    propertyTwo: "قابل شستشو با ماشین لباسشویی",
    propertyThree: "اتو کشی در دمای 30 درجه سانتی گراد",
    price: "610,000",
    img: "img/teshrt man/117562766.webp",
  },
  {
    id: "B102",
    name: "B",
    title: "نیم بوت زنانه مارالا",
    propertyOne: "چرم اصل",
    propertyTwo: "بهترین بافت بین چرم های معمول",
    propertyThree: "دارای عایق در کف بوت برای جلوگیری از سرمای زمین",
    price: "910,000",
    img: "img/kafsh woman/6814bd5c583864eeccfbe6801875396caad1aa83_1600537276.webp",
  },
];
let carousel_new_products = document.querySelector(".carousel_new_products");
products.forEach(function (pro) {
  carousel_new_products.insertAdjacentHTML(
    "afterbegin",
    `<li class="card_new_product">
<div class="img"><img src="${pro.img}" alt="img" draggable="false"></div>
<div class="textNewproduct">
<h6 id="name_products_new">${pro.title}</h6>
<span>${pro.price} تومان</span>
</div>
</li>
`
  );
});

const wrapper = document.querySelector(".wrapper_new_products");
const carousel = document.querySelector(".carousel_new_products");
const firstCardWidth = carousel.querySelector(".card_new_product").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper_new_products i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "lefts" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
