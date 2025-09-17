function register(){
     return new Promise((resolve, reject) => {
          setTimeout(()=>{
      console.log('register end');
      resolve();
     },5000)
     })
   }
function sendEmail(){
    return new Promise((resolve, reject) => {
          setTimeout(()=>{
      console.log('send email end');
        resolve();
     },3000) 
    })
     

}
function login(){
       return new Promise((resolve, reject) => {
          setTimeout(()=>{
      console.log('login end');
        resolve();
        // reject(console.log('login failed'));
     },3000) 
    })
}
function getData(){
            return new Promise((resolve, reject) => {
          setTimeout(()=>{
      console.log('get Data end ');
        resolve();
     },3000) 
    })
}
function displayData(){
          return new Promise((resolve, reject) => {
          setTimeout(()=>{
      console.log('display data end');
        resolve();
     },4000) 
    })
}
// callback hell  promise solve it
// register(()=>{
//     sendEmail(()=>{
//         login(()=>{
//             getData(()=>{
//                 displayData()
//             })
//         })
//     })
// });
// register()
// .then(sendEmail)
// .then(login)
// .then(getData)
// .then(displayData)
// async/await
async function f1(){
 try{ await  register();
   await sendEmail();
   await login();
   await getData();
   await displayData();}
   catch(err){
        console.log('Error : '+err);
   }

}
f1();
console.log('call other application');