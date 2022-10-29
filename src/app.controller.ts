import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('home')
  getHello() {
    return { message: 'Hello World From NestJS', title: 'El titulo' };
  }
}
