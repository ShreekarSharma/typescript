let score: number | string | boolean = 33
score = 44
score = "fifty five"
score = true

type User = {
  name: string;
  id: number
}

type Admin = {
  username: string;
  id: number
}

let shreekar: User | Admin = {name: "shreekar", id: 23}
shreekar = {username: "shreekar_", id: 66}

function getDbId(id: number | string){
  //id.toUpperCase()
  if(typeof id === "string"){
    id.toLowerCase()
  } else{
    id + 2
  }
  console.log(`DB id is: ${id} `);
  
}
getDbId(3)
getDbId("3")


// array

const data:number|string[] = ['1','2','3','4']
const datas:(number|string|boolean)[] = ['1',2,3,'4',true, false]

let seatAllotment: "aisle"|"middle"|"window"
// seatAllotment = "crew"