function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let newArr2 = [];
  for (let i = 0; i < size; i++) {
   newArr.push(arr[i])
   newArr2.push(arr[i + size])
  console.log(newArr);
  console.log(newArr2)
  
}
 return newArr
}




chunkArrayInGroups(["a", "b", "c", "d"], 2);