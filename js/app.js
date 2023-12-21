const dataSystem = document.querySelectorAll("[data-system]");
const dataProduct = document.querySelectorAll("[data-product]");

for (const data of dataSystem) {
  data.addEventListener("click", function () {
    for (const product of dataProduct) {
      if (
        this.dataset.system === "all" ||
        product.dataset.product === this.dataset.system
      ) {
        product.classList.remove("d-none");
      } else {
        product.classList.add("d-none");
      }
    }
  });
}
