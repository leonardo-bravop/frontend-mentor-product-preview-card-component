import './style.scss';
import mobileSrc from './assets/images/image-product-mobile.jpg'
import desktopSrc from './assets/images/image-product-desktop.jpg'
import cart from './assets/images/shopping-cart.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
   <div class="product-card">
    <picture class="image">
      <img src="${mobileSrc}" class="mobile-img" alt="product image">
      <img src="${desktopSrc}" class="desktop-img" alt="product image">
    </picture>
    <div class="description">
      <span class="type">Perfume</span>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>
        A floral, solar and voluptuous interpretation composed by Olivier Polge, 
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div class="price">
        <span class="main-price">$149.99</span>
        <span class="original-price">$169.99</span>
      </div>
      <button class="cta">
        <img src="${cart}" class="icon" alt="cart icon"/>
        <span>Add to Cart</span>
      </button>
    </div>
   </div>
  </main>
`