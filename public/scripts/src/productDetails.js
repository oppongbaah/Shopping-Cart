import {CartPreview} from './cartPreview.js';

class ProductDetails {

  selectedSize = ["L"];

  constructor() {
    this.main();
  }

  main = () => {
    this.configureElements();
    this.configureEvents();
  }

  configureElements = (list_container) => {
    this.addToCart_btn = document.querySelector('.btn');
    this.add_btn = document.getElementById('add');
    this.subtract_btn = document.getElementById('subtract');
    this.quantity = document.getElementById('number');
    this.stock = document.getElementById('stock');
    this.itemName = document.getElementById('itemName').textContent;
    this.sizes = document.querySelectorAll('.size');
  }

  configureEvents = (list_container) => {
    this.addToCart_btn_Clicked();
    this.add_btn_Clicked();
    this.subtract_btn_Clicked();
    this.size_btn_Clicked();
  }

  addToCart_btn_Clicked = () => {
    this.addToCart_btn.addEventListener('click', () => {
      event.target.style.backgroundColor = "#087685";
      event.target.textContent = "Add More";
      this.saveToLocalStorage();
      const cartPreview = new CartPreview(this.itemName);
      cartPreview.modal.style.display = 'block';
    });
  }

  add_btn_Clicked = () => {
    this.add_btn.addEventListener('click', () => {
      let quantityVal = parseInt(this.quantity.textContent);
      let stockVal = parseInt(this.stock.textContent);

      if (quantityVal < stockVal) {
        this.quantity.textContent = (quantityVal + 1).toString();
      }
      else {
        alert(`${itemName} is out of Stock`)
      }
    });
  }

  subtract_btn_Clicked = () => {
    this.subtract_btn.addEventListener('click', () => {
      let quantityVal = parseInt(this.quantity.textContent);
      let stockVal = parseInt(this.stock.textContent);

      if (quantityVal > 1) {
        this.quantity.textContent = (quantityVal - 1).toString();
      }
    });
  }

  size_btn_Clicked = () => {
    this.sizes.forEach((size, ind) => {
      size.addEventListener('click', () => {

        if(event.target.checked){
          this.selectedSize.push(event.target.name);
          event.target.parentElement.style.backgroundColor = "#087685";
        }
        else {
          this.selectedSize.pop(event.target.name);
          event.target.parentElement.style.backgroundColor = "tomato";
        }
        this.quantity.textContent = this.selectedSize.length;

        if(this.selectedSize.length > 1) {
          this.enableAddAndSubtract();
        }
        else {
          this.disableAddAndSubtract();
        }

        if(this.quantity.textContent == "0"){
          this.addToCart_btn.disabled = true;
        }
        else {
          this.addToCart_btn.disabled = false;
        }

      });
    });
  }

  enableAddAndSubtract = () => {
    this.add_btn.disabled = true;
    this.add_btn.classList.add('disabled');
    this.subtract_btn.disabled = true;
    this.subtract_btn.classList.add('disabled');
  }

  disableAddAndSubtract = () => {
    this.add_btn.disabled = false;
    this.add_btn.classList.remove('disabled');
    this.subtract_btn.disabled = false;
    this.subtract_btn.classList.remove('disabled');
  }

  saveToLocalStorage = () => {
    const cartObj = {}

    cartObj.imageURL = document.querySelector('.carousel-inner img:first-of-type')
    .getAttribute('src');
    cartObj.price = document.getElementById('itemPrice').textContent;
    cartObj.size = this.selectedSize;
    cartObj.quantity = parseInt(this.quantity.textContent);
    cartObj.name = this.itemName;
    localStorage.setItem(this.itemName, JSON.stringify(cartObj));
  }

}

const app = new ProductDetails();
