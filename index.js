const multiply = (num1, num2) => {
    console.log("Multiplying", num1, 'by', num2)
    return num1 * num2
}



let array = ['a', 'b', 'c', 'd', 'e'];
let array2 = [1,2,3,4,5,6,7]

const determineLength = (arr) => {
    if(arr.length > 5 ){
        return 'This array is long'
    }else {
        return 'This array is short'
    }
}

const askForString = () => {
    let str = prompt("enter string")
    return str

}

askForString()