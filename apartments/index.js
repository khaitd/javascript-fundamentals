

let tenant1 = {
    name: 'John Doe',
    creditScore: 400,
    salary: 15000,
    age: 19,
    pet: 'Fido'
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
        if (this.allowsPets == false && tenant.pet){
            return `${apt.unit} is available but you have to put up ${tenant.pet} for adoption`
        }
            apt.tenants.push(tenant)
            console.log(`${tenant.name} has rented out ${apt.unit}`)
        
    },
    occupiedApts: function() {
        return this.apartments.filter((el) => {
            return el.tenants.length > 0
        })
    },
    fullApts: function() {
        return this.apartments.filter((el) => {
            return el.tenants.length === el.bedrooms
        }

        )
    },
    apartments: [apt1, apt2, apt3]
}


const div = document.getElementById('building')

const render = () => {
    let h2 = document.createElement('h2')
    h2.innerHTML = building.streetAddress
    div.append(h2)
    let ul = document.createElement('ul')
    building.apartments.forEach((element) => {
        let li = document.createElement('li')
        let button = document.createElement('button')

        button.innerText = 'RENT' + element.unit
        li.innerText = `${element.unit} vacancies: ${element.bedrooms}`
        
        button.addEventListener('click', () => {
            let vacancies = element.bedrooms - 1
            li.innerText = `${element.unit} vacancies: ${vacancies}`
        })

        li.append(button)
        ul.append(li)
    })
    div.append(ul)
}

render()