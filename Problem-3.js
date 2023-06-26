const uniqueArr = (arr = []) => { 
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!newArr.includes(element)) {
            newArr.push(element)
        }
    }
    return newArr;
}

const numArr = [1 , 2, 3, 1, 2, 4, 5, 5, 2, 3,7,7,7]; 

console.log(uniqueArr(numArr))