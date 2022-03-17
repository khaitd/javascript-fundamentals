

let tenant1 = {
    name: 'John Doe',
    creditScore: 400,
    salary: 15000,
    age: 19
}

let tenant2 = {
    name: 'Max Fax',
    creditScore: 400,
    salary: 15000,
    age: 30
}



let apt1 = { 
    bedrooms: 2,
    sqft:50,
    bathrooms: 3, 
    windows: 0, 
    rent: 4500,
    unit: "1A",
    tentants: tenant1
}

let apt2 = { 
    bedrooms: 2,
    sqft:50,
    bathrooms: 3, 
    windows: 0, 
    rent: 4500,
    unit: "1B",
    tentants: tenant2
}

let apt3 = { 
    bedrooms: 2,
    sqft:50,
    bathrooms: 3, 
    windows: 0, 
    rent: 4500,
    unit: "1C",
    tentants: tenant2
}



// let tenant3 = {
//     name: 'John Doe',
//     creditScore: 400,
//     salary: 15000,
//     age: 19
// }

let building = {
    streetAddress: '711 oak street',
    laundry: false,
    allowsPets: false,
    apartments: [apt1, apt2, apt3]
}


