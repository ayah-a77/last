/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
              sectionTop = current.offsetTop - 58;
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-clear-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration: 2500,
    delay: 400,


})
sr.reveal('.home__data')
sr.reveal('.home__img',{delay:500})
sr.reveal('.home__social',{delay:600})
sr.reveal('.about__img',{origin:'left'})
sr.reveal('.about__data',{origin:'right'})
// Navigation between sections
const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav__link');
const leftArrow = document.querySelector('.nav-arrow-left');
const rightArrow = document.querySelector('.nav-arrow-right');

let currentSectionIndex = 0;

function updateActiveSection(index) {
    section.forEach((section, i) => {
        if (i === index) {
            section.scrollIntoView({ behavior: 'smooth' });
            navLinks.forEach(link => link.classList.remove('active-link'));
            navLinks[i].classList.add('active-link');
        }
    });
}

leftArrow.addEventListener('click', () => {
    currentSectionIndex = (currentSectionIndex > 0) ? currentSectionIndex - 1 : section.length - 1;
    updateActiveSection(currentSectionIndex);
});

rightArrow.addEventListener('click', () => {
    currentSectionIndex = (currentSectionIndex < section.length - 1) ? currentSectionIndex + 1 : 0;
    updateActiveSection(currentSectionIndex);
});

// Update active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    section.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
            currentSectionIndex = Array.from(section).findIndex(s => s.id === current);
        }
    });
});
/*=============== SIGN IN ANIMATIONS ===============*/
const inputContainers = document.querySelectorAll('.signin__input-container');

// تأثيرات hover للأيقونات
inputContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
        const icon = container.querySelector('.signin__icon');
        icon.style.color = 'var(--first-color-lighten)';
        icon.style.transform = 'scale(1.1)';
        
        const line = container.querySelector('.signin__line');
        line.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    });

    container.addEventListener('mouseleave', () => {
        const input = container.querySelector('.signin__input');
        const icon = container.querySelector('.signin__icon');
        const line = container.querySelector('.signin__line');
        
        if (!input.matches(':focus')) {
            icon.style.color = 'white';
            icon.style.transform = 'scale(1)';
            line.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        }
    });

    // تأثيرات التركيز
    const input = container.querySelector('.signin__input');
    input.addEventListener('focus', () => {
        const icon = container.querySelector('.signin__icon');
        const line = container.querySelector('.signin__line');
        
        icon.style.color = 'var(--first-color-lighten)';
        icon.style.transform = 'scale(1.1)';
        line.style.backgroundColor = 'white';
        line.style.height = '2px';
    });

    input.addEventListener('blur', () => {
        const icon = container.querySelector('.signin__icon');
        const line = container.querySelector('.signin__line');
        
        icon.style.color = 'white';
        icon.style.transform = 'scale(1)';
        line.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        line.style.height = '1px';
    });
});
// Cart functionality
const cart = {
    items: [],
    container: document.querySelector('.cart__items'),
    emptyElement: document.querySelector('.cart__empty'),
    contentElement: document.querySelector('.cart__content'),
    totalElement: document.querySelector('.cart__total-price'),
  
    init() {
      this.updateCartUI();
      this.setupEventListeners();
    },
  
    setupEventListeners() {
      // Add event listeners to all "Add to Cart" buttons
      document.querySelectorAll('.product__button').forEach(button => {
        button.addEventListener('click', (e) => {
          const productCard = e.target.closest('.product__card');
          this.addItem({
            id: productCard.dataset.id,
            title: productCard.querySelector('.product__title').textContent,
            price: productCard.querySelector('.product__price').textContent,
            img: productCard.querySelector('.product__img').src
          });
        });
      });
    },
  
   // في كود JavaScript الخاص بالسلة، قم بتعديل دالة addItem كما يلي:
addItem(product) {
    const productCard = document.querySelector(`.product__card[data-id="${product.id}"]`);
    const stockElement = productCard.querySelector('.stock__quantity');
    let stock = parseInt(stockElement.textContent);
    
    if (stock <= 0) return;
    
    stock--;
    stockElement.textContent = stock;
    
    if (stock === 0) {
        const button = productCard.querySelector('.product__button');
        button.classList.add('sold-out');
        button.innerHTML = '<i class="ri-close-line"></i> Sold Out';
        button.disabled = true;
        
        const soldOutText = document.createElement('div');
        soldOutText.className = 'sold-out-text';
        soldOutText.textContent = 'Sold Out';
        productCard.querySelector('.product__content').insertBefore(
            soldOutText, 
            productCard.querySelector('.product__button')
        );
    }
    
    // بقية كود إضافة المنتج للسلة
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        this.items.push({
            ...product,
            quantity: 1
        });
    }
    
    this.updateCartUI();
    this.animateAddToCart(product.id);
},
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId);
      this.updateCartUI();
    },
  
    animateAddToCart(productId) {
      const productElement = document.querySelector(`.product__card[data-id="${productId}"]`);
      if (!productElement) return;
      
      const clone = productElement.cloneNode(true);
      const productRect = productElement.getBoundingClientRect();
      const cartIcon = document.querySelector('.nav__cart-icon');
      
      clone.style.position = 'fixed';
      clone.style.top = `${productRect.top}px`;
      clone.style.left = `${productRect.left}px`;
      clone.style.width = `${productRect.width}px`;
      clone.style.height = `${productRect.height}px`;
      clone.style.zIndex = '1000';
      clone.style.transition = 'all 0.5s ease';
      clone.style.pointerEvents = 'none';
      
      document.body.appendChild(clone);
      
      setTimeout(() => {
        const cartRect = cartIcon.getBoundingClientRect();
        clone.style.top = `${cartRect.top}px`;
        clone.style.left = `${cartRect.left}px`;
        clone.style.width = '20px';
        clone.style.height = '20px';
        clone.style.opacity = '0.5';
      }, 10);
      
      setTimeout(() => {
        clone.remove();
      }, 600);
    },
  
    updateCartUI() {
      // Clear current items
      this.container.innerHTML = '';
      
      // Add all items
      this.items.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart__item';
        itemElement.innerHTML = `
          <img src="${item.img}" alt="${item.title}" class="cart__item-img">
          <h3 class="cart__item-title">${item.title}</h3>
          <div class="cart__item-price">${item.price} x ${item.quantity}</div>
          <button class="cart__item-remove" data-id="${item.id}">
            <i class="ri-delete-bin-line"></i> Remove
          </button>
        `;
        
        // Add animation delay for each item
        itemElement.style.animationDelay = `${index * 0.1}s`;
        this.container.appendChild(itemElement);
        
        // Add event listener to remove button
        itemElement.querySelector('.cart__item-remove').addEventListener('click', () => {
          this.removeItem(item.id);
        });
      });
      
      // Update total
      const total = this.items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return sum + (price * item.quantity);
      }, 0);
      
      this.totalElement.textContent = `$${total.toFixed(2)}`;
      
      // Toggle empty state
      if (this.items.length === 0) {
        document.getElementById('cart').classList.add('cart--empty');
        document.getElementById('cart').classList.remove('cart--has-items');
      } else {
        document.getElementById('cart').classList.add('cart--has-items');
        document.getElementById('cart').classList.remove('cart--empty');
      }
    }
  };
  
  // Initialize cart when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    cart.init();
  });
  /* تأثير التمرير للهيدر
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});*/