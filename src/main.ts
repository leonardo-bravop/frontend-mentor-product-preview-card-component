import './sass/main.scss';
import mobileSrc from './assets/images/image-product-mobile.jpg'
import desktopSrc from './assets/images/image-product-desktop.jpg'
import cart from './assets/images/shopping-cart.svg'

const productData = {
  name: "Gabrielle Essence Eau De Parfum",
  type: "perfume",
  description: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  mainPrice: 149.99,
  originalPrice: 169.99,
  mobileSrc,
  desktopSrc
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
   <div class="product-card">
    <picture class="product-image">
      <source media="(min-width: 48rem)" srcset="${productData.desktopSrc}">
      <img src="${productData.mobileSrc}" alt="${productData.name}">
    </picture>


    <div class="description">
      <span class="type">${productData.type}</span>
      <h1>${productData.name}</h1>
      <p>${productData.description}</p>
      <div class="price">
        <span class="main-price">$${productData.mainPrice}</span>
        <span class="original-price">$${productData.originalPrice}</span>
      </div>
      <button class="cta" aria-label="Add product to cart">
        <img src="${cart}" class="icon" alt="cart icon"/>
        <span>Add to Cart</span>
      </button>
    </div>
   </div>
  </main>
`