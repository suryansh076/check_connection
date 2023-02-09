
notification=()=>
{
        Notification.requestPermission().then(permission=>{
            if(permission==="granted")
            {
               new Notification("Msg from suryansh",{
                    body:"Turn Off mobile data"
                });
            }
        });
}

   
// notification()
const url="https://randomuser.me/api/"
const check_connection = async ()=>
{
  try
  {
   const is_online = await fetch(url)
   console.log(is_online.status)
  return is_online.status >=200 && is_online.status<300;

 }
 catch (error)
 {
    return false;
 }
}
setInterval(async () => {
    const result = await check_connection();
    if (result)
    {
        console.log("online!");
        notification()
        document.getElementById("hi").innerHTML = "online"
    }
    else{
        document.getElementById("hi").innerHTML = 'offline'
        console.log("offline!")
    }
}, 5000);

// var p=fetch('https://google.com')
// p.then(request =>{
//     console.log(request.status)

// }).then(request =>{
//     console
//     if (request.status==200)
//     { 
        
//         alert("wanna log out")
        
//     }
// }).catch(error)
// {
//     console.log("yess ",error)
// }

// async function makeRequest() {
//     try {
//       const response = await fetch('https://randomuser.me/api/');
  
//       console.log('response.status: ', response.status); // 👉️ 200
//       console.log(response);
//       return response.status >=200 && response.status<300;
//     } catch (err) {
//       console.log(err);
//       return response
//     }
//   }
  
//   makeRequest();