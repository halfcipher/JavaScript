var isEven = (element) => {
//     if (element % 2 === 0){
//         return true;
//     }
//     return false;
// }
return element % 2 ===0;
}

// console.log(isEven(3));

var result = [2,4,5,8].every(isEven);

console.log(result);
