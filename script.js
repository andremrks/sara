// Toggle Menu Function

const toggleMenu = document.getElementById('bar')

toggleMenu.addEventListener('click', openMenu)

function openMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

const close = document.getElementById('close')

close.addEventListener('click', closeMenu)

function closeMenu() {
    const nav = document.getElementById('nav')
    nav.classList.remove('active')
}

// Discount Coupon Validation

const inputCoupon = document.getElementById('inputCoupon')
const applyDiscount = document.getElementById('apply')
const total = document.getElementById('total')
const invalid = document.getElementById('invalid')
const applied = document.getElementById('applied')

applyDiscount.onclick = function() {
    if (inputCoupon.value === "10OFF") {    
        //TODO - function to apply discount
        invalid.style.display = "none"
        applied.style.display = "block"
    } else {
        applied.style.display = "none"
        invalid.style.display = "block"
    }
}

// Remove product from cart

//TODO - Function to remove a product from cart

const removeProduct = document.querySelector('.removeProduct')
const product = document.querySelector

removeProduct.onclick = function() {
    removeProduct.classList.add("productOut")
}


// Change product details photo

const mainImg = document.getElementById('mainImg')
const smallImg = document.getElementsByClassName('smallImg')

smallImg[0].onclick = function() { // Using an array for the "smallImg" class, changing the source of the mainImg on clicking in the element for the element in the array positions
    mainImg.src = smallImg[0].src
}
smallImg[1].onclick = function() {
    mainImg.src = smallImg[1].src
}
smallImg[2].onclick = function() {
    mainImg.src = smallImg[2].src
}
smallImg[3].onclick = function() {
    mainImg.src = smallImg[3].src
}
