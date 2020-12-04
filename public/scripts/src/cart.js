export class Cart {
  constructor(floatingBtn) {
    this.main();
  }

  main = () => {
    this.configureProduct();
  }

  configureProduct = () => {
    const product = `
      <div id="content-modal" class="modal-body">
        <ul>
          <li>
            <div class="cart-image">

            </div>
            <div class="cart-info">

            </div>
            <div class="cart-price">

            </div>
            <div class="cart-delete">

            </div>
          </li>
        </ul>
      </div>
    `;
    // append the product inbetween the header and the footer
    let header = document.querySelector('.modal-header');
    // header.insertAdjacentHTML("afterend", product);
    console.log(header);
  }


}
