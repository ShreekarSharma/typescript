// // const score:  Array<number> = []
// // const names: Array<string> = []
// // function identityOne(val:boolean | number): boolean | number {
// //   return val
// // }
// // function identityTwo(val:any):any{
// //   return val
// // }
// // function identityThree<Type>(val: Type): Type{
// //   return val
// // }
// // // identityThree(false)
// // function identityFour<T>(val:T):T{
// //   return val
// // }
// // interface Bottle{
// //   brand:string,
// //   type: number
// // }
// // // indentityFour<Bottle>({})

// // function getSearchProducts<T>(products:T[]):T{
// //   const myIndex = 3
// //   return products[myIndex]
// // }
// // const getMoreSearchProducts = <T,>(products:T[]):T => {
// //   const myIndex = 4
// //   return products[myIndex]
// // }
// // interface Database{
// //   connection:string,
// //   username:string,
// //   password :string
// // }
// // function anotherFunction<T,U>(valOne:T,valueTwo:U):object{
// //   return {valOne,valueTwo}
// // }
// // anotherFunction(1,"2")


// interface Quiz{
//   name: string,
//   type: string
// }
// interface Course{
//   name:string,
//   author:string,
//   subject:string
// }
// class Sellable<T>{
//   public cart: T[] = []
//   addToCart(product:T){
//     this.cart.push(product)
//   }
// }