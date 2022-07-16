const order1={
    customer:{
        name: 'John',
        phone: '123'
    },
    cart:[
            {
        product: 'Bread',
        quantity: 10,
        unitPrice: 10,
        totalPrice: 100
        }
    ],
    total:100,
    paid:80,
    Due:20

}
const order2={
    customer:{
        name: 'Smith',
        phone: '124'
    },
    cart:[
            {
        product: 'Bread',
        quantity: 5,
        unitPrice: 10,
        totalPrice: 50
        },
            {
        product: 'Rice',
        quantity: 10,
        unitPrice: 7,
        totalPrice: 70
        }
    ],
    total:120,
    paid:110,
    Due:10

}
const order3={
    customer:{
        name: 'Bob',
        phone: '124'
    },
    cart:[
            {
        product: 'Coffee',
        quantity: 10,
        unitPrice: 20,
        totalPrice: 200
        }
    ],
    total:200,
    paid:200,
    Due:0

}
const orders=[order1, order2, order3]

// Calculate total orders amount : 420
const totalOrdersAmount =orders.reduce((OrderTotalPrice, OrderTotal)=> OrderTotalPrice + OrderTotal.total,0)
console.log('Total Orders Amount ',totalOrdersAmount)

// Calculate total paid amount : 390
const totalPaidAmount =orders.reduce((OrderTotalPrice, OrderTotal)=> OrderTotalPrice + OrderTotal.paid,0)
console.log('Total Orders Amount ',totalPaidAmount)