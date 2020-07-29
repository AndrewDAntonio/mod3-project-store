console.log(`I'm in!!!!!`)

//global scope variables
const itemsList = document.querySelector(`.cart_items`) 
const itemCards = document.querySelector(`#items`)
const totalDiv = document.querySelector(`.total`)
const cartId = 1

// fetch functions
function fetchCart() {return fetch(`http://localhost:3000/carts/${cartId}`)
    .then(response => response.json())
}

function fetchItems() {return fetch('http://localhost:3000/items')
   .then(response => response.json()) 
}

function fetchOneItem(id) {return fetch(`http://localhost:3000/items/${id}`)
    .then(response => response.json())
}


// render cart_items functions

function getItems (cart) {
    const items = cart.cart_items
    return items
}
function renderCartItems(cartItem) {
    const id = cartItem.item_id
    
    const itemLi = document.createElement('li')

    fetchOneItem(id)
    .then(item =>{ 

        itemLi.dataset.id = item.id
        itemLi.className = 'cart-item'
        itemLi.innerHTML =  `
        <div class="info">
            <span class="name">${item.name}:</span> <span class="price">$${item.price}</span>
        </div>
        <div class="buttons">
            <button data-action="delete" data-id="${cartItem.id}" class="delete" >Remove Item</button>
        </div>`
        itemsList.appendChild(itemLi)
    })
}

//render item cards functions

function renderItemCards(item) {
    const itemLi = document.createElement('li')
    itemLi.dataset.id = item.id
    itemLi.className = 'itemCard'
    itemLi.innerHTML = `
    <img src="${item.image_url}" alt="${item.name}">
    <div class="info">
      <h2>
        <span class="name">${item.name}:</span> <span class="price">$${item.price}</span>
      </h2>
    </div>
    <div class="buttons">
      <button data-action="add" data-id="${item.id}" class="add" >Add</button>
    </div>
  `
  itemCards.append(itemLi)
}

//actual rendering
fetchCart()
.then(cartObj => {
    const itemsArray = getItems(cartObj)
    
    itemsArray.forEach(renderCartItems)
    totalDiv.innerHTML = `Total: $${cartObj.total}`
})

fetchItems()
.then(itemsArray => {
    itemsArray.forEach(renderItemCards)
})

//eventListeners

itemCards.addEventListener('click', e => {

    if (e.target.className === 'add') {
       const itemId = parseInt(e.target.dataset.id)
       const newCartItem = {
           cart_id: cartId,
           item_id: itemId
       }
        fetch(`http://localhost:3000/cart_items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCartItem)
        })
        .then(response => response.json())
        .then(cartItemObj => {
            console.log(cartItemObj)
        })

        fetchOneItem(itemId)
        .then(itemObj => {
            renderCartItems(itemObj)
        })
    }
})

itemsList.addEventListener('click', e => {
    if (e.target.className === 'delete') {
        const cartItemId = e.target.dataset.id
        fetch(`http://localhost:3000/cart_items/${cartItemId}`, {
        method: "DELETE"
        })
    const cartItemLi = e.target.closest('.cart-item')
    cartItemLi.remove()
    }
})


//remove from cart button
// checkout button (empty cart)

