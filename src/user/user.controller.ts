import { Controller, Get, Post, Body, Request, Param, Delete, Query, Headers, HttpCode, Res, Session } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha'
// @Controller({
//   path: 'user',
//   version:'1'
//   })
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get()
  // findAll(@Query() query) {
  //   return {
  //     code: 200,
  //     message:query.name
  //   }
  // }

  // @Post()
  // create(@Body() body) {
  //   console.log(body);
    
  //   return {
  //     code: 200,
  //     message: body.name,
  //     age:body.age
  //   }
  // }
  // @Get(':id')
  // findId(@Param() param,@Headers() headers) {
  //   console.log(headers);
  //   return {
  //     code: 200,
  //     id:param.id
  //   }
  // }
  @Get('code')
  createCode(@Request() req,@Res() res,@Session() session) {
    const captcha = svgCaptcha.create({
      size: 4,//生成几个验证码
      fontSize: 50,//灭字大小
      width: 100,//感度
      height: 34, //高度
      background: "#CC9966"//肖景额色
    })
    session.code = captcha.text
    res.type('image/svg+xml')
    res.send(captcha.data)
  }

  @Post('create')
  createUser(@Body() body, @Session() session) {
    if (session.code === body.code) {
      console.log(body,session);
      return {
        code: 200,
        message: "验证码正确",
        result: { data: { mobile: body.mobile } }
      }  
    }else {
        return {
      code: 403,
        message: "验证码错误",
      result:{data:{code:body.code}}
    }  
    }
      
  }
}
