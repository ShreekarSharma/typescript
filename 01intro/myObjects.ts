// const User = {
//   name: "Shreekar",
//   email: "shreekar@mail.com",
//   isActive: true
// }
// function createUser({name:string,isPaid:boolean}){}
// let newUser = {
//   name:"shreekar",
//   email:"s@s.com",
//   isPaid: true
// }
// createUser(newUser)
// function createCourse():{name: string, price: number}{
//   return {name:"angularjs",price:399}
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// }

// function createNewUser(user: User){
//   return {name:"",email:"",isActive:false}
// }
// createNewUser({name:"",email:"",isActive:false})


type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number
}

let myUser: User = {
  _id: "12112",
  name: "shreekar",
  email: "s@s.com",
  isActive: false
}

myUser.email="shree@kar.com"
// myUser._id = "133112"

type cardNumer = {
  cardnumber: string
}
type cardDate = {
  carddate: string
}
type cardDetails = cardNumer & cardDate & {
  cvv: number
}

export{}