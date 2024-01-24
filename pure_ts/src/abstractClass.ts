abstract class TakePhoto{
  constructor(
    public cameraMode:string,
    public filter:string
  ){}
  abstract getSepia():void
  getReelTime():number{
    return 8
  }
}
//const shreekarS = new TakePhoto('test','test')
class Instagram extends TakePhoto{
  constructor(public cameraMode:string, public filter:string, public burst:string){
    super(cameraMode,filter)
  }
  getSepia(): void {
    console.log('Sepia');
    
  }
}