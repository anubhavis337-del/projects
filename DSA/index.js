// let arr=[5,3,6,21,8,4]
// let n=arr.length
// for(let i=0;i<n-1;i++){
//     for(let j=0;j<n-1-i;j++){
//    if(arr[j]>arr[j+1]){
//     let temp=arr[j]
//       arr[j]=arr[j+1]
//      arr[j+1]=temp
//      console.log(temp)
//    }
//     }
// }
// console.log(arr)

let arr = [5, 8, 3];
let n = arr.length;
for (let i = 0; i < n-1;i++){
  for (let j = i + 1;j<n;j++){
    console.log(arr[j]);
  }
}
