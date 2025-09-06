let footer = document.querySelector("footer")
function appendfooter(){
footer.insertAdjacentHTML("afterbegin" , `<div id="footer-icons">
<div class="row">
  <div class="col-3">
    <img src="icon/box-seam.svg">
    <h6>تحویل اکسپرس</h6>
    <p>بسته بندی بسیار عالی و بدون نقص</p>
  </div>
  <div class="col-3">
    <img src="icon/hourglass-split.svg">
    <h6>تعویض و مرجوع</h6>
    <p>با خیال راحت میتوانید در صورت عدم رضایت، کالای خریداری شده را تعویض یا مرجوع نمایید.</p>
  </div>
  <div class="col-3">
    <img src="icon/patch-check.svg">
    <h6>ضمانت اصالت کالا</h6>
    <p>تمامی کالاها به صورت اورجینال و با ضمانت اصل بودن ارائه می شود.</p>
  </div>
  <div class="col-3">
    <img src="icon/rocket-takeoff.svg">
    <h6>ارسال سریع</h6>
    <p>خرید ها در سریع ترین زمان ممکن ارسال می‌شود.</p>
  </div>
</div>
</div>
<div id="footer-abuot" class="">
<div  id="icon-abuot">
<div id="border-abuot1" class="d-flex"><p>صفحه اینیستاگرام ما</p><img id="icon-abuot1" src="icon/instagram.svg"></div>
<div id="border-abuot2" class="d-flex"><p>کانال یوتیوب ما</p><img id="icon-abuot2" src="icon/youtube.svg"></div>
<div id="border-abuot3" class="d-flex"><p>کانال تلگرام ما</p><img id="icon-abuot3" src="icon/telegram.svg"></div>
</div>
<div id="footer-abuotme">
<div class="d-flex" id="abuot">




<div id="profileme">
<p> طراح وب : </p>
<h5>مهرداد صادقی زاده</h5>
</div>
</div>
</div>
</div>
<div class="d-flex">
<p class="p-2" id="copyright">
copyright &copy;2024 | digeonline.ir
</p>    
</div>`)}
appendfooter()
export {footer , appendfooter}