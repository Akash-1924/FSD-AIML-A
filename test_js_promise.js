function login(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('Logged in')   
      resolve();
    },2500)
    });   
 }
function getData(){
   return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('Fetch Data')   
      resolve();
    },8000)
});
}
function calculate_data(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('calculating data')   
      resolve();
    },3000)
});
}
function send_sms(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('Send SMS')   
      resolve();
    },1000)
});  
}
function logout(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('Logged out')   
      resolve();
    },1000)
});  
}
 async function f1(){
    try{
    await login();
    await getData();
    await calculate_data();
    await send_sms();
    await logout();
    }
    catch(err){
        console.log('Error'+err)
    }
}
f1();