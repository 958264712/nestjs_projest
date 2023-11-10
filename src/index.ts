// const dov: ClassDecorator = (target:any) => {
//     console.log(target);
//     target.prototype.name = '小威'
// }
// 装饰器 ClassDecorator 类装饰器
// @dov

// class Blithe{
//     constructor() {

//     }
// }
// const blithe: any = new Blithe()
// console.log(blithe.name);

// dov(Blithe)
// 属性装饰器
// type : PropertyDecorator
// const dov: ParameterDecorator = (target: any, propertyKey: string | symbol | undefined, parameterIndex: number) => {
//     console.log(target, propertyKey, parameterIndex);
// }
// class Blithe {
    
//     public name:string
//     constructor() {
//         this.name = '小威'
//     }
//     getName(name:string,@dov age:number) {
        
//     }
