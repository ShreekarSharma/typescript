interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrial: () => string;
  startTrial():string,
  getCoupon(couponname: string): number
}
interface Admin extends User{
  role: "admin" | "ta" | "learner"
}
const shreekar: Admin = {
  role:"admin",
  dbId: 101,
  email: "shreekar@mail.com",
  userId: 10221,
  startTrial: () => {
    return "hello";
  },
  getCoupon:(name:'shreekar') => {return 23}
};
shreekar.email = "s@s.com";
// shreekar.dbId = 12211
