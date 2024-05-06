import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const allProducts = getProducts()
const allEmployees = getEmployees()
const orders = getOrders()

// Function whose responsibility is to find the product for an order
const findProduct = (order, allProducts) => {
    let orderProduct = null
    for (const product of allProducts) {
        if (product.id === order.productId) {
            //correction: product.name instead of the whole product object
            orderProduct = product.name
            break // Exit the loop once the product is found
        }
    }
    return orderProduct
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, allEmployees) => {
    let orderEmployee = null
    for (const employee of allEmployees) {
        if (employee.id === order.employeeId) {
            //correction: employee.name instead of the whole employee object
            orderEmployee = employee.name
            break // Exit the loop once the employee is found
        }
    }
    return orderEmployee
}

export const Orders = () => {
    let html = "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, allEmployees)
        const product = findProduct(order, allProducts)

        html += `<li>${product} was sold by ${employee} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}