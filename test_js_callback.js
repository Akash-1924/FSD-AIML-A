function login(cb){
    setTimeout(()=>{
        console.log("User logged in")
        cb();
    },2500)
}
function getdata(cb){
    setTimeout(()=>{
        console.log("Fetch data")
        cb();
    },8000)
}
function calculate_data(cb){
    setTimeout(()=>{
        console.log("Calculating Data")
        cb();
    },3000)
}
function send_sms(cb){
    setTimeout(()=>{
        console.log("sms sent")
        cb();
    },1000)
}
function logout(){
    setTimeout(()=>{
        console.log("User logged out")
    },1000)
}

login(()=>{
    getdata(()=>{
        calculate_data(()=>{
            send_sms(()=>{
                logout();
            });
        });
    });
});

