import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const allOrders = getOrders()

//Book 3- column 2 - Top Salesperson
//this eventListener displays how many products an employee has sold when their name is clicked:
document.addEventListener(
    "click",
    (clickEvent)=>{
        const itemClicked=clickEvent.target
        if (itemClicked.dataset.type==="employee"){
            
            const employeeId=itemClicked.dataset.id


            //this block of code counts the number of product for each employee:
            let counter = 0
            // Iterate all of orders       
            for (const order of allOrders) {
                // Does the haulerId foreign key match the id?
                if (order.employeeId === parseInt(employeeId)) {
                    // Increase the counter by 1
                    counter++
                }
            }



            for (const employee of employees) {
                //if current array obj of employee matches the data attribute of the clicked employee:
                if (employee.id === parseInt(employeeId)) {

             window.alert(`${itemClicked.dataset.name} sold ${counter} products`)
         
                }
            }
    
        }
    }
    )

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-id="${employee.id}" data-type="employee" data-name="${employee.name}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}




//Module's solution:
// const employeeOrders = (id) => {
//     const fulfilledOrders = 0

//     for (const order of orders) {
//         if (order.employeeId === id) {
//             // Increment the number of fulfilled orders
//         }
//     }

//     // Return how many orders were fulfilled
// }

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.dataset.type === "employee") {
//             const employeeId = itemClicked.dataset.id

//             for (const employee of employees) {
//                 if ( === parseInt(employeeId)) {

//                     const orderCount = employeeOrders()

//                     window.alert(` ${employee.name} sold ${} products `)
//                 }
//             }
//         }
//     }
// )