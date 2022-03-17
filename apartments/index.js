

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
    tenants: []
}

let apt2 = { 
    bedrooms: 2,
    sqft:50,
    bathrooms: 3, 
    windows: 0, 
    rent: 4500,
    unit: "1B",
   
    tenants: []
}

let apt3 = { 
    bedrooms: 2,
    sqft:50,
    bathrooms: 3, 
    windows: 0, 
    rent: 4500,
    unit: "1C",
    tenants: []
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
    lease: function(apt,tenant){
        if(apt.tenants.length === apt.bedrooms){
            return `${apt.unit} is already full`
        }
            apt.tenants.push(tenant)
            console.log(`${tenant.name} has rented out ${apt.unit}`)
        
    },
    apartments: [apt1, apt2, apt3]
}


