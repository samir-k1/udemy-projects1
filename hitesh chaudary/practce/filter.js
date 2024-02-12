// const num=[1,2,3,4,5,6,7,8,]


// const newNum=num.filter((num)=>num>5)
// console.log(newNum)


// const newNum=num.filter((num)=>{
// return num>6;
// })
// console.log(newNum)


// const arr=[1,2,3,4,5,7,8,9]
// const myNum=[]
// arr.forEach((num)=>{
//     if (num>5) {
//     myNum.push(arr)
        
//     }
// })
// console.log(myNum)


const books=[
    {
      "name": "To Kill a Mockingbird",
      "genre": "Classic",
      "year": 1961
    },
    
    {
      "name": "1984",
      "genre": "Dystopian",
      "year": 1949
    },
    {
      "name": "The Great Gatsby",
      "genre": "Fiction",
      "year": 1925
    },
    {
      "name": "Pride and Prejudice",
      "genre": "Romance",
      "year": 1813
    },
    {
      "name": "Mockingbird",
      "genre": "Coming-of-age",
      "year": 1960
    },
    {
      "name": "To Kill a Mockingbird",
      "genre": "Classic",
      "year": 1960
    }
]

//  let newBook=books.filter((book)=>book.name==="Mockingbird" && book.year===1960)

//  let newBook=books.filter((book)=>{
//   return book.year>=1900 && book.genre==="classic";
//  })
// console.log(newBook)











// const filterBook=books.filter((book)=>
// book.name==="To Kill a Mockingbird");
// console.log(filterBook)

// const filterYear=books.filter((year)=>year.year===1960)
// console.log(filterYear);


// const genreFilter=books.filter((interest)=>interest.genre==="Classic")
// console.log(genreFilter)




// books.forEach((allBooks)=>{
//     if (books.name==="To Kill a Mockingbird") {
//         console.log("its year 1960")
//         }
//     return (  console.log(allBooks))

// })

// const mapIt=books.map((name)=>name.year==="1960")
// console.log(mapIt)

// const num=[1,2,3,4,5]



// const newMap = num.map((nums) => nums * 2)
//                   .map((num) => num + 2)
//                   .filter((num) => num >= 10)
// console.log(newMap);

// reduce method
const Num = [1, 2, 3, 4, 5]
// let acc=0;
const reduceStart=Num.reduce(function(acc,currval){
  console.log(`${acc} + ${currval}`)
  return  acc+currval;
},0);

console.log(reduceStart);
