const findMatching = (str = '') =>  { 
    const processedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let char = {}
    for (let i = 0; i < processedStr.length; i++) {
        const element = processedStr[i];
       if (char[element]) {
        char[element]++
       } 
       else { 
        char[element] = 1
       }
    }
    let maxVal = 1;
    for (const key in char) {
        if (Object.hasOwnProperty.call(char, key)) {
            const element = char[key];
            if (element > maxVal ) {
                maxVal++;
            }
        }
    }
    const tst = Object.keys(char).find(item => char[item] === maxVal)
    
   return tst
}


const sent = 'Hello World'; 

console.log(findMatching(sent))