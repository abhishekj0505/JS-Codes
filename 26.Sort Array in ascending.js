const arr = [2, 4, 3, 6, 55, 334, 45, 23]

const sorting = (arr) => {

    return arr.sort((a, b) => {
        return a - b
    })
}

console.log(sorting(arr))