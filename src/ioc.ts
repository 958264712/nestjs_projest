class A{
    name: string
    constructor(name:string) {
        this.name = '小威'
    }
}
// class B {
//     a: any
//     constructor() {
//         this.a = new A().name
//     }
// }
// class C {
//     a: any
//     constructor() {
//         this.a = new A().name
//     }
// }
class C{
    name: string
    constructor(name: string) {
        this.name =name
    }
}
class Container{
    mo: any
    constructor() {
        this.mo = {}
    }
    provide(key: string, mo: any) {
        this.mo[key] = mo
    }
    get(key:string) {
        return this.mo[key]
    }
}
const mo = new Container()
mo.provide('a', new A('blithe1'))
mo.provide('c', new A('blithe2'))

class B{
    a: any
    c: any
    constructor(mo: Container) {
        this.a = mo.get('a')
        this.c = mo.get('c')
    }
}