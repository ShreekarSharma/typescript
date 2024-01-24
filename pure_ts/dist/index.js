"use strict";
// // class User {
// //   public email: string
// //   name: string
// //   private readonly country: string = "India"
// //   constructor(email:string,name:string){
// //     this.email = email
// //     this.name = name
// //   }
// // }
// class User {
//   protected _courseCount = 1
//   readonly country: string = "India"
//   constructor(private email:string,public name:string,private userID: number){
//   }
//   get getAppleEmail():string{
//     return `apple ${this.email}`
//   }
//   get courseCount():number{
//     return this._courseCount
//   }
//   set courseCount(courseNumber){
//     if(courseNumber<=1){
//       throw new Error("course count should be more than 1")
//     }
//     this._courseCount = courseNumber
//   }
//   private deleteToken(){
//     console.log('token deleted');
//   }
// }
// const shreekar = new User("shreekar@mail.com", "Shreekar Sharma",1221)
// //shreekar.country = "Japan"
// class SubUser extends User{
//   isFamily: boolean = true
//   changeCourseCount(){
//     this._courseCount = 4
//   }
// }
