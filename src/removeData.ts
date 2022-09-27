export function removeData(valueStock:string, stock:string[]){
    let value = stock.indexOf(valueStock);
    stock.splice(value, 1)
}

