let modalSapContent = document.querySelector(".modal-sap-content");
function appendModalSap() {
  modalSapContent.insertAdjacentHTML("afterbegin",`<div class="modal" id="modal-sop">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">دسته بندی</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="sop-mod">
      <div class="d-flex">
      <a href="./store.html" name="D" id="buttin-modal-sop">پیراهن مردانه</a>
      <a href="./store.html" name="H" id="buttin-modal-sop">تیشرت</a></div>
      <div class="d-flex">
      <a href="./store.html" name="E" id="buttin-modal-sop">ساعت مردانه</a>
      <a href="./store.html" name="G" id="buttin-modal-sop">شلوار مردانه</a></div>
      <div class="d-flex">
      <a href="./store.html" name="A" id="buttin-modal-sop">نیم بوت مردانه</a>
      <a href="./store.html" name="C" id="buttin-modal-sop">مانتو</a></div>
      <div class="d-flex">
      <a href="./store.html" name="F" id="buttin-modal-sop">شال و روسری</a>
      <a href="./store.html" name="B" id="buttin-modal-sop">نیم بوت زنانه</a></div>
        </div>
        </div>
      </div>
    </div>
  </div>`);
}
appendModalSap();
export { modalSapContent, appendModalSap };
