import axios from 'axios'

const Get = (url:string) => {
    return (target: Object, propertyKey: string | symbol, descriptor: any) =>  {
        const fnc = descriptor.value;
        axios.get(url).then(res => {
            fnc(res, {
                status: 200,
                success:true
            })
        }).catch(e => {
            fnc(e ,{
                status: 500,
                success:false
            })
        })
    }
}
class Controller{
    constructor() {
        
    }
    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    getList(res: any, status: any) {
        console.log(res.data.result.list,status);
    }
}