//console.log(20)

// let marks=30
// if(marks>=40)
// {
//     console.log('pass')
// }
// else{
//     console.log('fail')
// }

// let arr=[1,2,3,4,5]
// const addone=(num)=>{return num+1}
// let res=arr.map(addone)
// let double=arr.map((num)=>num*2)
// console.log(double)
// let multiply=arr.map((num)=>num*5)
// console.log(multiply)

let products=[
    {id:1,name:'laptop',price:25000},
    {id:2,name:'mobile',price:10000},
    {id:3,name:'keyboard',price:5000},
]

let product=products.filter((p)=>p.price>6000)
console.log(product)

let productName=products.map((product)=>{console.log(product.name)})

let arr=[1,2,3,4,5,6]
let b=arr.filter((num)=>num>3)
console.log(b)

let c=arr.filter((num)=>num%2)
console.log(c)

let a=[1,2,3,4,5,6]
let sum=a.reduce((total,curr)=>{return total+curr},1)
console.log(sum)