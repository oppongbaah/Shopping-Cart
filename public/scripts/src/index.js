
class App {
  constructor() {
    this.main();
  }

  main = () => {
    this.configureEvents();
  }

  configureEvents = () => {
    const images  = document.querySelectorAll('#store img');
    const prices = document.querySelectorAll('#price');
    images.forEach((image, index) => {
      image.addEventListener('mouseover', () => {
        prices[index].classList.add('visible');
      });
      image.addEventListener('mouseleave', () => {
        prices[index].classList.remove('visible');
      });
    });
  }

}

const app = new App();
