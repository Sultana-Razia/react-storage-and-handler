const add = (first, second) => {
    return first + second;
}

const multiply = (first, second) => {
    return first * second;
}

// const items = [
//     { id: 1, name: 'alta', price: 100 },
//     { id: 2, name: 'palish', price: 200 },
//     { id: 3, name: 'powder', price: 300 },
//     { id: 4, name: 'churi', price: 400 },
//     { id: 5, name: 'kharu', price: 500 },
//     { id: 6, name: 'mala', price: 600 }
// ]
// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemSumReducer, 0);

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.age;
    const total = products.reduce(reducer, 0);
    return total;
}

export {
    add,
    multiply,
    getTotalPrice as getTotal
};