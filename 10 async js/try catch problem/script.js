// const getUser= async()=>{
//     console.log(1)
// try{
// // const resp=await fetch('https://jsonplaceholder.typicode.com/users');
// const resp=await fetch('http://httpstat.us/500');
// if(!resp.ok){
//     throw new Error('request failed');
// }


// console.log(data);



// }
// catch(error){
//     console.log(error);
// }
// };
// getUser();


const getPost = async () => {
    try {
      const response = await fetch('https://api.github.com/users');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  getPost();