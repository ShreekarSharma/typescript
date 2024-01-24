let user: [string,number,boolean]
user = ['ss',23,true]
let rgb: [number,number,number] = [123,55,88]
type User = [number,string]
const newUser: User = [101,'shreekar']
newUser[1] = 's@s';
newUser[0] = 11;
////////////////////////////////////////////////////
enum SeatChoice{
  AISLE="AISLE",
  MIDDLE=3,
  WINDOOW
}
const ssSeat = SeatChoice.AISLE