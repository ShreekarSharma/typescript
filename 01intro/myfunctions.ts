function addTwo(num:number):number{
  return num + 2
  // return "hello"
}
function getUpper(val:string){
  return val.toUpperCase()
}
function signUpUser(name: string, email: string, isPaid: boolean){}
signUpUser("shreekar","shreekar@mail.com",true)
let myValue = addTwo(5)
getUpper("typescript");
let loginUser = (name:string,email:string,isPaid:boolean=false)=>{}
loginUser("s","s@s.com",true)

// function getValue(myVal:number):boolean{
//   if(myVal>5){
//     return true
//   }
//   return "200 OK"
// }
const getHello = (s:string):string => {
  return ""
}
const heros = ["iron man","captain america","thor odison"];
heros.map((hero):string=>{
  return `hero is ${hero}`
})

function consoleError(errormsg: string):void{
  console.log(errormsg);
  
}

function handleError(errormsg: string):void{
  throw new Error(errormsg)
  
}

export{}