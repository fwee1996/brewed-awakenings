import { getProducts } from "./database.js"

const products = getProducts()

//Book 3- column 2 - Product Prices
//this eventListener displays name and price of product when a product is clicked :
document.addEventListener(
"click",
(clickEvent)=>{
    const itemClicked=clickEvent.target
    if (itemClicked.dataset.type==="product"){
        //commented out section is added in module hint but no effect on output
        //const productId=itemClicked.dataset.id
        //for (const product of products) {
            //if (product.id === parseInt(productId)) {
        window.alert(`${itemClicked.dataset.name} costs $${itemClicked.dataset.price}`)
        //}
     //}
    }
}

)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-id="${product.id}" data-type="product" data-price= "${product.price}" data-name="${product.name}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}



