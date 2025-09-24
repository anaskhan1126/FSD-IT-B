const number=[1,2,3,4,5,6,7,8,9];
const newnum=number.filter((num)=>(num%2!=0))
console.log(newnum);
const num1=number.map((num)=>(num*5));
console.log(num1);
const sum=number.reduce((num,count)=>num+count,2)
console.log(sum);