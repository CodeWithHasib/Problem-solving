const maxMinSum = (arr = []) => { 
    const mx = Math.max(...arr); 
    const mn = Math.min(...arr)
    return mx - mn;
}

const sent =[2, 7, 9, 5, 1, 3, 5];

console.log(maxMinSum(sent))