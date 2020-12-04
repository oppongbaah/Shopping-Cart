
export class CartPreview {
  constructor(itemName) {
    this.main();
    this.itemName = itemName;
  }

  main = () => {
    this.configureElements();
    this.configureEvents();
  }

  configureElements = () => {
    this.viewCart = document.getElementById('view-cart');
    this.contShopping = document.getElementById('continue');
    this.deleteBtn = document.querySelector('.glyphicon-trash');
    this.modal = document.getElementById('content-modal');
  }

  configureEvents = () => {
    this.viewCart_Clicked();
    this.contShopping_Clicked();
    this.deleteIcon_CLicked();
  }

  viewCart_Clicked = () => {
    this.viewCart.addEventListener('click', () => {
      event.target.parentElement.setAttribute('href', '/cart');
    });
  }

  contShopping_Clicked = () => {
    this.contShopping.addEventListener('click', () => {
      event.target.parentElement.setAttribute('href', '/');
    });
  }

  deleteIcon_CLicked = () => {
    this.deleteBtn.addEventListener('click', () => {
      let ok = confirm(`This will remove all instances of ${this.itemName} from the cart.
       \n Do you wish to continue this operation?`);
      if(ok){
        this.modal.style.display = 'none';
        this.deleteFromLocalStorage();
      }
    });
  }

  deleteFromLocalStorage = () => {
    localStorage.removeItem(this.itemName);
  }


}
