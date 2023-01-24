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
const discountRow = document.getElementById('discountRow')
const total = document.getElementById('totalCart')
const invalid = document.getElementById('invalid')
const applied = document.getElementById('applied')

applyDiscount.onclick = function() {
    if (inputCoupon.value === "10OFF") {    
        //TODO - function to apply discount correctly
        invalid.style.display = "none"
        applied.style.display = "block"
        discountRow.style.display = "contents"
        inputCoupon.style.border = "2px solid #63a355"
        inputCoupon.classList.remove('invalidCoupon')
        inputCoupon.classList.add('validCoupon')
        total.innerText = "€210.60"
    } else {
        applied.style.display = "none"
        invalid.style.display = "block"
        inputCoupon.style.border = "2px solid #ed0010"
        inputCoupon.classList.add('invalidCoupon')
        inputCoupon.classList.remove('validCoupon')
    }
}



// Function to remove a product from cart

const productsTable = document.getElementById('productsTable')

const removeProduct1 = document.getElementById('removeProduct1')
removeProduct1.onclick = function() {
    productsTable.deleteRow(productsTable[0])
}

const removeProduct2 = document.getElementById('removeProduct2')
removeProduct2.onclick = function() {
    productsTable.deleteRow(productsTable[1])
}

const removeProduct3 = document.getElementById('removeProduct3')
removeProduct3.onclick = function() {
    productsTable.deleteRow(productsTable[2])
}



// Function to sum product price

const quantP1 = document.getElementById('quantityP1')
const quantP2 = document.getElementById('quantityP2')
const quantP3 = document.getElementById('quantityP3')

quantP1.onchange = function () {
    const value1 = quantP1.value
    const price1 = document.getElementById('totalP1')
    price1.innerHTML = `€${value1 * 78}`
}

quantP2.onchange = function () {
    const value2 = quantP2.value
    const price2 = document.getElementById('totalP2')
    price2.innerHTML = `€${value2 * 78}`
}

quantP3.onchange = function () {
    const value3 = quantP3.value
    const price3 = document.getElementById('totalP3')
    price3.innerHTML = `€${value3 * 78}`
}


//TODO - Update Cart Price




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



